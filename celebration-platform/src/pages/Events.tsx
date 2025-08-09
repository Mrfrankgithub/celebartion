import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

const groups = [
  { id: 'birthdays', title: 'Birthdays 🎂', items: ['Kids', 'Teens', 'Adults', 'Milestone 30/40/50+'] },
  { id: 'graduations', title: 'Graduations 🎓', items: ['High School', 'College', 'Masters & PhD'] },
  { id: 'weddings', title: 'Weddings 💍 & Engagements 💑', items: ['Bridal Shower', 'Bachelorette', 'Engagement'] },
  { id: 'career', title: 'New Jobs 💼 & Promotions 📈', items: ['New Role', 'Farewell', 'Promotion'] },
  { id: 'milestones', title: 'Milestones 🏙️ 🏡 ❤️', items: ['New City', 'New Home', 'Anniversaries'] },
]

export default function Events(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>All Celebration Types</h1>
          <p style={{ color: '#555' }}>Find the perfect theme for your moment.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 16 }}>
          {groups.map((g, gi) => (
            <motion.div key={g.id} id={g.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: gi * 0.03 }} className="card" style={{ padding: 18, border: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ marginBottom: 8 }}>{g.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {g.items.map((it) => (
                  <span key={it} className="card" style={{ padding: '8px 12px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}