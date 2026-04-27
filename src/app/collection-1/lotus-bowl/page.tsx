import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration6.png'

export default function LotusBowl() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Lotus Bowl</h2>
        <Image src={illo} alt="Lotus Bowl Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Preraphaelites"
        prevLink="/collection-1/preraphaelites"
        next="Pixie Girl"
        nextLink="/collection-1/pixie-girl"
      />
    </>
  )
}
