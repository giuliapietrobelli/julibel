import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration11.png'

export default function Nymph() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Nymph</h2>
        <Image src={illo} alt="Nymph Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Deer"
        prevLink="/illustrations/deer"
        next="Bubblegum Girl"
        nextLink="/illustrations/bubblegum-girl"
      />
    </>
  )
}
