'use client'

import { Suspense } from 'react'
import { CollectionsContent } from './CollectionsContent'

export default function CollectionsPage() {
  return (
    <Suspense fallback={<CollectionsLoading />}>
      <CollectionsContent />
    </Suspense>
  )
}

function CollectionsLoading() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="section pb-8">
        <div className="container">
          <div className="text-center animate-pulse">
            <div className="h-12 w-64 bg-cream mx-auto mb-4" />
            <div className="h-6 w-96 bg-cream mx-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}
