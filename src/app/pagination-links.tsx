import Link from 'next/link'

export default function PaginationLinks(props: any) {
  return (
    <div className="flex justify-between pb-20 max-w-[1440px] mx-auto px-8 md:px-12 xl:px-16">
      <Link
        href={props.prevLink}
        className="flex items-center gap-3 group text-warm-gray hover:text-charcoal transition-colors duration-300"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M6.5 2L3 5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="font-light text-xs md:text-sm tracking-widest uppercase">{props.prev}</h3>
      </Link>

      <Link
        href={props.nextLink}
        className="flex items-center gap-3 group text-warm-gray hover:text-charcoal transition-colors duration-300"
      >
        <h3 className="font-light text-xs md:text-sm tracking-widest uppercase">{props.next}</h3>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  )
}
