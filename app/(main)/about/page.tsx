'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-charcoal mt-4 mb-6">
              A Heritage of
              <br />
              <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              For over a century, Eldwynhide has been at the forefront of luxury
              leather craftsmanship, creating pieces that transcend time and trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Est. 1892
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Founded on Passion
              </h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  In the heart of the English countryside, master craftsman Edward
                  Wynne established a small leather workshop with an unwavering vision:
                  to create leather goods of unparalleled quality that would be
                  cherished for generations.
                </p>
                <p>
                  What began as a humble endeavor has grown into a globally recognized
                  atelier, yet our commitment to Edward&apos;s founding principles
                  remains unchanged. Every piece that leaves our workshop carries the
                  spirit of those early days—meticulous attention to detail, respect
                  for materials, and pride in craftsmanship.
                </p>
                <p>
                  Today, Eldwynhide continues to be family-owned, with the fifth
                  generation of artisans upholding traditions while embracing
                  innovation that honors our heritage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-ivory-dark flex items-center justify-center">
                <span className="text-gray-light text-sm">Historical Workshop Image</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-espresso text-ivory">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4">
              Guided by Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Uncompromising Quality',
                description:
                  'We never cut corners. From selecting the finest hides to the final burnished edge, every step meets our exacting standards.',
              },
              {
                title: 'Sustainable Practice',
                description:
                  'We source responsibly, minimize waste, and create products designed to last a lifetime—not a season.',
              },
              {
                title: 'Human Touch',
                description:
                  'In an age of automation, we believe in the irreplaceable value of skilled hands and trained eyes.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 border border-gold flex items-center justify-center">
                  <span className="text-gold font-heading text-xl">{index + 1}</span>
                </div>
                <h3 className="font-heading text-2xl mb-4">{value.title}</h3>
                <p className="text-ivory/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Our Artisans
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              Masters of Their Craft
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Thornton',
                role: 'Master Craftsman',
                years: '32 years',
              },
              {
                name: 'Elena Rossi',
                role: 'Head of Design',
                years: '18 years',
              },
              {
                name: 'William Chen',
                role: 'Leather Specialist',
                years: '24 years',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-[3/4] bg-cream mb-6 flex items-center justify-center">
                  <span className="text-gray-light text-sm">Portrait</span>
                </div>
                <h3 className="font-heading text-xl text-charcoal">{member.name}</h3>
                <p className="text-gold text-sm mt-1">{member.role}</p>
                <p className="text-gray text-sm">{member.years} with Eldwynhide</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Experience Our Craft
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-8">
              Discover the dedication and artistry that goes into every
              Eldwynhide creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/craftsmanship">
                <Button size="lg">
                  Our Process
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/collections">
                <Button variant="outline" size="lg">
                  View Collections
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

