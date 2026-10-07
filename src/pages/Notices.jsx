import PageHero from '../components/PageHero'
import { NoticesGrid } from '../components/blocks'

// Each card is a link to the notice document — edit URLs in Firestore (`notices` collection) or lib/data.js.
export default function Notices() {
  return (
    <>
      <PageHero crumbs={[[null, 'Notices']]} title="Notices" sub="Official documents, calendars and announcements." scene="library" />
      <section className="pad"><div className="wrap"><NoticesGrid /></div></section>
    </>
  )
}
