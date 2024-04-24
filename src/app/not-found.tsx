"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


export const metadata = {
      title: "404 page not found"
}

const NotFound = () => {
      const router = useRouter()
  return (
        <div className='h-screen w-full flex-col space-y-3 flex items-center justify-center'>
              <h1 className='text-3xl md:text-5xl font-semibold animate-bounce'>404 Page not found</h1>
              <p  className='text-sm text-blue-600' onClick={()=>router.push("/onboarding/login")}>Login</p>
    </div>
  )
}

export default NotFound