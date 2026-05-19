"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { DividerOrnament } from './ornaments'

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
    <div className="relative overflow-hidden -mt-24 lg:-mt-32">
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

      <div className="relative z-10 flex flex-col pt-24 lg:pt-32">
        <div className="max-w-[1440px] mx-auto w-full px-8 md:px-12 xl:px-16">
          <Link href="/#collections" className="mt-8 inline-block text-xs font-light tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors duration-300">
            ← All collections
          </Link>
        </div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-10 pt-10 pb-24 md:pt-16 md:pb-24 md:px-0">
          <div
            className="flex flex-col items-center gap-5 w-full px-10 py-10 md:px-16 md:py-12"
            style={{ backgroundColor: 'rgba(245, 241, 235, 0.88)' }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl" style={{ lineHeight: 1.1, letterSpacing: '0.02em', color: '#4A4644' }}>{title}</h1>
    {description && (
              <p className="font-extralight text-sm leading-relaxed max-w-sm text-warm-gray">{description}</p>
            )}
            {children && (
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
