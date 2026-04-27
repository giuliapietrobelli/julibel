import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration5.png'

export default function Preraphaelites() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Preraphaelites</h2>
        <Image src={illo} alt="Preraphaelites Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Lipari Postcard"
        prevLink="/illustrations/lipari-postcard"
        next="Lotus Bowl"
        nextLink="/illustrations/lotus-bowl"
      />
    </>
  )
}
