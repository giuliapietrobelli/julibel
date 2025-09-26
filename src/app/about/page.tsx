import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container flex flex-col md:px-12 lg:px-16 py-20 gap-20 lg:flex-row ">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <h3 className="font-medium text-3xl leading-10">Hi, my name is Giulia,</h3>
        <p className="font-thin text-xl leading-9 text-left">
          With over a decade of experience in graphic design, my career has spanned across diverse design fields and cultural landscapes, including an experience in London, where I worked for renowned brands like Laura Ashley and Mintel.
        </p>
        <p className="font-thin text-xl leading-9 text-left">
        I began by crafting compelling visuals for print and later transitioned in web design, including basics of web development.
        I&apos;m proficient in essential technologies such as HTML, CSS, and frameworks like Tailwind, and I&apos;ve explored JavaScript and React to create dynamic user experiences within Next.js.
        </p>
        {/* <p className="font-thin text-xl leading-9 text-left">
          I believe in the convergence of design and user experience as integral to shaping memorable brand interactions.
          Whether collaborating with startups or established enterprises, I bring a blend of creative vision and technical proficiency to every project.
        </p> */}
        <p className="font-thin text-xl leading-9 text-left">
          Beyond designing pixels and writing code, you&apos;ll find me creating digital illustrations and patterns, strumming my guitar, and seeking inspiration through travel.
          As an <Link className="font-medium text-zinc-500 hover:text-zinc-600" href="https://www.16personalities.com/infp-personality" target="_blank">INFP</Link> personality type, I bring a unique blend of empathy and creativity to my work, always aiming to craft designs that are not only functional but also aesthetically pleasing.
        </p>

      </div>

      <div className="lg:w-1/2 text-center">
        <Image className="max-w-full rounded-full m-auto" src="/profilepic.png" alt="profile picture" width={480} height={480} priority/>
        <button className="self-start py-7 px-10 text-xl bg-zinc-700 hover:bg-zinc-600 transition-all border-0 text-white m-16">
          <Link href="/cv_giulia_pietrobelli_24.pdf" target="_blank">Download my CV</Link>
        </button>
      </div>

    </div>
  )
}