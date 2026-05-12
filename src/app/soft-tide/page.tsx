import Link from 'next/link'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import ParallaxHero from '../parallax-hero'
import { designs } from './designs'

const toShopUrl = (src: string) => {
  const m = src.match(/img\.spoonflower\.com\/c\/(\d+)\//)
  return m ? `https://www.spoonflower.com/fabric/${m[1]}` : undefined
}

const images = designs.map((d) => ({
  title: d.title,
  src: d.src,
  alt: d.alt,
  href: toShopUrl(d.src),
}))

export default function Collection3() {
  return (
    <>
      <ParallaxHero
        title="Soft Tide"
        description="A calm coastal fabric collection featuring organic shapes, hand-drawn waves and shell motifs in muted blues, sandy neutrals and soft textures inspired by the sea."
        image="/collection-hero-beachy-boho-2560x700.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1483469-soft-tide-by-julibel_studio" target="_blank" className="px-8 py-3 border border-white text-white text-sm font-extralight hover:bg-white hover:text-zinc-900 transition-colors duration-300">
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
        prev="Echoes of Siam"
        prevLink="./echoes-of-siam"
        next="Retro Country"
        nextLink="./retro-country"
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
