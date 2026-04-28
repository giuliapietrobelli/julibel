"use client"

import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import PaginationLinks from './pagination-links'

type Props = {
  title: string
  image: StaticImageData | string
  alt: string
  galleryLink: string
  description?: string
  prevLabel: string
  prevLink: string
  nextLabel: string
  nextLink: string
}

const TILE = 360
const COLS = 7
const ROWS = 6

export default function ImageSubpage({ title, image, alt, galleryLink, description, prevLabel, prevLink, nextLabel, nextLink }: Props) {
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
            <img key={i} src={src} alt="" width={TILE} height={TILE} style={{ objectFit: 'cover', display: 'block' }} />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-white text-center px-8 max-w-2xl">
          <h1 className="font-normal text-3xl md:text-5xl leading-snug">{title}</h1>
          {description && (
            <p className="font-extralight text-base md:text-lg leading-relaxed opacity-90">{description}</p>
          )}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={galleryLink} className="px-8 py-3 border border-white text-white text-sm font-extralight hover:bg-white hover:text-zinc-900 transition-colors duration-300">
              View Collection
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-zinc-900 text-sm font-extralight hover:bg-transparent hover:text-white border border-white transition-colors duration-300">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-16 flex justify-center">
        <div className="w-full max-w-2xl">
          <Image src={image} alt={alt} width={1400} height={1400} className="w-full" />
        </div>
      </div>

      <PaginationLinks
        prev={prevLabel}
        prevLink={prevLink}
        next={nextLabel}
        nextLink={nextLink}
      />
    </>
  )
}
