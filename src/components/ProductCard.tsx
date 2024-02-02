'use client'

import { Product } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const discountedPrice =
    product.price - product.price * (product.discountPercentage / 100)

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex w-[295px] flex-col  md:w-[183px]"
      title={product.title}
    >
      <div className="card-zoom h-[380px] w-full md:h-[238px]">
        <div
          className="card-zoom-image bg-red-50"
          style={{ backgroundImage: `url(${product.thumbnail})` }}
        ></div>
      </div>
      <div className="flex flex-col space-y-[10px] bg-white px-1 pb-[35px] pt-[25px] text-center">
        <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-bold">
          {product.title}
        </span>
        <span className="text-sm font-bold text-secondary-gray">
          {product.brand}
        </span>
        <div className="flex justify-center space-x-1">
          <span className="font-bold text-muted">
            {formatCurrency(product.price)}
          </span>
          <span className="font-bold text-success">
            {formatCurrency(discountedPrice)}
          </span>
        </div>
      </div>
    </Link>
  )
}
