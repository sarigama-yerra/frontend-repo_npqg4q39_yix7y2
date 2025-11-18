import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 my-4 rounded-full bg-white/70 backdrop-blur border border-rose-200 shadow-sm">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold text-gray-900">SoDiWi</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#sodowi" className="hover:text-rose-700">Was ist SoDiWi?</a>
            <a href="#leistungen" className="hover:text-rose-700">Unsere Hilfe</a>
            <a href="#region" className="hover:text-rose-700">Die Region</a>
            <a href="#kontakt" className="hover:text-rose-700">Kontakt</a>
          </nav>
          <a href="#kontakt" className="hidden sm:inline-flex rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-500 transition">Beratung anfragen</a>
          <button aria-label="Menü" onClick={() => setOpen(!open)} className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border bg-white/70">
            <span className="i">≡</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden mx-4 -mt-2 rounded-2xl bg-white/90 backdrop-blur border border-rose-200 shadow p-3 flex flex-col">
          <a href="#sodowi" className="py-2">Was ist SoDiWi?</a>
          <a href="#leistungen" className="py-2">Unsere Hilfe</a>
          <a href="#region" className="py-2">Die Region</a>
          <a href="#kontakt" className="py-2">Kontakt</a>
        </div>
      )}
    </header>
  )
}
