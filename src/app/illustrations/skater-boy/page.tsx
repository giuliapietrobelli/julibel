import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration1.png'

export default function SkaterBoy() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Skater Boy</h2>
        <Image src={illo} alt="Skater Boy Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Illustrations"
        prevLink="/illustrations"
        next="Bloom"
        nextLink="/illustrations/bloom"
      />
    </>
  )
}
