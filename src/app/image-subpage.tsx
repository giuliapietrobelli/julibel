"use client"

import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import PaginationLinks from './pagination-links'

type Props = {
  title: string
  image: StaticImageData
  alt: string
  galleryLink: string
  prevLabel: string
  prevLink: string
  nextLabel: string
  nextLink: string
}

export default function ImageSubpage({ title, image, alt, galleryLink, prevLabel, prevLink, nextLabel, nextLink }: Props) {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden">
        <div ref={imgRef} className="absolute -top-[30%] -bottom-[30%] left-0 right-0">
          <Image src={image} alt={alt} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <Link href={galleryLink} className="absolute top-6 left-8 z-20 text-sm font-extralight text-white/70 hover:text-white hover:underline underline-offset-4">
          ← {galleryLink.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </Link>
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8 text-white text-center px-8">
          <h1 className="font-normal text-4xl md:text-6xl">{title}</h1>
          <div className="flex gap-4">
            <Link href={galleryLink} className="px-8 py-3 border border-white text-white hover:bg-white hover:text-zinc-900 transition-colors duration-300">
              View Collection
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-zinc-900 hover:bg-transparent hover:text-white border border-white transition-colors duration-300">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="columns-2 md:columns-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="mb-6 leading-[0]">
              <Image src={image} alt={alt} className="w-full" />
            </div>
          ))}
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
