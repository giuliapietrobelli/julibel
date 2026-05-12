"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const galleryItems = [
  { title: 'Retro Country', href: '/retro-country', src: '/collection-retro-country.png', alt: 'Retro Country' },
  { title: 'Secret Garden', href: '/secret-garden', src: '/collection-enchanted-woodland.png', alt: 'Secret Garden' },
  { title: 'Dreamy Jungle Nursery', href: '/dreamy-jungle-nursery', src: '/collection-sleepy-jungle.png', alt: 'Dreamy Jungle Nursery' },
  { title: 'Playful Cats', href: '/playful-cats', src: '/collection-playful-cats.png', alt: 'Playful Cats' },
  { title: 'Echoes of Siam', href: '/echoes-of-siam', src: '/collection-echoes-siam.png', alt: 'Echoes of Siam' },
  { title: 'Soft Tide', href: '/soft-tide', src: '/collection-beachy-boho.png', alt: 'Soft Tide' },
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
        <h1 className="m-auto text-center sm:pt-6 sm:pb-14 lg:pt-10 lg:pb-28 px-8 text-xl sm:text-2xl lg:text-3xl text-charcoal" style={{ maxWidth: '44rem', lineHeight: 1.45 }}>
          Surface pattern collections inspired by vintage charm, nature and storytelling for fabric, wallpaper and home decor.
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
              <div className="flex items-center justify-center absolute inset-0 bg-ivory opacity-0 hover:opacity-90 transition-opacity duration-500 z-10">
                <span className="font-serif text-lg lg:text-2xl text-charcoal" style={{ letterSpacing: '0.02em' }}>{item.title}</span>
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
