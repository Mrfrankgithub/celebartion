import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { fireConfettiBurst, confettiOnHover } from '../utils/confetti'
import type { JSX } from 'react'

export default function Hero(): JSX.Element {
  const navigate = useNavigate()

  return (
    <header className="gradient-hero" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="container" style={{ display: 'grid', alignItems: 'center', gap: 32, gridTemplateColumns: '1.2fr 1fr' }}>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1.1 }}
          >
            Celebrate Life’s Special Moments Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ fontSize: 18, maxWidth: 640, marginTop: 12 }}
          >
            From birthdays and graduations to promotions and anniversaries — create a beautiful group celebration that brings everyone’s love into one place.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button
              className="btn btn-primary"
              onMouseEnter={() => confettiOnHover()}
              onClick={() => { fireConfettiBurst(1); navigate('/create') }}
            >
              Start a Celebration
            </button>
            <button className="btn" style={{ background: '#fff', color: 'var(--color-text)' }} onClick={() => navigate('/events')}>Explore Events</button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="card"
          style={{ padding: 16, background: '#fff0', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </header>
  )
}

function HeroVisual(): JSX.Element {
  return (
    <div style={{ position: 'relative', height: 360, borderRadius: 16, overflow: 'hidden' }}>
      {/* Decorative bubbles */}
      {[{c:'#FFB347',x:10,y:20,s:110},{c:'#FF6B81',x:60,y:10,s:80},{c:'#6C63FF',x:80,y:60,s:140},{c:'#7ED957',x:20,y:70,s:90}].map((b, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }} style={{ position: 'absolute', left: `${b.x}%`, top: `${b.y}%`, width: b.s, height: b.s, borderRadius: b.s, background: b.c, filter: 'blur(16px)', opacity: 0.6 }} />
      ))}
      <div className="card" style={{ position: 'absolute', inset: 24, borderRadius: 18, background: '#fff', padding: 20, display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700 }}>Your Celebration</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ width: 10, height: 10, background: '#FF6B81', borderRadius: 20 }} />
            <span style={{ width: 10, height: 10, background: '#FFB347', borderRadius: 20 }} />
            <span style={{ width: 10, height: 10, background: '#6C63FF', borderRadius: 20 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {['🎂 Birthday', '🎓 Graduation', '💍 Wedding', '💑 Engagement', '💼 New Job', '📈 Promotion'].map((t) => (
            <motion.div key={t} whileHover={{ scale: 1.03 }} className="card" style={{ padding: 14, border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 12, color: '#555' }}>Tap to preview</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}