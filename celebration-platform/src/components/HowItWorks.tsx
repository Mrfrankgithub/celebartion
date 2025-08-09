import { motion } from 'framer-motion'
import type { JSX } from 'react'

const steps = [
  { title: 'Create a Celebration', desc: 'Choose a theme and personalize the page.' , emoji: '✨'},
  { title: 'Invite Friends', desc: 'Share a link to collect messages, photos, and videos.', emoji: '🤝'},
  { title: 'Enjoy & Share', desc: 'Reveal the surprise and download a keepsake.', emoji: '🎉'},
]

export default function HowItWorks(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {steps.map((s, i) => (
            <motion.div key={s.title} className="card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.06 }} style={{ padding: 18, border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'var(--gradient-primary)', color: '#fff', fontSize: 20 }}>{s.emoji}</div>
                <div style={{ fontWeight: 700 }}>{s.title}</div>
              </div>
              <p style={{ color: '#555', marginTop: 8 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}