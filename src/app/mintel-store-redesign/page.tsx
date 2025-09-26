import Image from 'next/image'
import LightboxGallery from '../lightbox-gallery'
import ProjectIntro from '../project-intro'
import mintelHome from "./mintel_home.png"
import mintelListing from "./mintel_listing.png"
import mintelProduct from "./mintel_product.png"
import mintelCart from "./mintel_cart.png"
import mintelCheckout from "./mintel_checkout.png"
import PaginationLinks from '../pagination-links'

const images = [
  {
    title: "Homepage",
    src: mintelHome,
    alt: "Mintel homepage",
    className: "shadow-2xl shadow-zinc-00",
  },
  {
    title: "Listing page",
    src: mintelListing,
    alt: "Mintel listing page",
    className: "shadow-2xl shadow-zinc-00",
  },
  {
    title: "Product page",
    src: mintelProduct,
    alt: "Mintel product page",
    className: "shadow-2xl shadow-zinc-00",
  },
  {
    title: "Cart page",
    src: mintelCart,
    alt: "Mintel cart page",
    className: "shadow-2xl shadow-zinc-00",
  },
  {
    title: "Checkout page",
    src: mintelCheckout,
    alt: "Mintel checkout page",
    className: "shadow-2xl shadow-zinc-00",
  }
]

export default function Mintel() {
  return (
    <>
    <div className="container flex flex-col gap-10 md:gap-20 py-20">

      <ProjectIntro title="Mintel Store Redesign">
          Mintel&apos;s mission is to help companies to understand consumers&apos; behavior and buying orientations. As a member of
          the newly established digital marketing team, I was tasked with redesigning their eCommerce platform, which sells consumer market reports.
      </ProjectIntro>

      <div className="self-center">
        <Image className="self-center" src="/mintel_home_thumb.png" alt="Mintel Store preview" width={1250} height={799} priority/>
      </div>

      {/* <ProjectIntro>
        My responsibilities consisted of improving the general look and feel of the existing website running in
        WordPress and give it a more modern look. The challenge was also to improve the UX of some pages to offer a
        better experience for the customers in order to help them easily find the reports they need. I was responsible
        for the communication with the developer and worked closely with the IT team.
      </ProjectIntro> */}


        <ProjectIntro subtitle="Key Responsibilities">
          <ul className="flex flex-col md:text-left md:grid md:grid-cols-2 gap-8">
            <li><b>Research and Analysis:</b> Based my design strategy on an in-depth user analysis conducted by an external company.
              This analysis tracked and examined user journeys to identify design weaknesses and areas for improvement.</li>
            <li><b>Website Redesign:</b> Improved the overall look and feel of the existing WordPress website, giving it a modern and visually appealing update while accounting for the platform&apos;s technical limitations in terms of functionality and design.</li>
            <li><b>User Experience Enhancement:</b> Enhanced the UX of key pages to provide a smoother and more intuitive experience, making it easier for customers to find and purchase the reports they need.</li>
            <li><b>Collaboration:</b> Communicated effectively with developers and worked closely with the IT team to ensure seamless implementation of design changes.</li>
          </ul>
        </ProjectIntro>


        <ProjectIntro subtitle="Challenges and Solutions">
        A major challenge was updating the design while maintaining brand consistency and integrating with older designs and newer elements created by different teams.
        By adhering to a unified design language, I ensured a seamless visual and functional transition across the website.
        </ProjectIntro>

      <LightboxGallery columns={[2, 4]} images={images} className='h-5/6'/>
    </div>
    
    <PaginationLinks
      prev="Diesel Tribute Catalogue"
      prevLink="./diesel-tribute-catalogue"
      next="Comperemedia Website"
      nextLink="./comperemedia-website"
    />
  </>
  )
}