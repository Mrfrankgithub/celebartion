import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import type { JSX } from 'react'

const faqs = [
  { q: 'Is it free to start a celebration?', a: 'Yes, you can start for free. Premium themes and exports are optional.' },
  { q: 'How do I invite people?', a: 'Share your unique celebration link via email, chat, or social media.' },
  { q: 'Can I download the final card?', a: 'Yes, you can export a PDF or share a private link.' },
]

export default function FAQ(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)' }}>FAQ / Help Center</h1>
          <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
      <button onClick={() => setOpen(v => !v)} style={{ width: '100%', textAlign: 'left', padding: 16, background: 'transparent', border: 'none', borderRadius: 18, fontWeight: 700 }}>{q}</button>
      {open && <div style={{ padding: '0 16px 16px 16px', color: '#555' }}>{a}</div>}
    </div>
  )
}