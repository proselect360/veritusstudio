import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#1e293b',
          color: '#3b82f6',
          fontSize: 18,
          fontWeight: 900,
          fontFamily: 'system-ui',
        }}
      >
        V
      </div>
    ),
    { ...size }
  )
}
