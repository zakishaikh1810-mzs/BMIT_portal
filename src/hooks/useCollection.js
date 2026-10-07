import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query, doc } from 'firebase/firestore'
import { db } from '../lib/firebase'

// Live Firestore collection with a local fallback.
// - Not configured / empty / error  -> returns `fallback` (site never looks broken)
// - Has documents                   -> returns them, updating in real time
export function useCollection(name, fallback = []) {
  const [data, setData] = useState(fallback)
  const [live, setLive] = useState(false)
  useEffect(() => {
    if (!db) return
    const q = query(collection(db, name), orderBy('order'))
    return onSnapshot(
      q,
      (snap) => {
        if (!snap.empty) { setData(snap.docs.map((d) => ({ id: d.id, ...d.data() }))); setLive(true) }
      },
      (err) => console.warn(`[firestore] ${name}:`, err.code)
    )
  }, [name])
  return { data, live }
}

// A single document, e.g. site/placements.
export function useDocument(path, fallback) {
  const [data, setData] = useState(fallback)
  useEffect(() => {
    if (!db) return
    const [col, id] = path.split('/')
    return onSnapshot(
      doc(db, col, id),
      (s) => s.exists() && setData({ ...fallback, ...s.data() }),
      (err) => console.warn(`[firestore] ${path}:`, err.code)
    )
    // eslint-disable-next-line
  }, [path])
  return data
}
