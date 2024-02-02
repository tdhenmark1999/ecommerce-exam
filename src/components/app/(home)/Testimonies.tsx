'use client'

import { StarIcon as StartOutlineIcon } from '@heroicons/react/24/outline'
import { StarIcon as StartSolidIcon } from '@heroicons/react/24/solid'
import { Avatar } from '@material-tailwind/react'

export function TestmoniesSection() {
  return (
    <section className="mx-auto max-w-[1128px] pb-10 pt-[55px] md:py-20">
      <div className="flex flex-wrap items-center justify-center space-y-[37px] px-[28px] md:p-12 xl:justify-between">
        <div className="flex w-[315px] flex-col space-y-[28px] md:w-[438px]">
          <h1 className="text-center text-2xl font-bold">
            What they say about us
          </h1>
          <div className="flex flex-col items-center space-y-5 py-[30px] pb-[35px]">
            <Avatar
              placeholder=''
              src="/images/user-review-1.webp"
              className="h-[90px] w-[90px]"
              alt="user-review-1"
            />
            <div className="flex items-center space-x-[5px]">
              <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
              <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
              <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
              <StartSolidIcon className="h-5 w-5 text-secondary-yellow" />
              <StartOutlineIcon className="h-5 w-5 text-secondary-yellow" />
            </div>
            <span className="text-center font-bold text-secondary-gray">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </span>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-primary">
                Regina Miles
              </span>
              <span className="font-bol text-sm">Designer</span>
            </div>
          </div>
        </div>

        <div className="grid w-[450px] grid-cols-3 grid-rows-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="card-zoom col-span-1 row-span-1 h-[112px] w-[112px] md:h-[142px] md:w-[142px]"
            >
              <div
                className="card-zoom-image bg-red-50"
                style={{
                  backgroundImage: `url(/images/review-image-${i + 1}.webp)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
