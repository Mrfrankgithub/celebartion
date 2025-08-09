import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

export default function About(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>About Us</h1>
          <p style={{ color: '#555' }}>We believe every milestone deserves to be celebrated beautifully and together.</p>
          <div className="card" style={{ padding: 18, marginTop: 16, border: '1px solid rgba(0,0,0,0.06)' }}>
            Our mission is to make it effortless for people and teams to share love, gratitude, and joy through modern, elegant celebration pages.
          </div>
        </div>
      </section>
    </PageTransition>
  )
}