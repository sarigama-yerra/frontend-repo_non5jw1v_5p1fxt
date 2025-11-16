import { motion } from 'framer-motion'
import { Braces, Code2, Cpu, Database, Globe, Workflow } from 'lucide-react'

const columns = [
  {
    title: 'AI & Data Science',
    items: ['Python', 'Pandas', 'NumPy', 'Azure OpenAI', 'Anthropic', 'Gemini', 'Azure AI Search', 'LangChain'],
    icon: Cpu,
  },
  {
    title: 'Web & Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Vue.js'],
    icon: Globe,
  },
  {
    title: 'Backend & DevOps',
    items: ['Node.js', 'FastAPI', 'Azure', 'Azure Functions', 'App Insights', 'KQL', 'Git/CI-CD'],
    icon: Database,
  },
]

export default function Tech() {
  return (
    <section id="stack" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="text-indigo-600" size={22} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technologies I Love Working With</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mb-10">My toolkit spans the full AI development stack, from research to production deployment.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <col.icon className="text-indigo-600" size={22} />
                <h3 className="font-semibold">{col.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span key={item} className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
