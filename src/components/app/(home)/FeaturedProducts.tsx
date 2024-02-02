'use client'

import { ProductListGrid } from '@/components/ProductListGrid'
import { Product, ProductsResponse } from '@/lib/types'
import { fetchClient } from '@/lib/utils'
import { Button } from '@material-tailwind/react'
import { useState } from 'react'

type Props = ProductsResponse

export function FeaturedProductsSection({ products, total, limit }: Props) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>(products)
  const pages = Math.ceil(total / limit)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMoreProducts = async () => {
    const nextPage = currentPage + 1

    if (nextPage > pages) return

    setIsLoading(true)
    const loadMoreProductsResponse: ProductsResponse = await fetchClient(
      `/products?limit=${limit}&skip=${(nextPage - 1) * limit}`,
    )
    setFeaturedProducts([
      ...featuredProducts,
      ...loadMoreProductsResponse.products,
    ])
    setCurrentPage(nextPage)
    setIsLoading(false)
  }

  return (
    <section className="mx-auto max-w-screen-xl px-10 py-10 md:px-0 md:py-20">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-[10px] text-center">
          <span className="text-xl text-secondary-gray">Featured Products</span>
          <h1 className="text-2xl font-bold uppercase">Bestseller products</h1>
          <span className="text-sm text-secondary-gray">
            Problems trying to resolve the conflict between
          </span>
        </div>

        <ProductListGrid products={featuredProducts} />

        {currentPage + 1 < pages && (
          <div className="flex justify-center pt-6">
            <Button
              placeholder=""
              variant="outlined"
              className="rounded border border-primary px-10 py-[15px] text-primary"
              loading={isLoading}
              onClick={handleLoadMoreProducts}
            >
              {isLoading ? 'Loading products' : 'Load more products'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
