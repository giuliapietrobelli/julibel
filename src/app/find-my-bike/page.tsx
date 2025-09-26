import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import fmb1 from "./fmb_userflow.png"
import fmb2 from "./fmb_mockup_mobile.png"
import fmb3 from "./fmb_illo.png"
import fmb4 from "./fmb_ui_elements.png"
import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'


const images = [
  {
    title: "Userflow",
    src: fmb1,
    alt: "Userflow"
  },
  {
    title: "Mockup",
    src: fmb2,
    alt: "Mockup"
  },
  {
    title: "Illustrations",
    src: fmb3,
    alt: "Illustrations newsletter"
  },
  {
    title: "Ui elements",
    src: fmb4,
    alt: "Ui elements"
  },
]

export default function FindMyBike() {
  return (
    <>
    <div className="container flex flex-col gap-10 md:gap-20 py-20">

      <ProjectIntro title="Find my bike app">
        Findmybike is a personal project, a mobile app designed to help users compare different types of bikes, making it easier to find the perfect match.
        I was responsible for all visual aspects of the project, including branding identity, illustrations, UX, and UI design.
      </ProjectIntro>

      <div className="self-center">
        <Image className="self-center" src="/fmb-thumb.gif" alt="Find my bike cover" width={1250} height={840} priority/>
      </div>

      <LightboxGallery images={images} />
    </div>

    <PaginationLinks
      prev="Laura Ashley Newsletters"
      prevLink="./laura-ashley-newsletters"
      next="Diesel Tribute Catalogue"
      nextLink="./diesel-tribute-catalogue"
    />
  </>
  )
}