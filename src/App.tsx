import React from 'react'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ResumeSection from './sections/ResumeSection'
import ContactSection from './sections/ContactSection'

const App: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] font-kanit text-[#D7E2EA] selection:bg-purple-600 selection:text-white" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}

export default App
