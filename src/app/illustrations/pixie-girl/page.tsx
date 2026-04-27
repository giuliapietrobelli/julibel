import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration7.png'

export default function PixieGirl() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Pixie Girl</h2>
        <Image src={illo} alt="Pixie Girl Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Lotus Bowl"
        prevLink="/illustrations/lotus-bowl"
        next="Buttercup Floral Pattern"
        nextLink="/illustrations/buttercup-floral-pattern"
      />
    </>
  )
}
