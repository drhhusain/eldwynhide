'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button, Input, Textarea } from '@/components/ui'
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact'

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'product', label: 'Product Question' },
  { value: 'stockist', label: 'Become a Stockist' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: 'general',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              We&apos;d love to hear from you. Whether you have a question about our
              products, need assistance, or want to become a stockist—we&apos;re here
              to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <motion.div {...fadeInUp} className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-charcoal mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal mb-1">Email</h3>
                    <a
                      href="mailto:hello@eldwynhide.com"
                      className="text-charcoal-light hover:text-gold transition-colors"
                    >
                      hello@eldwynhide.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal mb-1">Phone</h3>
                    <a
                      href="tel:+442012345678"
                      className="text-charcoal-light hover:text-gold transition-colors"
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal mb-1">Address</h3>
                    <p className="text-charcoal-light">
                      18 Leather Lane
                      <br />
                      London, EC1N 7SU
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-charcoal mb-1">Hours</h3>
                    <p className="text-charcoal-light">
                      Monday – Friday: 9am – 6pm GMT
                      <br />
                      Saturday: 10am – 4pm GMT
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-lg text-charcoal mb-4">
                  Looking for a Stockist?
                </h3>
                <p className="text-charcoal-light text-sm mb-4">
                  Find an authorized retailer near you to see our products in person.
                </p>
                <Link
                  href="/stockists"
                  className="text-gold hover:text-gold-dark text-sm transition-colors"
                >
                  View Stockists →
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cream p-12 text-center"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-gold" size={32} />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal mb-4">
                    Message Sent
                  </h3>
                  <p className="text-charcoal-light mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48
                    hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-cream p-8 md:p-12">
                  <h2 className="font-heading text-2xl text-charcoal mb-8">
                    Send Us a Message
                  </h2>

                  <div className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Inquiry Type
                      </label>
                      <select
                        {...register('inquiryType')}
                        className="w-full px-4 py-3 bg-ivory border border-border text-charcoal focus:outline-none focus:border-gold transition-colors"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        placeholder="Your name"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    {/* Subject */}
                    <Input
                      label="Subject"
                      placeholder="How can we help?"
                      error={errors.subject?.message}
                      {...register('subject')}
                    />

                    {/* Message */}
                    <Textarea
                      label="Message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-cream flex items-center justify-center">
        <span className="text-gray-light">Map Placeholder</span>
      </section>
    </div>
  )
}

