// Small shared building blocks for inner pages.
import Reveal from './Reveal'
import Mask from './Mask'

export const Section = ({ id, tone = '', className = '', children }) => (
  <section id={id} className={`pad ${tone === 'soft' ? 'bg-soft' : tone === 'dark' ? 'on-dark bg-ink text-[#e9edf1]' : ''} ${className}`}>
    <div className="wrap">{children}</div>
  </section>
)

export const Heading = ({ eyebrow, lines, children }) => (
  <div className="mb-10">
    <div className="eyebrow">{eyebrow}{children}</div>
    <Mask lines={Array.isArray(lines) ? lines : [lines]} className="h2" />
  </div>
)

// Document link grid (syllabus, results, timetable…). docs = [[title, subtitle, tag?, url?]]
export function DocGrid({ docs, href }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {docs.map(([t, s, tag = 'PDF', url], i) => (
        <Reveal key={t} delay={i * 0.06}>
          <a href={url || href} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white">
            <i className="grid h-[50px] w-[42px] flex-none place-items-center border-b-[3px] border-brand bg-soft text-[.6rem] font-bold not-italic tracking-wider text-ink transition-colors group-hover:bg-brand group-hover:text-white">{tag}</i>
            <div><b className="block text-[.95rem]">{t}</b><span className="text-xs text-[#5d6b7a] group-hover:text-[#9fb0c1]">{s} ↗</span></div>
          </a>
        </Reveal>
      ))}
    </div>
  )
}

export const Steps = ({ items }) => (
  <div className="border-t border-line">
    {items.map(([t, d], i) => (
      <Reveal key={t} delay={i * 0.06} className="grid grid-cols-[56px_1fr] gap-5 border-b border-line py-7 transition-all duration-500 hover:pl-4 sm:grid-cols-[80px_1fr]">
        <div className="font-serif text-4xl leading-none text-brand">0{i + 1}</div>
        <div><h3 className="mb-1 text-xl">{t}</h3><p className="text-[#5d6b7a]">{d}</p></div>
      </Reveal>
    ))}
  </div>
)

export const KV = ({ items }) => (
  <div className="my-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
    {items.map(([k, v]) => (
      <div key={k} className="border-t-2 border-line pt-3"><small className="text-[.7rem] uppercase tracking-[.14em] text-[#5d6b7a]">{k}</small><b className="block font-serif text-xl">{v}</b></div>
    ))}
  </div>
)
