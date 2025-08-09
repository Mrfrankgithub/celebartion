import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { JSX } from 'react'

export default function Loader({ onDone }: { onDone: () => void }): JSX.Element | null {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      const t2 = setTimeout(() => onDone(), 300)
      return () => clearTimeout(t2)
    }, 1500)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="blur-surface"
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'linear-gradient(180deg, rgba(255,248,240,0.95), rgba(255,248,240,0.85))',
            display: 'grid', placeItems: 'center'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ position: 'relative', width: 260, height: 220 }}>
            {[0,1,2,3,4].map((i) => (
              <Balloon key={i} index={i} />
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ position: 'absolute', bottom: -48, width: '100%', textAlign: 'center', fontFamily: 'Sora, Inter', fontWeight: 700, color: '#2B2B2B' }}
            >
              Getting the celebration ready...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Balloon({ index }: { index: number }): JSX.Element {
  const colors = ['#FF6B81', '#FFB347', '#6C63FF', '#7ED957', '#FF6B81']
  const delay = index * 0.12
  const left = [10, 50, 90, 30, 70][index]
  const scale = [1, 0.9, 1.1, 0.95, 1.05][index]

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: -60, opacity: 1 }}
      transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', bottom: 0, left: `${left}%`, transform: `translateX(-50%) scale(${scale})` }}
    >
      <svg width="56" height="86" viewBox="0 0 56 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28" cy="28" rx="28" ry="28" fill={colors[index]} />
        <path d="M28 56 C 32 64, 22 68, 28 86" stroke="#C2B8B0" strokeWidth="2" />
        <path d="M22 56 L 34 56 L 28 62 Z" fill={colors[index]} />
      </svg>
    </motion.div>
  )
}