'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import Portfolio from '@/sections/Portfolio'
import TestimonialsSection from '@/components/TestimonialsSection'
import Warranty from '@/sections/Warranty'
import Contact from '@/sections/Contact'
import FAQSection from '@/sections/FAQSection'
import Footer from '@/sections/Footer'
import PageSpeedCTA from '@/components/PageSpeedCTA' // <--- La importas así

export default function HomeClient() {
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
        <section id="portfolio"><Portfolio /></section>
        <section id="process"><Process /></section>
        <section id="testimonials"><TestimonialsSection /></section>

        <section id="PageSpeedCTA"><PageSpeedCTA /></section>
        <section id="warranty"><Warranty /></section>
        <section id="contact"><Contact /></section>
        <section id="faq"><FAQSection /></section>
      </main>
      <Footer />
    </>
  )
}
