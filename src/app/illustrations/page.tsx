import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import illo1 from "./illustration1.png"
import illo2 from "./illustration2.png"
import illo3 from "./illustration3.png"
import illo4 from "./illustration4.png"
import illo5 from "./illustration5.png"
import illo6 from "./illustration6.png"
import illo7 from "./illustration7.png"
import illo8 from "./illustration8.png"
import illo9 from "./illustration9.png"
import illo10 from "./illustration10.png"
import illo11 from "./illustration11.png"
import illo12 from "./illustration12.png"

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

export default function Illustrations() {
  return (
    <>
      <div className="container flex flex-col gap-10 md:gap-20 py-20">

        <ProjectIntro title="Illustrations">
          A selection of illustrations made with Procreate, Illustrator, and Photoshop
        </ProjectIntro>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Mintel Digital Advertising"
        prevLink="./mintel-digital-advertising"
        next="Laura Ashley feature page"
        nextLink="./laura-ashley-feature-page"
      />
    </>
  )
}
