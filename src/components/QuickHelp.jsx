import { motion } from 'framer-motion'

export default function QuickHelp() {
  return (
    <section id="hilfe" className="py-20 md:py-28 bg-gradient-to-br from-rose-50 via-rose-100/60 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Du brauchst Hilfe oder jemanden zum Reden?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Wir sind da – ruhig, zugewandt und auf Augenhöhe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'WippCare kontaktieren' },
            { label: 'Beratung anfragen' },
            { label: 'Nummern & Öffnungszeiten' },
          ].map((b, i) => (
            <motion.a
              key={b.label}
              href="#kontakt"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl bg-white/70 backdrop-blur border border-rose-200 p-5 text-center shadow-sm hover:shadow-md hover:bg-white transition transform hover:scale-[1.01]"
            >
              <span className="text-rose-700 font-medium">{b.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
