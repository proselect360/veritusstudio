/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Optimización de Imágenes
  images: {
    formats: ['image/avif', 'image/webp'], 
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
        hostname: 'veritusstudio.vercel.app',
      },
    ],
  },

  // 2. Compilador y JS Moderno
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Pilar Rendimiento: Soporte nativo para styled-components en el compilador SWC
    styledComponents: true, 
  },

  // 3. Mejoras de Red y Seguridad
  poweredByHeader: false, 
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;