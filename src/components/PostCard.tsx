'use client'

import { Post } from '@/lib/types'
import { formatTimestampToDate } from '@/lib/utils'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <div
      className="mx-auto flex w-[330px] flex-col shadow md:w-[348px]"
      title={post.title}
    >
      <div className="card-zoom h-[300px] w-full">
        <div
          className="card-zoom-image bg-red-50"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
      </div>
      <div className="flex flex-col space-y-[10px] bg-white px-[25px] pb-[35px] pt-[25px]">
        <div className="flex space-x-[15px]">
          <span className="text-xs text-disabled">Google</span>
          <span className="text-xs text-secondary-gray">Trending</span>
          <span className="text-xs text-secondary-gray">New</span>
        </div>
        <h1 className="text-xl">{post.title}</h1>
        <span className="text-sm text-secondary-gray">{post.description}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[5px] py-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.49933 14.6667C5.20378 14.6232 2.54277 11.9622 2.49933 8.66668C2.54277 5.37113 5.20378 2.71011 8.49933 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49933 14.6667ZM8.49933 4.00001C5.93611 4.03376 3.86641 6.10346 3.83266 8.66668C3.86641 11.2299 5.93611 13.2996 8.49933 13.3333C11.0625 13.2996 13.1322 11.2299 13.166 8.66668C13.1322 6.10346 11.0625 4.03376 8.49933 4.00001ZM11.8327 9.33334H7.83266V5.33334H9.16599V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97066 4.47201L2.02733 3.52734L4.02133 1.52734L4.96466 2.47201L2.972 4.47201H2.97066Z"
                fill="#23A6F0"
              />
            </svg>
            <span className="text-xs text-secondary-gray">
              {formatTimestampToDate(post.date)}
            </span>
          </div>
          <div className="flex items-center space-x-[5px] py-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1397_46)">
                <path
                  d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                  fill="#23856D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1397_46">
                  <rect
                    width="16"
                    height="14.6667"
                    fill="white"
                    transform="translate(0.5 0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xs text-secondary-gray">{`${
              post.numComments
            } comment${post.numComments > 1 ? 's' : ''}`}</span>
          </div>
        </div>
        <div className="flex items-center space-x-[10px]">
          <span className="text-sm font-bold text-secondary-gray">
            Learn More
          </span>
          <ChevronRightIcon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  )
}
