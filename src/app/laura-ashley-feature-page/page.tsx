import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import laFeature from "./la-page.gif"
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Laura Ashley feature page",
    src: laFeature,
    alt: "Laura Ashley feature page",
    className: "text-center"
  }
]

export default function LauraAshleyFeature() {
  return (
    <>
    <div className="container flex flex-col gap-10 md:gap-20 py-20">

      <ProjectIntro title="Laura Ashley feature page">
        Working as Junior Digital Designer at Laura Ashley, I was responsible for designing features for both home and
        fashion, creating accompanying promotional graphics, and managing the day-to-day updating of the website.
      </ProjectIntro>
      
      <LightboxGallery columns={[1]} images={images} />
      
      <ProjectIntro>
        This landing page was created to promote the vast choice of fit of the trousers range, with a focus on a
          particular best-selling model sold in two new coming different lengths.
          <br/>
          <br/>
          The UX is meant to provide the easiest and quicker experience: shoppers click through sliding carousels to not
          only see a variety of trouser styles but to transition between outfit inspiration as well. The rich
          photography
          allows customers to see exactly how every pair of trousers can be styled with other items.
      </ProjectIntro>
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