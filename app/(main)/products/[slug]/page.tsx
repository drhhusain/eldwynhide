'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Ruler, Sparkles, Shield } from 'lucide-react'
import { Button } from '@/components/ui'
import { ProductCard } from '@/components/product'
import { ProductGallery } from '@/components/product/ProductGallery'
import { useWishlist } from '@/lib/hooks/useWishlist'
import { mockProducts } from '@/lib/mockData'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const { isInWishlist, toggleItem } = useWishlist()

  const product = mockProducts.find((p) => p.slug === slug)
  const isWishlisted = product ? isInWishlist(product._id) : false

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return mockProducts
      .filter((p) => p.category.slug === product.category.slug && p._id !== product._id)
      .slice(0, 4)
  }, [product])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-charcoal mb-4">
            Product Not Found
          </h1>
          <Link
            href="/collections"
            className="text-gold hover:text-gold-dark transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="container py-6">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-sm text-gray hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Collections
        </Link>
      </div>

      {/* Product Section */}
      <section className="container pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Category */}
            <Link
              href={`/collections/${product.category.slug}`}
              className="text-sm tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
            >
              {product.category.name}
            </Link>

            {/* Name & Price */}
            <h1 className="font-heading text-3xl md:text-4xl text-charcoal mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-charcoal-light mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            {product.description && (
              <p className="text-charcoal-light leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-medium text-charcoal mb-3">
                  Available Colors
                </h4>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      className="group flex flex-col items-center gap-2"
                      title={color.name}
                    >
                      <span
                        className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-gold transition-colors"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs text-gray">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Link href="/stockists" className="flex-1">
                <Button size="lg" className="w-full">
                  Find a Stockist
                </Button>
              </Link>
              <button
                onClick={() => toggleItem(product._id)}
                className={`p-4 border-2 transition-all ${
                  isWishlisted
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-espresso text-espresso hover:border-gold hover:text-gold'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={20} className={isWishlisted ? 'fill-gold' : ''} />
              </button>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler size={18} className="text-gold" />
                  <h4 className="text-sm font-medium text-charcoal">Dimensions</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  {product.dimensions.width && (
                    <div>
                      <span className="text-gray block">Width</span>
                      <span className="text-charcoal">{product.dimensions.width}</span>
                    </div>
                  )}
                  {product.dimensions.height && (
                    <div>
                      <span className="text-gray block">Height</span>
                      <span className="text-charcoal">{product.dimensions.height}</span>
                    </div>
                  )}
                  {product.dimensions.depth && (
                    <div>
                      <span className="text-gray block">Depth</span>
                      <span className="text-charcoal">{product.dimensions.depth}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Materials */}
            {product.materials && product.materials.length > 0 && (
              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-gold" />
                  <h4 className="text-sm font-medium text-charcoal">Materials</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cream text-sm text-charcoal-light"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Care Instructions */}
            {product.careInstructions && (
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-gold" />
                  <h4 className="text-sm font-medium text-charcoal">Care Instructions</h4>
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {product.careInstructions}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-cream">
          <div className="container">
            <h2 className="font-heading text-3xl text-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct._id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

