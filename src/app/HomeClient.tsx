'use client'

import { useEffect, ReactNode } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import TestimonialsSection from '@/components/TestimonialsSection'
import Warranty from '@/sections/Warranty'
import Contact from '@/sections/Contact'
import FAQSection from '@/sections/FAQSection'
import Footer from '@/sections/Footer'
import PageSpeedCTA from '@/components/PageSpeedCTA'

/**
 * HomeClient - Orquestador de la Experiencia de Usuario
 * Este componente envuelve el contenido estático del servidor (Blog/Portfolio)
 * con la lógica de navegación e interactividad de Veritus Studio.
 */
export default function HomeClient({ children }: { children: ReactNode }) {
  
  // Pilar UX: Manejo de estado de carga para animaciones de entrada premium
  useEffect(() => {
    // Marcamos el cuerpo como cargado para disparar animaciones de CSS (AOS, Framer, etc)
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 1000) // Reducido a 1s para mejorar la percepción de velocidad (Pilar Rendimiento)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      
      <main className="relative overflow-x-hidden">
        {/* Secciones Core - Renderizado inmediato en el cliente */}
        <section id="inicio" className="scroll-mt-20"><Hero /></section>
        
        <div className="space-y-0 lg:space-y-20"> {/* Espaciado rítmico entre secciones */}
          <section id="servicios" className="scroll-mt-20"><Services /></section>
          
          <section id="proceso" className="scroll-mt-20"><Process /></section>
          
          <section id="testimonios" className="scroll-mt-20"><TestimonialsSection /></section>
          
          {/* Pilar Conversión: Interrupción visual estratégica */}
          <PageSpeedCTA />
          
          <section id="garantia" className="scroll-mt-20"><Warranty /></section>

          {/**
           * Pilar Live/SEO: Aquí se inyectan los componentes de Sanity 
           * (Portfolio y Blog) que vienen desde el page.tsx del servidor.
           */}
          <div id="dinamico" className="bg-white dark:bg-slate-950 transition-colors duration-500">
            {children}
          </div>

          <section id="contacto" className="scroll-mt-20"><Contact /></section>
          
          <section id="preguntas" className="scroll-mt-20"><FAQSection /></section>
        </div>
      </main>

      <Footer />
    </>
  )
}