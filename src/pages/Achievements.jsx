import { useState } from 'react'
import { ACHIEVEMENTS } from '../lib/data'
import { useCollection } from '../hooks/useCollection'
import PageHero from '../components/PageHero'
import Sample from '../components/Sample'
import { Cta } from '../components/blocks'

const TABS = [['students', 'Students'], ['faculty', 'Faculty'], ['events', 'Events']]

export default function Achievements() {
  const { data } = useCollection('achievements', ACHIEVEMENTS)
  const [tab, setTab] = useState('students')
  const list = data.filter((a) => a.group === tab)
  return (
    <>
      <PageHero crumbs={[[null, 'Achievements']]} title="Achievements" sub="Students, faculty and events." scene="sports" />
      <section className="pad"><div className="wrap">
        <div className="mb-8 flex gap-9 overflow-x-auto border-b border-line">
          {TABS.map(([k, t]) => (
            <button key={k} onClick={() => setTab(k)} className={`relative whitespace-nowrap py-3.5 font-semibold transition-colors ${tab === k ? 'text-ink' : 'text-[#5d6b7a] hover:text-ink'}`}>
              {t}<span className={`absolute inset-x-0 -bottom-px h-[3px] origin-left bg-brand transition-transform duration-300 ${tab === k ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>
        {/* key={tab} re-mounts the grid so the entrance animation replays on tab change */}
        <div key={tab} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a, i) => (
            <div key={a.id} className="card [animation:fadeUp_.7s_cubic-bezier(.22,.8,.24,1)_both]" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="font-serif text-brand">{a.year}{a.sample && <Sample />}</div><h3 className="my-2 text-xl">{a.title}</h3><p className="text-sm text-[#5d6b7a]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div></section>
      <Cta />
    </>
  )
}
