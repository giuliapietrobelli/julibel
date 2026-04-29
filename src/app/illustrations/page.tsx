import Link from 'next/link'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import { designs } from './designs'

const images = designs.map((d) => ({
  title: d.title,
  src: d.src,
  alt: d.alt,
  href: `/illustrations/${d.slug}`,
}))

export default function Illustrations() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 pb-20">

        <div className="flex flex-col items-center gap-8 text-center max-w-xl md:max-w-2xl self-center pb-6">
          <h2 className="font-medium text-3xl md:text-4xl leading-tight">Playful Cats</h2>
          <p className="font-extralight text-sm md:text-base leading-loose text-zinc-600">A fabric collection of fun, whimsical cat-themed patterns and prints in cheerful pastels and playful colour palettes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://www.spoonflower.com/collections/1357811-playful-cats-by-julibel" target="_blank" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
              Shop on Spoonflower
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
              Enquire about Licensing
            </Link>
          </div>
        </div>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Collection 3"
        prevLink="./mintel-digital-advertising"
        next="Collection 5"
        nextLink="./laura-ashley-feature-page"
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
