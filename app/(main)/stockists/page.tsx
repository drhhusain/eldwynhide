'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Globe, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { mockStockists } from '@/lib/mockData'

export default function StockistsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const countries = useMemo(() => {
    const unique = [...new Set(mockStockists.map((s) => s.country))]
    return unique.sort()
  }, [])

  const filteredStockists = useMemo(() => {
    if (!selectedCountry) return mockStockists
    return mockStockists.filter((s) => s.country === selectedCountry)
  }, [selectedCountry])

  const groupedStockists = useMemo(() => {
    const groups: Record<string, typeof mockStockists> = {}
    filteredStockists.forEach((stockist) => {
      if (!groups[stockist.country]) {
        groups[stockist.country] = []
      }
      groups[stockist.country].push(stockist)
    })
    return groups
  }, [filteredStockists])

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Find Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Our Stockists
            </h1>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Experience Eldwynhide in person at one of our carefully selected
              retail partners around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            <button
              onClick={() => setSelectedCountry(null)}
              className={`px-4 py-2 text-sm transition-colors ${
                !selectedCountry
                  ? 'bg-espresso text-ivory'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              All Countries
            </button>
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCountry === country
                    ? 'bg-espresso text-ivory'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stockists List */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* List */}
            <div>
              {Object.entries(groupedStockists).map(([country, stockists]) => (
                <div key={country} className="mb-12 last:mb-0">
                  <h2 className="font-heading text-2xl text-charcoal mb-6 pb-4 border-b border-border">
                    {country}
                  </h2>
                  <div className="space-y-8">
                    {stockists.map((stockist, index) => (
                      <motion.div
                        key={stockist._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <h3 className="font-heading text-xl text-charcoal group-hover:text-gold transition-colors">
                          {stockist.name}
                        </h3>
                        <p className="text-gold text-sm mt-1">{stockist.city}</p>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-start gap-3">
                            <MapPin size={16} className="text-gray mt-1 shrink-0" />
                            <p className="text-charcoal-light text-sm">
                              {stockist.address}
                            </p>
                          </div>

                          {stockist.phone && (
                            <div className="flex items-center gap-3">
                              <Phone size={16} className="text-gray shrink-0" />
                              <a
                                href={`tel:${stockist.phone}`}
                                className="text-charcoal-light text-sm hover:text-gold transition-colors"
                              >
                                {stockist.phone}
                              </a>
                            </div>
                          )}

                          {stockist.email && (
                            <div className="flex items-center gap-3">
                              <Mail size={16} className="text-gray shrink-0" />
                              <a
                                href={`mailto:${stockist.email}`}
                                className="text-charcoal-light text-sm hover:text-gold transition-colors"
                              >
                                {stockist.email}
                              </a>
                            </div>
                          )}

                          {stockist.website && (
                            <div className="flex items-center gap-3">
                              <Globe size={16} className="text-gray shrink-0" />
                              <a
                                href={stockist.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-charcoal-light text-sm hover:text-gold transition-colors"
                              >
                                Visit Website
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              {filteredStockists.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-charcoal-light">
                    No stockists found in this region.
                  </p>
                </div>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="aspect-square bg-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-light mx-auto mb-4" />
                  <span className="text-gray-light text-sm">
                    Interactive Map
                    <br />
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Stockist CTA */}
      <section className="section bg-espresso text-ivory">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Become a Stockist
            </h2>
            <p className="text-ivory/70 max-w-xl mx-auto mb-8">
              Interested in carrying Eldwynhide products in your store? We&apos;re
              always looking to partner with retailers who share our values.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

