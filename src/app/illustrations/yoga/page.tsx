import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration3.png'

export default function Yoga() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Yoga</h2>
        <Image src={illo} alt="Yoga Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Bloom"
        prevLink="/illustrations/bloom"
        next="Lipari Postcard"
        nextLink="/illustrations/lipari-postcard"
      />
    </>
  )
}
