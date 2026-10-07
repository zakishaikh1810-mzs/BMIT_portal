import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// If .env is empty the site still works using the built-in data in lib/data.js.
export const isFirebaseConfigured = Boolean(cfg.apiKey && cfg.projectId)
export const db = isFirebaseConfigured ? getFirestore(initializeApp(cfg)) : null
