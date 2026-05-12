'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const slides = [
  { title: 'Dreamy Jungle Nursery', image: '/collection-hero-sleepy-jungle-2560x700.png', imagePosition: '58% center' },
  { title: 'Secret Garden', image: '/collection-hero-enchanted-woodland-2560x700.png', imagePosition: '32% center' },
  { title: 'Soft Tide', image: '/collection-hero-beachy-boho-2560x700.png', imagePosition: 'center' },
  { title: 'Echoes of Siam', image: '/collection-hero-echoes-siam-2560x700.png', imagePosition: 'center' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = slides.length
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [paused, next])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  const dots = (
    <div className="flex items-center gap-4">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`transition-all duration-500 rounded-full ${
            i === current
              ? 'w-6 h-[2px] bg-charcoal'
              : 'w-[5px] h-[5px] hover:bg-warm-gray'
          }`}
          style={i !== current ? { backgroundColor: '#C5BFB9' } : undefined}
        />
      ))}
    </div>
  )

  return (
    <section
      className="w-full flex flex-col overflow-hidden md:min-h-[640px] -mt-24 md:-mt-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── PANELS ROW ── */}
      <div className="flex flex-row flex-1 min-h-[340px] md:min-h-0">

        {/* ── LEFT TEXT PANEL ── */}
        <div
          className="relative flex flex-col w-1/2 lg:w-[40%] flex-shrink-0 px-5 md:px-12 xl:px-14 pt-24 pb-6 md:pt-72 md:pb-24"
          style={{ background: '#F5F1EB' }}
        >
          <div className="flex-1 flex flex-col justify-center md:justify-start">
            <p
              className="font-serif text-2xl md:text-3xl max-w-[340px]"
              style={{ color: '#4A4644', lineHeight: 1.1, letterSpacing: '0.02em' }}
            >
              Surface pattern collections inspired by vintage charm, nature and storytelling.
            </p>
            <p
              className="mt-3 text-[13px] font-light leading-relaxed"
              style={{ color: '#7A726D', letterSpacing: '0.01em' }}
            >
              for fabric, wallpaper and home decor.
            </p>
          </div>

          {/* ── DESKTOP NAV: dots + arrows ── */}
          <div className="hidden md:flex absolute bottom-7 left-12 xl:left-14 right-5 items-center justify-between">
            {dots}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="w-8 h-8 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                style={{ borderColor: '#D9D3CB' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M6.5 2L3 5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-8 h-8 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                style={{ borderColor: '#D9D3CB' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT IMAGE PANEL ── */}
        <div
          className="relative flex-1 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                style={{ objectPosition: slide.imagePosition }}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 864px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE NAV BAR ── */}
      <div
        className="md:hidden flex items-center justify-center py-6"
        style={{ background: '#F5F1EB' }}
      >
        {dots}
      </div>
    </section>
  )
}
