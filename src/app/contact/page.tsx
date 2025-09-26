import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="container flex flex-col gap-6 md:gap-10 py-60">
      <h2 className="text-center font-thin text-xl">let&apos;s work together!</h2>
      <Link href="mailto: info@giuliapietrobelli.com" className="text-center font-medium text-xl sm:text-3xl md:text-5xl">info@giuliapietrobelli.com</Link>
    </div>
  )
}