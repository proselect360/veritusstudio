/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimización de Imágenes
  images: {
    formats: ['image/avif', 'image/webp'], // Soporte para formatos de última generación
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'veritusstudio.vercel.app', // Asegura el dominio propio para Next/Image
      },
    ],
  },

  // 2. Reducción de JS Heredado (Soluciona los 14 KiB desperdiciados)
  // Forzamos a Next.js a usar el compilador moderno SWC sin polyfills excesivos
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Limpia la consola en producción
  },

  // 3. Mejoras de Red y Seguridad
  poweredByHeader: false, // Seguridad por oscuridad
  reactStrictMode: true,

  // 4. Optimización de Compresión (Soluciona rendimiento de red)
  compress: true,
};

export default nextConfig;