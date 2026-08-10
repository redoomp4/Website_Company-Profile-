import { useEffect } from 'react'

export default function useNavbarScroll() {
  useEffect(() => {
    const onScroll = () => document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
