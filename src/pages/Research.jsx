import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Sample from '../components/Sample'
import { ResearchFlow, Cta } from '../components/blocks'

export default function Research() {
  return (
    <>
      <PageHero crumbs={[[null, 'Research']]} title={['Research &', 'Innovation']} sub="Projects, publications, labs and collaborations." scene="network" />
      <ResearchFlow />
      <section className="pad"><div className="wrap grid gap-5 md:grid-cols-3">
        {[['Projects', 'Student projects across departments.'], ['Publications', 'Papers by faculty and students.'], ['Labs', 'Experimentation and prototyping spaces.']].map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08} className="card"><Sample /><h3 className="my-2 text-xl">{t}</h3><p className="text-sm text-[#5d6b7a]">{d}</p></Reveal>
        ))}
      </div></section>
      <Cta />
    </>
  )
}
