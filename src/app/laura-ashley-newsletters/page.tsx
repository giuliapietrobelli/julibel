import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import newsletter1 from "./la-xmas-gifts-email.jpg"
import newsletter2 from "./la-autumn-walks-email.jpg"
import newsletter3 from "./la-hebrides-email.jpg"
import newsletter4 from "./la-lighting-email.jpg"
import newsletter5 from "./la-xmas-gifs.gif"
import newsletter6 from "./la-wool-email.jpg"
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Christmas Gifts Guide",
    src: newsletter1,
    alt: "Christmas Gifts Guide newsletter",
    className: "shadow-2xl shadow-zinc-300",
  },
  {
    title: "Autumn Walks Collection newsletter",
    src: newsletter2,
    alt: "Autumn Walks Collection newsletter",
    className: "shadow-2xl shadow-zinc-300",
  },
  {
    title: "Hebrides Collection newsletter",
    src: newsletter3,
    alt: "Hebrides Collection newsletter",
    className: "shadow-2xl shadow-zinc-300",
  },
  {
    title: "Lighting Looks newsletter",
    src: newsletter4,
    alt: "Lighting Looks newsletter",
    className: "shadow-2xl shadow-zinc-300",
  },
  {
    title: "Wool newsletter",
    src: newsletter6,
    alt: "Wool newsletter",
    className: "shadow-2xl shadow-zinc-300",
  },
]

export default function LauraAshleyNewsletters() {
  return (
    <>
      <div className="container flex flex-col gap-10 md:gap-20 py-20">

        <ProjectIntro title="Laura Ashley newsletters">
          As Email Designer at Laura Ashley, I was in charge of creating engaging and meaningful content to promote the
          brand and its products. Working closely with the copywriter and digital marketing coordinator, the aim was to
          create work that is both aesthetically pleasing and functional.
        </ProjectIntro>

        <div className="self-center">
          <Image className="self-center" src="/la-emails-thumb.jpeg" alt="Laura Ashley newsletters" width={1250} height={799} priority/>
        </div>

        <ProjectIntro>
          A selection of newsletters designed and sent on a daily basis.
        </ProjectIntro>

        <LightboxGallery columns={[2, 5]} images={images} className='h-5/6' />
      </div>

      <PaginationLinks
        prev="Laura Ashley feature page"
        prevLink="./laura-ashley-feature-page"
        next="Find my bike App"
        nextLink="./find-my-bike"
      />
    </>

  )
}