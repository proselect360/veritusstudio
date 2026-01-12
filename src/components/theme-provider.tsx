"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * ThemeProvider Optimizado para Veritus Studio
 * * Pilares cubiertos:
 * - Rendimiento: Evita el layout shift de color mediante 'enableSystem'.
 * - Accesibilidad: Respeta las preferencias 'prefers-color-scheme' del usuario.
 */
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"      // Permite usar 'dark:' en Tailwind
      defaultTheme="dark"    // Veritus es premium, el modo oscuro es su identidad
      enableSystem={true}    // Pilar Accesibilidad: Respeta al usuario
      disableTransitionOnChange // Pilar Rendimiento: Evita saltos visuales en carga
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}