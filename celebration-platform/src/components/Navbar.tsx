import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import type { JSX } from 'react'

const dropdownMotion = {
  initial: { opacity: 0, y: -8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12 } }
}

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<null | 'events' | 'more'>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) setOpenMenu(null)
  }, [mobileOpen])

  return (
    <nav
      className={clsx('blur-surface')}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,248,240,0.7)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'transparent'
      }}
    >
      <div className="container" style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: 'var(--color-primary)', boxShadow: '0 0 0 6px rgba(255,179,71,0.25)' }} />
          <span style={{ fontFamily: 'Sora', fontWeight: 800, letterSpacing: -0.5 }}>Celebrate</span>
        </Link>

        <div className="flex items-center gap-8" style={{ display: 'none' }}>
          {/* hidden placeholder for SSR-friendly CSS; actual desktop menu below */}
        </div>

        {/* Desktop */}
        <div className="flex items-center gap-8" style={{ display: 'none' }} />
        <div className="flex items-center gap-8" style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }} onMouseLeave={() => setOpenMenu(null)}>
            <button className="btn btn-secondary" onMouseEnter={() => setOpenMenu('events')} onClick={() => setOpenMenu(openMenu === 'events' ? null : 'events')}>Events ▾</button>
            <AnimatePresence>
              {openMenu === 'events' && (
                <motion.div {...dropdownMotion} style={{ position: 'absolute', top: 52, left: 0, background: '#fff', borderRadius: 14, boxShadow: 'var(--shadow-soft)', padding: 12, minWidth: 220 }}>
                  <DropdownLink to="/events#birthdays" label="Birthdays 🎂" />
                  <DropdownLink to="/events#graduations" label="Graduations 🎓" />
                  <DropdownLink to="/events#weddings" label="Weddings 💍 & Engagements 💑" />
                  <DropdownLink to="/events#career" label="New Jobs 💼 & Promotions 📈" />
                  <DropdownLink to="/events#milestones" label="New City 🏙️, New Home 🏡, Anniversaries ❤️" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ position: 'relative' }} onMouseLeave={() => setOpenMenu(null)}>
            <button className="btn btn-secondary" onMouseEnter={() => setOpenMenu('more')} onClick={() => setOpenMenu(openMenu === 'more' ? null : 'more')}>More ▾</button>
            <AnimatePresence>
              {openMenu === 'more' && (
                <motion.div {...dropdownMotion} style={{ position: 'absolute', top: 52, left: 0, background: '#fff', borderRadius: 14, boxShadow: 'var(--shadow-soft)', padding: 12, minWidth: 220 }}>
                  <DropdownLink to="/stories" label="Happy Stories" />
                  <DropdownLink to="/about" label="About Us" />
                  <DropdownLink to="/faq" label="FAQ / Help Center" />
                  <DropdownLink to="/contact" label="Contact" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/create" className={({ isActive }) => clsx('btn btn-primary', isActive && 'active')}>Start a Celebration</NavLink>

          {/* Mobile toggle */}
          <button className="btn" aria-label="Open menu" onClick={() => setMobileOpen(v => !v)} style={{ background: '#fff', color: 'var(--color-text)', display: 'none' }}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="container" style={{ overflow: 'hidden' }}>
            <div className="section" style={{ paddingTop: 12, paddingBottom: 20 }}>
              <div style={{ display: 'grid', gap: 10 }}>
                <NavLink to="/events" onClick={() => setMobileOpen(false)}>All Events</NavLink>
                <NavLink to="/stories" onClick={() => setMobileOpen(false)}>Stories</NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
                <NavLink to="/faq" onClick={() => setMobileOpen(false)}>FAQ</NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
                <NavLink to="/create" onClick={() => setMobileOpen(false)} className={() => 'btn btn-primary'}>Start a Celebration</NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function DropdownLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} style={({ isActive }) => ({
      display: 'block', padding: '10px 12px', borderRadius: 10,
      background: isActive ? 'rgba(108,99,255,0.08)' : 'transparent'
    })}>
      {label}
    </NavLink>
  )
}