import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Scene from './Scene'

// Horizontal faculty carousel: scroll-snap, mouse drag, arrow buttons, gentle auto-advance (pauses on hover/touch).
export default function FacultyCarousel({ faculty, autoMs = 4500 }) {
  const rail = useRef(null)
  const paused = useRef(false)
  const drag = useRef(null)
  const step = () => (rail.current?.querySelector('article')?.offsetWidth || 320) + 26

  useEffect(() => {
    const t = setInterval(() => {
      const r = rail.current
      if (!r || paused.current || document.hidden) return
      const end = r.scrollLeft + r.clientWidth >= r.scrollWidth - 10
      r.scrollTo({ left: end ? 0 : r.scrollLeft + step(), behavior: 'smooth' })
    }, autoMs)
    return () => clearInterval(t)
  }, [autoMs])

  const down = (e) => { if (e.pointerType !== 'mouse') return; drag.current = { x: e.clientX, l: rail.current.scrollLeft }; rail.current.style.scrollSnapType = 'none'; rail.current.style.cursor = 'grabbing' }
  const move = (e) => { if (drag.current) rail.current.scrollLeft = drag.current.l - (e.clientX - drag.current.x) }
  const up = () => { if (!drag.current) return; drag.current = null; rail.current.style.scrollSnapType = ''; rail.current.style.cursor = '' }

  return (
    <div>
      <div className="wrap mb-2 flex justify-end">
        <div className="flex gap-2 text-ink">
          {[['←', -1], ['→', 1]].map(([s, d]) => (
            <button key={s} onClick={() => rail.current.scrollBy({ left: d * step(), behavior: 'smooth' })} aria-label={d < 0 ? 'Previous' : 'Next'}
              className="grid h-[54px] w-[54px] place-items-center border-[1.5px] border-current text-xl transition-all duration-300 hover:scale-105 hover:border-brand hover:bg-brand hover:text-white">{s}</button>
          ))}
        </div>
      </div>
      <div ref={rail} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}
        onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)} onTouchStart={() => (paused.current = true)}
        className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-[4%] pb-6 pt-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {faculty.map((f, i) => (
          <article key={f.id} className={`group relative w-[min(340px,78vw)] flex-none snap-start select-none ${i % 2 ? 'md:mt-12' : ''}`}>
            <span className="pointer-events-none absolute -left-2 -top-4 z-10 font-serif text-[5.5rem] leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(155,28,46,.5)]">0{i + 1}</span>
            {/* Diagonal-cut portrait that flattens on hover */}
            <div className="relative aspect-[3/4] overflow-hidden transition-[clip-path] duration-700 [clip-path:polygon(0_0,100%_0,100%_90%,86%_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
              <Scene name={f.scene || 'avatar1'} photo={f.photoURL} className="absolute inset-0 transition-transform duration-[1100ms] group-hover:scale-[1.07]" />
            </div>
            <div className="pt-5">
              <h3 className="text-2xl">{f.n}</h3>
              <div className="my-1.5 text-sm font-semibold text-brand">{f.r}</div>
              <div className="flex flex-wrap gap-x-2 text-sm text-[#5d6b7a]"><span>{f.q}</span><span>· {f.x}</span></div>
              <Link to={`/departments/cse/faculty/${f.id}`} className="lu mt-4 text-sm">View Profile <span>→</span></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
