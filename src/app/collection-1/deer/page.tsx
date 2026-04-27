import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../../illustrations/illustration10.png'

export default function Deer() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Deer</h2>
        <Image src={illo} alt="Deer Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Fashion Illustration"
        prevLink="/collection-1/fashion-illustration"
        next="Nymph"
        nextLink="/collection-1/nymph"
      />
    </>
  )
}
