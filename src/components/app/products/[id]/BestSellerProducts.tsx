'use client'

import { ProductListGrid } from '@/components/ProductListGrid'
import { Product } from '@/lib/types'

type Props = {
  products: Product[]
}

export function BestSellerProductsSection({ products }: Props) {
  return (
    <section className="mx-auto hidden max-w-screen-2xl p-12 md:block">
      <div className="flex flex-col space-y-6">
        <div className="border-b-light-gray-2 border-b-2 pb-6">
          <h1 className="text-2xl font-bold uppercase">Bestseller products</h1>
        </div>

        <ProductListGrid products={products} />
      </div>
    </section>
  )
}
