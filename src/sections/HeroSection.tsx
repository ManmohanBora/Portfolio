import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'
import { FileText } from 'lucide-react'
import { Linkedin, Github } from '../components/SocialIcons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8 z-30">
        <nav className="flex justify-between items-center">
          <div className="flex gap-6 sm:gap-8 md:gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & Resume CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] text-xs sm:text-sm font-medium tracking-wide uppercase hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manmohan-bora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manmohan Bora LinkedIn"
              className="text-[#D7E2EA] p-2 rounded-full border border-[#D7E2EA]/30 hover:border-[#D7E2EA] hover:bg-white/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/ManmohanBora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manmohan Bora GitHub"
              className="text-[#D7E2EA] p-2 rounded-full border border-[#D7E2EA]/30 hover:border-[#D7E2EA] hover:bg-white/10 transition-all duration-200"
            >
              <Github size={18} />
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 flex-shrink-0 flex justify-center">
        <h1
          className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-center text-[9vw] sm:text-[9.8vw] md:text-[10.4vw] lg:text-[11vw] px-4 md:px-8"
        >
          Hi, i&apos;m manmohan
        </h1>
      </FadeIn>

      {/* Hero Portrait */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none z-10">
        <div className="w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={100}
              strength={16}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src="/avatar_manmohan_hd.png"
                alt="Manmohan Bora Portrait"
                className="w-full h-auto pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex-1" />
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[210px] sm:max-w-[280px] md:max-w-[340px]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
          >
            a backend & machine learning engineer driven by architecting robust scalable systems and intelligent ai pipelines
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm cursor-pointer hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-200 active:scale-95 select-none"
            >
              <FileText size={16} />
              <span>Resume / CV</span>
            </a>
            <ContactButton href="https://www.linkedin.com/in/manmohan-bora" text="Connect on LinkedIn" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
