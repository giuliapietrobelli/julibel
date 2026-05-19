import Link from 'next/link'
import { TinyBotanical } from './ornaments'

export default function ContactCta() {
  return (
    <div className="bg-sand py-20 lg:py-24">
      <div className="container flex flex-col items-center gap-6 text-center px-12 md:px-20 lg:px-32">
        <TinyBotanical color="rgba(122, 114, 109, 0.45)" />
        <h2 className="text-2xl md:text-3xl text-charcoal">Interested in working together?</h2>
        <p className="font-light md:font-extralight text-sm leading-loose text-warm-gray max-w-sm tracking-[0.01em] md:tracking-normal">
          I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-4 px-10 py-3 bg-charcoal text-ivory text-xs font-light tracking-widest uppercase hover:bg-woodland transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
