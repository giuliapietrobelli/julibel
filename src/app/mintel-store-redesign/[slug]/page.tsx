"use client"

import { useEffect, useRef } from 'react'
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PaginationLinks from '../../pagination-links'
import { designs } from '../designs'

const TILE = 360
const COLS = 7
const ROWS = 6

export default function DesignPage() {
  const { slug } = useParams<{ slug: string }>()
  const gridRef = useRef<HTMLDivElement>(null)

  const index = designs.findIndex((d) => d.slug === slug)
  const design = designs[index]
  const prev = designs[index - 1]
  const next = designs[index + 1]

  useEffect(() => {
    if (!design) return
    const handleScroll = () => {
      if (!gridRef.current) return
      gridRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [design])

  if (!design) notFound()

  return (
    <>
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
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
            <img key={i} src={design.src} alt="" width={TILE} height={TILE} style={{ objectFit: 'cover', display: 'block' }} />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-white text-center px-8 max-w-2xl">
          <h1 className="font-normal text-3xl md:text-5xl leading-snug">{design.title}</h1>
          <p className="font-extralight text-base md:text-lg leading-relaxed opacity-90">
            Part of the Retro Country collection — prairie florals, vintage gingham and botanical prints in muted denim blue, mustard and natural beige.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://www.spoonflower.com/collections/1453699-retro-country-by-julibel_studio"
              target="_blank"
              className="px-8 py-3 bg-white text-zinc-900 text-sm font-extralight hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              Shop on Spoonflower
            </Link>
            <Link
              href="/mintel-store-redesign"
              className="px-8 py-3 border border-white text-white text-sm font-extralight hover:bg-white hover:text-zinc-900 transition-colors duration-300"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-16 flex justify-center">
        <div className="w-full max-w-2xl">
          <Image src={design.src} alt={design.alt} width={1400} height={1400} className="w-full" />
        </div>
      </div>

      <PaginationLinks
        prev={prev ? prev.title : 'Retro Country'}
        prevLink={prev ? `/mintel-store-redesign/${prev.slug}` : '/mintel-store-redesign'}
        next={next ? next.title : 'Retro Country'}
        nextLink={next ? `/mintel-store-redesign/${next.slug}` : '/mintel-store-redesign'}
      />
    </>
  )
}
