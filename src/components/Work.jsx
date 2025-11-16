import { motion } from 'framer-motion'
import { Award, HeartHandshake, Rocket } from 'lucide-react'

const items = [
  {
    title: 'Microsoft Case Study',
    desc: 'Featured in Microsoft news for large-scale AI deployment at Pets at Home',
    cta: 'Learn More',
  },
  {
    title: 'Tech for Good Impact',
    desc: 'Contributed to Scottish Tech Army\'s volunteer COVID dashboard used for 2+ years',
    cta: 'Learn More',
  },
  {
    title: 'Volunteer Work',
    desc: 'Active contributor to Tech for Good, supporting third-sector organisations',
    cta: 'Learn More',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="text-indigo-600" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proven Impact</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mb-10">
          Some projects and contributions I\'m proud to have been part of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-200 via-violet-200 to-amber-100 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <button className="text-indigo-600 font-medium group-hover:translate-x-0.5 transition-transform">{item.cta} →</button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard icon={Rocket} title="Rapid Prototyping" desc="Proof-of-concepts to evaluate AI in real scenarios." />
          <ValueCard icon={HeartHandshake} title="Human-Centered" desc="Ethical, accessible solutions that help people." />
          <ValueCard icon={Award} title="Enterprise-Ready" desc="Cloud-native, secure and scalable systems." />
        </div>
      </div>
    </section>
  )
}

function ValueCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="text-indigo-600" size={22} />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}
