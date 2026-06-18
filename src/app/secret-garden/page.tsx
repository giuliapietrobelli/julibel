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

export default async function Collection2() {
  return (
    <>
      <ParallaxHero
        title="Secret Garden"
        description="A fabric collection of enchanted botanicals, cottagecore florals and romantic garden prints in rich jewel tones, deep greens and soft naturals."
        image="/collection-hero-enchanted-woodland-2560x700.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/938595-secret-garden-by-julibel_studio" target="_blank" className="px-8 py-3 border border-[#4A4644] text-[#4A4644] text-xs font-light tracking-wider hover:bg-[#4A4644] hover:text-white transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-[#4A4644] text-white text-xs font-light tracking-wider border border-[#4A4644] hover:bg-[#3a3634] transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <CollectionMockups
        images={await getMockups('secret-garden')}
        palette={['#5B7C52', '#C4A8A8', '#E6DDCC']}
      />

      <SectionDivider shopUrl="https://www.spoonflower.com/collections/938595-secret-garden-by-julibel_studio" />

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-8 pb-20">
        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Retro Country"
        prevLink="./retro-country"
        next="Dreamy Jungle Nursery"
        nextLink="./dreamy-jungle-nursery"
      />

      <CtaSection />
    </>
  )
}
