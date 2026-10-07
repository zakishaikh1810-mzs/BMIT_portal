import { useEffect, useRef, useState } from 'react'

// Returns [ref, seen]. `seen` flips to true (once) when the element scrolls into view.
export default function useInView(options = { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line
  }, [])
  return [ref, seen]
}
