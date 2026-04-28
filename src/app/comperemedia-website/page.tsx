import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import compereHome from "./compere_home.png"
import compereAbout from "./compere_about.png"
import compereSolutions from "./compere_solutions.png"
import compereBlogListing from "./compere_blog_listing.png"
import compereBlog from "./compere_blog.png"
import compereContacts from "./compere_contacts.png"

const images = [
  { src: compereHome, alt: "Comperemedia homepage" },
  { src: compereAbout, alt: "Comperemedia about page" },
  { src: compereSolutions, alt: "Comperemedia solutions page" },
  { src: compereBlogListing, alt: "Comperemedia blog listing page" },
  { src: compereBlog, alt: "Comperemedia blog page" },
  { src: compereContacts, alt: "Comperemedia contact page" },
]

export default function Comperemedia() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 py-20">
        <ProjectIntro title="Comperemedia Website">
          At Mintel, I collaborated on the design of the marketing website for Comperemedia.
          Working closely with the marketing team designers, I was responsible for finalizing the design and ensuring a smooth handoff to the developers.
        </ProjectIntro>

        <GalleryGrid items={images} />
      </div>

      <PaginationLinks
        prev="Mintel Store Redesign"
        prevLink="./mintel-store-redesign"
        next="Mintel Digital Advertising"
        nextLink="./mintel-digital-advertising"
      />
    </>
  )
}
