import { sceneURI } from '../lib/scenes'
import { IMAGES } from '../config'

// Image block. Priority: explicit `photo` prop (e.g. Firestore photoURL) -> IMAGES[name] -> drawn artwork.
export default function Scene({ name = 'campus', photo, className = '', style, children, ...rest }) {
  const bg = photo ? `url("${photo}")` : IMAGES[name] ? `url("${IMAGES[name]}")` : sceneURI(name)
  return (
    <div className={`bg-cover bg-center bg-ink-2 ${className}`} style={{ backgroundImage: bg, ...style }} {...rest}>
      {children}
    </div>
  )
}
