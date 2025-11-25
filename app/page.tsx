'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import TrustedBySection from '@/components/trusted-by-section'
import BenefitsSection from '@/components/benefits-section'
import FeaturesSection from '@/components/features-section'
import HowItWorksSection from '@/components/how-it-works-section'
import PricingSection from '@/components/pricing-section'
import TestimonialsSection from '@/components/testimonials-section'
import SecuritySection from '@/components/security-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header scrolled={scrolled} />
      <HeroSection />
      <TrustedBySection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <SecuritySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
