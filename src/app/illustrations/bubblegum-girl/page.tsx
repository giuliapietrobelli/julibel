import Image from 'next/image'
import PaginationLinks from '../../pagination-links'
import illo from '../illustration12.png'

export default function BubblegumGirl() {
  return (
    <>
      <div className="container flex flex-col items-center gap-10 py-20">
        <h2 className="font-normal md:font-medium text-3xl md:text-4xl lg:text-5xl">Bubblegum Girl</h2>
        <Image src={illo} alt="Bubblegum Girl Illustration" className="max-w-full" />
      </div>

      <PaginationLinks
        prev="Nymph"
        prevLink="/illustrations/nymph"
        next="Illustrations"
        nextLink="/illustrations"
      />
    </>
  )
}
