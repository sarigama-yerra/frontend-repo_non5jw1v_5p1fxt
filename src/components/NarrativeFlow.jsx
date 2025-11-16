import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NarrativeFlow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const glow = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-5%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4])

  return (
    <section ref={ref} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <motion.div style={{ opacity }} className="text-sm uppercase tracking-wider text-indigo-600/80 mb-4">Story in Data</motion.div>
            <motion.h2 style={{ opacity }} className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Your data becomes a narrative
            </motion.h2>
            <motion.p style={{ opacity }} className="mt-4 text-gray-700 max-w-xl">
              As you scroll, key signals emerge, connect, and resolve. We choreograph information so people instantly grasp what matters, why it matters, and what to do next.
            </motion.p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{
                k: 'Signal → Insight', d: 'From raw to relevant: outliers, trends, and context.'
              }, {
                k: 'Insight → Action', d: 'Decisions shaped by clarity and confidence.'
              }].map((it) => (
                <div key={it.k} className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-5">
                  <p className="text-sm font-semibold text-gray-900">{it.k}</p>
                  <p className="text-sm text-gray-600 mt-1">{it.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px]">
            <motion.div
              style={{ y: y1, opacity }}
              className="absolute inset-x-6 top-4 rounded-3xl h-40 bg-gradient-to-r from-indigo-200 via-violet-200 to-amber-100 shadow-2xl border border-white/50"
            />
            <motion.div
              style={{ y: y2, opacity }}
              className="absolute inset-x-10 top-24 rounded-3xl h-40 bg-white/80 backdrop-blur shadow-xl border border-white/50"
            />
            <motion.div
              style={{ opacity }}
              className="absolute inset-x-16 top-40 rounded-3xl h-40 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-amber-400/10"
            />
            <motion.div
              style={{ opacity }}
              className="absolute -inset-4 rounded-[36px] pointer-events-none"
            >
              <motion.div
                style={{ opacity: glow }}
                className="absolute inset-0 rounded-[36px] bg-[radial-gradient(1200px_400px_at_60%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(600px_300px_at_20%_110%,rgba(245,158,11,0.18),transparent)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
