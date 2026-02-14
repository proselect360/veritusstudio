import Image from 'next/image'
import { urlFor } from './lib/image'

interface Props {
  asset: any; // Sanity image object (asset -> metadata.dimensions)
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({ asset, alt = 'Imagen de Veritus Studio', className = '', priority = false }: Props) {
  // Extraemos dimensiones si están disponibles para reservar el espacio y evitar CLS
  const meta = asset?.asset?.metadata?.dimensions
  const imgW = meta?.width ?? 16
  const imgH = meta?.height ?? 9
  const aspect = `${imgW} / ${imgH}`

  // Pedimos al builder un formato automático (WebP/AVIF cuando esté disponible)
  const src = urlFor(asset).width(Math.min(1600, Math.round((imgW / imgH) * 1200))).auto('format').quality(80).url()
  const tiny = urlFor(asset).width(32).blur(15).auto('format').url()

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
      aria-hidden={false}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        priority={priority}
        placeholder="blur"
        blurDataURL={tiny}
      />
    </div>
  )
}