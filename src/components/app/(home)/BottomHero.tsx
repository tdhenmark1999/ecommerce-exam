'use client'

import { Button } from '@material-tailwind/react'

export function BottomHeroSection() {
  return (
    <section className="bg-home-bottom-hero w-full bg-cover bg-center bg-no-repeat pb-[112px] pt-[112px] md:pt-[160px]">
      <div className="max-w-screen-1.5xl mx-auto flex justify-center">
        <div className="flex w-[358px] flex-col items-center justify-center space-y-[30px] md:w-[571px]">
          <span className="text-sm font-bold text-primary">
            Designing Better Experience
          </span>
          <h1 className="text-center text-[40px] font-bold">
            Problems trying to resolve the conflict between
          </h1>
          <span className="w-full text-center text-sm text-secondary-gray md:w-[447px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </span>
          <h1 className="text-2xl font-bold text-secondary-green">$16.48</h1>
          <Button placeholder="" className="bg-primary px-10 py-[15px] text-sm uppercase">
            Add your call to action
          </Button>
        </div>
      </div>
    </section>
  )
}
