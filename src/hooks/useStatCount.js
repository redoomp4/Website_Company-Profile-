import { useEffect } from 'react'

export default function useStatCount() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const element = entry.target; const target = Number(element.dataset.target); const suffix = element.dataset.suffix || ''; const start = performance.now()
      const tick = now => { const progress = Math.min((now - start) / 1200, 1); element.textContent = Math.floor(progress * target).toLocaleString('id-ID') + suffix; if (progress < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick); observer.unobserve(element)
    }), { threshold: 0.7 })
    document.querySelectorAll('.stat-number').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
