import React from 'react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    name: 'Full-Stack Web Development',
    description:
      'Engineering modern, scalable web applications using React, TypeScript, Python, and Node.js with high performance, intuitive UX, and modular architecture.',
  },
  {
    number: '02',
    name: 'AI & Machine Learning Solutions',
    description:
      'Developing and deploying production-ready ML models, NLP pipelines, TF-IDF vectorization, LLM agents, and intelligent automated workflows.',
  },
  {
    number: '03',
    name: 'Cloud & Backend Architecture',
    description:
      'Designing resilient microservices, high-throughput REST and GraphQL APIs, robust database schemas, and scalable cloud-native architectures.',
  },
  {
    number: '04',
    name: 'Cybersecurity & Threat Detection',
    description:
      'Implementing automated threat intelligence, supervised machine learning phishing email classifiers, and secure application development practices.',
  },
  {
    number: '05',
    name: 'Data Engineering & Pipeline Systems',
    description:
      'Building robust data extraction, transformation, and visualization pipelines to turn complex data streams into real-time actionable insights.',
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-3 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
