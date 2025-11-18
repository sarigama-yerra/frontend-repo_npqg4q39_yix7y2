import { motion } from 'framer-motion'
import { Heart, HandHeart, Home, Phone } from 'lucide-react'

const items = [
  { icon: Heart, title: 'Pflege & Betreuung', desc: 'Mit Herz, Zeit und Respekt.' },
  { icon: HandHeart, title: 'Mobile Dienste', desc: 'Unterstützung zuhause – dort, wo Menschen leben.' },
  { icon: Home, title: 'Betreutes Wohnen', desc: 'Sicher und selbstbestimmt wohnen.' },
  { icon: Phone, title: 'Beratung & Unterstützung', desc: 'Zuhören, erklären, gemeinsam lösen.' },
]

export default function Intro() {
  return (
    <section id="sodowi" className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Was ist SoDiWi?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            „SoDiWi vereint alle sozialen Dienste im Wipptal unter einem Dach. Wir begleiten, unterstützen und beraten – im Alter, nach Krankheit oder einfach dann, wenn’s schwer wird.“
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-rose-100 hover:shadow-md transition"
            >
              <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1.5 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
