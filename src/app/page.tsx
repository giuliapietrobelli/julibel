"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import illo1 from './illustrations/illustration1.png'

const galleryItems = [
  { title: 'Retro Country', href: '/mintel-store-redesign', src: '/collection-retro-country.png', alt: 'Retro Country' },
  { title: 'Secret Garden', href: '/comperemedia-website', src: '/collection-enchanted-woodland.png', alt: 'Secret Garden' },
  { title: 'Soft Tide', href: '/mintel-digital-advertising', src: '/collection-beachy-boho.png', alt: 'Soft Tide' },
  { title: 'Playful Cats', href: '/illustrations', src: '/collection-playful-cats.png', alt: 'Playful Cats' },
  { title: 'Echoes of Siam', href: '/laura-ashley-feature-page', src: '/collection-echoes-siam.png', alt: 'Echoes of Siam' },
  { title: 'Collection 6', href: '/laura-ashley-newsletters', src: illo1, alt: 'Collection 6' },
]

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= galleryItems.length) return
    const timeout = setTimeout(() => setVisibleCount((n) => n + 1), 120)
    return () => clearTimeout(timeout)
  }, [visibleCount])

  return (
    <main className="flex flex-col items-center justify-between pb-11">

      <div className="animate-fade-up flex flex-col flex-wrap min-h-52 slide">
        <h1 className="m-auto text-center sm:pt-6 sm:pb-14 lg:pt-10 lg:pb-28 px-8 text-xl sm:text-2xl lg:text-3xl font-light text-zinc-900" style={{ lineHeight: '2.50rem', maxWidth: '41rem' }}>
          Crafting pattern designs and illustrations perfect for modern fabric, wallpaper and home decor
        </h1>
      </div>

      <div className="w-full px-8 md:px-16 pb-11">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative block leading-[0] transition-all duration-700 ease-out ${index < visibleCount ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            >
              <div className="flex items-center justify-center absolute inset-0 bg-white opacity-0 hover:opacity-75 transition-opacity duration-500 z-10">
                <span className="font-medium text-xl lg:text-2xl leading-normal">{item.title}</span>
              </div>
              <Image
                src={item.src}
                alt={item.alt}
                width={1400}
                height={799}
                priority

                className="w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
