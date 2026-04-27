import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration5.png'

export default function Preraphaelites() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Preraphaelites</h2>
        <Image src={illo} alt="Preraphaelites Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Lipari Postcard"
        prevLink="/collection-1/lipari-postcard"
        next="Lotus Bowl"
        nextLink="/collection-1/lotus-bowl"
      />
    </>
  )
}
