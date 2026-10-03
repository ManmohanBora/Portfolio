import React, { useRef, useEffect, useState } from 'react'

const row1Images = [
  '/marquee/powerbi.jpg',
  '/marquee/lifeos1.jpg',
  '/marquee/model_benchmark_roc.jpg',
  '/marquee/career1.jpg',
  '/marquee/feature_importance.jpg',
  '/marquee/slingshot1.jpg',
]

const row2Images = [
  '/marquee/neural_training_loss.jpg',
  '/marquee/lifeos3.jpg',
  '/marquee/customer_clusters.jpg',
  '/marquee/career3.jpg',
  '/marquee/confusion_matrix.jpg',
  '/marquee/slingshot3.jpg',
]

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Triple images for seamless scrolling
  const tripled1 = [...row1Images, ...row1Images, ...row1Images]
  const tripled2 = [...row2Images, ...row2Images, ...row2Images]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right */}
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripled1.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-white/5 shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - moves left */}
      <div className="flex gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripled2.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-white/5 shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
