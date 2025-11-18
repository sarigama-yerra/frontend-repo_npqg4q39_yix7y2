import { motion } from 'framer-motion'

const partners = [
  'Gemeinde A',
  'Gemeinde B',
  'Partner C',
  'Tirol Pflege',
  'WippCare',
  'Netzwerk D',
]

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Gemeinsam für unser Wipptal.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="h-16 rounded-xl border bg-gradient-to-br from-rose-50 to-white text-gray-600 flex items-center justify-center text-sm font-medium"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
