import { Header, Footer } from '@/components/layout'
import { WishlistProvider } from '@/lib/hooks/useWishlist'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WishlistProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </WishlistProvider>
  )
}

