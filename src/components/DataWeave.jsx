import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// A canvas-driven particle field that reacts to scroll, creating a "data weaving into story" visual
export default function DataWeave() {
  const ref = useRef(null)
  const canvasRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const intensity = useSpring(useTransform(scrollYProgress, [0, 1], [0.2, 1]), { stiffness: 120, damping: 20 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = 320 * window.devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
    }))

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const positions = particles.map(p => {
        p.x = (p.x + p.vx + 1) % 1
        p.y = (p.y + p.vy + 1) % 1
        return [p.x * w, p.y * h]
      })

      // connect nearby points; strength modulated by intensity
      const k = 90 * (1 + 1 * (intensity.get() || 0.2))
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const [x1, y1] = positions[i]
          const [x2, y2] = positions[j]
          const dx = x1 - x2
          const dy = y1 - y2
          const d = Math.hypot(dx, dy)
          if (d < k) {
            const a = 1 - d / k
            ctx.strokeStyle = `rgba(99,102,241,${0.25 * a})`
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(99,102,241,0.7)'
      positions.forEach(([x, y]) => {
        ctx.beginPath()
        ctx.arc(x, y, 2.5 * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [intensity])

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur overflow-hidden shadow-2xl">
          <div className="p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Data that weaves itself into a story</h3>
            <p className="text-gray-600 mt-3 max-w-2xl">We use motion, parallax and progressive disclosure to guide attention—turning noise into a meaningful arc where each moment builds on the last.</p>
          </div>
          <div className="relative">
            <canvas ref={canvasRef} className="w-full h-[320px] block" />
            <motion.div style={{ opacity: intensity }} className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_200px_at_30%_-10%,rgba(99,102,241,0.10),transparent),radial-gradient(800px_200px_at_80%_110%,rgba(245,158,11,0.10),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
