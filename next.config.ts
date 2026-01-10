/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Ya deberías tener este para Sanity
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', // <--- AGREGA ESTA LÍNEA
      },
    ],
  },
};

export default nextConfig;