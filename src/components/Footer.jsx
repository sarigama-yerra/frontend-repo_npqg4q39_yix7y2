export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <p className="text-gray-900 font-semibold">SoDiWi – Soziale Dienste Wipptal</p>
          <p className="text-gray-600">Für ein schönes Altern.</p>
        </div>
        <div className="text-gray-600 flex flex-col md:items-center gap-1">
          <a href="#impressum" className="hover:text-rose-700 transition">Impressum</a>
          <a href="#datenschutz" className="hover:text-rose-700 transition">Datenschutz</a>
        </div>
        <div className="text-gray-600 md:text-right">
          <p>Kontakt: info@sodowi.at</p>
          <p>Wipptal, Tirol</p>
        </div>
      </div>
    </footer>
  )
}
