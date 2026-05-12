import Link from 'next/link'
import CtaSection from '../cta-section'
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

export default function Collection1() {
  return (
    <>
      <ParallaxHero
        title="Retro Country"
        description="A fabric collection featuring prairie florals, vintage gingham, and delicate botanical prints in a warm, muted palette of denim blue, mustard, and natural beige."
        image="/collection-hero-retro-country.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1453699-retro-country-by-julibel_studio" target="_blank" className="px-8 py-3 border border-white/70 text-white text-xs font-light tracking-wider hover:bg-white/10 transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-white/15 text-white text-xs font-light tracking-wider border border-white/70 hover:bg-white/25 transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-16 pb-20">
        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Soft Tide"
        prevLink="./soft-tide"
        next="Secret Garden"
        nextLink="./secret-garden"
      />

      <CtaSection />
    </>
  )
}
