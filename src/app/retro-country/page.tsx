import Link from 'next/link'
import CtaSection from '../cta-section'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import ParallaxHero from '../parallax-hero'
import CollectionMockups from '../collection-mockups'
import SectionDivider from '../section-divider'
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

export default async function Collection1() {
  return (
    <>
      <ParallaxHero
        title="Retro Country"
        description="A fabric collection featuring prairie florals, vintage gingham, and delicate botanical prints in a warm, muted palette of denim blue, mustard, and natural beige."
        image="/collection-hero-retro-country.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1453699-retro-country-by-julibel_studio" target="_blank" className="px-8 py-3 border border-[#4A4644] text-[#4A4644] text-xs font-light tracking-wider hover:bg-[#4A4644] hover:text-white transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-[#4A4644] text-white text-xs font-light tracking-wider border border-[#4A4644] hover:bg-[#3a3634] transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <CollectionMockups
        images={await getMockups('retro-country')}
        palette={['#B8A07A', '#DDD6C0', '#DDD6C0', '#4A617A', '#7090A8', '#A88828', '#DCC870']}
        tallAll
        spanOverrides={{ 8: 'normal' }}
      />

      <SectionDivider shopUrl="https://www.spoonflower.com/collections/1453699-retro-country-by-julibel_studio" />

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-8 pb-20">
        <GalleryGrid items={images} initialCount={5} />
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
