import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 md:pt-40">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs md:text-sm text-gray-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Building Technology That Empowers People
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900"
            >
              Transforming Ideas Into Impactful Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 text-gray-700 md:text-lg max-w-xl"
            >
              Independent software engineer crafting accessible, human-centered technology. I build scalable AI, data and cloud-native systems that deliver real-world value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-700 transition-colors">
                Let's Connect
              </a>
              <a href="#work" className="inline-flex justify-center items-center rounded-lg bg-white/70 backdrop-blur text-gray-900 px-5 py-3 font-semibold shadow border border-white/40 hover:bg-white/90 transition-colors">
                See Work
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
            <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/40 shadow-2xl">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-indigo-200/50 via-violet-200/40 to-amber-100/40" />
    </section>
  )
}
