import { useCallback, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import type { JSX } from 'react'

import Navbar from './components/Navbar'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Events from './pages/Events'
import CreateCelebration from './pages/CreateCelebration'
import Stories from './pages/Stories'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

export default function App(): JSX.Element {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()
  const onLoaderDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <Loader onDone={onLoaderDone} />}
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create" element={<CreateCelebration />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AnimatePresence>
      <footer className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>© {new Date().getFullYear()} Celebrate — All rights reserved.</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}
