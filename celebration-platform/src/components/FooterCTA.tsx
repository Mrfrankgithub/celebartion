import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { fireConfettiBurst } from '../utils/confetti'
import type { JSX } from 'react'

export default function FooterCTA(): JSX.Element {
  const navigate = useNavigate()
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, rgba(255,179,71,0.14), rgba(255,107,129,0.12))' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontSize: 'clamp(22px, 3.5vw, 32px)' }}>
          Ready to make someone’s day?
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ color: '#555', marginBottom: 16 }}>
          Start a celebration and collect heartfelt messages, photos, and videos in minutes.
        </motion.p>
        <motion.button className="btn btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => { fireConfettiBurst(1); navigate('/create') }}>
          Start a Celebration
        </motion.button>
      </div>
    </section>
  )
}