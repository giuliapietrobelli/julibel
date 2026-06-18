import Link from 'next/link'
import CtaSection from '../cta-section'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import ParallaxHero from '../parallax-hero'
import CollectionMockups from '../collection-mockups'
import { getMockups } from '@/lib/getMockups'
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

export default async function HothouseFlorals() {
  return (
    <>
      <ParallaxHero
        title="Hothouse Florals"
        description="A vibrant tropical fabric collection featuring painterly florals, orchid batiks, cabana stripes, and terrazzo confetti in a bold palette of orange, purple, lavender, and golden yellow."
        image="https://img.spoonflower.com/c/22065730/p/f/m/MpkmiYDbO3MlckLl6eTIy9f8Zlz11KVNDQoEe8KhIhBG-_3ANMmq/Tropical_Painterly_Hothouse_Florals_Vibrant_Orange.jpg"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1496936-hothouse-florals-by-julibel_studio" target="_blank" className="px-8 py-3 border border-[#4A4644] text-[#4A4644] text-xs font-light tracking-wider hover:bg-[#4A4644] hover:text-white transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-[#4A4644] text-white text-xs font-light tracking-wider border border-[#4A4644] hover:bg-[#3a3634] transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <div className="bg-white">
        <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-16 pb-20">
          <GalleryGrid items={images} />
        </div>
      </div>

      <CollectionMockups images={await getMockups('hothouse-florals')} />

      <PaginationLinks
        prev="Soft Tide"
        prevLink="./soft-tide"
        next="Retro Country"
        nextLink="./retro-country"
      />

      <CtaSection />
    </>
  )
}
