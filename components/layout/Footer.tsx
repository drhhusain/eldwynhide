import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'

const footerLinks = {
  shop: [
    { href: '/collections', label: 'All Collections' },
    { href: '/collections/bags', label: 'Bags' },
    { href: '/collections/wallets', label: 'Wallets' },
    { href: '/collections/purses', label: 'Purses' },
    { href: '/collections/accessories', label: 'Accessories' },
  ],
  about: [
    { href: '/about', label: 'Our Story' },
    { href: '/craftsmanship', label: 'Craftsmanship' },
    { href: '/materials', label: 'Materials' },
    { href: '/stockists', label: 'Stockists' },
  ],
  support: [
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/care', label: 'Care Guide' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <h2 className="font-heading text-2xl tracking-wider mb-4">
                ELDWYNHIDE
              </h2>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Timeless leather craftsmanship, where tradition meets modern elegance.
              Each piece tells a story of dedication and artistry.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:hello@eldwynhide.com"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ivory/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 text-sm">
            © {new Date().getFullYear()} Eldwynhide. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-ivory/50 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-ivory/50 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

