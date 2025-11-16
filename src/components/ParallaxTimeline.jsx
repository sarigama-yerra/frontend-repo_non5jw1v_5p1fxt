import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, TrendingUp, Target } from 'lucide-react'

export default function ParallaxTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const steps = [
    { icon: Sparkles, title: 'Signal', desc: 'We surface anomalies and patterns that matter.' },
    { icon: TrendingUp, title: 'Insight', desc: 'We thread evidence into a clear story arc.' },
    { icon: Target, title: 'Action', desc: 'We turn understanding into a confident decision.' },
  ]

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200/70" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-amber-400 origin-top"
            style={{ height: lineScale }}
          />

          <div className="space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 ? 'md:[&>div:first-child]::order-2' : ''}`}
              >
                <div className={`md:text-right ${i % 2 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm">
                    <s.icon size={16} className="text-indigo-600" />
                    {s.title}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mt-3">{s.title}</h3>
                  <p className="text-gray-600 mt-2 max-w-md md:ml-auto">{s.desc}</p>
                </div>
                <div className={`${i % 2 ? 'md:order-1' : ''}`}>
                  <div className="aspect-[16/9] rounded-2xl border border-white/50 bg-white/70 backdrop-blur shadow-sm" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white shadow ring-2 ring-indigo-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
