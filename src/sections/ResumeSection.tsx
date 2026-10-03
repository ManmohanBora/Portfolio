import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import {
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Code2,
  Database,
  BarChart3,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  FileText,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Machine Learning & Programming',
    icon: <Code2 size={20} className="text-purple-400" />,
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'NLP', 'Streamlit'],
  },
  {
    title: 'Data & Databases',
    icon: <Database size={20} className="text-blue-400" />,
    skills: ['SQL (MySQL)', 'ETL Pipelines', 'EDA', 'Data Preprocessing', 'Feature Engineering', 'Customer Segmentation'],
  },
  {
    title: 'BI & Analytics Reporting',
    icon: <BarChart3 size={20} className="text-emerald-400" />,
    skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'KPI Dashboards'],
  },
  {
    title: 'Cloud & Tools',
    icon: <Award size={20} className="text-amber-400" />,
    skills: ['AWS Cloud Foundations', 'Git', 'GitHub', 'Jupyter Notebook', 'HTML', 'CSS'],
  },
]

const educationList = [
  {
    degree: 'M.Sc. Data Science & Big Data Analytics',
    institution: 'MIT World Peace University, Pune',
    period: 'July 2025 – Present',
    badge: 'In Progress',
  },
  {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Indus Institute of Technology, Ahmedabad',
    period: 'July 2020 – April 2024',
    badge: 'CGPA: 8.99 / 10',
  },
]

const certifications = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', date: 'Sep 2023' },
  { name: 'Machine Learning using Python', issuer: 'Indus University, Ahmedabad', date: 'Dec 2021' },
]

const publications = [
  { title: 'Interpretable ML for Early Diabetes Detection', venue: 'BITS-26' },
  { title: 'Flood Prediction Near Coastal Areas: A Survey', venue: 'Research Survey' },
]

const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview')

  return (
    <section
      id="resume"
      className="bg-[#0C0C0C] relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
              <FileText size={14} className="text-purple-400" />
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium tracking-wider uppercase font-mono">
                Verified Credentials & Experience
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none mb-6"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
            >
              Resume / CV
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p
              className="text-[#D7E2EA]/70 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg mb-8"
            >
              Machine Learning intern candidate with hands-on experience building end-to-end ML pipelines,
              feature engineering, and model deployment. Currently pursuing M.Sc. in Data Science at MIT WPU.
            </p>
          </FadeIn>

          {/* Quick Contact & Action Bar */}
          <FadeIn delay={0.3} y={20} className="w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={14} className="text-emerald-400" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Mail size={14} className="text-blue-400" />
              <a href="mailto:boraamit01@gmail.com" className="hover:underline">
                boraamit01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Phone size={14} className="text-purple-400" />
              <span>+91 8160508938</span>
            </div>

            <a
              href="/resume.pdf"
              download="Manmohan_Bora_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-white font-medium uppercase tracking-wider text-xs sm:text-sm cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 select-none shadow-lg shadow-purple-900/30"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              <Download size={16} />
              <span>Download Official PDF</span>
            </a>
          </FadeIn>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-[#0C0C0C] shadow-md font-semibold'
                  : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              Structured Profile
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-[#0C0C0C] shadow-md font-semibold'
                  : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              Official Document View
            </button>
          </div>
        </div>

        {/* Tab 1: Structured Profile View */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - 7 cols */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Education Card */}
              <FadeIn delay={0.1} y={30}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                      <GraduationCap size={22} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                      Education
                    </h3>
                  </div>

                  <div className="flex flex-col gap-6">
                    {educationList.map((edu, i) => (
                      <div
                        key={i}
                        className="relative pl-6 border-l-2 border-purple-500/40 pb-2 last:pb-0"
                      >
                        <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-purple-400" />
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h4 className="text-base sm:text-lg font-semibold text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono border border-purple-500/30">
                            {edu.badge}
                          </span>
                        </div>
                        <p className="text-[#D7E2EA]/80 text-sm">{edu.institution}</p>
                        <span className="text-[#D7E2EA]/50 text-xs font-mono">{edu.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Experience Card */}
              <FadeIn delay={0.2} y={30}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                      <Briefcase size={22} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                      Work Experience
                    </h3>
                  </div>

                  <div className="relative pl-6 border-l-2 border-blue-500/40 pb-2">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-blue-400" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        Web Developer Intern
                      </h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono border border-blue-500/30">
                        Oct 2021 – Nov 2021
                      </span>
                    </div>
                    <p className="text-[#D7E2EA]/80 text-sm mb-3">Skill Vertex · Remote, Karnataka</p>
                    <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#D7E2EA]/70">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>Designed and shipped a full eCommerce platform with product catalog, search, and secure checkout within 6 weeks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>Implemented on-page technical SEO (meta tags, structured data, keyword optimization), boosting organic discoverability by 20%.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Publications & Certifications Card */}
              <FadeIn delay={0.3} y={30}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Certifications */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                        <Award size={18} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold uppercase text-white">
                        Certifications
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3">
                      {certifications.map((cert, i) => (
                        <div key={i} className="border-b border-white/5 pb-2 last:border-0">
                          <p className="text-white text-sm font-medium">{cert.name}</p>
                          <p className="text-[#D7E2EA]/60 text-xs">{cert.issuer} • {cert.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Publications */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <BookOpen size={18} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold uppercase text-white">
                        Publications
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3">
                      {publications.map((pub, i) => (
                        <div key={i} className="border-b border-white/5 pb-2 last:border-0">
                          <p className="text-white text-sm font-medium">{pub.title}</p>
                          <span className="text-emerald-400 text-xs font-mono">{pub.venue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - 5 cols: Technical Skills Matrix */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeIn delay={0.2} y={30}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm sticky top-28">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wide mb-6">
                    Technical Skills
                  </h3>

                  <div className="flex flex-col gap-6">
                    {skillCategories.map((cat, i) => (
                      <div key={i} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2.5 mb-3">
                          {cat.icon}
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            {cat.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#D7E2EA] font-mono border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#0C0C0C] transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Open Full PDF in New Tab</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        )}

        {/* Tab 2: Official Document View */}
        {activeTab === 'preview' && (
          <FadeIn delay={0.1} y={20}>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl p-4 sm:p-6 flex flex-col items-center">
              <div className="w-full flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-[#D7E2EA]/60 ml-2 font-mono">Manmohan_Bora_Resume.pdf</span>
                </div>
                <a
                  href="/resume.pdf"
                  download="Manmohan_Bora_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-medium"
                >
                  <Download size={14} />
                  <span>Download File</span>
                </a>
              </div>

              <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl border border-black/30 bg-white">
                <img
                  src="/resume_preview.png"
                  alt="Manmohan Bora Resume Preview"
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0C0C0C] font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  <span>Open PDF Directly</span>
                </a>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default ResumeSection
