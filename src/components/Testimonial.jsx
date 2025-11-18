import { motion } from 'framer-motion'

export default function Testimonial() {
  const img = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2069&auto=format&fit=crop'
  return (
    <section className="py-20 md:py-28 bg-rose-50/50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <motion.img
            src={img}
            alt="Menschlicher Moment"
            className="w-full h-[420px] object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-900 font-medium">
            „Manchmal reicht ein Gespräch, um den Alltag leichter zu machen.“
          </blockquote>
          <p className="mt-3 text-gray-600">– Klientin, 82</p>
          <p className="mt-6 text-lg text-gray-700">
            SoDiWi bedeutet Nähe, Vertrauen und echtes Miteinander.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
