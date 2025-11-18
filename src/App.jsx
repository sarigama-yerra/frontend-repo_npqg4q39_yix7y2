import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Emotional from './components/Emotional'
import Region from './components/Region'
import Partners from './components/Partners'
import QuickHelp from './components/QuickHelp'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`html{scroll-behavior:smooth}`}</style>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Intro />
        <Services />
        <Emotional />
        <Region />
        <Partners />
        <QuickHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
