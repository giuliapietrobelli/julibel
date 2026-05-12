import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
    <div className="animate-fade-up container flex flex-col lg:flex-row gap-16 lg:gap-24 px-12 md:px-20 lg:px-32 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="flex flex-col gap-5 lg:w-1/2 lg:py-4">
        <h3 className="font-medium text-xl md:text-2xl leading-snug">Hi, I&apos;m Giulia, a surface pattern designer and illustrator based in Italy.</h3>
        <p className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          Inspired by vintage textiles, nature and travels around the world, I create thoughtfully crafted patterns and illustrations designed to bring warmth, character and storytelling into everyday spaces.
        </p>
        <p className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          With a background in graphic design spanning over a decade, I&apos;ve worked across branding, digital design and visual storytelling for international brands including Laura Ashley and Diesel. Over time, my creative journey naturally evolved toward surface pattern design, where I found the perfect balance between artistic expression and decorative design.
        </p>
        <p className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          My work is deeply influenced by botanical details, nostalgic interiors, traditional decorative arts and the beauty of imperfect hand-drawn elements. I love creating collections that feel timeless yet versatile, blending soft palettes, layered textures and narrative motifs suited for wallpaper, fabric, stationery and home decor.
        </p>
        <p className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          Originally from Italy and shaped by experiences living abroad, I approach every collection with a strong sense of atmosphere and emotion, always aiming to create designs that feel both visually distinctive and commercially adaptable.
        </p>
        <p className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          My collections are available for licensing and collaborative projects in wallpaper, fabric, home decor and lifestyle products.
        </p>
        <div className="font-extralight text-sm md:text-base leading-7 text-left text-zinc-700">
          <p className="font-light text-zinc-900 mb-2">Available for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Surface pattern licensing</li>
            <li>Wallpaper collections</li>
            <li>Fabric collections</li>
            <li>Home decor collaborations</li>
            <li>Custom artwork and illustrations</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
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