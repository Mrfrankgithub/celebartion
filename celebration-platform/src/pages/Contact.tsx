import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

export default function Contact(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>Contact</h1>
          <p style={{ color: '#555' }}>Questions or feedback? We’d love to hear from you.</p>
          <form className="card" style={{ padding: 18, marginTop: 16, display: 'grid', gap: 12, border: '1px solid rgba(0,0,0,0.06)' }} onSubmit={(e) => { e.preventDefault(); alert('Message sent! (demo)') }}>
            <input required placeholder="Your name" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)' }} />
            <input required placeholder="Email" type="email" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)' }} />
            <textarea required placeholder="Message" rows={5} style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)', resize: 'vertical' }} />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </section>
    </PageTransition>
  )
}