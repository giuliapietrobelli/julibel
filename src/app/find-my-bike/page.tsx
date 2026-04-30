import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '../lightbox-gallery'
import ParallaxHero from '../parallax-hero'
import fmb1 from "./fmb_userflow.png"
import fmb2 from "./fmb_mockup_mobile.png"
import fmb3 from "./fmb_illo.png"
import fmb4 from "./fmb_ui_elements.png"
import PaginationLinks from '../pagination-links'

const images = [
  { title: "Userflow", src: fmb1, alt: "Userflow" },
  { title: "Mockup", src: fmb2, alt: "Mockup" },
  { title: "Illustrations", src: fmb3, alt: "Illustrations newsletter" },
  { title: "Ui elements", src: fmb4, alt: "Ui elements" },
]

export default function FindMyBike() {
  return (
    <>
      <ParallaxHero
        title="Find my bike app"
        description="Findmybike is a personal project, a mobile app designed to help users compare different types of bikes, making it easier to find the perfect match. I was responsible for all visual aspects of the project, including branding identity, illustrations, UX, and UI design."
        image="/fmb-thumb.gif"
      />

      <div className="animate-fade-up container flex flex-col gap-10 md:gap-20 pt-16 pb-20">
        <div className="self-center">
          <Image className="self-center" src="/fmb-thumb.gif" alt="Find my bike cover" width={1250} height={840} priority/>
        </div>
        <LightboxGallery images={images} />
      </div>

      <PaginationLinks
        prev="Collection 6"
        prevLink="./laura-ashley-newsletters"
        next="Diesel Tribute Catalogue"
        nextLink="./diesel-tribute-catalogue"
      />

      <div className="bg-zinc-100 py-20">
        <div className="container flex flex-col items-center gap-8 text-center px-12 md:px-20 lg:px-32">
          <p className="font-extralight text-base md:text-lg leading-loose max-w-xl text-zinc-600">Need a pattern design or illustration to put on your products that will help sell them?</p>
          <p className="font-medium text-2xl md:text-3xl leading-snug">Let&apos;s chat!</p>
          <Link href="/contact" className="px-8 py-3 border border-zinc-900 text-zinc-900 text-sm font-extralight hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  )
}
