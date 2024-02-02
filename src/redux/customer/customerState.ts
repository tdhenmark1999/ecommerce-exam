import { STORAGE_KEY } from '@/constants'
import { CartProduct, Product } from '@/lib/types'

export type CustomerState = {
  cart: CartProduct[]
  favorites: Product[]
}

export const CustomerInitialState = (): CustomerState => {
  let jsonStorage = null
  if (typeof window !== 'undefined') {
    jsonStorage = window.localStorage.getItem(STORAGE_KEY)
  }

  return jsonStorage
    ? (JSON.parse(jsonStorage) as CustomerState)
    : {
        cart: [],
        favorites: [],
      }
}
