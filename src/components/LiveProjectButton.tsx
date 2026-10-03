import React from 'react'
import { ExternalLink } from 'lucide-react'

interface LiveProjectButtonProps {
  href?: string
  text?: string
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = 'https://github.com/ManmohanBora',
  text = 'View Repository',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm cursor-pointer hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-200 active:scale-95 select-none"
    >
      <span>{text}</span>
      <ExternalLink size={15} />
    </a>
  )
}

export default LiveProjectButton
