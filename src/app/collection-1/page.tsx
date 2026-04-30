import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import ParallaxHero from '../parallax-hero'
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
  { title: "Skater Boy", src: illo1, alt: "Skater Boy Illustration", href: "/collection-1/skater-boy" },
  { title: "Bloom", src: illo2, alt: "Bloom Illustration", href: "/collection-1/bloom" },
  { title: "Yoga", src: illo3, alt: "Yoga Illustration", href: "/collection-1/yoga" },
  { title: "Lipari Postcard", src: illo4, alt: "Lipari Postcard Illustration", href: "/collection-1/lipari-postcard" },
  { title: "Preraphaelites", src: illo5, alt: "Preraphaelites Illustration", href: "/collection-1/preraphaelites" },
  { title: "Lotus Bowl", src: illo6, alt: "Lotus Bowl Illustration", href: "/collection-1/lotus-bowl" },
  { title: "Pixie Girl", src: illo7, alt: "Pixie Girl Illustration", href: "/collection-1/pixie-girl" },
  { title: "Buttercup Floral Pattern", src: illo8, alt: "Buttercup Floral Pattern Illustration", href: "/collection-1/buttercup-floral-pattern" },
  { title: "Fashion Illustration", src: illo9, alt: "Fashion Illustration", href: "/collection-1/fashion-illustration" },
  { title: "Deer", src: illo10, alt: "Deer Illustration", href: "/collection-1/deer" },
  { title: "Nymph", src: illo11, alt: "Nymph Illustration", href: "/collection-1/nymph" },
  { title: "Bubblegum Girl", src: illo12, alt: "Bubblegum Girl Illustration", href: "/collection-1/bubblegum-girl" },
]

export default function Collection1() {
  return (
    <>
      <ParallaxHero
        title="Pattern Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={illo1}
      />

      <div className="container flex flex-col gap-10 md:gap-20 pt-16 pb-20">
        <GalleryGrid items={images} lightboxCtas={[
          { label: "Enquire about Licensing", href: "/contact" },
          { label: "Get in touch", href: "/contact" },
        ]} />
      </div>

      <PaginationLinks
        prev="Diesel Tribute Catalogue"
        prevLink="./diesel-tribute-catalogue"
        next="Mintel Reports Store"
        nextLink="./mintel-store-redesign"
      />
    </>
  )
}
