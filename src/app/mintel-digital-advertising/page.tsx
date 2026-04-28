import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import bannersLinkedin from "./mintel-banners-linkedin-carousel.png"

const images = [
  { src: '/mintel_banners_tumb.png', alt: "Mintel digital banners" },
  { src: bannersLinkedin, alt: "Mintel LinkedIn carousel banners" },
]

export default function MintelAdv() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 py-20">
        <ProjectIntro title="Mintel Digital Advertising">
          One of my daily responsibilities at Mintel was to design captivating digital banners for paid advertising.
          Collaborating closely with the team, we focused on creating compelling visuals and copy to generate leads and drive sales.
        </ProjectIntro>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Comperemedia Website"
        prevLink="./comperemedia-website"
        next="Illustrations"
        nextLink="./illustrations"
      />
    </>
  )
}
