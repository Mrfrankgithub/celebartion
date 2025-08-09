import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

export default function CreateCelebration(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>Create a Celebration</h1>
          <p style={{ color: '#555' }}>Set up a celebration in minutes. We’ll guide you through.</p>
          <motion.form className="card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ padding: 18, border: '1px solid rgba(0,0,0,0.06)', display: 'grid', gap: 12 }} onSubmit={(e) => { e.preventDefault(); alert('Celebration created! (demo)') }}>
            <label>
              Title
              <input required placeholder="e.g., Emma’s 30th Birthday" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)', marginTop: 6 }} />
            </label>
            <label>
              Event Type
              <select style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)', marginTop: 6 }}>
                <option>Birthday</option>
                <option>Graduation</option>
                <option>Wedding</option>
                <option>Engagement</option>
                <option>New Job</option>
                <option>Promotion</option>
                <option>New City</option>
                <option>New Home</option>
                <option>Anniversary</option>
              </select>
            </label>
            <label>
              Date
              <input type="date" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)', marginTop: 6 }} />
            </label>
            <button className="btn btn-primary" type="submit">Create</button>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  )
}