'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { DividerOrnament } from './ornaments'

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

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      className="w-full flex flex-col lg:flex-row overflow-hidden lg:min-h-[640px] -mt-24 md:-mt-32 lg:-mt-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── LEFT TEXT PANEL ── */}
      <div
        className="order-2 lg:order-1 relative flex flex-col lg:w-[40%] w-full flex-shrink-0 px-10 md:px-12 xl:px-14 pt-14 pb-20 lg:pt-[14rem] lg:pb-24 min-h-[360px] lg:min-h-0"
        style={{ background: '#F5F1EB' }}
      >
        {/* ── FIXED: main tagline + divider ── */}
        <div>
          <p
            className="font-serif text-3xl max-w-[340px]"
            style={{ color: '#4A4644', lineHeight: 1.1, letterSpacing: '0.02em' }}
          >
            Surface pattern collections inspired by vintage charm, nature and storytelling.
          </p>
          <div className="mt-7">
            <DividerOrnament color="#A8B2A1" />
          </div>
          <p
            className="mt-4 text-[13px] font-light leading-relaxed"
            style={{ color: '#7A726D', letterSpacing: '0.01em' }}
          >
            for fabric, wallpaper and home decor.
          </p>
        </div>

        {/* ── NAVIGATION: dots + arrows ── */}
        <div className="absolute bottom-7 left-10 md:left-12 xl:left-14 right-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
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
      <div className="order-1 lg:order-2 relative w-full lg:flex-1 min-h-[calc(48vh+6rem)] md:min-h-[calc(48vh+8rem)] lg:min-h-0 lg:h-auto overflow-hidden">
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
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
