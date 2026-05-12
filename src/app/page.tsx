"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from './hero-carousel'
import { SectionSeparator } from './ornaments'
import ContactCta from './contact-cta'

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
    <>
      <main className="flex flex-col max-w-[1440px] mx-auto">

        <HeroCarousel />

        <div className="px-8 md:px-16 pt-0 md:pt-10 pb-4">
          <div className="hidden md:block"><SectionSeparator /></div>
          <p className="text-[9px] tracking-[0.3em] uppercase font-light text-center md:mt-6 mb-1" style={{ color: '#A8B2A1' }}>
            All Collections
          </p>
        </div>

        <div className="w-full px-8 md:px-16 pt-4 pb-11">
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

      <ContactCta />
    </>
  )
}
