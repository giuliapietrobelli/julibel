import Link from 'next/link'

export default function PaginationLinks(props: any) {
  return (
    <>
      <div className="flex justify-end pb-20 px-6 md:px-18 2xl:px-[6rem]">
        <Link href={props.prevLink} className="flex items-center md:gap-4 mr-auto max-w-40 md:max-w-xs lg:max-w-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M20 30L8 16L20 2" />
          </svg>
          <div>
            <h3 className="text-zinc-900 font-medium text-md md:text-3xl">{props.prev}</h3>
          </div>
        </Link>

        <Link href={props.nextLink} className="flex items-center md:gap-4 ml-auto max-w-40 md:max-w-72 lg:max-w-xl">
          <div>
            <h3 className="text-zinc-900 font-medium text-right text-md md:text-3xl">{props.next}</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m12 30l12-14L12 2" />
          </svg>
        </Link>
      </div>
    </>
  )
}