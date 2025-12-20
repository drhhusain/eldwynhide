'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface WishlistContextType {
  items: string[]
  addItem: (id: string) => void
  removeItem: (id: string) => void
  toggleItem: (id: string) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

const STORAGE_KEY = 'eldwynhide-wishlist'

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addItem = (id: string) => {
    setItems((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item !== id))
  }

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isInWishlist = (id: string) => items.includes(id)

  const clearWishlist = () => setItems([])

  return (
    <WishlistContext.Provider
      value={{
        items: isHydrated ? items : [],
        addItem,
        removeItem,
        toggleItem,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

