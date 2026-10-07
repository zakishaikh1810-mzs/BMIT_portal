import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../config'
import Logo from './Logo'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [hide, setHide] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => {
    let last = 0
    const on = () => {
      const y = scrollY
      setSolid(y > 60)
      setHide(y > 400 && y > last + 4)   // hide on scroll down, show on scroll up
      last = y
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])

  const light = solid && !open
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[200] transition-all duration-500 ${light ? 'bg-white text-ink shadow-[0_1px_0_#e4e8ec]' : 'nav-top text-white'} ${hide && !open ? '-translate-y-full' : ''}`}>
        <div className="mx-auto flex h-[74px] w-[min(1360px,94%)] items-center justify-between gap-6">
          <Link to="/" className="flex flex-none items-center gap-3" aria-label={`${SITE.name} home`}>
            <Logo />
            <span>
              <b className="block font-serif text-xl leading-none">{SITE.name}</b>
              <small className="mt-1 block whitespace-nowrap text-[.58rem] uppercase tracking-[.14em] opacity-75">Brahmdevdada Mane Inst. of Technology</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 min-[1180px]:flex" aria-label="Primary">
            {NAV.map(([t, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>{t}</NavLink>
            ))}
          </nav>

          <button className="relative z-[230] h-11 w-11 min-[1180px]:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <i className={`absolute left-2.5 right-2.5 h-0.5 bg-current transition-all duration-300 ${open ? 'top-[22px] rotate-45' : 'top-4'}`} />
            <i className={`absolute left-2.5 right-2.5 top-[22px] h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <i className={`absolute left-2.5 right-2.5 h-0.5 bg-current transition-all duration-300 ${open ? 'top-[22px] -rotate-45' : 'top-7'}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[190] overflow-y-auto bg-ink px-[8vw] pb-8 pt-24 transition-transform duration-[600ms] ease-[cubic-bezier(.22,.8,.24,1)] min-[1180px]:hidden ${open ? 'translate-x-0' : 'invisible translate-x-full'}`}>
        {NAV.map(([t, to], i) => (
          <Link key={to} to={to} style={{ transitionDelay: open ? `${0.2 + i * 0.05}s` : '0s' }}
            className={`flex justify-between border-b border-white/10 py-2.5 font-serif text-[clamp(1.5rem,6.2vw,2.1rem)] text-white transition-all duration-500 hover:pl-2 hover:text-[#e58b97] ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            {t}<span>→</span>
          </Link>
        ))}
        <small className="mt-6 block text-sm text-[#8da0b3]">{SITE.fullName}, Solapur</small>
      </div>
    </>
  )
}
