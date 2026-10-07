import { Link } from 'react-router-dom'
import { SITE } from '../config'
import { FACULTY } from '../lib/data'
import { useCollection } from '../hooks/useCollection'
import Scene from '../components/Scene'
import Mask from '../components/Mask'
import Reveal from '../components/Reveal'
import Clip from '../components/Clip'
import Parallax from '../components/Parallax'
import Counter from '../components/Counter'
import Ticker from '../components/Ticker'
import DeptPanels from '../components/DeptPanels'
import FacultyCarousel from '../components/FacultyCarousel'
import CampusScroll from '../components/CampusScroll'
import Sample from '../components/Sample'
import Logo from '../components/Logo'
import { PlacementsBlock, EventsBlock, ResearchFlow, NoticesGrid, Cta } from '../components/blocks'

export default function Home() {
  const { data: faculty } = useCollection('faculty', FACULTY)
  const years = new Date().getFullYear() - SITE.est
  const stats = [[1000, '+', 'Students', true], [80, '+', 'Faculty', true], [7, '', 'Departments'], [100, '+', 'Students placed'], [years, '', 'Years of excellence']]

  return (
    <>
      {/* 1. HERO — full-screen, dark overlay, optional video */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          {SITE.heroVideo
            ? <video className="h-full w-full object-cover" autoPlay muted loop playsInline src={SITE.heroVideo} />
            : <Parallax speed={0.25} className="h-full"><Scene name="campus" className="h-full w-full animate-kb" /></Parallax>}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/90" />
        <div className="wrap relative z-10 pb-24 pt-[calc(74px+4rem)]">
          <div className="mb-8 inline-flex items-center gap-3 border border-white/30 px-4 py-2 text-xs uppercase tracking-[.16em] backdrop-blur-sm"><Logo size={26} /> Established {SITE.est} · Belati, Solapur</div>
          <Mask as="h1" lines={['Brahmdevdada Mane', <>Institute of <em className="not-italic text-brand-light">Technology</em></>]} className="text-[clamp(2.8rem,8.6vw,7.6rem)] font-bold leading-none" />
          <Reveal as="p" delay={0.6} className="my-7 max-w-[34ch] font-serif text-[clamp(1.1rem,2vw,1.6rem)] italic text-[#dbe4ec]">Quality technical education for a competitive world.</Reveal>
          <Reveal delay={0.75} className="flex flex-wrap gap-4">
            <Link to="/about" className="btn btn-p">Explore BMIT <span className="arr">→</span></Link>
            <Link to="/admissions" className="btn btn-g">Admissions</Link>
          </Reveal>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-10 right-[4%] z-20 hidden flex-col items-center gap-3 text-[.68rem] uppercase tracking-[.2em] text-[#cdd8e2] [writing-mode:vertical-rl] md:flex">
          <span>Scroll</span><i className="relative h-[60px] w-px overflow-hidden bg-white/30"><b className="absolute -top-full left-0 h-full w-full animate-cue bg-white" /></i>
        </div>
      </section>

      {/* 2. ANNOUNCEMENT STRIP */}
      <Ticker />

      {/* 3. AT A GLANCE */}
      <section className="on-dark pad bg-ink text-[#e9edf1]">
        <div className="wrap">
          <div className="eyebrow">BMIT at a glance</div>
          <Mask lines={['A campus built on', 'two decades of practice.']} className="h2 mb-12" />
          <div className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-5">
            {stats.map(([n, suf, label, sample], i) => (
              <Reveal key={label} delay={i * 0.08} className="border-white/15 py-8 pr-4 lg:border-r lg:last:border-0">
                <div className="font-serif text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-none"><Counter to={n} /><sup className="relative top-[.25em] ml-0.5 align-top text-[.42em] text-[#e58b97]">{suf}</sup></div>
                <p className="mt-3 text-sm text-[#9fb0c1]">{label}{sample && <Sample />}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT — editorial layout with clip-path image reveals */}
      <section className="pad">
        <div className="wrap grid items-center gap-[clamp(2rem,6vw,6rem)] lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/5]">
            <Clip className="absolute inset-0 bottom-[14%] right-[18%]"><Parallax speed={0.1} className="h-full w-full"><Scene name="campus" className="h-full w-full" /></Parallax></Clip>
            <Clip dir="u" delay={0.3} className="absolute bottom-0 right-0 z-10 hidden aspect-square w-[48%] border-8 border-white sm:block"><Parallax speed={0.18} className="h-full w-full"><Scene name="library" className="h-full w-full" /></Parallax></Clip>
          </div>
          <div>
            <div className="eyebrow">About BMIT</div>
            <Mask lines={['Developing world-class', 'technical manpower.']} className="h2" />
            <Reveal as="p" className="mt-5 text-[#5d6b7a]">Brahmdevdada Mane Institute of Technology was established in {SITE.est} under Kai Amdar Brahmdevdada Mane Shikshan va Samajik Pratisthan. It is approved by AICTE and recognised by the Government of Maharashtra, and sits on the Solapur–Mangalwedha–Kolhapur state highway at Belati.</Reveal>
            <Reveal as="p" className="mt-4 text-[#5d6b7a]">The institute's mission is to build capable engineers and managers through quality education that meets the demands of a competitive global market.</Reveal>
            <div className="my-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[['AICTE Approved', 'Recognised by Govt. of Maharashtra'], ['PAHSU Solapur', 'Affiliated university'], ['B.E. · M.E. · MBA', 'Undergraduate & postgraduate'], ['Hostel Facility', 'On-campus accommodation']].map(([b, s], i) => (
                <Reveal key={b} delay={i * 0.08} className="border-t-2 border-line pt-3 transition-colors hover:border-brand"><b className="block font-serif text-lg">{b}</b><span className="text-sm text-[#5d6b7a]">{s}</span></Reveal>
              ))}
            </div>
            <Link to="/about" className="lu">Read our story <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* 5. DEPARTMENTS */}
      <section className="pad bg-soft">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <div><div className="eyebrow">Departments</div><Mask lines={['Seven departments,', 'one institute.']} className="h2" /></div>
            <p className="text-lg text-[#5d6b7a]">Hover or tap a department to explore it.</p>
          </div>
          <DeptPanels />
        </div>
      </section>

      {/* 6. CSE FEATURE → /departments/cse */}
      <section className="on-dark pad bg-ink text-[#e9edf1]">
        <div className="wrap grid items-center gap-[clamp(2rem,6vw,6rem)] lg:grid-cols-2">
          <div>
            <div className="eyebrow">Featured department</div>
            <Mask lines={['Computer Science', '& Engineering']} className="h2" />
            <Reveal as="p" className="mt-5 text-lg text-[#9fb0c1]">Established in {SITE.est}, the department organises seminars, workshops and guest lectures regularly, and runs a student association — the Computer Council.</Reveal>
            <div className="my-7 flex flex-wrap gap-2.5">{['HOD & Faculty', 'Programs', 'Labs', 'Results', 'Projects', 'Syllabus', 'Timetable'].map((c) => <span key={c} className="border border-white/25 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-ink">{c}</span>)}</div>
            <Link to="/departments/cse" className="btn btn-p">Visit the CSE department <span className="arr">→</span></Link>
          </div>
          <Clip className="aspect-[5/4]"><Parallax speed={0.12} className="h-full w-full"><Scene name="code" className="h-full w-full" /></Parallax></Clip>
        </div>
      </section>

      {/* 7. FACULTY */}
      <section className="pad overflow-hidden">
        <div className="wrap"><div className="eyebrow">Faculty</div><Mask lines={['The people behind', 'the classroom.']} className="h2" /></div>
        <FacultyCarousel faculty={faculty} />
      </section>

      {/* 8. PLACEMENTS */}
      <PlacementsBlock />

      {/* 9. STUDENT SUCCESS — sticky heading column */}
      <section className="pad">
        <div className="wrap grid items-start gap-[clamp(2rem,6vw,6rem)] lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow">Student success</div>
            <Mask lines={['Where our', 'students go next.']} className="h2" />
            <p className="mt-5 text-[#5d6b7a]">Placement offers, project wins and competition results from across departments.<Sample /></p>
            <Link to="/achievements" className="lu mt-5">All achievements <span>→</span></Link>
          </div>
          <div className="space-y-6">
            {[['Placement', 'Student Name', 'Software Engineer · B.E. CSE', 'avatar2'], ['Project', 'Team Name', 'Final-year project recognised at an inter-college event', 'people'], ['Competition', 'Student Name', 'University-level winner · Sports & technical', 'avatar4']].map(([k, t, d, s], i) => (
              <Clip key={t + k} dir={i % 2 ? 'u' : 'l'} className="group relative aspect-[16/11] overflow-hidden text-white">
                <Scene name={s} className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-ink/90" />
                <div className="absolute inset-x-7 bottom-6 z-10"><small className="text-[.7rem] uppercase tracking-[.16em] text-brand-light">{k}</small><h3 className="my-1 text-[1.7rem]">{t}</h3><p className="text-sm text-[#cfd9e3]">{d}</p></div>
              </Clip>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CAMPUS — pinned horizontal scroll */}
      <CampusScroll />

      {/* 11–13 */}
      <EventsBlock />
      <ResearchFlow />
      <section className="pad">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <div><div className="eyebrow">News &amp; Notices</div><Mask lines={['Latest from', 'the institute.']} className="h2" /></div>
            <Link to="/notices" className="btn btn-o">All notices <span className="arr">→</span></Link>
          </div>
          <NoticesGrid limit={4} />
        </div>
      </section>

      {/* 14. CTA */}
      <Cta />
    </>
  )
}
