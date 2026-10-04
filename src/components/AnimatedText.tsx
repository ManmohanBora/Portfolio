import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <AnimatedWord
            word={word}
            index={i}
            total={words.length}
            progress={scrollYProgress}
          />
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </p>
  )
}

interface AnimatedWordProps {
  word: string
  index: number
  total: number
  progress: any
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, total, progress }) => {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{word}</span>
      <motion.span
        className="absolute left-0 top-0 whitespace-nowrap"
        style={{ opacity }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default AnimatedText
