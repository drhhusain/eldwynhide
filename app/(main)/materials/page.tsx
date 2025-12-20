'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Award, Shield } from 'lucide-react'
import { Button } from '@/components/ui'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const leatherTypes = [
  {
    name: 'Full-Grain Leather',
    description:
      'The highest quality leather available, full-grain retains the entire grain surface with all its natural markings. It develops a beautiful patina over time and only improves with age.',
    characteristics: ['Natural grain patterns', 'Develops patina', 'Most durable', 'Breathable'],
  },
  {
    name: 'Vegetable-Tanned',
    description:
      'Tanned using natural materials like tree bark and leaves, this traditional method produces leather with rich, warm tones and exceptional longevity.',
    characteristics: ['Eco-friendly process', 'Rich color depth', 'Stiffens beautifully', 'Unique aging'],
  },
  {
    name: 'Bridle Leather',
    description:
      'Originally developed for horse tack, this heavily waxed leather is renowned for its strength and water resistance. Perfect for items that see daily use.',
    characteristics: ['Wax-infused', 'Water resistant', 'Extremely durable', 'Classic appearance'],
  },
  {
    name: 'Nappa Leather',
    description:
      'Prized for its exceptional softness, Nappa leather is chrome-tanned and dyed through for consistent color. Ideal for linings and refined accessories.',
    characteristics: ['Butter-soft feel', 'Consistent color', 'Lightweight', 'Luxurious touch'],
  },
]

const tanneries = [
  {
    name: 'Conceria Walpier',
    location: 'Tuscany, Italy',
    specialty: 'Vegetable-tanned calfskin',
    since: 'Est. 1973',
  },
  {
    name: 'J & E Sedgwick',
    location: 'Walsall, England',
    specialty: 'Bridle leather',
    since: 'Est. 1900',
  },
  {
    name: 'Tannerie d\'Annonay',
    location: 'Rhône Valley, France',
    specialty: 'Box calf',
    since: 'Est. 1856',
  },
]

export default function MaterialsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-gold/5 to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Quality Foundations
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-charcoal mt-4 mb-6">
              Our Materials
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              The quality of our work begins with the quality of our materials.
              We source only the finest leathers from heritage tanneries around
              the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Leaf,
                title: 'Responsibly Sourced',
                description:
                  'All our leather is a by-product of the food industry. We partner only with tanneries that maintain the highest environmental standards.',
              },
              {
                icon: Award,
                title: 'Rigorously Selected',
                description:
                  'Less than 10% of hides meet our standards. We inspect every piece for grain quality, thickness consistency, and natural beauty.',
              },
              {
                icon: Shield,
                title: 'Built to Last',
                description:
                  'We choose materials designed to improve with age, developing character and patina that tell the story of their journey.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <item.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leather Types */}
      <section className="section bg-espresso text-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Our Leathers
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4">
              Types We Work With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leatherTypes.map((leather, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-espresso-light/30 p-8"
              >
                <h3 className="font-heading text-2xl text-gold mb-4">{leather.name}</h3>
                <p className="text-ivory/70 leading-relaxed mb-6">{leather.description}</p>
                <div className="flex flex-wrap gap-2">
                  {leather.characteristics.map((char, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-ivory/10 text-ivory/80 text-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tannery Partners */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Our Partners
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              Heritage Tanneries
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto mt-4">
              We work exclusively with family-owned tanneries that share our
              commitment to quality and sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tanneries.map((tannery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-cream"
              >
                <div className="aspect-video bg-ivory-dark mb-6 flex items-center justify-center">
                  <span className="text-gray-light text-sm">Tannery Image</span>
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">{tannery.name}</h3>
                <p className="text-gold text-sm mb-2">{tannery.location}</p>
                <p className="text-charcoal-light text-sm mb-2">{tannery.specialty}</p>
                <p className="text-gray text-xs">{tannery.since}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Beyond Leather
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Hardware & Fittings
              </h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  Every zipper, buckle, and clasp is carefully selected to match
                  the quality of our leather. We use solid brass hardware that
                  develops a rich patina over time, and custom-designed fittings
                  exclusive to Eldwynhide.
                </p>
                <p>
                  Our zippers come from renowned manufacturers in Switzerland
                  and Japan, known for smooth operation and exceptional
                  durability. Thread is sourced from specialist mills that
                  produce specifically for luxury leather goods.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Solid Brass', 'Nickel-Free', 'Swiss Zippers', 'Waxed Thread'].map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-ivory-dark flex items-center justify-center"
            >
              <span className="text-gray-light text-sm">Hardware Details</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Experience the Difference
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-8">
              Feel the quality of our materials in person at one of our
              authorized stockists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stockists">
                <Button size="lg">
                  Find a Stockist
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

