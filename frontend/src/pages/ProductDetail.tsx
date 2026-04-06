import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProduct } from '../services/api'
import { useCart } from '../contexts/CartContext'
import type { Product } from '../types'
import { formatCLP } from '../utils/format'
import './ProductDetail.css'

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    if (!productId) return
    setLoading(true)
    getProduct(parseInt(productId, 10))
      .then((r) => setProduct(r.data.product))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false))
  }, [productId])

  if (loading) return <div className="loading-page"><div className="spinner" /></div>
  if (!product) return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h2>Producto no encontrado</h2>
      <Link to="/tienda" className="btn btn-primary" style={{ marginTop: '1rem' }}>Volver a la tienda</Link>
    </div>
  )

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container product-detail">
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / <Link to="/tienda">Tienda</Link> / {product.name}
      </div>
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img src={product.image_url || 'https://placehold.co/600x500?text=VeloShop'} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <span className="badge badge-blue">{product.category_name}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatCLP(product.price)}</p>
          <p className="detail-description">{product.description}</p>
          <p className={`stock-info${product.stock === 0 ? ' out' : ''}`}>
            {product.stock > 0 ? `✓ ${product.stock} en stock` : '✗ Sin stock'}
          </p>
          {product.stock > 0 && (
            <div className="qty-row">
              <div className="qty-controls">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
              </div>
              <button className="btn btn-primary" onClick={handleAdd} disabled={added}>
                {added ? '✓ Agregado' : 'Agregar al carrito'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
