import { Link, useParams } from 'react-router-dom'
import { FACULTY } from '../lib/data'
import { useCollection } from '../hooks/useCollection'
import PageHero from '../components/PageHero'
import Scene from '../components/Scene'
import Clip from '../components/Clip'
import { KV } from '../components/ui'
import NotFound from './NotFound'

// /departments/cse/faculty/:id
export default function FacultyProfile() {
  const { id } = useParams()
  const { data } = useCollection('faculty', FACULTY)
  const f = data.find((x) => x.id === id)
  if (!f) return <NotFound />
  return (
    <>
      <PageHero crumbs={[['/departments', 'Departments'], ['/departments/cse', 'CSE'], [null, 'Faculty']]} title={f.n} sub={f.r} scene="people" />
      <section className="pad"><div className="wrap grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
        <Clip><Scene name={f.scene || 'avatar1'} photo={f.photoURL} className="aspect-[3/4]" /></Clip>
        <div>
          <div className="eyebrow">Profile</div>
          <h2 className="h2">{f.n}</h2>
          <KV items={[['Designation', f.r], ['Department', 'Computer Science & Engineering'], ['Qualification', f.q], ['Experience', f.x]]} />
          {f.email && <a href={`mailto:${f.email}`} className="btn btn-p">Email {f.email.split('@')[0]} <span className="arr">→</span></a>}
          <p className="mt-8"><Link to="/departments/cse/faculty" className="lu">← Back to faculty</Link></p>
        </div>
      </div></section>
    </>
  )
}
