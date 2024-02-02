'use client'

import { CartMenu } from './CartMenu'
import { FavoritesMenu } from './FavoritesMenu'
import { Promotion } from './Promotion'
import { useAppSelector } from '@/lib/hooks/redux'
import {
  getCartProducts,
  getFavoriteProducts,
} from '@/redux/customer/customerSelector'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'

const navListMenuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
  },

]

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem placeholder="" className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div>
          <div>
            <Typography placeholder=""
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography placeholder=""
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder="" as="div" variant="small" className="font-medium">
            <ListItem placeholder=""
              className="flex items-center gap-2 px-2 py-2 pr-2 font-medium text-main"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Shop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder="" className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList() {
  return (
    <List placeholder="" className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography placeholder=""
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem placeholder="" className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography placeholder=""
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem placeholder="" className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          About
        </ListItem>
      </Typography>
      <Typography placeholder=""
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem placeholder="" className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Blog
        </ListItem>
      </Typography>
      <Typography placeholder=""
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem placeholder="" className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Contact
        </ListItem>
      </Typography>
      <Typography
        placeholder=""
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem placeholder="" className="flex items-center gap-2 px-2 py-2 text-secondary-gray">
          Pages
        </ListItem>
      </Typography>
    </List>
  )
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false)
  const favoriteProducts = useAppSelector(getFavoriteProducts)
  const cartProducts = useAppSelector(getCartProducts)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  return (
    <header>
      <Promotion />
      <Navbar placeholder="" className="max-w-full rounded-none px-4 py-2">
        <div className="mx-auto flex max-w-screen-3xl items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-[119px]">
            <Typography placeholder=""
              as={Link}
              href="/"
              variant="h6"
              className="cursor-pointer py-1.5 text-2xl font-bold lg:ml-2"
            >
              Bandage
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <div className="hidden lg:flex">
            <Button
              placeholder=""
              variant="text"
              size="sm"
              color="blue-gray"
              className="flex items-center gap-2 text-sm capitalize text-primary"
            >
              <UserIcon className="h-4 w-4" />
              Log In / Register
            </Button>
            <Button placeholder="" variant="text" size="sm" color="blue-gray">
              <MagnifyingGlassIcon className="h-5 w-5 text-primary" />
            </Button>
            <CartMenu cartProducts={cartProducts} />
            <FavoritesMenu products={favoriteProducts} />
          </div>
          <IconButton
            placeholder=""
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              placeholder=""
              variant="text"
              size="sm"
              color="blue-gray"
              className="flex items-center gap-2 text-sm capitalize text-primary"
              fullWidth
            >
              <UserIcon className="h-4 w-4" />
              Log In / Register
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </header>
  )
}
