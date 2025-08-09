import { motion } from 'framer-motion'
import type { PropsWithChildren, JSX } from 'react'

export default function PageTransition({ children }: PropsWithChildren): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ minHeight: 'calc(100vh - 72px)' }}
    >
      {children}
    </motion.main>
  )
}