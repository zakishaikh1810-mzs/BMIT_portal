// Uploads the built-in content (src/lib/data.js) to Firestore using the Admin SDK.
//
//   1. Firebase Console → Project settings → Service accounts → "Generate new private key"
//      Save it as ./serviceAccount.json (it is git-ignored — never commit it).
//   2. npm run seed
//
// Safe to re-run: documents are written by id, so they are overwritten, not duplicated.
// After seeding, edit content in the Firebase Console (Firestore → Data) and the site updates live.
import { readFileSync } from 'node:fs'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { FACULTY, NOTICES, EVENTS, RECRUITERS, ACHIEVEMENTS, PROJECTS, SITE_DOCS } from '../src/lib/data.js'

const key = JSON.parse(readFileSync(new URL('../serviceAccount.json', import.meta.url)))
initializeApp({ credential: cert(key) })
const db = getFirestore()

const collections = { faculty: FACULTY, notices: NOTICES, events: EVENTS, recruiters: RECRUITERS, achievements: ACHIEVEMENTS, projects: PROJECTS }

for (const [name, items] of Object.entries(collections)) {
  const batch = db.batch()
  for (const { id, ...data } of items) batch.set(db.collection(name).doc(id), data)
  await batch.commit()
  console.log(`✓ ${name}: ${items.length} docs`)
}
for (const [id, data] of Object.entries(SITE_DOCS)) {
  await db.collection('site').doc(id).set(data)
  console.log(`✓ site/${id}`)
}
console.log('Done.')
