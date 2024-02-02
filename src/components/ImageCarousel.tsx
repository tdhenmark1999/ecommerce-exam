'use client'

import { Carousel } from 'react-responsive-carousel';

type Props = {
  imageLinks: string[]
}

export function ImageCarousel({ imageLinks }: Props) {
  return (
    <Carousel
      showThumbs={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      className="mx-auto max-w-screen-1.5xl"
      thumbWidth={100}
      showIndicators={false}
    >
      {imageLinks.map((imageLink, index) => (
        <div key={index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageLink} alt="" loading="eager" />
        </div>
      ))}
    </Carousel>
  )
}
