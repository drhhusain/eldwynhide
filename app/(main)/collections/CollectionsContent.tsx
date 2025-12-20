'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/product'
import { mockProducts, mockCategories } from '@/lib/mockData'

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
]

export function CollectionsContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') || ''

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  const allColors = useMemo(() => {
    const colors = new Set<string>()
    mockProducts.forEach((p) => p.colors?.forEach((c) => colors.add(c.name)))
    return Array.from(colors)
  }, [])

  const allMaterials = useMemo(() => {
    const materials = new Set<string>()
    mockProducts.forEach((p) => p.materials?.forEach((m) => materials.add(m)))
    return Array.from(materials)
  }, [])

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.category.name.toLowerCase().includes(query)
      )
    }

    if (selectedCategory) {
      products = products.filter((p) => p.category.slug === selectedCategory)
    }

    products = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    if (selectedColors.length > 0) {
      products = products.filter((p) =>
        p.colors?.some((c) => selectedColors.includes(c.name))
      )
    }

    if (selectedMaterials.length > 0) {
      products = products.filter((p) =>
        p.materials?.some((m) => selectedMaterials.includes(m))
      )
    }

    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return products
  }, [searchQuery, selectedCategory, sortBy, priceRange, selectedColors, selectedMaterials])

  const clearFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 2000])
    setSelectedColors([])
    setSelectedMaterials([])
  }

  const hasActiveFilters =
    selectedCategory ||
    priceRange[0] > 0 ||
    priceRange[1] < 2000 ||
    selectedColors.length > 0 ||
    selectedMaterials.length > 0

  return (
    <div className="pt-24">
      <section className="section pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
              {searchQuery ? `Search: "${searchQuery}"` : 'All Collections'}
            </h1>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Discover our complete range of handcrafted leather goods.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                !selectedCategory
                  ? 'bg-espresso text-ivory'
                  : 'bg-cream text-charcoal hover:bg-espresso/10'
              }`}
            >
              All
            </button>
            {mockCategories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-espresso text-ivory'
                    : 'bg-cream text-charcoal hover:bg-espresso/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && <span className="w-2 h-2 bg-gold rounded-full" />}
            </button>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-sm text-gray hover:text-charcoal transition-colors">
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray">{filteredProducts.length} products</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-transparent text-sm text-charcoal pr-6 focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex gap-12">
            <motion.aside
              initial={false}
              animate={{ width: isFilterOpen ? 280 : 0, opacity: isFilterOpen ? 1 : 0 }}
              className="hidden lg:block overflow-hidden shrink-0"
            >
              <div className="w-[280px] space-y-8">
                <div>
                  <h4 className="font-heading text-lg text-charcoal mb-4">Price</h4>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-24 px-3 py-2 border border-border text-sm focus:outline-none focus:border-gold"
                      placeholder="Min"
                    />
                    <span className="text-gray">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-24 px-3 py-2 border border-border text-sm focus:outline-none focus:border-gold"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg text-charcoal mb-4">Colors</h4>
                  <div className="space-y-2">
                    {allColors.map((color) => (
                      <label key={color} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedColors([...selectedColors, color])
                            } else {
                              setSelectedColors(selectedColors.filter((c) => c !== color))
                            }
                          }}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="text-sm text-charcoal-light group-hover:text-charcoal transition-colors">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg text-charcoal mb-4">Materials</h4>
                  <div className="space-y-2">
                    {allMaterials.map((material) => (
                      <label key={material} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(material)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedMaterials([...selectedMaterials, material])
                            } else {
                              setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
                            }
                          }}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="text-sm text-charcoal-light group-hover:text-charcoal transition-colors">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-charcoal-light text-lg mb-4">No products found matching your criteria.</p>
                  <button onClick={clearFilters} className="text-gold hover:text-gold-dark transition-colors">
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="absolute left-0 top-0 bottom-0 w-80 bg-ivory overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 text-charcoal hover:text-gold transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-espresso text-ivory text-sm tracking-wide hover:bg-espresso-light transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
