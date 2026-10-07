import { Link } from 'react-router-dom'
import Scene from './Scene'
import Parallax from './Parallax'
import Mask from './Mask'

// Dark banner at the top of inner pages. crumbs = [[to, label], [null, 'Current']]
export default function PageHero({ crumbs = [], title, sub, scene = 'campus' }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-[4.5rem] pt-[calc(74px+5rem)] text-white">
      <div className="absolute inset-0 opacity-35"><Parallax speed={0.2} className="h-full"><Scene name={scene} className="h-full w-full" /></Parallax></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-15% to-ink/50" />
      <div className="wrap relative z-10">
        <div className="mb-5 flex flex-wrap gap-2.5 text-xs uppercase tracking-widest text-[#9fb0c1]">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map(([to, t]) => (
            <span key={t} className="flex gap-2.5"><span>/</span>{to ? <Link to={to} className="hover:text-white">{t}</Link> : <span className="text-white">{t}</span>}</span>
          ))}
        </div>
        <Mask as="h1" lines={Array.isArray(title) ? title : [title]} className="text-[clamp(2.4rem,7vw,5.6rem)]" />
        {sub && <p className="mt-6 max-w-[56ch] text-lg text-[#b9c7d4]">{sub}</p>}
      </div>
    </section>
  )
}
