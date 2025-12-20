'use client'

import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/product'
import { mockProducts, mockCategories } from '@/lib/mockData'

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
]

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  const category = mockCategories.find((c) => c.slug === slug)

  const products = useMemo(() => {
    let filtered = mockProducts.filter((p) => p.category.slug === slug)

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return filtered
  }, [slug, sortBy])

  if (!category) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-charcoal mb-4">
            Category Not Found
          </h1>
          <Link
            href="/collections"
            className="text-gold hover:text-gold-dark transition-colors"
          >
            View All Collections
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative bg-cream py-16 md:py-24">
        <div className="container">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-gray hover:text-charcoal transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            All Collections
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl text-charcoal mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-charcoal-light text-lg max-w-2xl">
                {category.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="border-b border-border py-4">
        <div className="container flex items-center justify-between">
          <span className="text-sm text-gray">{products.length} products</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none bg-transparent text-sm text-charcoal pr-6 focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-charcoal-light text-lg mb-4">
                No products found in this category.
              </p>
              <Link
                href="/collections"
                className="text-gold hover:text-gold-dark transition-colors"
              >
                View All Collections
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="font-heading text-3xl text-charcoal text-center mb-12">
            Explore Other Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockCategories
              .filter((c) => c.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat._id}
                  href={`/collections/${cat.slug}`}
                  className="group text-center py-8 bg-ivory hover:bg-espresso transition-colors"
                >
                  <h3 className="font-heading text-xl text-charcoal group-hover:text-ivory transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

