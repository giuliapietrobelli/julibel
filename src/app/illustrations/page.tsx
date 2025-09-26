
import ProjectIntro from '../project-intro'
import LightboxGallery from '../lightbox-gallery'
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
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Skater Boy",
    src: illo1,
    alt: "Skater Boy Illustration",
    className: "max-w-full"
  },
  {
    title: "Bloom",
    src: illo2,
    alt: "Bloom Illustration",
    className: "max-w-full"
  },
  {
    title: "Yoga",
    src: illo3,
    alt: "Yoga Illustration",
    className: "max-w-full"
  },
  {
    title: "Lipari Postcard",
    src: illo4,
    alt: "Lipari postcard Illustration",
    className: "max-w-full"
  },
  {
    title: "Preraphaelites",
    src: illo5,
    alt: "Preraphaelites Illustration",
    className: "max-w-full"
  },
  {
    title: "Lotus bowl",
    src: illo6,
    alt: "Lotus bowl Illustration",
    className: "max-w-full"
  },
  {
    title: "Pixie girl",
    src: illo7,
    alt: "Pixie girl Illustration",
    className: "max-w-full"
  },
  {
    title: "Buttercup floral pattern",
    src: illo8,
    alt: "Buttercup floral pattern Illustration",
    className: "max-w-full"
  },
  {
    title: "Fashion illustration",
    src: illo9,
    alt: "Fashion Illustration",
    className: "max-w-full"
  },
  {
    title: "Deer",
    src: illo10,
    alt: "Deer Illustration",
    className: "max-w-full"
  },
  {
    title: "Nymph Illustration",
    src: illo11,
    alt: "Nymph Illustration",
    className: "max-w-full"
  },
  {
    title: "Bubblegum girl",
    src: illo12,
    alt: "Bubblegum girl Illustration",
    className: "max-w-full"
  }
]

export default function Illustrations() {
  return (
    <>
    
    <div className="container flex flex-col gap-10 md:gap-20 py-20">

      <ProjectIntro title="Illustrations">
        A selection of illustrations made with Procreate, Illustrator, and Photoshop
      </ProjectIntro>

      <LightboxGallery columns={[2, 3]} images={images} />
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