import { motion } from 'framer-motion'
import type { JSX } from 'react'

const events = [
  { title: 'Birthdays', emoji: '🎂', anchor: 'birthdays' },
  { title: 'Graduations', emoji: '🎓', anchor: 'graduations' },
  { title: 'Weddings', emoji: '💍', anchor: 'weddings' },
  { title: 'Engagements', emoji: '💑', anchor: 'engagements' },
  { title: 'New Jobs', emoji: '💼', anchor: 'new-jobs' },
  { title: 'Promotions', emoji: '📈', anchor: 'promotions' },
  { title: 'New City', emoji: '🏙️', anchor: 'new-city' },
  { title: 'New Home', emoji: '🏡', anchor: 'new-home' },
  { title: 'Anniversaries', emoji: '❤️', anchor: 'anniversaries' },
]

export default function EventShowcase(): JSX.Element {
  return (
    <section className="section" id="showcase">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>Celebrate everything, big and small</h2>
        <p style={{ color: '#555', marginBottom: 20 }}>Pick a theme, invite your people, and watch the love pour in.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {events.map((e, i) => (
            <motion.a
              key={e.anchor}
              href={`/events#${e.anchor}`}
              className="card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.03, rotate: 0.3 }}
              style={{ padding: 16, border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <span style={{ fontSize: 28 }}>{e.emoji}</span>
              <div style={{ fontWeight: 700 }}>{e.title}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}