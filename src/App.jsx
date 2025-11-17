import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <CTA />
        <footer id="about" className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VICKHY — WordPress Designer & Developer
        </footer>
      </main>
    </div>
  )
}

export default App
