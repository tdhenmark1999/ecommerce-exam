'use client'

export async function fetchClient(path: string, options: RequestInit = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  }
  const url = `${process.env.NEXT_PUBLIC_REST_API_URL}${path}`

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(
      `Fetch request failed: ${response.status} ${response.statusText}`,
    )
  }

  return response.json()
}
