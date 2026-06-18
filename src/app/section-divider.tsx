import Link from 'next/link'
import { SectionSeparator } from './ornaments'

export default function SectionDivider({ shopUrl }: { shopUrl?: string }) {
  return (
    <div className="container px-8 md:px-12 py-8">
      <SectionSeparator color="#C0B5AC" />
      {shopUrl && (
        <p className="text-center mt-5">
          <Link
            href={shopUrl}
            target="_blank"
            className="text-[9px] tracking-[0.3em] uppercase font-light text-[#5C5450] hover:text-[#4A4644] transition-colors duration-300"
          >
            Shop on Spoonflower
          </Link>
        </p>
      )}
    </div>
  )
}
