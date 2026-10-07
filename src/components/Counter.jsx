import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

// Counts from 0 to `to` when scrolled into view.
export default function Counter({ to, duration = 1800 }) {
  const [ref, seen] = useInView({ threshold: 0.6 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    let raf; const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return <span ref={ref}>{n}</span>
}
