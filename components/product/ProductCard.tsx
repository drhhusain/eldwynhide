'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Product } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/client'
import { useWishlist } from '@/lib/hooks/useWishlist'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlist()
  const isWishlisted = isInWishlist(product._id)

  const mainImage = product.images?.find((img) => img.isMain) || product.images?.[0]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Wishlist Button */}
      <button
        onClick={() => toggleItem(product._id)}
        className={`absolute top-4 right-4 z-10 p-2 bg-ivory/90 backdrop-blur-sm rounded-full transition-all duration-300 ${
          isWishlisted ? 'text-gold' : 'text-charcoal opacity-0 group-hover:opacity-100'
        }`}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart
          size={18}
          className={isWishlisted ? 'fill-gold' : ''}
        />
      </button>

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block image-hover aspect-[3/4] bg-cream relative">
        {mainImage ? (
          <Image
            src={urlFor(mainImage.asset).width(600).height(800).url()}
            alt={mainImage.alt || product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-light">
            No Image
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="mt-4">
        {product.category && (
          <p className="text-xs tracking-widest uppercase text-gray mb-1">
            {product.category.name}
          </p>
        )}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading text-lg text-charcoal hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-charcoal-light">
          {formatPrice(product.price)}
        </p>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.colors.slice(0, 4).map((color, idx) => (
              <span
                key={idx}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray">+{product.colors.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

