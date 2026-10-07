import { Link, useParams } from 'react-router-dom'
import { SITE } from '../config'
import { DEPARTMENTS } from '../lib/data'
import PageHero from '../components/PageHero'
import Scene from '../components/Scene'
import Reveal from '../components/Reveal'
import { KV } from '../components/ui'
import { Cta } from '../components/blocks'
import NotFound from './NotFound'

export function Departments() {
  return (
    <>
      <PageHero crumbs={[[null, 'Departments']]} title={['Our', 'Departments']} sub="Seven departments spanning engineering, science and management." scene="network" />
      <section className="pad"><div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DEPARTMENTS.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.06}>
            <Link to={`/departments/${d.id}`} className="group relative block aspect-[4/3] overflow-hidden text-white">
              <Scene name={d.scene} className="absolute inset-0 transition-transform duration-[1100ms] group-hover:scale-[1.08]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-ink/90" />
              <div className="absolute inset-x-5 bottom-4 z-10"><h3 className="text-[1.35rem]">{d.n}</h3><p className="text-sm text-[#cfd9e3]">{d.p}</p></div>
            </Link>
          </Reveal>
        ))}
      </div></section>
      <Cta />
    </>
  )
}

// Generic page for every department except CSE.
export function Department() {
  const { id } = useParams()
  const d = DEPARTMENTS.find((x) => x.id === id)
  if (!d) return <NotFound />
  return (
    <>
      <PageHero crumbs={[['/departments', 'Departments'], [null, d.s]]} title={d.n} sub={d.d} scene={d.scene} />
      <section className="pad"><div className="wrap grid gap-12 lg:grid-cols-2">
        <div><div className="eyebrow">Overview</div><h2 className="h2">About the department.</h2></div>
        <div>
          <p className="text-lg text-[#5d6b7a]">{d.d}</p>
          <KV items={[['Programmes', d.p], ['Affiliation', 'PAHSU Solapur']]} />
          <a className="btn btn-o" href={SITE.official} target="_blank" rel="noopener noreferrer">Official department details <span className="arr">↗</span></a>
        </div>
      </div></section>
      <Cta />
    </>
  )
}
