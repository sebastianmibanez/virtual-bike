export const formatCLP = (amount: number): string =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount)

export const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const ordinalPosition = (pos: number): string => {
  if (pos === 1) return '1°'
  if (pos === 2) return '2°'
  if (pos === 3) return '3°'
  return `${pos}°`
}
