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
      <div className="relative min-h-[70vh] overflow-hidden flex items-center justify-center -mt-24 md:-mt-32 pt-24 md:pt-32">
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

        <Link href="/secret-garden" className="absolute z-20 left-8 top-36 md:top-44 lg:top-28 text-sm font-extralight text-white/80 hover:text-white transition-colors">
          ← Collections
        </Link>

        <div className="animate-fade-up relative z-10 flex flex-col items-center gap-8 text-white text-center px-8 max-w-2xl py-16 md:py-20">
          <h1 className="font-medium text-3xl md:text-4xl leading-tight">{design.title}</h1>
          <p className="font-extralight text-sm md:text-base leading-loose opacity-90">
            Part of the Secret Garden collection — enchanted botanicals, cottagecore florals and romantic garden prints in rich jewel tones and soft naturals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://www.spoonflower.com/collections/938595-secret-garden-by-julibel_studio"
              target="_blank"
              className="px-8 py-3 bg-white text-zinc-900 text-sm font-extralight hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              Shop on Spoonflower
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white text-sm font-extralight hover:bg-white hover:text-zinc-900 transition-colors duration-300"
            >
              Enquire about Licensing
            </Link>
          </div>
        </div>
      </div>

      <div className="animate-fade-up-delay container py-16 flex justify-center">
        <div className="w-full max-w-2xl">
          <Image src={design.src} alt={design.alt} width={1400} height={1400} className="w-full" />
        </div>
      </div>

      <PaginationLinks
        prev={prev ? prev.title : 'Secret Garden'}
        prevLink={prev ? `/secret-garden/${prev.slug}` : '/secret-garden'}
        next={next ? next.title : 'Secret Garden'}
        nextLink={next ? `/secret-garden/${next.slug}` : '/secret-garden'}
      />
    </>
  )
}
