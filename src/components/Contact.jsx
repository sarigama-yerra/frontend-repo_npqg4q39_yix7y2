import { motion } from 'framer-motion'
import { FloatingShapes, CurvedTop } from './Shapes'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-b from-white to-rose-50/40">
      <CurvedTop />
      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-0 -z-10 opacity-70">
          <FloatingShapes count={6} />
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-rose-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Wir hören zu. Wir begleiten. Wir helfen.</h2>
            <p className="mt-3 text-gray-600">Melde dich – wir finden gemeinsam den nächsten Schritt.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'WippCare kontaktieren' },
              { label: 'Beratung anfragen' },
              { label: 'Standorte ansehen' },
            ].map((b, i) => (
              <motion.a
                key={b.label}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl bg-rose-600 text-white p-5 text-center shadow-lg shadow-rose-600/20 hover:shadow-xl hover:bg-rose-500 transition transform hover:scale-[1.01]"
              >
                <span className="font-medium">{b.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
