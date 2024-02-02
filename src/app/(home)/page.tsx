import { BestServicesSection } from '@/components/app/(home)/BestServices'
import { BottomHeroSection } from '@/components/app/(home)/BottomHero'
import { FeaturedPostsSection } from '@/components/app/(home)/FeaturedPosts'
import { FeaturedProductsSection } from '@/components/app/(home)/FeaturedProducts'
import { HeroSection } from '@/components/app/(home)/Hero'
import { TestmoniesSection } from '@/components/app/(home)/Testimonies'
import jsonPosts from '@/constants/posts.json'
import { ProductsResponse } from '@/lib/types'
import { Post } from '@/lib/types'
import { fetchServer } from '@/lib/utils'

export default async function HomePage() {
  const response: ProductsResponse = await fetchServer('/products?limit=10')

  return (
    <>
      <HeroSection />
      <FeaturedProductsSection {...response} />
      <BestServicesSection />
      <FeaturedPostsSection posts={jsonPosts as Post[]} />
      <TestmoniesSection />
      <BottomHeroSection />
    </>
  )
}
