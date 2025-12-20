'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Trash2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { useWishlist } from '@/lib/hooks/useWishlist'
import { mockProducts } from '@/lib/mockData'
import { urlFor } from '@/lib/sanity/client'

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist()

  const wishlistProducts = mockProducts.filter((p) => items.includes(p._id))

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="pt-24">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
              <Heart className="text-gold" size={28} />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
              Your Wishlist
            </h1>
            <p className="text-charcoal-light">
              {items.length === 0
                ? "You haven't saved any items yet."
                : `${items.length} item${items.length === 1 ? '' : 's'} saved`}
            </p>
          </motion.div>

          {items.length > 0 ? (
            <>
              {/* Clear All Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={clearWishlist}
                  className="text-sm text-gray hover:text-charcoal transition-colors"
                >
                  Clear all
                </button>
              </div>

              {/* Wishlist Items */}
              <div className="space-y-6">
                {wishlistProducts.map((product, index) => {
                  const mainImage =
                    product.images?.find((img) => img.isMain) || product.images?.[0]

                  return (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-6 p-6 bg-cream"
                    >
                      {/* Image */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="shrink-0 w-32 h-40 bg-ivory-dark relative"
                      >
                        {mainImage?.asset ? (
                          <Image
                            src={urlFor(mainImage.asset).width(256).height(320).url()}
                            alt={mainImage.alt || product.name}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-light text-sm">
                            No Image
                          </div>
                        )}
                      </Link>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link
                              href={`/collections/${product.category.slug}`}
                              className="text-xs tracking-widest uppercase text-gold"
                            >
                              {product.category.name}
                            </Link>
                            <Link href={`/products/${product.slug}`}>
                              <h3 className="font-heading text-xl text-charcoal hover:text-gold transition-colors mt-1">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-charcoal-light mt-2">
                              {formatPrice(product.price)}
                            </p>
                          </div>

                          <button
                            onClick={() => removeItem(product._id)}
                            className="p-2 text-gray hover:text-red-500 transition-colors"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="flex gap-2 mt-4">
                            {product.colors.slice(0, 5).map((color, idx) => (
                              <span
                                key={idx}
                                className="w-5 h-5 rounded-full border border-border"
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              />
                            ))}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-4 mt-6">
                          <Link href={`/products/${product.slug}`}>
                            <Button size="sm">View Product</Button>
                          </Link>
                          <Link href="/stockists">
                            <Button variant="outline" size="sm">
                              Find Stockist
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-charcoal-light mb-8">
                Save your favorite pieces to revisit later.
              </p>
              <Link href="/collections">
                <Button size="lg">
                  Explore Collections
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Explore Section */}
      {items.length > 0 && (
        <section className="section bg-cream">
          <div className="container text-center">
            <h2 className="font-heading text-3xl text-charcoal mb-6">
              Ready to Visit a Store?
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-8">
              Find an authorized stockist near you to see these pieces in person
              and experience the quality of Eldwynhide craftsmanship.
            </p>
            <Link href="/stockists">
              <Button size="lg">
                Find a Stockist
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

