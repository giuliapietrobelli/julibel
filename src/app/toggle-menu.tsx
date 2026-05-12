"use client"

export default function Toggle({ onClick, isMenuOpen }: { onClick: () => void; isMenuOpen: boolean }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center lg:hidden"
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        {/*
          Both rects have their center at x=12.
          Top bar center: y=8. Bottom bar center: y=16.
          Viewbox center: y=12.
          translate-y-[4px] moves top bar center from 8 → 12.
          -translate-y-[4px] moves bottom bar center from 16 → 12.
          With transform-box:fill-box the rotation is around the rect's own center.
        */}
        <rect
          x="2" y="7" width="20" height="2" rx="1"
          fill="#4A4644"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          className={`transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-[4px] rotate-45' : ''
          }`}
        />
        <rect
          x="2" y="15" width="20" height="2" rx="1"
          fill="#4A4644"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          className={`transition-transform duration-300 ease-in-out ${
            isMenuOpen ? '-translate-y-[4px] -rotate-45' : ''
          }`}
        />
      </svg>
    </button>
  )
}
