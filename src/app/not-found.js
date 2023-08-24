"use client"

import { useRouter } from 'next/navigation'

export default function ErroPage() {

    const router = useRouter()
    setTimeout(() => {
        router.push('/')
    },3000)
  return (
      <div className='flex justify-center items-center min-h-screen text-6xl '>
          <h1>404! Not Found</h1>
    </div>
  )
}
