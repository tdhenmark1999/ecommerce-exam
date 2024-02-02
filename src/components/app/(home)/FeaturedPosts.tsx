'use client'

import { PostCard } from '@/components/PostCard'
import { Post } from '@/lib/types'

type Props = {
  posts: Post[]
}

export function FeaturedPostsSection({ posts }: Props) {
  return (
    <section className="max-w-screen-1.5xl mx-auto py-20 md:py-[112px]">
      <div className="flex flex-col space-y-20">
        <div className="flex flex-col items-center space-y-[10px]">
          <span className="text-sm font-bold text-primary">
            Practice Advice
          </span>
          <h1 className="text-[40px] font-bold">Featured Posts</h1>
        </div>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
