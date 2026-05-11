"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  image: StaticImageData | string
  children?: ReactNode
  noSave?: boolean
}

const TILE = 360
const COLS = 7
const ROWS = 6

export default function ParallaxHero({ title, description, image, children, noSave }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const tileRef = useRef<HTMLDivElement>(null)
  const src = typeof image === 'string' ? image : image.src

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return
      gridRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Inject background URL via JS so it never appears in static HTML source
  useEffect(() => {
    if (!noSave || !tileRef.current) return
    tileRef.current.style.backgroundImage = `url(${src})`
  }, [noSave, src])

  return (
    <div className="relative overflow-hidden -mt-24 md:-mt-32">
      <div
        ref={gridRef}
        className="absolute"
        style={{ top: noSave ? '-100px' : `-${TILE}px`, left: 0, right: 0, height: noSave ? '800px' : `${ROWS * TILE}px` }}
        onContextMenu={noSave ? (e) => e.preventDefault() : undefined}
      >
        {noSave
          ? (
              <div
                ref={tileRef}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                  userSelect: 'none',
                }}
              />
            )
          : /* eslint-disable-next-line @next/next/no-img-element */
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, ${TILE}px)`, gridAutoRows: `${TILE}px` }}>
              {Array.from({ length: COLS * ROWS }).map((_, i) => (
                <img key={i} src={src} alt="" width={TILE} height={TILE} style={{ objectFit: 'cover', display: 'block' }} />
              ))}
            </div>
        }
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
