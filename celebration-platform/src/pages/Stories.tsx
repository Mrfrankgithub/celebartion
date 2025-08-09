import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

export default function Stories(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>Happy Stories</h1>
          <p style={{ color: '#555' }}>Real moments from people and teams who celebrated together.</p>
          <div className="card" style={{ padding: 18, marginTop: 16, border: '1px solid rgba(0,0,0,0.06)' }}>
            Coming soon: heartfelt stories with photos and videos.
          </div>
        </div>
      </section>
    </PageTransition>
  )
}