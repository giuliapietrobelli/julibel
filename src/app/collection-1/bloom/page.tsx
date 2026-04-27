import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration2.png'

export default function Bloom() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Bloom</h2>
        <Image src={illo} alt="Bloom Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Skater Boy"
        prevLink="/collection-1/skater-boy"
        next="Yoga"
        nextLink="/collection-1/yoga"
      />
    </>
  )
}
