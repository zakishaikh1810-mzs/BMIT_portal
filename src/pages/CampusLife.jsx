import PageHero from '../components/PageHero'
import Scene from '../components/Scene'
import Reveal from '../components/Reveal'
import { EventsBlock, Cta } from '../components/blocks'

const SPACES = [['Labs', 'lab', 'Hands-on learning'], ['Library', 'library', 'Study and research'], ['Classrooms', 'campus', 'Teaching spaces'], ['Auditorium', 'auditorium', 'Seminars and events'], ['Sports', 'sports', 'Games and fitness'], ['Hostel', 'hostel', 'Stay on campus']]

export default function CampusLife() {
  return (
    <>
      <PageHero crumbs={[[null, 'Campus Life']]} title={['Campus', 'Life']} sub="Labs, library, classrooms, auditorium, sports and hostel." scene="hostel" />
      <section className="pad"><div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPACES.map(([t, s, d], i) => (
          <Reveal key={t} delay={i * 0.06} className="group relative aspect-[4/3] overflow-hidden text-white"><Scene name={s} className="absolute inset-0 transition-transform duration-[1100ms] group-hover:scale-[1.08]" /><div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-ink/90" /><div className="absolute inset-x-5 bottom-4 z-10"><h3 className="text-[1.35rem]">{t}</h3><p className="text-sm text-[#cfd9e3]">{d}</p></div></Reveal>
        ))}
      </div></section>
      <EventsBlock />
      <Cta />
    </>
  )
}
