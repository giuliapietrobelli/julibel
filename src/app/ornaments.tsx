type OrnamentProps = { color?: string }

export function DividerOrnament({ color = '#A8B2A1' }: OrnamentProps) {
  return (
    <svg width="160" height="14" viewBox="0 0 160 14" fill="none" aria-hidden="true">
      <line x1="0" y1="7" x2="65" y2="7" stroke={color} strokeWidth="0.75" />
      <circle cx="70" cy="7" r="1.5" fill={color} />
      <path d="M80 3.5 L83.5 7 L80 10.5 L76.5 7 Z" fill={color} />
      <circle cx="90" cy="7" r="1.5" fill={color} />
      <line x1="95" y1="7" x2="160" y2="7" stroke={color} strokeWidth="0.75" />
    </svg>
  )
}

export function TinyBotanical({ color = '#A8B2A1' }: OrnamentProps) {
  return (
    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
      <line x1="9" y1="26" x2="9" y2="9" stroke={color} strokeWidth="0.75" />
      <path d="M9 18 Q3 15 2 9 Q8 12 9 18Z" fill={color} opacity="0.75" />
      <path d="M9 18 Q15 15 16 9 Q10 12 9 18Z" fill={color} opacity="0.75" />
      <ellipse cx="9" cy="7" rx="2.5" ry="3.5" fill={color} />
    </svg>
  )
}

export function SectionSeparator({ color = '#ECE5DC' }: OrnamentProps) {
  return (
    <div className="flex items-center justify-center w-full gap-4 my-2" aria-hidden="true">
      <div className="flex-1 h-px" style={{ backgroundColor: color }} />
      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
      <div className="flex-1 h-px" style={{ backgroundColor: color }} />
    </div>
  )
}
