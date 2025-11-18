import { motion } from 'framer-motion'

// A small library of organic, municipality-inspired shapes
// These are handcrafted blob-like paths evoking Wipptal contours.
const SHAPES = [
  'M109.3 10.2c18.1 7.3 31.7 23.5 35.9 42.7 4.3 19.5-0.3 41.8-12 57.1-11.7 15.1-31 23.2-50.7 27.6-19.1 4.2-39.7 4.9-55.9-5.2C10 122.1-0.7 102.4 0 82.6c0.7-19.8 13.1-39.6 29.2-53.2C45.1 16 64.8 8.9 82.7 6.9c9.7-1 18.5 0.6 26.6 3.3z',
  'M134.9 33.6c14.7 13.1 23.1 34.7 19.8 54.8-3.4 20.6-18.8 39.1-38.2 50.5-19 11.2-41.9 15.5-61.6 9.1C35.2 142 19.6 125.5 12.3 106 5 86.6 6 64 17.8 46.8 29.6 29.7 52 17.9 74.1 13.6c21.3-4.1 45.9-1.2 60.8 20z',
  'M143.2 73.1c3.6 22.3-4.9 48-22.9 63.1-18.3 15.3-46.2 19.9-69.9 13.6C26.4 143.7 6 126.2 1.6 103  -2.8 79.8 9 51 28.4 34.7 48 18.3 75 13.6 96 19.4c21.1 5.9 43.7 21.4 47.2 53.7z',
]

export function FloatingShapes({ count = 6, color = '#B22639', opacity = 0.08, className = '' }) {
  const items = Array.from({ length: count })
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {items.map((_, i) => {
        const path = SHAPES[i % SHAPES.length]
        const size = 120 + (i % 4) * 30
        const left = (i * 17) % 100
        const top = (i * 23) % 100
        const delay = i * 0.6
        return (
          <motion.svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 160 160"
            className="absolute"
            style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, rotate: 0, y: 10 }}
            animate={{ opacity, rotate: [0, 6, 0], y: [10, -6, 10] }}
            transition={{ duration: 16 + i, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d={path} fill={color} />
          </motion.svg>
        )
      })}
    </div>
  )
}

export function CurvedTop({ color = '#B22639', className = '' }) {
  // Organic curved top border for section transitions
  return (
    <svg className={`w-full h-16 ${className}`} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden>
      <path d="M0,96 C240,160 480,32 720,64 C960,96 1200,144 1440,80 L1440,0 L0,0 Z" fill={color} fillOpacity="0.08" />
    </svg>
  )
}

export function RedOverlayBlob({ className = '' }) {
  // Soft SoDiWi red overlay blob for the emotional image
  return (
    <svg className={`absolute -bottom-8 -left-8 w-64 h-64 ${className}`} viewBox="0 0 200 200" aria-hidden>
      <path fill="#B22639" fillOpacity="0.85" d="M38.4,-54.5C50.1,-44.9,61.1,-37.1,66.8,-26C72.5,-14.9,72.9,-0.6,67.2,11.1C61.5,22.8,49.6,31.8,38.6,43.2C27.6,54.6,17.4,68.5,3.4,72.5C-10.6,76.5,-21.2,70.5,-33.2,63.7C-45.1,57,-58.4,49.6,-66.8,37.6C-75.2,25.6,-78.7,9,-74.3,-5.4C-69.9,-19.8,-57.7,-31.8,-45.6,-41.4C-33.6,-51,-21.8,-58.1,-9.2,-62.3C3.4,-66.5,16.8,-67.8,29,-63.8C41.3,-59.7,52.4,-50.2,38.4,-54.5Z" transform="translate(100 100)" />
    </svg>
  )
}
