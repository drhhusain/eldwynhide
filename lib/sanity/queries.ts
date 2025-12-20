import { groq } from 'next-sanity'

// Category Queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    heroImage
  }
`

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    heroImage
  }
`

// Product Queries
export const productsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    colors,
    materials,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const productsByCategoryQuery = groq`
  *[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    colors,
    materials,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    colors,
    materials,
    dimensions,
    careInstructions,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(_createdAt desc)[0...8] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const searchProductsQuery = groq`
  *[_type == "product" && (
    name match $query + "*" ||
    description match $query + "*" ||
    category->name match $query + "*"
  )] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const productsByIdsQuery = groq`
  *[_type == "product" && _id in $ids] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    images,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

// Stockist Queries
export const stockistsQuery = groq`
  *[_type == "stockist"] | order(country asc, city asc) {
    _id,
    name,
    address,
    city,
    country,
    coordinates,
    website,
    phone,
    email,
    image
  }
`

// FAQ Queries
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`

// Page Content Queries
export const pageContentQuery = groq`
  *[_type == "pageContent" && pageId == $pageId][0] {
    _id,
    pageId,
    title,
    subtitle,
    heroImage,
    sections
  }
`

// Filter Options Query
export const filterOptionsQuery = groq`
  {
    "colors": *[_type == "product" && defined(colors)].colors[].name,
    "materials": *[_type == "product" && defined(materials)].materials[],
    "priceRange": {
      "min": math::min(*[_type == "product"].price),
      "max": math::max(*[_type == "product"].price)
    }
  }
`

