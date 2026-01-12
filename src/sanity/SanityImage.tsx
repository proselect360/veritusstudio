import Image from 'next/image'
import { urlFor } from './lib/image'

interface Props {
  asset: any;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({ asset, alt, className, priority = false }: Props) {
  return (
    <Image
      src={urlFor(asset).width(1200).url()} // Limitamos el ancho máximo para ahorrar ancho de banda
      alt={alt || "Imagen de Veritus Studio"}
      width={1200}
      height={675}
      priority={priority} // Pilar Rendimiento: 'true' para imágenes de cabecera (Above the fold)
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      // Pilar UX: Carga un placeholder borroso mientras descarga la original
      placeholder="blur"
      blurDataURL={urlFor(asset).width(24).blur(10).url()} 
    />
  )
}