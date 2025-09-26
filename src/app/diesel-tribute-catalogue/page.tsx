import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import diesel1 from "./diesel_1.png"
import diesel2 from "./diesel_2.png"
import diesel3 from "./diesel_3.png"
import diesel4 from "./diesel_4.png"
import diesel5 from "./diesel_5.png"
import diesel6 from "./diesel_6.png"
import diesel7 from "./diesel_7.png"
import diesel8 from "./diesel_8.png"
import diesel9 from "./diesel_9.png"
import diesel10 from "./diesel_10.png"
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Diesel tribute catalogue",
    src: diesel1,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel2,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel3,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel4,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel5,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel6,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel7,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel8,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel9,
    alt: "Diesel tribute catalogue"
  },
  {
    title: "Diesel tribute catalogue",
    src: diesel10,
    alt: "Diesel tribute catalogue"
  },

]

export default function DieselTribute() {
  return (
    <>
      <div className="container flex flex-col gap-10 md:gap-20 py-20">

        <ProjectIntro title="Diesel tribute catalogue">
          Design of the Diesel Tribute catalog, a lookbook showcasing the capsule collection by Nicola Formichetti.
          This project was created during my time at Diesel as part of the Shopping Experience team.
        </ProjectIntro>

        <div className="self-center md:max-w-[70%]">
          <Image id="preview-pic" className="self-center" src="/diesel_hero.jpeg" alt="Diesel tribute catalogue cover" width={1250} height={840} priority/>
        </div>
        
        <LightboxGallery columns={[1, 2]} images={images} />
      </div>

      <PaginationLinks
        prev="Find my bike App"
        prevLink="./find-my-bike"
        next="Mintel Store Redesign"
        nextLink="./mintel-store-redesign"
      />
    </>
  )
}