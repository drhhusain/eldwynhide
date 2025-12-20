'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { ProductCard } from '@/components/product'
import { mockProducts, mockCategories } from '@/lib/mockData'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const featuredProducts = mockProducts.filter((p) => p.featured).slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/20 via-transparent to-gold/10" />
        <div className="absolute inset-0 bg-[url('/hero-texture.jpg')] opacity-5 bg-cover bg-center" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-espresso/5 rounded-full blur-3xl" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gold mb-6">
              Est. 1892
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal mb-6"
          >
            Timeless
            <br />
            <span className="text-gold">Craftsmanship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal-light mb-10"
          >
            Discover the art of leather. Each piece tells a story of dedication,
            heritage, and uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/collections">
              <Button size="lg">
                Explore Collections
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/craftsmanship">
              <Button variant="outline" size="lg">
                Our Craft
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-charcoal-light" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="section bg-cream">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm tracking-[0.3em] uppercase text-gold"
            >
              Our Collections
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl text-charcoal mt-4"
            >
              Explore by Category
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCategories.map((category, index) => (
              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/collections/${category.slug}`}
                  className="group block relative aspect-[3/4] bg-espresso/5 overflow-hidden"
                >
                  {/* Placeholder for category image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    <h3 className="font-heading text-2xl text-ivory mb-2 group-hover:text-gold transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-ivory/70 text-sm tracking-wide group-hover:text-ivory transition-colors">
                      View Collection
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div>
              <motion.span
                variants={fadeInUp}
                className="text-sm tracking-[0.3em] uppercase text-gold"
              >
                Featured
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl text-charcoal mt-4"
              >
                Signature Pieces
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors mt-4 md:mt-0"
              >
                View All
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="section bg-espresso text-ivory overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Our Heritage
              </span>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-6">
                A Legacy of
                <br />
                <span className="text-gold">Excellence</span>
              </h2>
              <p className="text-ivory/70 text-lg leading-relaxed mb-8">
                For over a century, Eldwynhide has been synonymous with the finest
                leather craftsmanship. Our artisans combine time-honored techniques
                with contemporary design to create pieces that transcend trends.
              </p>
              <p className="text-ivory/70 text-lg leading-relaxed mb-8">
                Each stitch, each cut, each burnished edge reflects our unwavering
                commitment to quality. This is leather goods at their most refined.
              </p>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Discover Our Story
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-4 bg-gold/20 -rotate-3" />
              <div className="absolute inset-0 bg-ivory-dark flex items-center justify-center">
                <span className="text-gray-light text-sm">Craftsman at Work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm tracking-[0.3em] uppercase text-gold"
            >
              The Eldwynhide Difference
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl text-charcoal mt-4"
            >
              Crafted with Purpose
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Premium Materials',
                description:
                  'We source only the finest full-grain leathers from heritage tanneries across Europe, ensuring exceptional quality and longevity.',
              },
              {
                title: 'Artisan Expertise',
                description:
                  'Our master craftsmen bring decades of experience to every piece, employing traditional techniques passed down through generations.',
              },
              {
                title: 'Timeless Design',
                description:
                  'Each creation balances classic elegance with modern functionality, designed to be treasured for years to come.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-heading text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/craftsmanship">
              <Button variant="outline" size="lg">
                Explore Our Craft
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section bg-cream">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Stay Connected
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Join the Eldwynhide World
            </h2>
            <p className="text-charcoal-light text-lg mb-8">
              Be the first to discover new collections, exclusive events, and the
              stories behind our craft.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-ivory border border-border text-charcoal placeholder:text-gray-light focus:outline-none focus:border-gold transition-colors"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-gray mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

