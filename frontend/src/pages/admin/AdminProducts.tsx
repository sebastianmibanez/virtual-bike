import { useEffect, useState } from 'react'
import { adminGetProducts, adminDeleteProduct, adminUpdateProduct, adminCreateProduct, getCategories, adminCreateCategory } from '../../services/api'
import type { Product, Category } from '../../types'
import { formatCLP } from '../../utils/format'
import './Admin.css'

const EMPTY_FORM = { name: '', description: '', price: '', stock: '', category_id: '', image_url: '', active: true }

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [form, setForm] = useState<typeof EMPTY_FORM>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [newCatName, setNewCatName] = useState('')

  const load = () => {
    adminGetProducts().then((r) => setProducts(r.data.products))
    getCategories().then((r) => setCategories(r.data.categories))
  }

  useEffect(() => { load() }, [])

  const openCreate = () => { setForm(EMPTY_FORM); setEditId(null); setError(''); setShowForm(true) }
  const openEdit = (p: Product) => {
    setForm({ name: p.name, description: p.description, price: String(p.price), stock: String(p.stock), category_id: String(p.category_id), image_url: p.image_url, active: !!p.active })
    setEditId(p.id); setError(''); setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('¿Desactivar este producto?')) return
    await adminDeleteProduct(id)
    load()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setSaving(true)
    try {
      const payload = { ...form, price: parseInt(form.price), stock: parseInt(form.stock), category_id: parseInt(form.category_id) }
      if (editId) await adminUpdateProduct(editId, payload)
      else await adminCreateProduct(payload)
      setShowForm(false); load()
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al guardar')
    } finally { setSaving(false) }
  }

  const handleAddCategory = async () => {
    if (!newCatName.trim()) return
    await adminCreateCategory({ name: newCatName })
    setNewCatName('')
    getCategories().then((r) => setCategories(r.data.categories))
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Productos</h1>
        <button className="btn btn-primary" onClick={openCreate}>+ Nuevo producto</button>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{editId ? 'Editar producto' : 'Nuevo producto'}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group"><label>Nombre *</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
              <div className="form-row-2">
                <div className="form-group"><label>Precio (CLP) *</label><input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required /></div>
                <div className="form-group"><label>Stock *</label><input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required /></div>
              </div>
              <div className="form-group">
                <label>Categoría *</label>
                <select value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })} required>
                  <option value="">Seleccionar...</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="form-group"><label>URL imagen</label><input type="url" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." /></div>
              <div className="form-group"><label>Descripción</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div className="form-check">
                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                <label htmlFor="active">Producto activo</label>
              </div>
              {error && <p className="form-error">{error}</p>}
              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Guardando...' : 'Guardar'}</button>
                <button type="button" className="btn btn-ghost" onClick={() => setShowForm(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category quick-add */}
      <div className="cat-add-row">
        <input placeholder="Nueva categoría..." value={newCatName} onChange={(e) => setNewCatName(e.target.value)} />
        <button className="btn btn-outline btn-sm" onClick={handleAddCategory}>Agregar categoría</button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>Imagen</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td><img src={p.image_url || 'https://placehold.co/48x48?text=VS'} alt="" className="product-thumb" /></td>
                <td className="product-name-cell">{p.name}</td>
                <td>{p.category_name}</td>
                <td>{formatCLP(p.price)}</td>
                <td>{p.stock}</td>
                <td><span className={`badge ${p.active ? 'badge-green' : 'badge-gray'}`}>{p.active ? 'Activo' : 'Inactivo'}</span></td>
                <td>
                  <div className="row-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => openEdit(p)}>Editar</button>
                    <button className="btn btn-ghost btn-sm danger" onClick={() => handleDelete(p.id)}>Desactivar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
