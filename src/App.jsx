import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Tech from './components/Tech'
import CTA from './components/CTA'
import ScrollProgress from './components/ScrollProgress'
import NarrativeFlow from './components/NarrativeFlow'
import ParallaxTimeline from './components/ParallaxTimeline'
import DataWeave from './components/DataWeave'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-amber-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <NarrativeFlow />
        <ParallaxTimeline />
        <DataWeave />
        <Work />
        <Services />
        <Tech />
        <CTA />
      </main>
      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-amber-400" />
              <div>
                <p className="font-semibold">Digital Boop.</p>
                <p className="text-sm text-gray-600">Independent software engineer crafting human-centered technology.</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">My Story</a>
              <a href="#contact" className="hover:text-indigo-600">Get in Touch</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
