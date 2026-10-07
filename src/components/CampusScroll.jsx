import { useEffect, useRef } from 'react'
import Scene from './Scene'

const ITEMS = [
  ['Labs', 'lab', 'Practical learning', 'Hands-on laboratories for every branch.'],
  ['Library', 'library', 'Knowledge hub', 'Books, journals and quiet study space.'],
  ['Classrooms', 'campus', 'Teaching spaces', 'Well-lit classrooms for focused learning.'],
  ['Auditorium', 'auditorium', 'Events & talks', 'Hosts seminars, guest lectures and cultural events.'],
  ['Sports', 'sports', 'Fitness & teams', 'Grounds and facilities for indoor and outdoor games.'],
  ['Hostel', 'hostel', 'Stay on campus', 'Accommodation for students.'],
]

// STICKY HORIZONTAL SCROLL: on desktop the section pins while vertical scroll moves the cards sideways.
// On mobile (<768px) it becomes a normal swipeable row.
export default function CampusScroll() {
  const outer = useRef(null), track = useRef(null), bar = useRef(null)
  useEffect(() => {
    const desktop = () => innerWidth >= 768
    const size = () => {
      const o = outer.current, t = track.current
      if (!desktop()) { o.style.height = ''; t.style.transform = ''; return }
      o.style.height = t.scrollWidth - innerWidth + innerHeight + 'px'
    }
    const update = () => {
      if (!desktop()) return
      const o = outer.current, t = track.current
      const dist = t.scrollWidth - innerWidth
      const p = Math.min(Math.max(-o.getBoundingClientRect().top / (o.offsetHeight - innerHeight), 0), 1)
      t.style.transform = `translate3d(${-dist * p}px,0,0)`
      bar.current.style.width = p * 100 + '%'
    }
    const resize = () => { size(); update() }
    resize()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', resize)
    return () => { removeEventListener('scroll', update); removeEventListener('resize', resize) }
  }, [])

  return (
    <section ref={outer} className="md:h-[300vh]">
      <div className="bg-ink py-16 text-white md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:gap-8 md:overflow-hidden md:py-0">
        <div className="wrap flex items-end justify-between gap-8">
          <div><div className="eyebrow !text-[#e58b97]">Campus</div><h2 className="text-[clamp(1.8rem,3.6vw,3rem)]">Life and learning, across the campus.</h2></div>
          <div className="hidden h-0.5 w-52 bg-white/20 md:block"><i ref={bar} className="block h-full w-0 bg-brand" /></div>
        </div>
        <div ref={track} className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[4vw] pb-4 md:mt-0 md:w-max md:snap-none md:overflow-visible md:will-change-transform">
          {ITEMS.map(([t, s, k, d]) => (
            <div key={t} className="group relative h-[60vh] w-[82vw] flex-none snap-start overflow-hidden md:h-[min(62vh,520px)] md:w-[min(62vw,780px)]">
              <Scene name={s} className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-ink/90" />
              <div className="absolute inset-x-8 bottom-7 z-10">
                <small className="text-[.7rem] uppercase tracking-[.16em] text-brand-light">{k}</small>
                <h3 className="my-1 text-[clamp(1.5rem,3vw,2.4rem)]">{t}</h3>
                <p className="max-w-[46ch] text-[.95rem] text-[#cfd9e3]">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
