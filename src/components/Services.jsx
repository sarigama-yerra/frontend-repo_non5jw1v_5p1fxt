import { motion } from 'framer-motion'
import { Cloud, Cpu, Bot, Layers, Zap, Database } from 'lucide-react'

const services = [
  {
    title: 'Cloud-Native Solutions',
    points: ['Serverless Architecture', 'Azure Functions', 'Cloud Integration', 'Enterprise Security'],
    icon: Cloud,
  },
  {
    title: 'Custom Software Development',
    points: ['Application Development', 'Performance Optimization', 'Scalability Design', 'Data Integration'],
    icon: Layers,
  },
  {
    title: 'AI Agent Development',
    points: ['Microsoft Copilot Studio', 'Enterprise Deployment', 'Monitoring & Logging', 'Lifecycle Management'],
    icon: Bot,
  },
  {
    title: 'Data & Automation',
    points: ['Data Engineering', 'Process Automation', 'Governance & Quality', 'Dashboards & Reporting'],
    icon: Database,
  },
  {
    title: 'Data Grounding & RAG',
    points: ['Azure AI Search', 'RAG Implementation', 'Context Optimization', 'Data Integration'],
    icon: Cpu,
  },
  {
    title: 'Rapid Prototyping',
    points: ['MVP Development', 'Technology Evaluation', 'Stakeholder Demos', 'Innovation Testing'],
    icon: Zap,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">What I Love Crafting</h2>
        <p className="text-gray-600 max-w-2xl mb-10">Every project is a chance to explore how technology can create positive impact.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <svc.icon className="text-indigo-600" size={22} />
                <h3 className="font-semibold">{svc.title}</h3>
              </div>
              <ul className="space-y-1 text-sm text-gray-600">
                {svc.points.map(pt => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
