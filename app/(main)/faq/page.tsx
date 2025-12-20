'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { mockFAQs } from '@/lib/mockData'

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'products', label: 'Products' },
  { id: 'care', label: 'Care & Maintenance' },
  { id: 'orders', label: 'Orders & Shipping' },
  { id: 'returns', label: 'Returns & Exchanges' },
  { id: 'general', label: 'General' },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQs =
    selectedCategory === 'all'
      ? mockFAQs
      : mockFAQs.filter((faq) => faq.category === selectedCategory)

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

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
              Help Center
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Find answers to common questions about our products, care
              instructions, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-espresso text-ivory'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(faq._id)

              return (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-border"
                >
                  <button
                    onClick={() => toggleItem(faq._id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
                  >
                    <span className="font-heading text-lg text-charcoal pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} className="text-gray" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-charcoal-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal-light">
                No questions found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-cream">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Still Have Questions?
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-8">
              Our team is here to help. Reach out to us and we&apos;ll get back to
              you as soon as possible.
            </p>
            <Link href="/contact">
              <Button size="lg">
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

