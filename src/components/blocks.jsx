// Reusable page sections shared by Home and the inner pages.
import { Link } from 'react-router-dom'
import { EVENTS, NOTICES, RECRUITERS, SITE_DOCS } from '../lib/data'
import { useCollection, useDocument } from '../hooks/useCollection'
import useInView from '../hooks/useInView'
import Counter from './Counter'
import Mask from './Mask'
import Reveal from './Reveal'
import Marquee from './Marquee'

export function PlacementsBlock({ showLink = true }) {
  const { data: recruiters } = useCollection('recruiters', RECRUITERS)
  const p = useDocument('site/placements', SITE_DOCS.placements)
  const big = [[p.companies, '+', 'Companies'], [p.placements, '+', 'Placements'], [p.highestCTC, 'LPA', 'Highest CTC']]
  return (
    <section className="on-dark pad bg-ink text-[#e9edf1]">
      <div className="wrap">
        <div className="eyebrow">Placements</div>
        <Mask lines={['Careers that start', 'on campus.']} className="h2" />
        <div className="mt-12 grid gap-8 border-t border-white/15 md:grid-cols-3">
          {big.map(([n, suf, label], i) => (
            <Reveal key={label} delay={i * 0.1} className="pt-10">
              <div className="font-serif text-[clamp(4rem,10vw,9rem)] font-semibold leading-[.95] tracking-tighter">
                <Counter to={+n} /><sup className="relative top-[.45em] ml-0.5 align-top text-[.35em] text-[#e58b97]">{suf}</sup>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[.16em] text-[#9fb0c1]">{label}</p>
            </Reveal>
          ))}
        </div>
        <div className="mb-6 mt-16 text-center text-xs uppercase tracking-[.18em] text-[#8da0b3]">Recruiters</div>
        <Marquee items={recruiters} />
        <p className="mt-5 text-center text-xs text-[#7d90a3]">Wordmarks shown for identification only. {showLink && <Link to="/placements" className="lu">Placement details →</Link>}</p>
      </div>
    </section>
  )
}

export function EventsBlock() {
  const { data: events } = useCollection('events', EVENTS)
  return (
    <section className="pad">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div><div className="eyebrow">Events</div><Mask lines={['Beyond the', 'classroom.']} className="h2" /></div>
          <p className="max-w-[60ch] text-lg text-[#5d6b7a]">Departments regularly organise seminars, workshops and guest lectures.</p>
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.07}>
              <Link to="/notices" className="group relative flex min-h-[320px] flex-col overflow-hidden bg-white p-7 transition-colors duration-500 hover:text-white">
                <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-[600ms] group-hover:translate-y-0" />
                <div className="relative font-serif text-[3.4rem] leading-none text-[#dde2e8] transition-colors group-hover:text-brand">0{i + 1}</div>
                <h3 className="relative my-4 text-2xl">{e.title}</h3>
                <p className="relative text-sm text-[#5d6b7a] transition-colors group-hover:text-[#9fb0c1]">{e.desc}</p>
                <span className="relative mt-auto pt-5 text-sm font-semibold text-brand transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-brand-light">See updates →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const STAGES = [
  ['Projects', 'Mini and major projects in every year of study.'],
  ['Publications', 'Papers and presentations by students and faculty.'],
  ['Labs', 'Lab-based experimentation and prototyping.'],
  ['Collaborations', 'Industry and academic partnerships.'],
]
export function ResearchFlow() {
  const [ref, seen] = useInView({ threshold: 0.3 })
  return (
    <section className="pad bg-soft">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div><div className="eyebrow">Research &amp; Innovation</div><Mask lines={['From idea to', 'impact.']} className="h2" /></div>
          <Link to="/research" className="btn btn-o">Explore research <span className="arr">→</span></Link>
        </div>
        <div ref={ref} className="relative grid gap-0 md:grid-cols-4 md:gap-6">
          {/* the connecting line draws itself when the section enters view */}
          <svg className="absolute left-0 top-[26px] hidden h-1 w-full overflow-visible md:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
            <line x1="2" y1="1" x2="98" y2="1" stroke="#9b1c2e" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeDasharray="1000" strokeDashoffset={seen ? 0 : 1000} style={{ transition: 'stroke-dashoffset 2s cubic-bezier(.22,.8,.24,1) .3s' }} />
          </svg>
          {STAGES.map(([t, d]) => (
            <div key={t} className="group relative pb-8 pl-12 md:pb-0 md:pl-0 md:pt-16">
              <span className="absolute left-0 top-1.5 box-content h-[26px] w-[26px] rounded-full border-[5px] border-soft bg-brand transition-transform duration-[400ms] group-hover:scale-125 md:top-3.5" />
              <h3 className="mb-2 text-2xl">{t}</h3>
              <p className="text-[.92rem] text-[#5d6b7a]">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NoticesGrid({ limit }) {
  const { data } = useCollection('notices', NOTICES)
  const list = limit ? data.slice(0, limit) : data
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((n, i) => (
        <Reveal key={n.id} delay={i * 0.07}>
          <a href={n.url} target="_blank" rel="noopener noreferrer" className="card flex min-h-[240px] flex-col !p-7">
            <span className="text-[.68rem] font-semibold uppercase tracking-[.16em] text-brand">{n.kind}</span>
            <h3 className="my-3 text-xl">{n.title}</h3>
            <p className="text-sm text-[#5d6b7a]">{n.desc}</p>
            <span className="mt-auto flex justify-between pt-5 text-sm font-semibold">Open document <span>↗</span></span>
          </a>
        </Reveal>
      ))}
    </div>
  )
}

export function Cta() {
  return (
    <section className="pad relative overflow-hidden bg-brand text-center text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(10rem,32vw,28rem)] font-bold leading-none text-white/[.06]">BMIT</div>
      <div className="wrap relative">
        <Mask lines={['Begin Your Journey', 'at BMIT']} className="mx-auto mb-6 max-w-[15ch] text-[clamp(2.2rem,6vw,5rem)]" />
        <Reveal as="p" className="mx-auto mb-10 max-w-[50ch] text-[#f6d6da]">Join an institute where engineering and management education is built around practice.</Reveal>
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="btn btn-w">Apply for Admission <span className="arr">→</span></Link>
          <Link to="/contact" className="btn btn-g">Contact Us</Link>
        </Reveal>
      </div>
    </section>
  )
}
