'use client'

import Spline from '@splinetool/react-spline'
import { useState, useEffect } from 'react'

export default function HeroScene() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(false)

  // El error de buffer ocurre por la precarga agresiva de Turbopack.
  // Retrasamos el renderizado un instante para limpiar el stream de datos.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!shouldRender) return <div className="absolute inset-0 bg-[#fafafa]" />

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#fafafa] z-10">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <Spline 
        scene="https://prod.spline.design/6J99at6qnVpC-K8S/scene.splinecode" 
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}