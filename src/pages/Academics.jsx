import { SITE } from '../config'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Heading, DocGrid } from '../components/ui'
import { Cta } from '../components/blocks'

const PROGRAMMES = [
  ['B.E.', 'Bachelor of Engineering', 'Computer Science & Engineering · Mechanical · Electrical · Electronics & Telecommunication'],
  ['B.Tech', 'Artificial Intelligence & Data Science', 'Offered through the AI & DS department.'],
  ['M.E.', 'Master of Engineering', 'Digital Electronics · Mechanical Engineering'],
  ['MBA', 'Master of Business Administration', 'Management programme in the Business Administration department.'],
  ['GSE', 'General Science & Engineering', 'First-year core subjects shared across branches.'],
]

export default function Academics() {
  return (
    <>
      <PageHero crumbs={[[null, 'Academics']]} title="Academics" sub="Undergraduate, postgraduate and management programmes." scene="lab" />
      <section className="pad"><div className="wrap">
        <Heading eyebrow="Programmes" lines={['Choose your', 'discipline.']} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{PROGRAMMES.map(([k, t, d], i) => (
          <Reveal key={k} delay={i * 0.07} className="card"><div className="font-serif text-brand">{k}</div><h3 className="my-2 text-xl">{t}</h3><p className="text-sm text-[#5d6b7a]">{d}</p></Reveal>
        ))}</div>
        <div className="mt-16"><Heading eyebrow="Academic calendar" lines="Plan your year." />
          <DocGrid href={SITE.official} docs={[['Academic Calendar 2024–25', 'Official site', 'CAL'], ['Academic Calendar 2023–24', 'Official site', 'CAL'], ['Academic Calendar 2022–23', 'Official site', 'CAL']]} /></div>
      </div></section>
      <Cta />
    </>
  )
}
