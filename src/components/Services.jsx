import { motion } from 'framer-motion'

const services = [
  {
    title: 'Pflege & Betreuung',
    desc: 'Kurzzeit- und Langzeitpflege, Tagesbetreuung, verlässliche Begleitung.',
  },
  {
    title: 'Mobile Dienste',
    desc: 'Hilfe zuhause, Hauskrankenpflege, Familienhilfe – dort, wo Menschen leben.',
  },
  {
    title: 'Betreutes Wohnen',
    desc: 'Sicher, selbstbestimmt und mit guter Nachbarschaft.',
  },
  {
    title: 'Beratung & Unterstützung',
    desc: 'WippCare – zentrale Anlaufstelle für alle Fragen.',
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Wobei wir helfen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Klar, nah und verlässlich – unsere Bereiche auf einen Blick.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#mehr"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group rounded-2xl p-6 bg-gradient-to-br from-rose-50 to-white border border-rose-100 hover:border-rose-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600 max-w-md">{s.desc}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center transform group-hover:scale-110 transition">
                  <span className="text-lg">›</span>
                </div>
              </div>
              <div className="mt-4 text-rose-700 font-medium">Mehr erfahren</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
