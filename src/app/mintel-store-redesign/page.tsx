import ProjectIntro from '../project-intro'
import PaginationLinks from '../pagination-links'
import GalleryGrid from '../gallery-grid'
import BackLink from '../back-link'
import mintelHome from "./mintel_home.png"
import mintelListing from "./mintel_listing.png"
import mintelProduct from "./mintel_product.png"
import mintelCart from "./mintel_cart.png"
import mintelCheckout from "./mintel_checkout.png"

const images = [
  { src: mintelHome, alt: "Mintel homepage" },
  { src: mintelListing, alt: "Mintel listing page" },
  { src: mintelProduct, alt: "Mintel product page" },
  { src: mintelCart, alt: "Mintel cart page" },
  { src: mintelCheckout, alt: "Mintel checkout page" },
]

export default function Mintel() {
  return (
    <>
      <BackLink />
      <div className="container flex flex-col gap-10 md:gap-20 py-20">
        <ProjectIntro title="Mintel Store Redesign">
          Mintel&apos;s mission is to help companies to understand consumers&apos; behavior and buying orientations. As a member of
          the newly established digital marketing team, I was tasked with redesigning their eCommerce platform, which sells consumer market reports.
        </ProjectIntro>

        <GalleryGrid items={images} />
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
