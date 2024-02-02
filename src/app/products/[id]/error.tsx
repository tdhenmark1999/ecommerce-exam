'use client'

import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="mx-auto max-w-screen-1.5xl py-12">
      <h1 className="mb-6 text-4xl">
        Something went wrong or Product not existing!
      </h1>
      <div className="flex items-center space-x-5">
        <Button
          className="bg-primary"
          placeholder=""
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <span className="text-2xl font-bold">OR</span>
        <Link href="/">
          <Button variant="outlined" placeholder="">Redirect to home page</Button>
        </Link>
      </div>
    </section>
  )
}
