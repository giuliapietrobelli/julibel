import Link from 'next/link'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import { designs } from './designs'

const images = designs.map((d) => ({
  title: d.title,
  src: d.src,
  alt: d.alt,
  href: `/mintel-digital-advertising/${d.slug}`,
}))

export default function Collection3() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 pb-20">
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl xl:max-w-4xl self-center pb-6">
          <h2 className="font-normal md:font-medium text-2xl md:text-3xl lg:text-4xl leading-snug">Soft Tide</h2>
          <p className="font-extralight text-lg lg:text-xl leading-relaxed">A calm coastal fabric collection featuring organic shapes, hand-drawn waves and shell motifs in muted blues, sandy neutrals and soft textures inspired by the sea.</p>
          <Link href="https://www.spoonflower.com/collections/1483469-soft-tide-by-julibel_studio" target="_blank" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            Shop on Spoonflower
          </Link>
        </div>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Collection 2"
        prevLink="./comperemedia-website"
        next="Collection 4"
        nextLink="./illustrations"
      />
    </>
  )
}
