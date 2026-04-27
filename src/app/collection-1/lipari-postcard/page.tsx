import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration4.png'

export default function LipariPostcard() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Lipari Postcard</h2>
        <Image src={illo} alt="Lipari Postcard Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Yoga"
        prevLink="/collection-1/yoga"
        next="Preraphaelites"
        nextLink="/collection-1/preraphaelites"
      />
    </>
  )
}
