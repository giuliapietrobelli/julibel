"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const galleryItems = [
  { title: 'Mintel Reports Store', href: '/mintel-store-redesign', src: '/mintel_home_thumb.png', alt: 'Mintel Store redesign' },
  { title: 'Comperemedia Website', href: '/comperemedia-website', src: '/comperemedia-thumb.png', alt: 'Compreremedia website' },
  { title: 'Mintel Digital Advertising', href: '/mintel-digital-advertising', src: '/mintel_banners_tumb.png', alt: 'Mintel banners' },
  { title: 'Illustrations', href: '/illustrations', src: '/illustrations_thumb.jpeg', alt: 'illustrations' },
  { title: 'Laura Ashley Feature Page', href: '/laura-ashley-feature-page', src: '/la-thumb.gif', alt: 'Laura Ashley landing page', unoptimized: true },
  { title: 'Laura Ashley Newsletters', href: '/laura-ashley-newsletters', src: '/la-emails-thumb.jpeg', alt: 'Laura Ashley newsletters' },
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

      <div className="flex flex-col flex-wrap min-h-52 slide">
        <h1 className="max-w-sm md:max-w-md lg:max-w-xl m-auto text-center sm:py-20 lg:pt-28 lg:pb-36 px-8 text-2xl sm:text-3xl lg:text-4xl leading-snug md:leading-normal lg:leading-snug font-normal text-zinc-900">
          Ciao! I&apos;m Giulia, a <b>digital designer</b> based in Italy.
        </h1>
      </div>

      <div className="w-full px-8 md:px-16 pb-11">
        <div className="columns-2 md:columns-3 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative block mb-6 leading-[0] transition-all duration-700 ease-out ${index < visibleCount ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
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
                unoptimized={item.unoptimized}
                className="w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
