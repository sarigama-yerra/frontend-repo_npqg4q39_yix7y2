import { motion } from 'framer-motion'
import { RedOverlayBlob } from './Shapes'

export default function Emotional() {
  const img = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2069&auto=format&fit=crop'
  return (
    <section className="relative py-24 bg-rose-50/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <motion.img
            src={img}
            alt="Ein menschlicher Moment – gemeinsam lachen"
            className="w-full h-[440px] object-cover"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />
          <RedOverlayBlob className="opacity-80 mix-blend-multiply" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-3xl md:text-4xl leading-tight text-gray-900 font-semibold">
            „Kleine Momente. Große Wirkung.“
          </blockquote>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Nähe entsteht in den kleinen Dingen: ein Lächeln, eine Hand, ein gutes Gespräch. Dafür sind wir da.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
