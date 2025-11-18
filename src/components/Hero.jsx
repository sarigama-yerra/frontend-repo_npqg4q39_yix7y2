import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Info } from 'lucide-react'
import { useRef } from 'react'
import { FloatingShapes } from './Shapes'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85])

  const bgUrl =
    'https://images.unsplash.com/photo-1511948374796-1f2d9d6b6f50?q=80&w=2060&auto=format&fit=crop'

  return (
    <section ref={ref} id="home" className="relative h-[100svh] w-full overflow-hidden">
      <motion.div
        style={{ y }}
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />
      </motion.div>

      {/* Floating municipality-inspired shapes */}
      <FloatingShapes count={9} className="" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-sm md:text-base text-white/80 tracking-widest uppercase mb-3">
              Soziale Dienste Wipptal
            </p>
            <h1 className="text-5xl md:text-7xl leading-tight font-semibold text-white drop-shadow-lg">
              Das Wipptal hilft.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
              Gemeinsam sorgen wir für Geborgenheit, Vertrauen und Lebensfreude.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-rose-600 text-white font-medium shadow-lg shadow-rose-600/30 hover:bg-rose-500 transition transform hover:scale-[1.02]"
              >
                Beratung anfragen
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#sodowi"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition"
              >
                <Info className="h-5 w-5" />
                Was ist SoDiWi?
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
