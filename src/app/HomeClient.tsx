'use client'

import { useEffect, ReactNode } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
// Eliminado: Process
import TestimonialsSection from '@/components/TestimonialsSection'
import Warranty from '@/sections/Warranty'
import Contact from '@/sections/Contact'
// Eliminado: FAQSection
import Footer from '@/sections/Footer'
import PageSpeedCTA from '@/components/PageSpeedCTA'

export default function HomeClient({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 1000) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      
      
      <main className="relative overflow-x-hidden bg-slate-950">
        <section id="inicio" className="scroll-mt-10"><Hero /></section>
        
        <div className="flex flex-col gap-0">
          {/* Mantenemos Servicios como resumen de alto impacto */}
          <section id="servicios" className="scroll-mt-10"><Services /></section>
          
          {/* Eliminamos <Process /> porque ahora vive en /metodologia */}
          
          <section id="testimonios" className="scroll-mt-10"><TestimonialsSection /></section>
          
          <PageSpeedCTA />
          
          <section id="garantia" className="scroll-mt-10"><Warranty /></section>

          {/* Seccion Dinamica (Blog/Portfolio de Sanity) */}
          <div id="dinamico" className="py-0 bg-slate-950 transition-colors duration-500">
            {children}
          </div>

          <section id="contact" className="scroll-mt-10"><Contact /></section>
          
          {/* Eliminamos <FAQSection /> porque ahora vive en /faq */}
        </div>
      </main>

      <Footer />
    </>
  )
}
