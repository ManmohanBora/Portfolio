import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { ArrowUpRight, Mail, Sparkles, MapPin, FileText, Phone } from 'lucide-react'
import { Linkedin, Github } from '../components/SocialIcons'

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Badge */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium tracking-wide uppercase">
              Open for opportunities & collaborations
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={20}>
          <p
            className="text-[#D7E2EA]/70 text-center font-light leading-relaxed max-w-2xl mb-12 sm:mb-16"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
          >
            Whether you have an ambitious software project, want to discuss machine learning applications,
            or are looking to hire a driven software engineer, my inbox is always open.
          </p>
        </FadeIn>

        {/* Contact Info Pills */}
        <FadeIn delay={0.25} y={20} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="mailto:boraamit01@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA] text-xs sm:text-sm hover:border-purple-400 hover:text-white transition-all"
          >
            <Mail size={15} className="text-purple-400" />
            <span>boraamit01@gmail.com</span>
          </a>
          <a
            href="tel:+918160508938"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA] text-xs sm:text-sm hover:border-blue-400 hover:text-white transition-all"
          >
            <Phone size={15} className="text-blue-400" />
            <span>+91 8160508938</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/80 text-xs sm:text-sm">
            <MapPin size={15} className="text-emerald-400" />
            <span>Pune, India</span>
          </div>
        </FadeIn>

        {/* Social Cards Grid */}
        <FadeIn delay={0.3} y={30} className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/manmohan-bora"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl border border-[#D7E2EA]/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-8 hover:border-[#0077B5]/60 hover:from-[#0077B5]/10 hover:to-transparent transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-[#0077B5]/20 text-[#0077B5] group-hover:scale-110 group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                  <Linkedin size={32} />
                </div>
                <div className="p-2 rounded-full border border-white/10 group-hover:border-white/40 text-[#D7E2EA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-mono mb-1">
                  Professional Network
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-[#0077B5] transition-colors">
                  LinkedIn Profile
                </h3>
                <span className="text-[#D7E2EA]/70 text-sm font-mono break-all">
                  linkedin.com/in/manmohan-bora
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/ManmohanBora"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl border border-[#D7E2EA]/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-8 hover:border-white/50 hover:from-white/10 hover:to-transparent transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#0C0C0C] transition-all duration-300">
                  <Github size={32} />
                </div>
                <div className="p-2 rounded-full border border-white/10 group-hover:border-white/40 text-[#D7E2EA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-mono mb-1">
                  Code Repositories
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 transition-colors">
                  GitHub Profile
                </h3>
                <span className="text-[#D7E2EA]/70 text-sm font-mono break-all">
                  github.com/ManmohanBora
                </span>
              </div>
            </a>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.4} y={20} className="mb-20 flex flex-wrap justify-center items-center gap-4">
          <ContactButton
            href="https://www.linkedin.com/in/manmohan-bora"
            text="Message on LinkedIn"
            className="text-base sm:text-lg"
          />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3.5 sm:px-10 sm:py-4 text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base cursor-pointer hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-200 active:scale-95 select-none"
          >
            <FileText size={18} />
            <span>Download CV</span>
          </a>
        </FadeIn>

        {/* Footer info bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#D7E2EA]/50 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Manmohan Bora</span>
            <span>•</span>
            <span>Backend & Machine Learning Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume / CV
            </a>
            <a
              href="https://github.com/ManmohanBora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manmohan-bora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#root"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
