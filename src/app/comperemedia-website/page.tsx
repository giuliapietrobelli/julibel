import Link from 'next/link'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import ParallaxHero from '../parallax-hero'
import { designs } from './designs'

const images = designs.map((d) => ({
  title: d.title,
  src: d.src,
  alt: d.alt,
  href: `/comperemedia-website/${d.slug}`,
}))

export default function Collection2() {
  return (
    <>
      <ParallaxHero
        title="Secret Garden"
        description="A fabric collection of enchanted botanicals, cottagecore florals and romantic garden prints in rich jewel tones, deep greens and soft naturals."
        image={designs[0].src}
      >
        <Link href="https://www.spoonflower.com/collections/938595-secret-garden-by-julibel_studio" target="_blank" className="px-8 py-3 border border-white text-white text-sm font-extralight hover:bg-white hover:text-zinc-900 transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-white text-zinc-900 text-sm font-extralight hover:bg-transparent hover:text-white border border-white transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-16 pb-20">
        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Retro Country"
        prevLink="./mintel-store-redesign"
        next="Soft Tide"
        nextLink="./mintel-digital-advertising"
      />

      <div className="bg-zinc-100 py-20">
        <div className="container flex flex-col items-center gap-8 text-center px-12 md:px-20 lg:px-32">
          <p className="font-extralight text-base md:text-lg leading-loose max-w-xl text-zinc-600">Need a pattern design or illustration to put on your products that will help sell them?</p>
          <p className="font-medium text-2xl md:text-3xl leading-snug">Let&apos;s chat!</p>
          <Link href="/contact" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  )
}
