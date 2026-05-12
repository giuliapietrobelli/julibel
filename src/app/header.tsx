"use client"
import Link from 'next/link'
import LogoGiulia from './logo'
import Toggle from './toggle-menu'
import MainMenu from './main-menu'
import SocialIcons from './social-nav'
import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function closeMenu() { setMenuOpen(false) }

  return (
    <header className={`fixed z-50 w-full bg-white ${menuOpen ? 'h-screen' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 xl:px-16">

      {/* ── MAIN ROW ── */}
      <div className="flex items-center h-24 lg:h-32">

        {/*
          LEFT slot
          Mobile: logo
          Desktop: nav links (logo hidden here, rendered absolutely below)
        */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="lg:hidden" onClick={closeMenu}>
            <LogoGiulia className="h-[62px]" />
          </Link>
          <nav className="hidden lg:block">
            <MainMenu onClose={closeMenu} />
          </nav>
        </div>

        {/*
          CENTER slot (desktop only)
          Absolute positioning keeps the logo truly centered regardless of
          the width of the left/right columns.
        */}
        <Link
          href="/"
          onClick={closeMenu}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 flex-shrink-0"
        >
          <LogoGiulia className="lg:h-[88px]" />
        </Link>

        {/*
          RIGHT slot
          Mobile: hamburger toggle
          Desktop: social icons (toggle is hidden by its own lg:hidden class)
        */}
        <div className="flex-1 flex items-center justify-end">
          <nav className="hidden lg:flex">
            <SocialIcons />
          </nav>
          <Toggle onClick={() => setMenuOpen(p => !p)} isMenuOpen={menuOpen} />
        </div>
      </div>

      {/* ── MOBILE OPEN MENU ── */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center justify-center gap-12 h-[calc(100vh-6rem)]">
          <MainMenu onClose={closeMenu} mobile />
          <SocialIcons />
        </div>
      )}
      </div>
    </header>
  )
}
