'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductImage } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/client'

interface ProductGalleryProps {
  images: ProductImage[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-cream flex items-center justify-center">
        <span className="text-gray-light">No images available</span>
      </div>
    )
  }

  const currentImage = images[selectedIndex]

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[3/4] bg-cream group">
          {currentImage.asset ? (
            <Image
              src={urlFor(currentImage.asset).width(1200).height(1600).url()}
              alt={currentImage.alt || productName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-cream">
              <span className="text-gray-light">Image placeholder</span>
            </div>
          )}

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-4 right-4 p-3 bg-ivory/90 backdrop-blur-sm text-charcoal hover:text-gold transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Zoom image"
          >
            <ZoomIn size={20} />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-ivory/90 backdrop-blur-sm text-charcoal hover:text-gold transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-ivory/90 backdrop-blur-sm text-charcoal hover:text-gold transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image._key || index}
                onClick={() => setSelectedIndex(index)}
                className={`relative shrink-0 w-20 h-24 bg-cream transition-all ${
                  index === selectedIndex
                    ? 'ring-2 ring-gold'
                    : 'hover:ring-2 hover:ring-border'
                }`}
              >
                {image.asset ? (
                  <Image
                    src={urlFor(image.asset).width(160).height(192).url()}
                    alt={image.alt || `${productName} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-light">
                    {index + 1}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-3 text-ivory hover:text-gold transition-colors"
              aria-label="Close zoom"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-ivory hover:text-gold transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              {currentImage.asset ? (
                <Image
                  src={urlFor(currentImage.asset).width(2000).height(2666).url()}
                  alt={currentImage.alt || productName}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-light">
                  Image placeholder
                </div>
              )}
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

