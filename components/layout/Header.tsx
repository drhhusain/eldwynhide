'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Heart } from 'lucide-react'
import { useWishlist } from '@/lib/hooks/useWishlist'

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/craftsmanship', label: 'Craftsmanship' },
  { href: '/materials', label: 'Materials' },
  { href: '/stockists', label: 'Stockists' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <h1 className="font-heading text-2xl md:text-3xl tracking-wider text-espresso">
              ELDWYNHIDE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300 gold-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link
              href="/wishlist"
              className="relative p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-espresso text-xs font-medium rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ivory"
          >
            <div className="container h-full flex flex-col">
              <div className="flex items-center justify-between py-6">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <h1 className="font-heading text-2xl tracking-wider text-espresso">
                    ELDWYNHIDE
                  </h1>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-heading text-charcoal hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ivory/98 backdrop-blur-md"
          >
            <div className="container h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-6 right-6 p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Close search"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl"
              >
                <form action="/collections" method="get">
                  <input
                    type="text"
                    name="q"
                    placeholder="Search products..."
                    autoFocus
                    className="w-full text-3xl md:text-4xl font-heading text-center bg-transparent border-b-2 border-espresso pb-4 focus:outline-none focus:border-gold placeholder:text-gray-light"
                  />
                </form>
                <p className="text-center text-gray mt-6 text-sm tracking-wide">
                  Press Enter to search
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

