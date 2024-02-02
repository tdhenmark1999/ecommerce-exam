import { BreadCrumbsSection } from '@/components/BreadCrumbs'
import { BestSellerProductsSection } from '@/components/app/products/[id]/BestSellerProducts'
import { BrandListSection } from '@/components/app/products/[id]/BrandList'
import { ProductDetailsSection } from '@/components/app/products/[id]/ProductDetails'
import { ProductInformationSection } from '@/components/app/products/[id]/ProductInformation'
import { SITE_NAME } from '@/constants/site'
import { SITE_BREADCRUMBS } from '@/constants/site'
import { Product, ProductsResponse } from '@/lib/types'
import { fetchServer } from '@/lib/utils'
import { Metadata, ResolvingMetadata } from 'next'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type Props = {
  params: { id: string }
}

async function getProduct(id: string): Promise<Product> {
  return await fetchServer(`/products/${id}`)
}

async function getRelatedProducts(category: string): Promise<ProductsResponse> {
  return await fetchServer(`/products/category/${category}`)
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const product = await getProduct(params.id)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${product.title} - ${SITE_NAME}`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.thumbnail, ...product.images, ...previousImages],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id)
  const breadCrumbs = [
    ...SITE_BREADCRUMBS,
    {
      label: product.title,
      link: `/products/${product.id}`,
    },
  ]
  const relatedProductsResponse = await getRelatedProducts(product.category)

  return (
    <>
      <BreadCrumbsSection breadCrumbs={breadCrumbs} />
      <ProductDetailsSection product={product} />
      <ProductInformationSection product={product} />
      <BestSellerProductsSection products={relatedProductsResponse.products} />
      <BrandListSection />
    </>
  )
}
