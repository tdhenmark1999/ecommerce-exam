'use client'

import {
  FaHooli,
  FaStripe,
  FaAws,
  FaRedditAlien,
  FaLyft,
  FaPiedPiperHat,
} from 'react-icons/fa6'

export function BrandListSection() {
  return (
    <section className="mx-auto max-w-screen-1.5xl px-12 py-[50px] lg:px-0">
      <div className="flex flex-col flex-wrap items-center justify-between gap-[30px] children:h-[100px] children:w-[100px] children:text-secondary-gray md:flex-row">
        <FaHooli />
        <FaLyft />
        <FaPiedPiperHat />
        <FaStripe />
        <FaAws />
        <FaRedditAlien />
      </div>
    </section>
  )
}
