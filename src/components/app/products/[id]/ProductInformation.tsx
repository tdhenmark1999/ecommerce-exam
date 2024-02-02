'use client'

import { Product } from '@/lib/types'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import Image from 'next/image'

type Props = {
  product: Product
}

const data = [
  {
    label: 'Description',
    value: 'description',
  },
  {
    label: 'Additional Information',
    value: 'additional-information',
  },
  {
    label: 'Reviews (0)',
    value: 'reviews',
  },
]

export function ProductInformationSection({ product }: Props) {
  return (
    <section className="hidden bg-white pb-12 md:block">
      <div className="mx-auto max-w-screen-1.5xl">
        <Tabs value="description">
          <TabsHeader
            placeholder=""
            className="border-light-gray-2 rounded-none border-b bg-transparent p-0"
            indicatorProps={{
              className:
                'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                placeholder=""
                key={value}
                value={value}
                className="p-6 text-sm font-semibold"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody placeholder="">
            {data.map(({ value }) => (
              <TabPanel key={value} value={value}>
                {value === 'description' && (
                  <DescriptionTab product={product} />
                )}
                {value === 'additional-information' && (
                  <AdditionalInformationTab />
                )}
                {value === 'reviews' && <ReviewsTab />}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  )
}

const DescriptionTab = ({ product }: Props) => {
  return (
    <div className="flex space-x-[30px]">
      <div className="flex w-1/2 flex-col space-y-[30px]">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <span className="text-sm">{product.description}</span>
      </div>
      <div className="w-1/2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={413}
          height={372}
          className="rounded-md"
        />
      </div>
    </div>
  )
}

const AdditionalInformationTab = () => {
  return (
    <div className="text-sm">
      {Array.from({ length: 5 }).map((_, index) => (
        <p key={index} className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
          maxime sint porro vero alias, dolor a, facilis maiores assumenda
          necessitatibus numquam voluptate veritatis nihil nisi cum, aut modi
          reiciendis?
        </p>
      ))}
    </div>
  )
}

const ReviewsTab = () => {
  return (
    <div className="text-sm">
      {Array.from({ length: 5 }).map((_, index) => (
        <p key={index} className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
          maxime sint porro vero alias, dolor a, facilis maiores assumenda
          necessitatibus numquam voluptate veritatis nihil nisi cum, aut modi
          reiciendis?
        </p>
      ))}
    </div>
  )
}
