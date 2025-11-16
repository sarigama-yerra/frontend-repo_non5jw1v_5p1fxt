import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative h-24">
      <motion.div
        style={{ scaleX }}
        className="absolute left-6 right-6 top-1/2 -translate-y-1/2 origin-left h-px bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400"
      />
    </div>
  )
}
