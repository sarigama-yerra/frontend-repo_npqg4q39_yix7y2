import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Info } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.75])

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

      {/* Floating ambience */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-36 w-36 rounded-full blur-3xl opacity-20"
            style={{
              background:
                i % 2 === 0
                  ? 'radial-gradient(circle at 30% 30%, #fca5a5, transparent 60%)'
                  : 'radial-gradient(circle at 70% 70%, #fecaca, transparent 60%)',
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

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
            <h1 className="text-4xl md:text-6xl leading-tight font-semibold text-white drop-shadow-lg">
              „Für dich da – wenn’s zählt.“
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
              SoDiWi ist deine verlässliche Unterstützung im Wipptal – nah, menschlich, verständlich.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#hilfe"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-rose-500 text-white font-medium shadow-lg shadow-rose-500/20 hover:bg-rose-400 transition transform hover:scale-[1.02]"
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
