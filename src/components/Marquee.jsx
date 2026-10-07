// Continuously scrolling recruiter wall. The list is rendered twice so the -50% loop is seamless.
// Pauses on hover; each logo turns to its colour on hover.
const SHAPES = {
  rect: <><rect x="3" y="3" width="24" height="24" fill="currentColor" /><rect x="9" y="9" width="12" height="12" fill="#0d1b2a" /></>,
  circ: <><circle cx="15" cy="15" r="12" fill="currentColor" /><circle cx="15" cy="15" r="5" fill="#0d1b2a" /></>,
  flower: <g fill="currentColor"><circle cx="15" cy="8" r="6" /><circle cx="15" cy="22" r="6" /><circle cx="8" cy="15" r="6" /><circle cx="22" cy="15" r="6" /></g>,
  bars: <g fill="currentColor"><rect x="2" y="5" width="26" height="3" /><rect x="2" y="11" width="26" height="3" /><rect x="2" y="17" width="26" height="3" /><rect x="2" y="23" width="26" height="3" /></g>,
  chev: <path d="M4 6l12 9-12 9M14 6l12 9-12 9" fill="none" stroke="currentColor" strokeWidth="4" />,
}

export default function Marquee({ items }) {
  const row = [...items, ...items, ...items]
  const track = [...row, ...row]
  return (
    <div className="overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
        {track.map((c, i) => (
          <div key={i} title={c.name} style={{ '--c': c.color }}
            className="flex h-[88px] min-w-[230px] items-center gap-3 border border-white/10 bg-white/[.06] px-8 text-[#b9c7d4] transition-all duration-[400ms] hover:-translate-y-1.5 hover:border-white hover:bg-white hover:text-[var(--c)]">
            {c.logoURL
              ? <img src={c.logoURL} alt={c.name} className="h-9 w-auto" loading="lazy" />
              : <><svg className="h-[30px] w-[30px] flex-none" viewBox="0 0 30 30" aria-hidden="true">{SHAPES[c.shape] || SHAPES.rect}</svg><b className="text-xl tracking-tight">{c.name}</b></>}
          </div>
        ))}
      </div>
    </div>
  )
}
