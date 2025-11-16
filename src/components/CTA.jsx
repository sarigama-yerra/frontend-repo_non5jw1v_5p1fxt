import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-amber-500 text-white p-10 md:p-14 shadow-2xl overflow-hidden">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Want to Work Together?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-white/90 max-w-2xl"
          >
            I\'m always excited to explore new challenges and collaborate on projects that make a meaningful difference. Let\'s chat about what we could build together.
          </motion.p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex justify-center items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:bg-white/90 transition-colors">
              Let\'s Connect
            </a>
            <a href="#" className="inline-flex justify-center items-center rounded-lg border border-white/70 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
