'use client'

import { useEffect } from 'react'

const ErrorRoot = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error.message)
  })

  return (
    <main className="">
      <br />
      <center>5555 error </center>
      <br />
      {error.message}

      <button
        onClick={() => {
          reset()
        }}
      >
        {' '}
        Try again
      </button>
    </main>
  )
}

export default ErrorRoot
