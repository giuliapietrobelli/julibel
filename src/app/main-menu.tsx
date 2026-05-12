"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const workItems = [
  { title: 'Retro Country', href: '/retro-country' },
  { title: 'Secret Garden', href: '/secret-garden' },
  { title: 'Soft Tide', href: '/soft-tide' },
  { title: 'Playful Cats', href: '/playful-cats' },
  { title: 'Echoes of Siam', href: '/echoes-of-siam' },
]

export default function MainMenu({ onClose, mobile = false }: { onClose?: () => void; mobile?: boolean }) {
  const [workOpen, setWorkOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  function openDropdown() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setWorkOpen(true)
  }

  function closeDropdown() {
    closeTimeout.current = setTimeout(() => setWorkOpen(false), 150)
  }

  function handleWorkClick(e: React.MouseEvent) {
    if (mobile) {
      e.preventDefault()
      setWorkOpen(prev => !prev)
    }
  }

  const isWorkActive = pathname === '/' || workItems.some(i => i.href === pathname)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navClasses = mobile
    ? 'flex flex-col items-center gap-8 text-3xl font-extralight tracking-wide'
    : 'flex items-center gap-8 text-[11px] font-light tracking-[0.15em] uppercase'

  const linkBase = 'transition-opacity duration-200 hover:opacity-50'
  const activeClass = 'underline underline-offset-8 decoration-1'

  return (
    <ul className={navClasses} style={{ color: '#4A4644' }}>
      <li
        ref={dropdownRef}
        className="relative"
        onMouseEnter={!mobile ? openDropdown : undefined}
        onMouseLeave={!mobile ? closeDropdown : undefined}
      >
        <Link
          href="/"
          onClick={handleWorkClick}
          className={`${linkBase} ${isWorkActive ? activeClass : ''}`}
        >
          Collections
        </Link>
        {workOpen && (
          <ul className={
            mobile
              ? 'flex flex-col items-center gap-2 mt-3'
              : 'absolute top-full left-0 mt-2 bg-white border border-zinc-100 shadow-sm py-2 min-w-max z-50'
          }>
            {workItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={
                    mobile
                      ? `block text-xl font-extralight py-1 transition-opacity hover:opacity-50 ${pathname === item.href ? 'underline underline-offset-4' : ''}`
                      : `block text-[10px] tracking-normal normal-case font-extralight px-5 py-2 hover:bg-zinc-50 transition-colors ${pathname === item.href ? 'underline underline-offset-4' : ''}`
                  }
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li>
        <Link href="/about" onClick={onClose}
          className={`${linkBase} ${pathname === '/about' ? activeClass : ''}`}>
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={onClose}
          className={`${linkBase} ${pathname === '/contact' ? activeClass : ''}`}>
          Contact
        </Link>
      </li>
    </ul>
  )
}
