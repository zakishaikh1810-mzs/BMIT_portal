import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import { Departments, Department } from './pages/Departments'
import Cse from './pages/Cse'
import FacultyProfile from './pages/FacultyProfile'
import Admissions from './pages/Admissions'
import CampusLife from './pages/CampusLife'
import Placements from './pages/Placements'
import Research from './pages/Research'
import Achievements from './pages/Achievements'
import Notices from './pages/Notices'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const TITLES = {
  '/about': 'About', '/academics': 'Academics', '/departments': 'Departments', '/admissions': 'Admissions',
  '/campus-life': 'Campus Life', '/placements': 'Placements', '/research': 'Research',
  '/achievements': 'Achievements', '/notices': 'Notices', '/contact': 'Contact',
}

// On every route change: scroll to top, update the document title, and play the curtain wipe.
function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Let the CSE page handle its own in-page scrolling (/departments/cse/<section>)
    if (!/^\/departments\/cse\/(?!faculty\/)/.test(pathname)) window.scrollTo(0, 0)
    const t = TITLES[pathname] || (pathname.startsWith('/departments/cse') ? 'Computer Science & Engineering' : pathname.startsWith('/departments') ? 'Departments' : '')
    document.title = t ? `${t} — BMIT Solapur` : 'BMIT Solapur — Brahmdevdada Mane Institute of Technology'
  }, [pathname])
  // key={pathname} restarts the CSS animation each time the route changes
  return <div key={pathname} className="wipe pointer-events-none fixed inset-0 z-[300] bg-ink" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/cse" element={<Cse />} />
          <Route path="/departments/cse/faculty/:id" element={<FacultyProfile />} />
          <Route path="/departments/cse/:section" element={<Cse />} />
          <Route path="/departments/:id" element={<Department />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/research" element={<Research />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* Mobile-only bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-[180] grid grid-cols-2 bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-6px_20px_rgba(13,27,42,.12)] md:hidden">
        <Link to="/admissions" className="bg-brand p-3.5 text-center text-sm font-semibold text-white">Admissions</Link>
        <Link to="/contact" className="p-3.5 text-center text-sm font-semibold">Contact</Link>
      </div>
    </>
  )
}
