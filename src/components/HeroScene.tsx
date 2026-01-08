'use client'

import Spline from '@splinetool/react-spline'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function HeroScene() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(false)
  const { resolvedTheme } = useTheme() // Usamos resolvedTheme para detectar el tema actual

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // El color del fondo de carga ahora depende del tema
  const skeletonColor = resolvedTheme === 'dark' ? 'bg-[#020617]' : 'bg-[#fafafa]'

  if (!shouldRender) return <div className={`absolute inset-0 ${skeletonColor}`} />

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center ${skeletonColor} z-10 transition-colors duration-500`}>
          {/* Spinner que cambia de color según el tema */}
          <div className="w-8 h-8 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Tip Pro: Si tu escena de Spline tiene un fondo transparente en el editor de Spline, 
        se mezclará perfectamente con el fondo de tu web.
      */}
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