import useInView from '../hooks/useInView'

// Fade/slide-up on scroll. <Reveal delay={0.1} as="li">…</Reveal>
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} style={{ '--d': `${delay}s` }} className={`rv ${seen ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
