import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import type { Product } from '../../types'
import { formatCLP } from '../../utils/format'
import './ProductCard.css'

interface Props { product: Product }

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart()
  const outOfStock = product.stock === 0

  return (
    <div className="product-card">
      <Link to={`/tienda/${product.id}`} className="product-card-image">
        <img
          src={product.image_url || 'https://placehold.co/400x300?text=VeloShop'}
          alt={product.name}
          loading="lazy"
        />
        {outOfStock && <span className="out-of-stock-overlay">Sin stock</span>}
      </Link>
      <div className="product-card-body">
        <span className="product-category-label">{product.category_name}</span>
        <h3 className="product-name">
          <Link to={`/tienda/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-card-footer">
          <span className="product-price">{formatCLP(product.price)}</span>
          <button
            className="btn btn-primary btn-sm"
            disabled={outOfStock}
            onClick={() => addItem(product)}
          >
            {outOfStock ? 'Sin stock' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}
