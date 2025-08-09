import { motion } from 'framer-motion'
import type { JSX } from 'react'

type Testimonial = { name: string; message: string; initials: string }

const testimonials: Testimonial[] = [
  { name: 'Ava M.', initials: 'AM', message: 'We surprised my sister with messages from 40 friends across the world. She cried happy tears!' },
  { name: 'Cameron L.', initials: 'CL', message: 'Our team used it for a promotion—so easy and the final card was stunning.' },
  { name: 'Priya S.', initials: 'PS', message: 'Set up in minutes. The animations made it feel so special.' },
  { name: 'Diego R.', initials: 'DR', message: 'Perfect for our parents’ anniversary. They loved the heartfelt notes and photos.' },
  { name: 'Emily W.', initials: 'EW', message: 'The confetti moment was such a delight! Highly recommend.' },
  { name: 'Noah T.', initials: 'NT', message: 'Beautiful design and smooth experience on mobile and desktop.' },
]

export default function Testimonials(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>Happy stories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.05 }} style={{ padding: 16, border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center', fontWeight: 700, color: '#fff', background: 'var(--gradient-accent)' }}>{t.initials}</div>
                <div style={{ fontWeight: 700 }}>{t.name}</div>
              </div>
              <p style={{ color: '#555', marginTop: 8 }}>{t.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}