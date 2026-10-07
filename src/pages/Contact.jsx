import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { SITE } from '../config'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

// The form writes to Firestore `messages` (create-only, locked down by firestore.rules).
// If Firebase isn't configured it falls back to opening the visitor's mail app.
export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    if (!db) {
      location.href = `mailto:${SITE.emails[0]}?subject=${encodeURIComponent('Enquiry from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.name + ' (' + f.email + ')')}`
      return
    }
    setStatus('sending')
    try {
      await addDoc(collection(db, 'messages'), { name: f.name, email: f.email, message: f.message, createdAt: serverTimestamp() })
      setStatus('sent'); e.target.reset()
    } catch (err) { console.error(err); setStatus('error') }
  }
  const input = 'w-full border border-[#cbd3db] bg-white p-4 outline-none transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(155,28,46,.12)]'
  return (
    <>
      <PageHero crumbs={[[null, 'Contact']]} title={['Contact', 'BMIT']} sub="We would be glad to help with admissions and enquiries." scene="campus" />
      <section className="pad"><div className="wrap grid gap-14 lg:grid-cols-2">
        <div className="grid content-start gap-6">
          <Reveal><b className="block font-serif text-lg">Address</b><span className="text-[#5d6b7a]">{SITE.address}</span></Reveal>
          <Reveal><b className="block font-serif text-lg">Phone</b><a href={SITE.phoneHref} className="text-[#5d6b7a] hover:text-brand">{SITE.phone}</a></Reveal>
          <Reveal><b className="block font-serif text-lg">Email</b>{SITE.emails.map((m) => <a key={m} href={`mailto:${m}`} className="block text-[#5d6b7a] hover:text-brand">{m}</a>)}</Reveal>
          <Reveal><a className="btn btn-o" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Brahmdevdada+Mane+Institute+of+Technology+Belati+Solapur">Open in Maps <span className="arr">↗</span></a></Reveal>
        </div>
        <Reveal as="form" onSubmit={submit} className="grid gap-4">
          <input className={input} name="name" placeholder="Your name" required maxLength={120} />
          <input className={input} name="email" type="email" placeholder="Email" required maxLength={200} />
          <textarea className={input} name="message" rows={5} placeholder="Message" required maxLength={2000} />
          <button className="btn btn-p w-fit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <span className="arr">→</span></button>
          {status === 'sent' && <p className="text-green-700">Thank you — your message has been received.</p>}
          {status === 'error' && <p className="text-brand">Something went wrong. Please try again or email us directly.</p>}
        </Reveal>
      </div></section>
    </>
  )
}
