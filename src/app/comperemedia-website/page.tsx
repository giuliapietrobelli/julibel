import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import compereHome from "./compere_home.png"
import compereAbout from "./compere_about.png"
import compereSolutions from "./compere_solutions.png"
import compereBlogListing from "./compere_blog_listing.png"
import compereBlog from "./compere_blog.png"
import compereContacts from "./compere_contacts.png"
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Homepage",
    src: compereHome,
    alt: "Comperemedia homepage",
    className: "shadow-2xl shadow-zinc-300"
  },
  {
    title: "About page",
    src: compereAbout,
    alt: "Comperemedia about homepage",
    className: "shadow-2xl shadow-zinc-300"
  },
  {
    title: "Solutions page",
    src: compereSolutions,
    alt: "Comperemedia solutions page",
    className: "shadow-2xl shadow-zinc-300"
  },
  {
    title: "Blog listing page",
    src: compereBlogListing,
    alt: "Comperemedia blog listing page",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Blog page",
    src: compereBlog,
    alt: "Comperemedia blog page",
    className: "shadow-2xl shadow-zinc-400"
  },
  {
    title: "Contact page",
    src: compereContacts,
    alt: "Comperemedia contact page",
    className: "shadow-2xl shadow-zinc-400"
  }
]

export default function Comperemedia() {
  return (
    <>
      <div className="container flex flex-col gap-10 md:gap-20 py-20">

        <ProjectIntro title="Comperemedia Website">
          At Mintel, I collaborated on the design of the marketing website for Comperemedia.
          Working closely with the marketing team designers, I was responsible for finalizing the design and ensuring a smooth handoff to the developers. 
        </ProjectIntro>

        <div className="self-center">
          <Image className="self-center" src="/comperemedia-thumb.png" alt="Comperemedia website preview" width={1250} height={799} priority />
        </div>

        <LightboxGallery columns={[2, 3, 6]} images={images} className='h-5/6' />
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