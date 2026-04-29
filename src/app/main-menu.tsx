"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const workItems = [
  { title: 'Retro Country', href: '/mintel-store-redesign' },
  { title: 'Secret Garden', href: '/comperemedia-website' },
  { title: 'Soft Tide', href: '/mintel-digital-advertising' },
  { title: 'Playful Cats', href: '/illustrations' },
  { title: 'Echoes of Siam', href: '/laura-ashley-feature-page' },
  { title: 'Collection 6', href: '/laura-ashley-newsletters' },
]

export default function MainMenu(props: any) {
  const [workOpen, setWorkOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  function openDropdown() {
    if (window.innerWidth < 1024) return
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setWorkOpen(true)
  }

  function closeDropdown() {
    if (window.innerWidth < 1024) return
    closeTimeout.current = setTimeout(() => setWorkOpen(false), 150)
  }

  function handleWorkClick(e: React.MouseEvent) {
    if (window.innerWidth < 1024) {
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

  const baseClasses = 'flex-col items-center text-center gap-4 text-4xl lg:text-base font-extralight leading-loose text-zinc-900 lg:flex lg:flex-row lg:gap-7';
  const closeClasses = baseClasses + ' ' + 'hidden lg:visible';

  function handleClose() {
    setWorkOpen(false)
    props.onClick?.()
  }

  return (
    <ul className={props.isMenuOpen ? baseClasses : closeClasses}>
      <li ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
        <Link
          href="/"
          onClick={handleWorkClick}
          className={`underline-offset-8 hover:underline decoration-1 ${isWorkActive ? 'underline' : ''}`}
        >
          Collections
        </Link>
        {workOpen && (
          <ul className="flex flex-col items-center lg:items-start gap-3 lg:gap-0 mt-2 lg:absolute lg:top-full lg:-left-4 lg:mt-1 lg:bg-white lg:border lg:border-zinc-200 lg:shadow-md lg:py-1 lg:min-w-max text-left">
            {workItems.map((item) => (
              <li key={item.href} className="lg:w-full">
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className={`block text-2xl lg:text-sm font-extralight text-zinc-900 lg:px-5 lg:py-2 hover:underline lg:hover:bg-zinc-50 underline-offset-4 ${pathname === item.href ? 'underline' : ''}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li>
        <UnderlineLink onClick={handleClose} href="/about" isActive={pathname === '/about'}>About</UnderlineLink>
      </li>
      <li>
        <UnderlineLink onClick={handleClose} href="/contact" isActive={pathname === '/contact'}>Contact</UnderlineLink>
      </li>
    </ul>
  )
}

function UnderlineLink({ isActive, className, ...props }: any) {
  return (
    <Link
      className={`underline-offset-8 hover:underline decoration-1 ${isActive ? 'underline' : ''}`}
      {...props}
    />
  )
}
