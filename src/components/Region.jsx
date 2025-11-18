import { motion } from 'framer-motion'
import { FloatingShapes, CurvedTop } from './Shapes'

export default function Region() {
  return (
    <section className="relative py-24 bg-white">
      <CurvedTop />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Die Region</h2>
          <p className="mt-3 text-lg text-gray-600">Ein Netzwerk aus Menschlichkeit. Für alle Gemeinden im Wipptal.</p>
        </div>

        <div className="relative mt-12">
          <div className="absolute inset-0 -z-10">
            <FloatingShapes count={7} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl rounded-3xl bg-white/80 backdrop-blur border border-rose-100 shadow-xl p-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {['Matrei', 'Navis', 'Vals', 'Steinach', 'Gries', 'Obernberg'].map((g) => (
                <div key={g} className="rounded-2xl border bg-gradient-to-br from-rose-50 to-white text-gray-700 h-24 flex items-center justify-center font-medium">
                  {g}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
