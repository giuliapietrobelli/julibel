import Link from 'next/link'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import illo1 from "../illustrations/illustration1.png"
import illo2 from "../illustrations/illustration2.png"
import illo3 from "../illustrations/illustration3.png"
import illo4 from "../illustrations/illustration4.png"
import illo5 from "../illustrations/illustration5.png"
import illo6 from "../illustrations/illustration6.png"
import illo7 from "../illustrations/illustration7.png"
import illo8 from "../illustrations/illustration8.png"
import illo9 from "../illustrations/illustration9.png"
import illo10 from "../illustrations/illustration10.png"
import illo11 from "../illustrations/illustration11.png"
import illo12 from "../illustrations/illustration12.png"

const images = [
  { title: "Skater Boy", src: illo1, alt: "Skater Boy Illustration", href: "/illustrations/skater-boy" },
  { title: "Bloom", src: illo2, alt: "Bloom Illustration", href: "/illustrations/bloom" },
  { title: "Yoga", src: illo3, alt: "Yoga Illustration", href: "/illustrations/yoga" },
  { title: "Lipari Postcard", src: illo4, alt: "Lipari Postcard Illustration", href: "/illustrations/lipari-postcard" },
  { title: "Preraphaelites", src: illo5, alt: "Preraphaelites Illustration", href: "/illustrations/preraphaelites" },
  { title: "Lotus Bowl", src: illo6, alt: "Lotus Bowl Illustration", href: "/illustrations/lotus-bowl" },
  { title: "Pixie Girl", src: illo7, alt: "Pixie Girl Illustration", href: "/illustrations/pixie-girl" },
  { title: "Buttercup Floral Pattern", src: illo8, alt: "Buttercup Floral Pattern Illustration", href: "/illustrations/buttercup-floral-pattern" },
  { title: "Fashion Illustration", src: illo9, alt: "Fashion Illustration", href: "/illustrations/fashion-illustration" },
  { title: "Deer", src: illo10, alt: "Deer Illustration", href: "/illustrations/deer" },
  { title: "Nymph", src: illo11, alt: "Nymph Illustration", href: "/illustrations/nymph" },
  { title: "Bubblegum Girl", src: illo12, alt: "Bubblegum Girl Illustration", href: "/illustrations/bubblegum-girl" },
]

export default function LauraAshleyNewsletters() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 pb-20">
        <div className="flex flex-col items-center gap-8 text-center max-w-3xl xl:max-w-4xl self-center pb-6">
          <h2 className="font-normal md:font-medium text-2xl md:text-3xl lg:text-4xl leading-snug">Collection 6</h2>
          <p className="font-extralight text-lg lg:text-xl leading-relaxed">As Email Designer at Laura Ashley, I was in charge of creating engaging and meaningful content to promote the brand and its products. Working closely with the copywriter and digital marketing coordinator, the aim was to create work that is both aesthetically pleasing and functional.</p>
          <Link href="/contact" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            Enquire about Licensing
          </Link>
        </div>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Collection 5"
        prevLink="./laura-ashley-feature-page"
        next="Find my bike App"
        nextLink="./find-my-bike"
      />
    </>
  )
}
