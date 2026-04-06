import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProducts, getCategories } from '../services/api'
import ProductCard from '../components/store/ProductCard'
import type { Product, Category } from '../types'
import './Tienda.css'

export default function Tienda() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const categoryFilter = searchParams.get('category') || ''
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  useEffect(() => {
    getCategories().then((r) => setCategories(r.data.categories))
  }, [])

  useEffect(() => {
    setLoading(true)
    getProducts({ category: categoryFilter, search, page })
      .then((r) => {
        setProducts(r.data.products)
        setTotal(r.data.total)
        setPages(r.data.pages)
      })
      .finally(() => setLoading(false))
  }, [categoryFilter, search, page])

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) { params.set(key, value); params.delete('page') }
    else params.delete(key)
    setSearchParams(params)
  }

  const setPage = (p: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(p))
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="tienda-page">
      <div className="page-header">
        <div className="container">
          <h1>Tienda</h1>
          <p>{total} productos disponibles</p>
        </div>
      </div>

      <div className="container tienda-layout">
        {/* Filters */}
        <aside className="tienda-sidebar">
          <div className="filter-section">
            <h3>Buscar</h3>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setParam('search', e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-section">
            <h3>Categoría</h3>
            <button
              className={`filter-btn${!categoryFilter ? ' active' : ''}`}
              onClick={() => setParam('category', '')}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn${categoryFilter === cat.slug ? ' active' : ''}`}
                onClick={() => setParam('category', cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Products */}
        <div className="tienda-products">
          {loading ? (
            <div className="loading-page"><div className="spinner" /></div>
          ) : products.length === 0 ? (
            <div className="no-results">
              <p>No se encontraron productos</p>
              <button className="btn btn-outline" onClick={() => setSearchParams({})}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
              {pages > 1 && (
                <div className="pagination">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      className={`page-btn${p === page ? ' active' : ''}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
