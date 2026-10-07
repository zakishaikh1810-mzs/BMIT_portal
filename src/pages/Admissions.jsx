import { Link } from 'react-router-dom'
import { SITE } from '../config'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Mask from '../components/Mask'
import { Heading, Steps } from '../components/ui'
import { Cta } from '../components/blocks'

export default function Admissions() {
  return (
    <>
      <PageHero crumbs={[[null, 'Admissions']]} title="Admissions" sub="Join BMIT through the Maharashtra CAP counselling process." scene="people" />
      <section className="pad"><div className="wrap grid gap-12 lg:grid-cols-2">
        <div><div className="eyebrow">B.E. admission process</div><Mask lines={['How to get', 'admitted.']} className="h2" /><Reveal as="p" className="mt-5 text-lg text-[#5d6b7a]">B.E. admissions are based on MHT-CET or JEE Main scores through state CAP counselling. Eligibility is 10+2.</Reveal></div>
        <Steps items={[['Appear for the entrance', 'MHT-CET or JEE Main.'], ['Register for CAP', 'Register on the state CAP portal and submit documents.'], ['Fill option form', 'Select BMIT and your preferred branch.'], ['Confirm & report', 'Confirm your seat and complete admission formalities at the institute.']]} />
      </div></section>
      <section className="pad bg-soft"><div className="wrap">
        <Heading eyebrow="Programmes" lines="Programmes open." />
        <div className="grid gap-5 md:grid-cols-3">{[['B.E.', 'CSE, Mechanical, Electrical, E&TC'], ['M.E.', 'Digital Electronics, Mechanical'], ['MBA', 'Business Administration']].map(([k, d], i) => <Reveal key={k} delay={i * 0.08} className="card"><div className="font-serif text-brand">{k}</div><h3 className="mt-2 text-xl">{d}</h3></Reveal>)}</div>
        <div className="mt-8 flex flex-wrap gap-4"><a className="btn btn-p" href={SITE.official} target="_blank" rel="noopener noreferrer">Official admission page <span className="arr">↗</span></a><Link to="/contact" className="btn btn-o">Contact admission cell</Link></div>
      </div></section>
      <Cta />
    </>
  )
}
