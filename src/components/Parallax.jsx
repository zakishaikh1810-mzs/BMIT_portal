import { useEffect, useRef } from 'react'

// Child moves slightly against the scroll direction. Put a <Scene className="w-full h-full"/> inside.
export default function Parallax({ speed = 0.15, className = '', children }) {
  const host = useRef(null)
  const inner = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const h = host.current, i = inner.current
      if (!h || !i) return
      const r = h.getBoundingClientRect()
      if (r.bottom < -120 || r.top > innerHeight + 120) return
      i.style.transform = `translate3d(0,${-(r.top + r.height / 2 - innerHeight / 2) * speed}px,0)`
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    on()
    addEventListener('scroll', on, { passive: true })
    addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [speed])
  return (
    <div ref={host} className={`relative overflow-hidden ${className}`}>
      <div ref={inner} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">{children}</div>
    </div>
  )
}
