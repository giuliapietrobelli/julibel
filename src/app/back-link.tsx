import Link from 'next/link'

export default function BackLink() {
  return (
    <div className="px-8 pt-6">
      <Link href="/" className="text-sm font-extralight text-zinc-400 hover:text-zinc-900 hover:underline underline-offset-4">
        ← Collections
      </Link>
    </div>
  )
}
