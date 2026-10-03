import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    number: '01',
    category: 'Healthcare AI • Full-Stack',
    name: 'LifeOS AI',
    description:
      'Intelligent clinical operations and patient management platform integrating real-time biometric telemetry, predictive health risk scores, and automated diagnostic workflows.',
    tags: ['Python', 'FastAPI', 'React', 'Healthcare AI', 'Biometrics'],
    repoUrl: 'https://github.com/ManmohanBora/LifeOS-AI',
    col1Images: ['/projects/lifeos1.jpg', '/projects/lifeos2.jpg'],
    col2Image: '/projects/lifeos3.jpg',
  },
  {
    number: '02',
    category: 'NLP • AI Career Platform',
    name: 'Career Copilot',
    description:
      'AI-driven career mentorship application utilizing natural language processing and TF-IDF vectorization to analyze resumes, benchmark skills, and match optimal job roles.',
    tags: ['Python', 'Streamlit', 'NLP', 'Machine Learning', 'TF-IDF'],
    repoUrl: 'https://github.com/ManmohanBora/Career-Copilot',
    col1Images: ['/projects/career1.jpg', '/projects/career2.jpg'],
    col2Image: '/projects/career3.jpg',
  },
  {
    number: '03',
    category: 'Cybersecurity • Machine Learning',
    name: 'Phishing Threat Detector',
    description:
      'High-precision email security classification system leveraging supervised machine learning models to detect malicious phishing attempts and protect digital infrastructure.',
    tags: ['Python', 'Scikit-Learn', 'Cybersecurity', 'NLP', 'Supervised Learning'],
    repoUrl: 'https://github.com/ManmohanBora/Phishing-Email',
    col1Images: ['/projects/slingshot1.jpg', '/projects/slingshot2.jpg'],
    col2Image: '/projects/slingshot3.jpg',
  },
]

const totalCards = projects.length

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col origin-top"
        style={{ scale }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
            <span
              className="font-black text-[#D7E2EA] hero-heading flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-4 md:pt-6">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p className="text-[#D7E2EA]/70 text-xs sm:text-sm max-w-xl line-clamp-2 mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-[#D7E2EA] font-mono border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <LiveProjectButton href={project.repoUrl} text="View Code" />
          </div>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 flex-1 min-h-0">
          {/* Left column - 40% - 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-shrink-0 relative group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Images[0]}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden flex-1 relative group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Images[1]}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column - 60% - 1 tall image */}
          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative group">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Featured Projects
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
