import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
    <div className="animate-fade-up container flex flex-col lg:flex-row gap-16 lg:gap-24 px-12 md:px-20 lg:px-32 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="flex flex-col gap-7 lg:w-1/2 lg:py-4">
        <h3 className="font-medium text-2xl md:text-3xl leading-snug">Hi, my name is Giulia,</h3>
        <p className="font-extralight text-base md:text-lg leading-8 text-left text-zinc-700">
          With over a decade of experience in graphic design, my career has spanned across diverse design fields and cultural landscapes, including an experience in London, where I worked for renowned brands like Laura Ashley and Mintel.
        </p>
        <p className="font-extralight text-base md:text-lg leading-8 text-left text-zinc-700">
          I began by crafting compelling visuals for print and later transitioned into web design, including basics of web development.
          I&apos;m proficient in essential technologies such as HTML, CSS, and frameworks like Tailwind, and I&apos;ve explored JavaScript and React to create dynamic user experiences within Next.js.
        </p>
        <p className="font-extralight text-base md:text-lg leading-8 text-left text-zinc-700">
          Beyond designing pixels and writing code, you&apos;ll find me creating digital illustrations and patterns, strumming my guitar, and seeking inspiration through travel.
          As an <Link className="font-medium text-zinc-500 hover:text-zinc-600" href="https://www.16personalities.com/infp-personality" target="_blank">INFP</Link> personality type, I bring a unique blend of empathy and creativity to my work, always aiming to craft designs that are not only functional but also aesthetically pleasing.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/julibel-profile.jpg" alt="profile picture" style={{ width: '360px', height: 'auto', maxWidth: '100%' }} />
      </div>

    </div>

    <div className="animate-fade-up-delay bg-zinc-100 py-16 lg:py-20">
      <div className="container px-12 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <h3 className="font-normal text-xl md:text-2xl leading-snug">Interested in working together?</h3>
        <p className="font-extralight text-base leading-8 text-zinc-700">
          I&apos;d love to hear from you!{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-zinc-900 transition-colors">Send me a message</Link>
          {' '}or{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-zinc-900 transition-colors">enquire about licensing</Link>.
        </p>
      </div>
    </div>
    </>
  )
}