'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function GlobalFloatingShape() {
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  })

  // MOVIMIENTO: Ahora el recorrido es más corto para que se mantengan en el centro visual
  // [0, 1] representa el scroll total. 
  // Las movemos de 30% de la pantalla a un máximo de 70% para que no se pierdan al final.
  const yRight = useTransform(smoothProgress, [0, 1], ["30vh", "70vh"])
  const yLeft = useTransform(smoothProgress, [0, 1], ["40vh", "80vh"])
  
  const rotateRight = useTransform(smoothProgress, [0, 1], [0, 180])
  const rotateLeft = useTransform(smoothProgress, [0, 1], [0, -120])

  // OPACIDAD: 0 al inicio, máximo brillo a la mitad (0.5), desaparece antes del final (0.9)
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 0.95], [0, 0, 0.5, 0.3, 0])

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden">
      
      {/* SHAPE DERECHA - Ajustada hacia el centro con 'right-[15%]' */}
      <motion.div
        style={{ y: yRight, rotate: rotateRight, opacity }}
        className="absolute right-[10%] md:right-[15%] top-0 w-[40%] md:w-[25%] aspect-square"
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
        <Image
          src="/3d-abstract-shape.webp" 
          alt="Abstract Shape Right"
          width={500}
          height={500}
          className="relative z-10 object-contain drop-shadow-2xl"
          priority={false}
          loading="lazy"
        />
      </motion.div>

      {/* SHAPE IZQUIERDA - Ajustada hacia el centro con 'left-[15%]' */}
      <motion.div
        style={{ y: yLeft, rotate: rotateLeft, opacity }}
        className="absolute left-[10%] md:left-[15%] top-0 w-[35%] md:w-[22%] aspect-square"
      >
        <div className="absolute inset-0 bg-blue-500/15 blur-[100px] rounded-full" />
        <Image
          src="/3d-abstract-shape.webp" 
          alt="Abstract Shape Left"
          width={500}
          height={500}
          className="relative z-10 object-contain drop-shadow-2xl"
          priority={false}
          loading="lazy"
        />
      </motion.div>

    </div>
  )
}