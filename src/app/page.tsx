'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import Warranty from '@/sections/Warranty'
import TestimonialsSection from '@/components/TestimonialsSection'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import FAQSection from '@/sections/FAQSection'


export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        
        {/* 1. Generamos confianza absoluta con la garantía */}
        <Warranty />
        
        {/* 2. Reforzamos con la prueba social de otros clientes */}
        <TestimonialsSection />
        
        {/* 3. Ahora que no tienen dudas, el llamado a la acción final */}
        <Contact />
        <FAQSection /> 
      </main>
      <Footer />
    </>
  )
}


  