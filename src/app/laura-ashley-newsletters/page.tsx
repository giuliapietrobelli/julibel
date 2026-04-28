import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import newsletter1 from "./la-xmas-gifts-email.jpg"
import newsletter2 from "./la-autumn-walks-email.jpg"
import newsletter3 from "./la-hebrides-email.jpg"
import newsletter4 from "./la-lighting-email.jpg"
import newsletter5 from "./la-xmas-gifs.gif"
import newsletter6 from "./la-wool-email.jpg"

const images = [
  { src: newsletter1, alt: "Christmas Gifts Guide newsletter" },
  { src: newsletter2, alt: "Autumn Walks Collection newsletter" },
  { src: newsletter3, alt: "Hebrides Collection newsletter" },
  { src: newsletter4, alt: "Lighting Looks newsletter" },
  { src: newsletter5, alt: "Christmas GIFs newsletter" },
  { src: newsletter6, alt: "Wool newsletter" },
]

export default function LauraAshleyNewsletters() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 py-20">
        <ProjectIntro title="Laura Ashley Newsletters">
          As Email Designer at Laura Ashley, I was in charge of creating engaging and meaningful content to promote the
          brand and its products. Working closely with the copywriter and digital marketing coordinator, the aim was to
          create work that is both aesthetically pleasing and functional.
        </ProjectIntro>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Laura Ashley Feature Page"
        prevLink="./laura-ashley-feature-page"
        next="Find my bike App"
        nextLink="./find-my-bike"
      />
    </>
  )
}
