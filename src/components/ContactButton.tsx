import React from 'react'

interface ContactButtonProps {
  href?: string
  text?: string
  target?: string
  className?: string
}

const ContactButton: React.FC<ContactButtonProps> = ({
  href = 'https://www.linkedin.com/in/manmohan-bora',
  text = 'Contact Me',
  target = '_blank',
  className = '',
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 select-none text-center ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {text}
    </a>
  )
}

export default ContactButton
