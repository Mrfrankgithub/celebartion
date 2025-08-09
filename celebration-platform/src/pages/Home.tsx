import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import EventShowcase from '../components/EventShowcase'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import FooterCTA from '../components/FooterCTA'
import type { JSX } from 'react'

export default function Home(): JSX.Element {
  return (
    <PageTransition>
      <div className="nav-spacer" />
      <Hero />
      <EventShowcase />
      <HowItWorks />
      <Testimonials />
      <FooterCTA />
    </PageTransition>
  )
}