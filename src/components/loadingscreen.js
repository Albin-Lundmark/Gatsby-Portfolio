import React, { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [lineIndex, setLineIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('hasLoaded')
    if (hasLoadedBefore) {
      setIsLoading(false)
    } else {
      if (lineIndex < 2) {
        const timer = setTimeout(() => setLineIndex(prev => prev + 1), 3000)
        return () => clearTimeout(timer)
      } else {
        const loadingTimer = setTimeout(() => {
          setIsLoading(false)
          localStorage.setItem('hasLoaded', 'true')
        }, 1000)
        return () => clearTimeout(loadingTimer)
      }
    }
  }, [lineIndex])

  if (!isLoading) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50'>
      <div className='text-center'>
        <div className='font-mono text-lg mb-4'>
          {lineIndex >= 0 && (
            <>
            <p>{`const firstName = "Albin";`}</p>
            <p>{`const lastName = "Lundmark";`}</p>
              <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-500 pr-4'>
                {`const education = "frontend-developer";`}
              </p>
            </>
          )}
          {lineIndex >= 1 && (
            <p className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-500 pr-4'>
              {`console.log("Loading Albins Portfolio");`}
            </p>
          )}
        </div>

        <div className='flex items-center justify-center space-x-2'>
          <span className='h-3 w-3 bg-green-500 rounded-full animate-bounce'></span>
          <span className='h-3 w-3 bg-blue-500 rounded-full animate-bounce delay-150'></span>
          <span className='h-3 w-3 bg-purple-500 rounded-full animate-bounce delay-300'></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
