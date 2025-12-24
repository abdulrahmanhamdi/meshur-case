'use client'

import { useEffect } from 'react'
import { Button } from '@/components/atoms/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Bir hata oluştu! / Something went wrong!
      </h2>
      <Button
        onClick={() => reset()}
        className="mt-6"
      >
        Tekrar Dene / Try Again
      </Button>
    </div>
  )
}