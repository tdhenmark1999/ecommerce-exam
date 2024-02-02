import { useAppDispatch } from '@/lib/hooks/redux'
import { Product } from '@/lib/types'
import { customerActions } from '@/redux/customer/customerSlice'
import { TrashIcon, HeartIcon } from '@heroicons/react/24/outline'
import {
  MenuItem,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
  Collapse,
} from '@material-tailwind/react'
import Image from 'next/image'
import React, { useState } from 'react'

export function FavoritesMenu({ products }: { products: Product[] }) {
  const dispatch = useAppDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderItems = products.map((product) => (
    <MenuItem placeholder=""
      key={product.id}
      className="flex w-[400px] items-center justify-between gap-3 rounded-lg hover:bg-white"
    >
      <div className="flex items-center gap-3">
        <Image
          width={80}
          height={80}
          src={product.thumbnail}
          alt={product.title}
          className="rounded"
        />
        <div className="flex w-80 flex-col gap-3">
          <span className="text-xs font-bold text-primary">
            {product.title}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          placeholder=""
          variant="text"
          className="p-1"
          onClick={() => dispatch(customerActions.addToFavorites(product))}
        >
          <TrashIcon className="h-4 w-4 text-main" />
        </Button>
      </div>
    </MenuItem>
  ))

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <Button
            placeholder=""
            variant="text"
            size="sm"
            color="blue-gray"
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            className="relative"
          >
            <HeartIcon className="h-5 w-5 text-primary" />
            {products.length > 0 && (
              <span className="absolute right-2 top-[10px] text-xs font-normal text-primary">
                {products.length}
              </span>
            )}
          </Button>
        </MenuHandler>
        <MenuList placeholder="" className="hidden max-w-screen-xl rounded-xl lg:block">
          {products.length > 0 ? (
            <>
              <Typography placeholder="" variant="h5" className="mb-2 font-bold">
                Favorites
              </Typography>
              <ul className="gap-y-2 outline-none outline-0">{renderItems}</ul>
            </>
          ) : (
            <div className="flex items-center justify-center gap-2 p-4">
              <Typography placeholder="" variant="h6" className="font-bold">
                Your have no favorites
              </Typography>
            </div>
          )}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}
