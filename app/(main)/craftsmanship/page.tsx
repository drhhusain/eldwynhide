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

const craftSteps = [
  {
    number: '01',
    title: 'Selection',
    description:
      'Our journey begins with sourcing. We work exclusively with heritage tanneries that share our values, selecting only the finest full-grain hides that meet our rigorous standards.',
  },
  {
    number: '02',
    title: 'Pattern Making',
    description:
      'Each design is meticulously planned. Our pattern makers create templates that maximize the natural beauty of the leather while minimizing waste.',
  },
  {
    number: '03',
    title: 'Cutting',
    description:
      'Master cutters examine each hide, identifying the prime sections and working around any imperfections. This step requires years of experience and an intimate understanding of leather.',
  },
  {
    number: '04',
    title: 'Preparation',
    description:
      'Edges are carefully skived and reinforced. Linings are cut and prepared. Every component is readied for assembly with precision.',
  },
  {
    number: '05',
    title: 'Stitching',
    description:
      'Our artisans employ both machine and hand-stitching techniques passed down through generations. The characteristic saddle stitch creates seams that grow stronger over time.',
  },
  {
    number: '06',
    title: 'Assembly',
    description:
      'Piece by piece, the product takes shape. Pockets are set, zippers are installed, and hardware is attached with care and precision.',
  },
  {
    number: '07',
    title: 'Edge Work',
    description:
      'Perhaps our most distinctive element. Edges are painted, sealed, and hand-burnished multiple times to achieve a smooth, elegant finish that will endure.',
  },
  {
    number: '08',
    title: 'Quality Control',
    description:
      'Every piece undergoes rigorous inspection before earning the Eldwynhide name. We check every stitch, every edge, every detail.',
  },
]

export default function CraftsmanshipPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-espresso text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              The Art of Making
            </span>
            <h1 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
              Craftsmanship
            </h1>
            <p className="text-xl text-ivory/80 leading-relaxed">
              Every Eldwynhide piece is the result of dozens of hours of skilled
              handwork. Discover the meticulous process behind our creations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Where Tradition Meets Precision
              </h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  At Eldwynhide, we believe that true luxury cannot be rushed.
                  Each piece we create represents a marriage of time-honored
                  techniques and contemporary precision—a balance that defines
                  our approach to leatherwork.
                </p>
                <p>
                  Our artisans undergo years of training before they touch a
                  finished piece. This dedication to mastery ensures that every
                  bag, wallet, and accessory meets the standards established
                  over a century ago.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-cream flex items-center justify-center"
            >
              <span className="text-gray-light text-sm">Artisan at Work</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-cream">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              The Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4">
              From Hide to Heirloom
            </h2>
          </motion.div>

          <div className="space-y-0">
            {craftSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
                className="grid md:grid-cols-12 gap-6 md:gap-12 py-8 border-b border-border last:border-0"
              >
                <div className="md:col-span-2">
                  <span className="font-heading text-4xl text-gold">{step.number}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-2xl text-charcoal">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-charcoal-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Investment */}
      <section className="section bg-espresso text-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gold">
              Time Invested
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4">
              Hours of Dedication
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { hours: '40+', item: 'Briefcase' },
              { hours: '25+', item: 'Tote Bag' },
              { hours: '15+', item: 'Crossbody' },
              { hours: '8+', item: 'Wallet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-heading text-5xl md:text-6xl text-gold">
                  {stat.hours}
                </span>
                <p className="text-ivory/70 mt-2">hours per {stat.item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] bg-cream flex items-center justify-center order-2 lg:order-1"
            >
              <span className="text-gray-light text-sm">Workshop Tools</span>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Tools of the Trade
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Instruments of Precision
              </h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  Many of our tools have been in continuous use for decades,
                  their handles worn smooth by generations of skilled hands.
                  From Japanese-forged cutting knives to custom-made edge
                  burnishers, each instrument plays a vital role.
                </p>
                <p>
                  We maintain traditional tools alongside modern precision
                  equipment, using each where it serves the work best. A laser
                  cutter ensures perfect consistency; a hand-held awl creates
                  the perfect stitch hole. Both are essential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              See the Results
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-8">
              Explore our collections and experience the quality that comes from
              genuine craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections">
                <Button size="lg">
                  View Collections
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/materials">
                <Button variant="outline" size="lg">
                  Our Materials
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

