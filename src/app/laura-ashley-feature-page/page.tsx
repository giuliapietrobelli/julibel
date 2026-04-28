import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import laFeature from "./la-page.gif"

const images = [
  { src: laFeature, alt: "Laura Ashley feature page" },
]

export default function LauraAshleyFeature() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 py-20">
        <ProjectIntro title="Laura Ashley Feature Page">
          Working as Junior Digital Designer at Laura Ashley, I was responsible for designing features for both home and
          fashion, creating accompanying promotional graphics, and managing the day-to-day updating of the website.
        </ProjectIntro>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Illustrations"
        prevLink="./illustrations"
        next="Laura Ashley Newsletters"
        nextLink="./laura-ashley-newsletters"
      />
    </>
  )
}
