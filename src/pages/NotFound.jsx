import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <PageHero crumbs={[[null, 'Not found']]} title={['Page not', 'found']} sub="That page does not exist." />
      <section className="pad"><div className="wrap"><Link to="/" className="btn btn-p">Go home →</Link></div></section>
    </>
  )
}
