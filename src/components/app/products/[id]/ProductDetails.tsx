'use client'

import { ImageCarousel } from '@/components/ImageCarousel'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { Product } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'
import {
  getCartProducts,
  getFavoriteProducts,
} from '@/redux/customer/customerSelector'
import { customerActions } from '@/redux/customer/customerSlice'
import {
  StarIcon as StartOutlineIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { StarIcon as StartSolidIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import clsx from 'clsx'

type Props = {
  product: Product
}

export function ProductDetailsSection({ product }: Props) {
  const hasStock = product.stock > 0
  const dispatch = useAppDispatch()
  const cartProducts = useAppSelector(getCartProducts)
  const isInCart = cartProducts.some((item) => item.id === product.id)
  const favoriteProducts = useAppSelector(getFavoriteProducts)
  const isFavorite = favoriteProducts.some((item) => item.id === product.id)

  return (
    <section className="mx-auto max-w-screen-1.5xl pb-12">
      <div className="flex flex-col gap-[30px] px-[33px] md:flex-row md:px-0">
        <div className="w-full md:w-1/2">
          <ImageCarousel imageLinks={[product.thumbnail, ...product.images]} />
        </div>
        <div className="w-full p-6 md:w-1/2">
          <div className="mb-[67px] flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <h1 className="text-[20px]">{product.title}</h1>
              <div className="flex space-x-[10px]">
                <div className="flex items-center space-x-[5px]">
                  <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
                  <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
                  <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
                  <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
                  <StartOutlineIcon className="h-5 w-5 text-secondary-yellow" />
                </div>
                <span className="text-sm font-bold text-secondary-gray">
                  10 Reviews
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-[5px]">
              <h1 className="text-2xl font-bold">
                {formatCurrency(product.price)}
              </h1>
              <div className="text-sm font-bold">
                <span className="text-secondary-gray">Availability : </span>
                <span
                  className={clsx(hasStock ? 'text-primary' : 'text-muted')}
                >
                  {hasStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            <div className="border-b border-b-muted pb-4 text-sm text-[#858585]">
              {product.description}
            </div>
            <div className="flex space-x-[10px] children:h-[30px] children:w-[30px] children:rounded-full">
              <Button placeholder="" className="bg-primary p-0">{''}</Button>
              <Button placeholder="" className="bg-success p-0">{''}</Button>
              <Button placeholder="" className="bg-alert p-0">{''}</Button>
              <Button placeholder="" className="bg-main p-0">{''}</Button>
            </div>
          </div>
          <div className="flex space-x-[10px]">
            <Button placeholder="" className="bg-primary px-5 py-[10px] text-sm capitalize">
              Select Options
            </Button>
            <Button
              placeholder=""
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full border border-muted p-0 shadow-md',
                isFavorite ? 'bg-red-500' : 'bg-white',
              )}
              variant="filled"
              onClick={() => {
                dispatch(customerActions.addToFavorites(product))
              }}
            >
              <HeartIcon
                className={clsx(
                  'h-5 w-5',
                  isFavorite ? 'text-white' : 'text-main',
                )}
              />
            </Button>
            <Button
              placeholder=""
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-white p-0 shadow-md',
                isInCart ? 'bg-primary' : 'bg-white',
              )}
              variant="filled"
              onClick={() => {
                if (!isInCart) {
                  dispatch(customerActions.addToCart(product))
                }
              }}
            >
              <ShoppingCartIcon
                className={clsx(
                  'h-5 w-5',
                  isInCart ? 'text-white' : 'text-main',
                )}
              />
            </Button>
            <Button
              placeholder=""
              className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-white p-0 shadow-md"
              variant="filled"
            >
              <EyeIcon className="h-5 w-5 text-main" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
