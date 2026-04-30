"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  image: StaticImageData | string
  children?: ReactNode
}

const TILE = 360
const COLS = 7
const ROWS = 6

export default function ParallaxHero({ title, description, image, children }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const src = typeof image === 'string' ? image : image.src

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return
      gridRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden -mt-24 md:-mt-32">
      <div
        ref={gridRef}
        className="absolute"
        style={{
          top: `-${TILE}px`,
          left: 0,
          right: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, ${TILE}px)`,
          gridAutoRows: `${TILE}px`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <img key={i} src={src} alt="" width={TILE} height={TILE} style={{ objectFit: 'cover', display: 'block' }} />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col px-8 pt-24 md:pt-32">
        <Link href="/" className="mt-4 text-sm font-extralight text-white/70 hover:text-white transition-colors duration-300">
          ← All collections
        </Link>

        <div className="flex flex-col items-center gap-8 text-white text-center max-w-2xl mx-auto pt-16 pb-24">
          <h1 className="font-normal text-3xl md:text-5xl leading-snug">{title}</h1>
          {description && (
            <p className="font-extralight text-base md:text-lg leading-relaxed opacity-90">{description}</p>
          )}
          {children && (
            <div className="flex flex-wrap gap-4 justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
