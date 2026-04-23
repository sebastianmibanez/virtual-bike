<?php
/**
 * Plugin Name: CVBK Inscripción
 * Description: Endpoint REST para inscripción directa a Getnet — Clásica VBK 2026
 * Version: 1.1
 */

if (!defined('ABSPATH')) exit;

add_action('rest_api_init', 'cvbk_register_routes');

function cvbk_register_routes() {
    register_rest_route('cvbk/v1', '/inscribir', array(
        'methods'             => WP_REST_Server::CREATABLE,
        'callback'            => 'cvbk_inscribir',
        'permission_callback' => '__return_true',
    ));
}

function cvbk_inscribir(WP_REST_Request $request) {
    $d = $request->get_json_params();

    if (empty($d)) {
        return new WP_Error('no_data', 'No se recibieron datos', array('status' => 400));
    }

    // Validación básica
    $required = array('nombre', 'apellido', 'email', 'telefono', 'rut', 'categoria');
    foreach ($required as $field) {
        if (empty(trim($d[$field] ?? ''))) {
            return new WP_Error('campo_requerido', "Falta el campo: $field", array('status' => 400));
        }
    }

    if (!is_email($d['email'])) {
        return new WP_Error('email_invalido', 'Email inválido', array('status' => 400));
    }

    if (!function_exists('wc_create_order')) {
        return new WP_Error('wc_inactivo', 'WooCommerce no está activo', array('status' => 500));
    }

    // Crear orden WooCommerce
    $order = wc_create_order();
    if (is_wp_error($order)) {
        return new WP_Error('orden_error', 'Error al crear la orden', array('status' => 500));
    }

    $order->set_payment_method('getnet');
    $order->set_payment_method_title('Getnet');
    $order->set_billing_first_name(sanitize_text_field($d['nombre']));
    $order->set_billing_last_name(sanitize_text_field($d['apellido']));
    $order->set_billing_email(sanitize_email($d['email']));
    $order->set_billing_phone(sanitize_text_field($d['telefono']));
    $order->set_billing_country('CL');

    $product = wc_get_product(818);
    if (!$product) {
        return new WP_Error('producto_no_encontrado', 'Producto ID 818 no encontrado', array('status' => 500));
    }

    $order->add_product($product, 1);
    $order->update_meta_data('_cvbk_rut',       sanitize_text_field($d['rut']));
    $order->update_meta_data('_cvbk_categoria',  sanitize_text_field($d['categoria']));
    $order->update_meta_data('_cvbk_club',       sanitize_text_field($d['club'] ?? ''));
    $order->calculate_totals();
    $order->save();

    // Inicializar sesión WC para que paginapago reconozca la orden pendiente
    if (WC()->session && !WC()->session->has_session()) {
        WC()->session->set_customer_session_cookie(true);
    }
    if (WC()->session) {
        WC()->session->set('order_awaiting_payment', $order->get_id());
    }

    // URL de fallback con parámetro para auto-submit
    $redirect_url = add_query_arg('cvbk', '1', $order->get_checkout_payment_url(true));

    // Intentar obtener URL directa de Getnet via el gateway
    try {
        $gateways = WC()->payment_gateways()->payment_gateways();

        $gateway = null;
        foreach ($gateways as $id => $gw) {
            if (stripos($id, 'getnet') !== false) {
                $gateway = $gw;
                break;
            }
        }

        if ($gateway !== null) {
            $result = $gateway->process_payment($order->get_id());
            if (
                !empty($result['result']) &&
                $result['result'] === 'success' &&
                !empty($result['redirect'])
            ) {
                // Si el gateway devolvió directamente la URL de Getnet, usarla
                // Si devolvió la URL de WP, el auto-submit JS se encargará
                $redirect_url = add_query_arg('cvbk', '1', $result['redirect']);
            }
        }
    } catch (Exception $e) {
        error_log('CVBK Gateway error: ' . $e->getMessage());
        // Continúa con el fallback
    }

    return rest_ensure_response(array('redirect' => $redirect_url));
}
