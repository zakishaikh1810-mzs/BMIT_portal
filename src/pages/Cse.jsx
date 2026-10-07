import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SITE } from '../config'
import { FACULTY, PROJECTS, ACHIEVEMENTS } from '../lib/data'
import { useCollection } from '../hooks/useCollection'
import PageHero from '../components/PageHero'
import Scene from '../components/Scene'
import Reveal from '../components/Reveal'
import Sample from '../components/Sample'
import { Heading, Section, DocGrid } from '../components/ui'

const SECTIONS = [['overview', 'Overview'], ['faculty', 'Faculty'], ['programs', 'Programs'], ['labs', 'Labs'], ['infra', 'Infrastructure'], ['results', 'Results'], ['achv', 'Achievements'], ['projects', 'Projects'], ['syllabus', 'Syllabus'], ['timetable', 'Timetable']]
const LABS = [['Programming Lab', 'lab'], ['Database & Systems Lab', 'lab2'], ['Networks Lab', 'network'], ['Project Lab', 'code'], ['Software Engineering Lab', 'lab'], ['Research & AI Lab', 'network']]
const INFRA = [['Classrooms', 'Teaching spaces for each year'], ['Seminar Hall', 'Talks and guest lectures'], ['Library', 'Books and journals'], ['Wi-Fi Campus', 'Connectivity for coursework'], ['Student Association', 'Computer Council'], ['Hostel', 'On-campus stay']]

// Department page for CSE: HOD, faculty, programs, labs, infrastructure, results, achievements, projects, syllabus, timetable.
export default function Cse() {
  const { section } = useParams()
  const { data: faculty } = useCollection('faculty', FACULTY)
  const { data: projects } = useCollection('projects', PROJECTS)
  const { data: achv } = useCollection('achievements', ACHIEVEMENTS)
  const [cur, setCur] = useState('overview')
  const hod = faculty[0]

  const goto = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 130, behavior: 'smooth' }) }

  // Jump to /departments/cse/<section> on load
  useEffect(() => { if (section) setTimeout(() => goto(section), 700) }, [section])

  // Scroll-spy for the sticky sub-nav
  useEffect(() => {
    const on = () => {
      let c = SECTIONS[0][0]
      SECTIONS.forEach(([id]) => { const e = document.getElementById(id); if (e && e.getBoundingClientRect().top < 180) c = id })
      setCur(c)
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <PageHero crumbs={[['/departments', 'Departments'], [null, 'CSE']]} title={['Computer Science', '& Engineering']}
        sub={`Established in ${SITE.est}. Seminars, workshops and guest lectures are organised regularly for students.`} scene="code" />

      <div className="sticky top-[74px] z-[90] border-b border-line bg-white">
        <div className="mx-auto flex w-[min(1240px,92%)] gap-7 overflow-x-auto [scrollbar-width:none]">
          {SECTIONS.map(([id, t]) => (
            <button key={id} onClick={() => goto(id)}
              className={`relative whitespace-nowrap py-4 text-xs font-semibold uppercase tracking-[.1em] transition-colors ${cur === id ? 'text-ink' : 'text-[#5d6b7a] hover:text-ink'}`}>
              {t}<span className={`absolute inset-x-0 -bottom-px h-[3px] origin-left bg-brand transition-transform duration-300 ${cur === id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>
      </div>

      <Section id="overview">
        <div className="eyebrow">Head of Department</div>
        <Reveal className="grid items-center gap-10 bg-soft p-8 md:grid-cols-[320px_1fr]">
          <Scene name={hod.scene || 'avatar1'} photo={hod.photoURL} className="aspect-[3/4]" />
          <div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">{hod.n}</h2>
            <div className="my-2 font-semibold text-brand">{hod.r}</div>
            <div className="my-6 grid gap-5 sm:grid-cols-2">{[['Qualification', hod.q], ['Experience', hod.x]].map(([k, v]) => <div key={k} className="border-t-2 border-line pt-3"><small className="text-[.7rem] uppercase tracking-[.14em] text-[#5d6b7a]">{k}</small><b className="block font-serif text-xl">{v}</b></div>)}</div>
            <p className="text-lg text-[#5d6b7a]">The department student association, the Computer Council, brings students together for technical and cultural activity.</p>
            <Link to={`/departments/cse/faculty/${hod.id}`} className="lu mt-5">View profile →</Link>
          </div>
        </Reveal>
      </Section>

      <Section id="faculty" tone="soft">
        <Heading eyebrow="Faculty" lines="Faculty & staff." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.06}>
              <Link to={`/departments/cse/faculty/${f.id}`} className="flex items-center gap-5 border border-line bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_34px_-26px_rgba(13,27,42,.45)]">
                <Scene name={f.scene || 'avatar1'} photo={f.photoURL} className="h-[104px] w-[84px] flex-none" />
                <div><h3 className="text-lg">{f.n}</h3><span className="block text-sm font-semibold text-brand">{f.r}</span><span className="text-sm text-[#5d6b7a]">{f.q} · {f.x}</span></div>
              </Link>
            </Reveal>
          ))}
          <Reveal><div className="flex items-center gap-5 border border-line bg-white p-4"><Scene name="avatar3" className="h-[104px] w-[84px] flex-none" /><div><h3 className="text-lg">Nilesh Gaikwad</h3><span className="block text-sm font-semibold text-brand">Lab Assistant</span><span className="text-sm text-[#5d6b7a]">Diploma CSE · 9 Years</span></div></div></Reveal>
        </div>
      </Section>

      <Section id="programs">
        <Heading eyebrow="Programs" lines="Programs offered." />
        <div className="grid gap-5 md:grid-cols-3"><Reveal className="card"><div className="font-serif text-brand">4 Years</div><h3 className="my-2 text-xl">B.E. Computer Science &amp; Engineering</h3><p className="text-sm text-[#5d6b7a]">Eligibility: 10+2. Admission through MHT-CET or JEE Main via CAP counselling.</p></Reveal></div>
      </Section>

      <Section id="labs" tone="dark">
        <Heading eyebrow="Labs" lines={['Where theory is', 'put to work.']}><Sample /></Heading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map(([t, s], i) => (
            <Reveal key={t} delay={i * 0.06} className="group relative aspect-[4/3] overflow-hidden"><Scene name={s} className="absolute inset-0 transition-transform duration-[1100ms] group-hover:scale-[1.08]" /><div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-ink/90" /><h3 className="absolute inset-x-5 bottom-4 z-10 text-[1.35rem]">{t}</h3></Reveal>
          ))}
        </div>
      </Section>

      <Section id="infra">
        <div className="grid gap-12 lg:grid-cols-2">
          <Heading eyebrow="Infrastructure" lines={['Facilities for', 'learning.']}><Sample /></Heading>
          <div className="grid gap-x-8 sm:grid-cols-2">{INFRA.map(([t, d]) => <Reveal key={t} className="border-b border-line py-5"><b className="font-serif text-lg">{t}</b><span className="block text-sm text-[#5d6b7a]">{d}</span></Reveal>)}</div>
        </div>
      </Section>

      <Section id="results" tone="soft">
        <Heading eyebrow="Results" lines="University results." />
        <DocGrid href={SITE.cseOfficial} docs={[['Result Analysis', 'Department results'], ['University Results', 'PAHSU Solapur'], ['Toppers', 'Department toppers']]} />
      </Section>

      <Section id="achv">
        <Heading eyebrow="Student achievements" lines="Recognition." />
        <div className="grid gap-5 md:grid-cols-3">
          {achv.filter((a) => a.group === 'students').map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08} className="card"><div className="font-serif text-brand">{a.year}{a.sample && <Sample />}</div><h3 className="my-2 text-xl">{a.title}</h3><p className="text-sm text-[#5d6b7a]">{a.desc}</p></Reveal>
          ))}
        </div>
      </Section>

      <Section id="projects" tone="soft">
        <Heading eyebrow="Projects" lines="Student projects."><Sample /></Heading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="group relative aspect-[4/3] overflow-hidden text-white"><Scene name={p.scene || 'code'} className="absolute inset-0 transition-transform duration-[1100ms] group-hover:scale-[1.08]" /><div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-ink/90" /><div className="absolute inset-x-5 bottom-4 z-10"><h3 className="text-[1.35rem]">{p.title}</h3><p className="text-sm text-[#cfd9e3]">{p.year}</p></div></Reveal>
          ))}
        </div>
      </Section>

      <Section id="syllabus">
        <Heading eyebrow="Syllabus" lines="Course syllabus." />
        <DocGrid href={SITE.cseOfficial} docs={[['First Year', 'PAHSU syllabus'], ['Second Year (SE)', 'PAHSU syllabus'], ['Third Year (TE)', 'PAHSU syllabus'], ['Final Year (BE)', 'PAHSU syllabus']]} />
      </Section>

      <Section id="timetable" tone="soft">
        <Heading eyebrow="Timetable" lines="Class timetables." />
        <DocGrid href={SITE.cseOfficial} docs={[['SE CSE', 'Current term', 'XLS'], ['TE CSE', 'Current term', 'XLS'], ['BE CSE', 'Current term', 'XLS']]} />
        <a className="btn btn-o mt-8" href={SITE.cseOfficial} target="_blank" rel="noopener noreferrer">Official CSE page <span className="arr">↗</span></a>
      </Section>
    </>
  )
}
