import { Link } from 'react-router-dom'

const ITEMS = [
  ['Admissions', 'B.E. admissions through MHT-CET / JEE Main CAP counselling', '/admissions'],
  ['Notices', 'Academic Calendar 2024–25 now available', '/notices'],
  ['Events', 'Workshops, seminars and guest lectures across departments', '/campus-life'],
  ['Update', 'Online fees payment portal', '/notices'],
  ['Placements', 'Recruiters include TCS, Wipro, IBM, Infosys and Xoriant', '/placements'],
]

// Moving announcement strip. Edit ITEMS (or load them from a Firestore `announcements` collection).
export default function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand text-white">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '46s' }}>
        {[...row, ...row].map(([b, t, to], i) => (
          <Link key={i} to={to} className="flex items-center gap-3.5 px-10 py-4 text-sm transition-colors hover:bg-brand-dark">
            <b className="bg-white px-2 py-0.5 text-[.66rem] uppercase tracking-[.16em] text-brand">{b}</b>{t}
          </Link>
        ))}
      </div>
    </div>
  )
}
