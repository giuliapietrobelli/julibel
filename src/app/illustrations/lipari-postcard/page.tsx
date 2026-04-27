import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration4.png'

export default function LipariPostcard() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Lipari Postcard</h2>
        <Image src={illo} alt="Lipari Postcard Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Yoga"
        prevLink="/illustrations/yoga"
        next="Preraphaelites"
        nextLink="/illustrations/preraphaelites"
      />
    </>
  )
}
