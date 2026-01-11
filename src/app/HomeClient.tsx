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


export default function HomeClient({ children }: { children: ReactNode }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main className="relative">
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="process"><Process /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="PageSpeedCTA"><PageSpeedCTA /></section>
        <section id="warranty"><Warranty /></section>

        
         {/* Aquí caerán el Portfolio Y el Blog que vienen de page.tsx */}
        <div id="content-wrapper">
          {children}
        </div>

        <section id="contact"><Contact /></section>
        <section id="faq"><FAQSection /></section>
      </main>
      <Footer />
    </>
  )
}