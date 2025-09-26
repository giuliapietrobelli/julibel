import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './header'

const poppins = Poppins({subsets: ["latin"], weight: ['200','300', '400', '500', '700']})

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
      <body className={`${poppins.className} m-0`}>

        <Header />

        <div className='pt-24 md:pt-32'>
          {children}
        </div>

        <div className="flex flex-col gap-4 justify-center bg-zinc-800 min-h-96">
          <ul className="flex text-center justify-center gap-4">
            <li>
            <Link href="/work" className="text-zinc-300 text-xl font-medium hover:opacity-75 hover:transition-opacity">Work</Link>
            </li>

            <li>
            <Link href="/about" className="text-zinc-300 text-xl font-medium hover:opacity-75 hover:transition-opacity">About</Link>
            </li>

            <li>
              <Link href="/contact" className="text-zinc-300 text-xl font-medium hover:opacity-75 hover:transition-opacity">Contact</Link>
            </li>
          </ul>
          <p className="text-white text-center text-sm font-light">Made with ♥ in Italy</p>
        </div>

      </body>
    </html>
  )
}
