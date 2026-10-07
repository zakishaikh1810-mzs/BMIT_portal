import useInView from '../hooks/useInView'

// Headline whose lines slide up from behind a mask. <Mask as="h1" lines={['Line one', 'Line two']} />
export default function Mask({ as: Tag = 'h2', lines, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} className={`mk ${seen ? 'in' : ''} ${className}`}>
      {lines.map((l, i) => (
        <span className="mask" key={i}><span style={{ '--d': `${i * 0.12}s` }}>{l}</span></span>
      ))}
    </Tag>
  )
}
