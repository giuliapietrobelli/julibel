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

export default async function Collection5() {
  return (
    <>
      <ParallaxHero
        title="Echoes of Siam"
        description="A fabric collection of tropical toiles, botanical prints and ornamental motifs inspired by the lush landscapes and rich visual culture of Southeast Asia."
        image="/collection-hero-echoes-siam-2560x700.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1360307-echoes-siam-by-julibel" target="_blank" className="px-8 py-3 border border-[#4A4644] text-[#4A4644] text-xs font-light tracking-wider hover:bg-[#4A4644] hover:text-white transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-[#4A4644] text-white text-xs font-light tracking-wider border border-[#4A4644] hover:bg-[#3a3634] transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <CollectionMockups images={await getMockups('echoes-of-siam')} />

      <SectionDivider shopUrl="https://www.spoonflower.com/collections/1360307-echoes-siam-by-julibel" />

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-8 pb-20">
        <GalleryGrid items={images} initialCount={5} />
      </div>

      <PaginationLinks
        prev="Playful Cats"
        prevLink="./playful-cats"
        next="Soft Tide"
        nextLink="./soft-tide"
      />

      <CtaSection />
    </>
  )
}
