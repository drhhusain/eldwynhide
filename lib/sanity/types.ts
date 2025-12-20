// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageSource = any

export interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  heroImage?: SanityImageSource
}

export interface ProductImage {
  _key: string
  asset: SanityImageSource
  alt?: string
  isMain?: boolean
}

export interface ProductColor {
  name: string
  hex: string
}

export interface ProductDimensions {
  width?: string
  height?: string
  depth?: string
}

export interface Product {
  _id: string
  name: string
  slug: string
  description?: string
  price: number
  images: ProductImage[]
  colors?: ProductColor[]
  materials?: string[]
  dimensions?: ProductDimensions
  careInstructions?: string
  featured?: boolean
  category: Category
}

export interface Stockist {
  _id: string
  name: string
  address: string
  city: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
  website?: string
  phone?: string
  email?: string
  image?: SanityImageSource
}

export interface FAQ {
  _id: string
  question: string
  answer: string
  category?: string
}

export interface ContentSection {
  _key: string
  heading?: string
  content?: string
  image?: SanityImageSource
  imagePosition?: 'left' | 'right' | 'full'
}

export interface PageContent {
  _id: string
  pageId: string
  title: string
  subtitle?: string
  heroImage?: SanityImageSource
  sections?: ContentSection[]
}

export interface FilterOptions {
  colors: string[]
  materials: string[]
  priceRange: {
    min: number
    max: number
  }
}

