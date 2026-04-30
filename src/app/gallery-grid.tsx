"use client"

import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

type Cta = { label: string; href: string; external?: boolean }

type GalleryItem = {
  src: StaticImageData | string
  alt: string
  href?: string
  title?: string
}

export default function GalleryGrid({ items, lightboxCtas }: { items: GalleryItem[], lightboxCtas?: Cta[] }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (visibleCount >= items.length) return
    const timeout = setTimeout(() => setVisibleCount((n) => n + 1), 120)
    return () => clearTimeout(timeout)
  }, [visibleCount, items.length])

  const selected = selectedIndex !== null ? items[selectedIndex] : null

  const goPrev = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  const goNext = () => setSelectedIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : i))

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-8 md:px-20">
        {items.map((image, index) => {
          const animClass = `relative leading-[0] transition-all duration-700 ease-out ${index < visibleCount ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`
          const overlay = image.title ? (
            <div className="flex flex-col items-center justify-center gap-2 absolute inset-0 bg-white opacity-0 hover:opacity-75 transition-opacity duration-500 z-10">
              <span className="font-light text-xs lg:text-sm text-center leading-snug px-4">{image.title}</span>
              <Search size={20} strokeWidth={1.5} />
            </div>
          ) : null
          const img = <Image src={image.src} alt={image.alt} width={1400} height={900} className="w-full" />

          if (lightboxCtas) {
            return (
              <button key={image.alt + index} className={`block text-left ${animClass}`} onClick={() => setSelectedIndex(index)}>
                {overlay}
                {img}
              </button>
            )
          }

          return image.href ? (
            <Link key={image.href + index} href={image.href} className={`block ${animClass}`}>
              {overlay}
              {img}
            </Link>
          ) : (
            <div key={image.alt + index} className={animClass}>
              {overlay}
              {img}
            </div>
          )
        })}
      </div>

      {lightboxCtas && (
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null) }}>
          <DialogContent className="max-w-3xl w-[90vw] flex flex-col p-0 gap-0 max-h-[92vh] overflow-hidden">

            {/* Title */}
            <div className="shrink-0 px-6 pt-8 pb-4 pr-14">
              <DialogTitle className="font-medium text-lg leading-snug text-center">
                {selected?.title}
              </DialogTitle>
            </div>

            {/* Image + arrows */}
            <div className="relative shrink-0">
              {selected && (
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  width={1400}
                  height={1400}
                  className="w-full max-h-[58vh] object-contain"
                />
              )}
              <button
                onClick={goPrev}
                className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 transition-opacity ${selectedIndex === 0 ? 'invisible' : 'opacity-40 hover:opacity-100'}`}
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                onClick={goNext}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 transition-opacity ${selectedIndex === items.length - 1 ? 'invisible' : 'opacity-40 hover:opacity-100'}`}
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* CTAs */}
            <div className="shrink-0 flex flex-wrap gap-4 justify-center px-6 pt-6 pb-8">
              {lightboxCtas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300"
                >
                  {cta.label}
                </Link>
              ))}
            </div>

          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
