import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Partners from './components/Partners'
import QuickHelp from './components/QuickHelp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Smooth scroll behavior */}
      <style>{`html{scroll-behavior:smooth}`}</style>
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-4 my-4 rounded-full bg-white/70 backdrop-blur border border-rose-200 shadow-sm">
          <div className="container mx-auto px-6 h-14 flex items-center justify-between">
            <a href="#home" className="font-semibold text-gray-900">SoDiWi</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
              <a href="#sodowi" className="hover:text-rose-700">Was ist SoDiWi?</a>
              <a href="#leistungen" className="hover:text-rose-700">Leistungen</a>
              <a href="#hilfe" className="hover:text-rose-700">Hilfe</a>
            </nav>
            <a href="#hilfe" className="hidden sm:inline-flex rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-400 transition">Beratung anfragen</a>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <Hero />
        <Intro />
        <Services />
        <Testimonial />
        <Partners />
        <QuickHelp />
      </main>

      <Footer />
    </div>
  )
}

export default App
