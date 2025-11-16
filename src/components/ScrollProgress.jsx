import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const p = docHeight ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div
        className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 transition-[width] duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
