import type { Metadata } from 'next'
import { DM_Serif_Display, Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './header'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
})

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Giulia Pietrobelli',
  description: 'Giulia Pietrobelli portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${poppins.variable} font-sans m-0`}>

        <Header />

        <div className='pt-24 md:pt-32 lg:pt-52'>
          {children}
        </div>

        <div className="flex flex-col gap-6 justify-center bg-charcoal min-h-96 py-16">
          <ul className="flex text-center justify-center gap-8">
            <li>
              <Link href="/" className="text-sand/60 text-xs font-light tracking-widest uppercase hover:text-sand/90 transition-colors duration-300">Collections</Link>
            </li>
            <li>
              <Link href="/about" className="text-sand/60 text-xs font-light tracking-widest uppercase hover:text-sand/90 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sand/60 text-xs font-light tracking-widest uppercase hover:text-sand/90 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extralight tracking-wider text-sand/40">follow me</span>
            <Link href="https://www.instagram.com/julibel_studio" target="blank">
              <svg viewBox="0 0 448 512" fill="#ECE5DC" fillOpacity="0.35" width="18" height="18">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </Link>
          </div>
          <p className="text-sand/30 text-center text-xs font-extralight tracking-widest">Made with ♥ in Italy</p>
        </div>

      </body>
    </html>
  )
}
