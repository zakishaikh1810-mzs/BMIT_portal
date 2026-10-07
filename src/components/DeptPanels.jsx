import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../lib/data'
import Scene from './Scene'

const isDesktop = () => matchMedia('(min-width: 768px)').matches

// Interactive department cards: hover expands a panel on desktop; first tap expands, second tap opens on mobile.
export default function DeptPanels() {
  const [on, setOn] = useState(0)
  return (
    <div className="flex flex-col gap-2 md:h-[560px] md:flex-row">
      {DEPARTMENTS.map((d, i) => {
        const act = on === i
        return (
          <Link key={d.id} to={`/departments/${d.id}`}
            onMouseEnter={() => isDesktop() && setOn(i)}
            onClick={(e) => { if (!isDesktop() && !act) { e.preventDefault(); setOn(i) } }}
            className={`group relative min-w-0 overflow-hidden text-white transition-all duration-700 ease-[cubic-bezier(.22,.8,.24,1)] ${act ? 'h-72 md:h-auto md:flex-[4]' : 'h-24 md:h-auto md:flex-1'}`}>
            <Scene name={d.scene} className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/90" />
            <div className={`absolute left-5 right-5 z-10 ${act ? 'bottom-5' : 'top-1/2 -translate-y-1/2 md:top-auto md:bottom-5 md:translate-y-0'}`}>
              {act && <div className="font-serif text-sm text-brand-light">0{i + 1}</div>}
              <h3 className={`my-1 whitespace-nowrap text-[1.35rem] ${act ? '' : 'md:rotate-180 md:[writing-mode:vertical-rl] md:text-xl'}`}>{d.s}</h3>
              <div className={`overflow-hidden transition-all duration-700 ${act ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="mb-4 max-w-[44ch] whitespace-normal text-[.92rem] text-[#d3dde6]">{d.d}</p>
                <span className="lu text-white">Explore {d.s} →</span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
