import PageHero from '../components/PageHero'
import Sample from '../components/Sample'
import { Heading, Steps } from '../components/ui'
import { PlacementsBlock, Cta } from '../components/blocks'

export default function Placements() {
  return (
    <>
      <PageHero crumbs={[[null, 'Placements']]} title="Placements" sub="Training, drives and career support for every graduating batch." scene="people" />
      <PlacementsBlock showLink={false} />
      <section className="pad"><div className="wrap">
        <Heading eyebrow="Process" lines="How placements work."><Sample /></Heading>
        <Steps items={[['Training', 'Aptitude, communication and technical preparation.'], ['Pre-placement talks', 'Companies present roles and selection steps.'], ['Drives', 'On-campus and pooled campus recruitment.'], ['Offers', 'Offer letters and onboarding support.']]} />
      </div></section>
      <Cta />
    </>
  )
}
