import { Link } from 'react-router-dom'
import { NAV, SITE } from '../config'
import { DEPARTMENTS } from '../lib/data'
import Logo from './Logo'

const policies = ['Mandatory Disclosure', 'Online Fees Payment', 'Anti-Ragging', 'Grievance Redressal', 'Privacy Policy']
const link = 'transition-all duration-300 hover:pl-1.5 hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-[#08121d] pb-6 pt-20 text-sm text-[#8da0b3]">
      <div className="wrap">
        <div className="mb-12 overflow-hidden whitespace-nowrap font-serif text-[clamp(3rem,13vw,11rem)] font-bold leading-[.9] tracking-tighter text-white/[.07]">BMIT</div>
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3 text-white"><Logo /><b className="font-serif text-xl">{SITE.name}</b></Link>
            <address className="not-italic leading-7">
              {SITE.address}<br />
              <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a><br />
              <a href={`mailto:${SITE.emails[0]}`} className="hover:text-white">{SITE.emails[0]}</a>
            </address>
            <div className="mt-5 flex gap-2">
              {['fb', 'ig', 'yt', 'in'].map((s) => (
                <a key={s} href={SITE.official} target="_blank" rel="noopener noreferrer" aria-label={s}
                  className="grid h-10 w-10 place-items-center border border-white/20 text-[.7rem] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand">{s}</a>
              ))}
            </div>
          </div>
          <div><h4 className="mb-4 text-base text-white">Departments</h4><ul className="grid gap-2">{DEPARTMENTS.map((d) => <li key={d.id}><Link className={link} to={`/departments/${d.id}`}>{d.s}</Link></li>)}</ul></div>
          <div><h4 className="mb-4 text-base text-white">Explore</h4><ul className="grid gap-2">{NAV.slice(0, 6).map(([t, to]) => <li key={to}><Link className={link} to={to}>{t}</Link></li>)}</ul></div>
          <div><h4 className="mb-4 text-base text-white">More</h4><ul className="grid gap-2">{NAV.slice(6).map(([t, to]) => <li key={to}><Link className={link} to={to}>{t}</Link></li>)}</ul></div>
          <div><h4 className="mb-4 text-base text-white">Policies &amp; Disclosures</h4><ul className="grid gap-2">{policies.map((t) => <li key={t}><a className={link} href={SITE.official} target="_blank" rel="noopener noreferrer">{t} ↗</a></li>)}</ul></div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-xs">
          <span>© {new Date().getFullYear()} {SITE.fullName}, Solapur. All rights reserved.</span>
          <span>Approved by AICTE · Affiliated to PAHSU Solapur</span>
        </div>
      </div>
    </footer>
  )
}
