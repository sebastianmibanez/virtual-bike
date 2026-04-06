export interface Category {
  id: number
  name: string
  slug: string
  description: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  stock: number
  category_id: number
  category_name: string
  category_slug: string
  image_url: string
  active: number
  created_at: string
  updated_at: string
}

export interface CartItem {
  product_id: number
  name: string
  price: number
  image_url: string
  quantity: number
}

export interface Order {
  id: number
  mp_preference_id: string
  mp_payment_id: string
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
  customer_name: string
  customer_email: string
  customer_phone: string
  total: number
  items_json: string
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  photo_url: string
  instagram_url: string
  sort_order: number
  active: number
}

export interface RaceResult {
  id: number
  race_name: string
  date: string
  location: string
  rider_name: string
  position: number
  category: string
  notes: string
}

export interface Sponsor {
  id: number
  name: string
  logo_url: string
  website_url: string
  tier: 'gold' | 'silver' | 'bronze'
  sort_order: number
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  created_at: string
  read: number
}
