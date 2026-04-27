import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration9.png'

export default function FashionIllustration() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Fashion Illustration</h2>
        <Image src={illo} alt="Fashion Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Buttercup Floral Pattern"
        prevLink="/collection-1/buttercup-floral-pattern"
        next="Deer"
        nextLink="/collection-1/deer"
      />
    </>
  )
}
