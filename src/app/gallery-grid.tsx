"use client"

import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type GalleryItem = {
  src: StaticImageData
  alt: string
  href: string
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= items.length) return
    const timeout = setTimeout(() => setVisibleCount((n) => n + 1), 120)
    return () => clearTimeout(timeout)
  }, [visibleCount, items.length])

  return (
    <div className="columns-2 md:columns-3 gap-6">
      {items.map((image, index) => (
        <Link
          key={image.href}
          href={image.href}
          className={`block mb-6 leading-[0] transition-all duration-700 ease-out ${index < visibleCount ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full hover:opacity-75 transition-opacity duration-500"
          />
        </Link>
      ))}
    </div>
  )
}
