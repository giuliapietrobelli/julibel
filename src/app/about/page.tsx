import Link from 'next/link'
import { DividerOrnament, TinyBotanical } from '../ornaments'

export default function About() {
  return (
    <>
    <div className="animate-fade-up container flex flex-col lg:flex-row gap-16 lg:gap-24 px-12 md:px-20 lg:px-32 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="flex flex-col gap-5 lg:w-1/2 lg:py-4">
        <h3 className="text-2xl md:text-3xl font-light text-charcoal">Hi, I&apos;m Giulia, a surface pattern designer and illustrator based in Italy.</h3>
        <p className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray">
          Inspired by vintage textiles, nature and travels around the world, I create thoughtfully crafted patterns and illustrations designed to bring warmth, character and storytelling into everyday spaces.
        </p>
        <p className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray">
          With a background in graphic design spanning over a decade, I&apos;ve worked across branding, digital design and visual storytelling for international brands including Laura Ashley and Diesel. Over time, my creative journey naturally evolved toward surface pattern design, where I found the perfect balance between artistic expression and decorative design.
        </p>
        <p className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray">
          My work is deeply influenced by botanical details, nostalgic interiors, traditional decorative arts and the beauty of imperfect hand-drawn elements. I love creating collections that feel timeless yet versatile, blending soft palettes, layered textures and narrative motifs suited for wallpaper, fabric, stationery and home decor.
        </p>
        <p className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray">
          Originally from Italy and shaped by experiences living abroad, I approach every collection with a strong sense of atmosphere and emotion, always aiming to create designs that feel both visually distinctive and commercially adaptable.
        </p>
        <p className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray">
          My collections are available for licensing and collaborative projects in wallpaper, fabric, home decor and lifestyle products.
        </p>
        <div className="font-extralight text-sm md:text-base leading-8 text-left text-warm-gray pt-2">
          <p className="font-light text-charcoal mb-3 text-xs tracking-widest uppercase">Available for:</p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />Surface pattern licensing</li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />Wallpaper collections</li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />Fabric collections</li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />Home decor collaborations</li>
            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />Custom artwork and illustrations</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-start lg:sticky lg:top-24 lg:self-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/julibel-profile.jpg" alt="profile picture" style={{ width: '360px', height: 'auto', maxWidth: '100%' }} />
      </div>

    </div>

    <div className="animate-fade-up-delay bg-sand py-20 lg:py-24">
      <div className="container flex flex-col items-center gap-6 text-center px-12 md:px-20 lg:px-32">
        <TinyBotanical color="#A8B2A1" />
        <h2 className="text-2xl md:text-3xl text-charcoal">Interested in working together?</h2>
        <DividerOrnament color="#A8B2A1" />
        <p className="font-extralight text-sm leading-loose text-warm-gray max-w-sm mt-2">
          I&apos;d love to hear from you.{' '}
          <Link href="/contact" className="text-dusty-blue underline underline-offset-4 hover:text-charcoal transition-colors duration-200">Send me a message</Link>
          {' '}or{' '}
          <Link href="/contact" className="text-dusty-blue underline underline-offset-4 hover:text-charcoal transition-colors duration-200">enquire about licensing</Link>.
        </p>
        <Link href="/contact" className="mt-4 px-10 py-3 bg-charcoal text-ivory text-xs font-light tracking-widest uppercase hover:bg-woodland transition-colors duration-300">
          Get in Touch
        </Link>
      </div>
    </div>
    </>
  )
}
