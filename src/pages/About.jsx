import { Link } from 'react-router-dom'
import { SITE } from '../config'
import { DEPARTMENTS } from '../lib/data'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Mask from '../components/Mask'
import { Cta } from '../components/blocks'

export default function About() {
  return (
    <>
      <PageHero crumbs={[[null, 'About']]} title={['About', 'BMIT']} sub={`Established in ${SITE.est}, committed to developing capable engineers and managers.`} />
      <section className="pad"><div className="wrap grid gap-12 lg:grid-cols-2">
        <div><div className="eyebrow">Our story</div><Mask lines={['A trust-led', 'institute in Solapur.']} className="h2" /></div>
        <div className="space-y-5 text-lg text-[#5d6b7a]">
          <Reveal as="p">Brahmdevdada Mane Institute of Technology (BMIT) was founded in {SITE.est} by Kai Amdar Brahmdevdada Mane Shikshan va Samajik Pratisthan. It is approved by AICTE, recognised by the Government of Maharashtra and affiliated to Punyashlok Ahilyadevi Holkar Solapur University.</Reveal>
          <Reveal as="p">The campus is located at Belati on the Solapur–Mangalwedha–Kolhapur state highway and offers B.E., M.E. and MBA programmes.</Reveal>
        </div>
      </div></section>
      <section className="pad bg-soft"><div className="wrap grid gap-5 md:grid-cols-3">
        <Reveal className="card"><div className="font-serif text-brand">Mission</div><h3 className="my-2 text-xl">Quality education</h3><p className="text-sm text-[#5d6b7a]">To develop world-class manpower through quality education that meets the challenges of a highly competitive global market.</p></Reveal>
        <Reveal delay={0.1} className="card"><div className="font-serif text-brand">Vision</div><h3 className="my-2 text-xl">A continuous supply of talent</h3><p className="text-sm text-[#5d6b7a]">To grow institutes that supply world-class professional and technical manpower for developing modern society.</p></Reveal>
        <Reveal delay={0.2} className="card"><div className="font-serif text-brand">Recognition</div><h3 className="my-2 text-xl">Approved &amp; affiliated</h3><ul className="grid gap-1 text-sm text-[#5d6b7a]"><li>AICTE approved</li><li>Government of Maharashtra recognised</li><li>Affiliated to PAHSU Solapur</li></ul></Reveal>
      </div></section>
      <section className="pad"><div className="wrap">
        <div className="eyebrow">Departments</div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">{DEPARTMENTS.slice(0, 3).map((d, i) => (
          <Reveal key={d.id} delay={i * 0.08}><Link to={`/departments/${d.id}`} className="card block"><div className="font-serif text-brand">{d.s}</div><h3 className="my-2 text-xl">{d.n}</h3><p className="text-sm text-[#5d6b7a]">{d.d}</p></Link></Reveal>
        ))}</div>
        <Link to="/departments" className="lu mt-8">All departments →</Link>
      </div></section>
      <Cta />
    </>
  )
}
