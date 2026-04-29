"use client"

import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'

type GalleryItem = {
  src: StaticImageData | string
  alt: string
  href?: string
  title?: string
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= items.length) return
    const timeout = setTimeout(() => setVisibleCount((n) => n + 1), 120)
    return () => clearTimeout(timeout)
  }, [visibleCount, items.length])

  return (
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
  )
}
