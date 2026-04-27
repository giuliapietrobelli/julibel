import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration8.png'

export default function ButtercupFloralPattern() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Buttercup Floral Pattern</h2>
        <Image src={illo} alt="Buttercup Floral Pattern Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Pixie Girl"
        prevLink="/illustrations/pixie-girl"
        next="Fashion Illustration"
        nextLink="/illustrations/fashion-illustration"
      />
    </>
  )
}
