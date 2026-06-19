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

export default async function DreamyJungleNursery() {
  return (
    <>
      <ParallaxHero
        title="Dreamy Jungle Nursery"
        description="A soft and timeless jungle nursery collection with sleepy safari animals, tropical foliage and soothing earthy tones for calm baby spaces."
        image="/collection-hero-sleepy-jungle-2560x700.png"
        noSave
      >
        <Link href="https://www.spoonflower.com/collections/1493529-dreamy-jungle-nursery-by-julibel_studio" target="_blank" className="px-8 py-3 border border-[#4A4644] text-[#4A4644] text-xs font-light tracking-wider hover:bg-[#4A4644] hover:text-white transition-colors duration-300">
          Shop on Spoonflower
        </Link>
        <Link href="/contact" className="px-8 py-3 bg-[#4A4644] text-white text-xs font-light tracking-wider border border-[#4A4644] hover:bg-[#3a3634] transition-colors duration-300">
          Enquire about Licensing
        </Link>
      </ParallaxHero>

      <CollectionMockups
        images={await getMockups('dreamy-jungle-nursery')}
        palette={['#E5E5DF', '#4A6870', '#6A8890', '#A4B0B8', '#9AADA8', '#D4C478', '#C08C68', '#978070', '#C4B09A']}
        tallAll
      />

      <SectionDivider shopUrl="https://www.spoonflower.com/collections/1493529-dreamy-jungle-nursery-by-julibel_studio" />

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-8 pb-20">
        <GalleryGrid items={images} initialCount={5} />
      </div>

      <PaginationLinks
        prev="Secret Garden"
        prevLink="./secret-garden"
        next="Playful Cats"
        nextLink="./playful-cats"
      />

      <CtaSection />
    </>
  )
}
