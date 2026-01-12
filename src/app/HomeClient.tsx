'use client'

import { useEffect, ReactNode } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import TestimonialsSection from '@/components/TestimonialsSection'
import Warranty from '@/sections/Warranty'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import PageSpeedCTA from '@/components/PageSpeedCTA'

export default function HomeClient({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    // Marcamos el body como cargado para animaciones de entrada
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 100) // Reducido a 100ms para mejorar la percepción de velocidad
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      
      {/* Añadimos 'min-h-screen' al main para que el fondo ocupe todo el espacio 
        desde el inicio y no haya saltos visuales de color.
      */}
      <main className="relative overflow-x-hidden bg-slate-950 min-h-screen flex flex-col">
        {/* El min-h-screen asegura que el main siempre ocupe toda la pantalla desde el inicio */}
        <section id="inicio" className="scroll-mt-20 flex-1">
          <Hero />
        </section>
        
        <div className="flex flex-col gap-0">
          {/* SERVICIOS: Ajuste de scroll-mt para que el Header no tape el título */}
          <section id="servicios" className="scroll-mt-24">
            <Services />
          </section>
          
          <section id="testimonios" className="scroll-mt-24">
            <TestimonialsSection />
          </section>
          
          <PageSpeedCTA />
          
          <section id="garantia" className="scroll-mt-24">
            <Warranty />
          </section>

          {/* SECCIÓN DINÁMICA: Aseguramos que el contenido de Sanity no rompa el flujo */}
          <div id="dinamico" className="py-0 bg-slate-950 transition-colors duration-500 min-h-[200px]">
            {children}
          </div>

          {/* CONTACTO: ID unificado con el Header y margen de scroll */}
          <section id="contacto" className="scroll-mt-24">
            <Contact />
          </section>
          
        </div>
      </main>

      <Footer />
    </>
  )
}