'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const slides = [
  { title: 'Dreamy Jungle Nursery', image: '/home-carousel-1.png', imagePosition: 'center', bgImage: '/collection-sleepy-jungle.png' },
  { title: 'Secret Garden',         image: '/home-carousel-2.png', imagePosition: 'center', bgImage: '/collection-beachy-boho.png' },
  { title: 'Soft Tide',             image: '/home-carousel-3.png', imagePosition: 'center', bgImage: '/collection-enchanted-woodland.png' },
  { title: 'Echoes of Siam',        image: '/home-carousel-4.png', imagePosition: 'center', bgImage: '/collection-retro-country.png' },
  { title: '',                       image: '/home-carousel-5.png', imagePosition: 'center', bgImage: '/collection-echoes-siam.png' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slideKeys, setSlideKeys] = useState(() => slides.map((_, i) => i))
  const total = slides.length
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    setSlideKeys(prev => {
      const next = [...prev]
      next[current] = Date.now()
      return next
    })
  }, [current])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <section
      className="w-full flex flex-col overflow-hidden md:min-h-[640px] lg:min-h-[560px] -mt-24 lg:-mt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── PANELS ROW ── */}
      <div className="relative flex flex-row flex-1 min-h-[420px] md:min-h-0">

        {/* ── MOBILE TEXT OVERLAY ── */}
        <div className="lg:hidden absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto w-[78%] max-w-xs">
            <div
              className="flex flex-col p-8"
              style={{ backgroundColor: 'rgba(245, 241, 235, 0.88)' }}
            >
              <p
                className="font-serif text-xl"
                style={{ color: '#4A4644', lineHeight: 1.2, letterSpacing: '0.02em' }}
              >
                Surface pattern collections inspired by vintage charm, nature and storytelling.
              </p>
              <p
                className="mt-2 text-[11px] font-light leading-relaxed"
                style={{ color: '#7A726D', letterSpacing: '0.01em' }}
              >
                for fabric, wallpaper and home decor.
              </p>
            </div>
          </div>
        </div>

        {/* ── LEFT TEXT PANEL ── (desktop only) */}
        <div className="hidden lg:relative lg:flex lg:flex-col lg:w-[40%] lg:flex-shrink-0 lg:overflow-hidden">

          {/* Per-slide background images — fade between them */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={slide.bgImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 576px"
                priority={i === 0}
                aria-hidden="true"
              />
            </div>
          ))}

          {/* Outer wrapper: clears fixed header, then equal gap around the box */}
          <div className="flex-1 flex flex-col pt-24 lg:pt-24 relative z-10">
            <div className="flex-1 p-8 md:p-10 lg:p-8 xl:p-12">
              {/* Semi-transparent box fills available space, text centered vertically / nav bottom */}
              <div
                className="h-full flex flex-col p-10 md:p-12 lg:p-10 xl:p-16"
                style={{ backgroundColor: 'rgba(245, 241, 235, 0.82)' }}
              >
                <div className="flex-1 flex items-center">
                  <div>
                    <p
                      className="font-serif text-xl md:text-2xl min-[855px]:text-3xl xl:text-[2.125rem]"
                      style={{ color: '#4A4644', lineHeight: 1.2, letterSpacing: '0.02em' }}
                    >
                      Surface pattern collections inspired by vintage charm, nature and storytelling.
                    </p>
                    <p
                      className="mt-2 lg:mt-3 text-[11px] md:text-[12px] lg:text-[13px] font-light leading-relaxed"
                      style={{ color: '#7A726D', letterSpacing: '0.01em' }}
                    >
                      for fabric, wallpaper and home decor.
                    </p>
                  </div>
                </div>

                {/* ── NAV: dots + arrows — desktop only ── */}
                <div className="hidden lg:flex items-center justify-between mt-8 xl:mt-12">
                  <div className="flex items-center gap-4">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-500 rounded-full ${
                          i === current
                            ? 'w-8 h-[2px] bg-charcoal'
                            : 'w-2 h-2 hover:bg-warm-gray'
                        }`}
                        style={i !== current ? { backgroundColor: '#C5BFB9' } : undefined}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous slide"
                      className="w-10 h-10 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                      style={{ borderColor: '#D9D3CB' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M6.5 2L3 5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next slide"
                      className="w-10 h-10 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                      style={{ borderColor: '#D9D3CB' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div key={slideKeys[i]} className="absolute inset-0 animate-ken-burns">
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
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE + TABLET NAV BAR ── */}
      <div
        className="lg:hidden flex items-center justify-between px-6 py-5"
        style={{ background: '#F5F1EB' }}
      >
        <div className="flex items-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-8 h-[2px] bg-charcoal'
                  : 'w-2 h-2 hover:bg-warm-gray'
              }`}
              style={i !== current ? { backgroundColor: '#C5BFB9' } : undefined}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-9 h-9 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
            style={{ borderColor: '#D9D3CB' }}
          >
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M6.5 2L3 5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-9 h-9 flex items-center justify-center border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors duration-300"
            style={{ borderColor: '#D9D3CB' }}
          >
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
