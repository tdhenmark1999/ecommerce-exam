'use client'

import clsx from 'clsx'

export function HeroSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-10 py-10 md:px-0 md:py-20">
      <div
        className={clsx(
          'grid grid-flow-row gap-[15px] sm:min-h-[616px]',
          'grid-cols-2 grid-rows-2',
          'sm:grid-cols-10 sm:grid-rows-6',
          'children:card-zoom',
        )}
      >
        <div
          className={clsx(
            'h-[300px] w-full sm:h-full',
            'col-span-2 row-span-2',
            'sm:col-span-5 sm:row-span-3',
            'md:col-span-4 md:row-span-6',
          )}
        >
          <div className="bg-home-hero-image-1 card-zoom-image"></div>
          <div className="absolute flex h-full w-full flex-col space-y-[5px] p-6">
            <span className="text-sm font-bold text-success">5 Items</span>
            <h1 className="text-2xl font-bold uppercase lg:text-[40px]">
              Furniture
            </h1>
            <span className="text-sm font-bold">Read More</span>
          </div>
        </div>
        <div
          className={clsx(
            'h-[300px] w-full sm:h-full',
            'col-span-2 row-span-2',
            'sm:col-span-5 sm:row-span-3',
            'md:col-span-6 md:row-span-3',
          )}
        >
          <div className="bg-home-hero-image-2 card-zoom-image"></div>
          <div className="absolute flex h-full w-full flex-col space-y-[5px] p-6">
            <span className="text-sm font-bold text-success">5 Items</span>
            <h1 className="text-2xl font-bold uppercase lg:text-[40px]">
              Furniture
            </h1>
            <span className="text-sm font-bold">Read More</span>
          </div>
        </div>
        <div
          className={clsx(
            'h-[300px] w-full sm:h-full',
            'col-span-2 row-span-2',
            'sm:col-span-5 sm:row-span-3',
            'md:col-span-3 md:row-span-3',
          )}
        >
          <div className="bg-home-hero-image-3 card-zoom-image"></div>
          <div className="absolute flex h-full w-full flex-col space-y-[5px] p-6">
            <span className="text-sm font-bold text-success">5 Items</span>
            <h1 className="text-2xl font-bold uppercase lg:text-[40px]">
              Furniture
            </h1>
            <span className="text-sm font-bold">Read More</span>
          </div>
        </div>
        <div
          className={clsx(
            'h-[300px] w-full sm:h-full',
            'col-span-2 row-span-2',
            'sm:col-span-5 sm:row-span-3',
            'md:col-span-3 md:row-span-3',
          )}
        >
          <div className="bg-home-hero-image-4 card-zoom-image"></div>
          <div className="absolute flex h-full w-full flex-col space-y-[5px] p-6">
            <span className="text-sm font-bold text-success">5 Items</span>
            <h1 className="text-2xl font-bold uppercase lg:text-[40px]">
              Furniture
            </h1>
            <span className="text-sm font-bold">Read More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
