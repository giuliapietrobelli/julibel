import Link from 'next/link'
import { TinyBotanical } from './ornaments'

export default function CtaSection() {
  return (
    <div className="bg-sand py-24">
      <div className="container flex flex-col items-center gap-6 text-center px-12 md:px-20 lg:px-32">
        <TinyBotanical color="rgba(122, 114, 109, 0.45)" />
        <p className="font-light md:font-extralight text-sm leading-loose max-w-sm text-warm-gray mt-2">
          Need a pattern design or illustration to put on your products that will help sell them?
        </p>
        <h2 className="text-2xl md:text-3xl text-charcoal">Let&apos;s work together</h2>
        <Link
          href="/contact"
          className="mt-2 px-10 py-3 bg-charcoal text-ivory text-xs font-light tracking-widest uppercase hover:bg-woodland transition-colors duration-300"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  )
}
