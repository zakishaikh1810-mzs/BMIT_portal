import useInView from '../hooks/useInView'

// Wipes its child open (clip-path) when scrolled into view. dir="u" reveals upward.
export default function Clip({ dir = 'l', delay = 0, className = '', children }) {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}s` }} className={`clip ${dir === 'u' ? 'u' : ''} ${seen ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}
