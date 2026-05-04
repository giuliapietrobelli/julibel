"use client"
import Link from 'next/link'
import MainMenu from './main-menu'
import LogoGiulia from './logo'
import Toggle from './toggle-menu'
import { useState, useEffect } from 'react';

export default function Header() {
  const [value, setValue] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setValue(prev => !prev)
  }

  function closeMenu() {
    setValue(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setValue(false);
    };
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <HeaderWrapper isMenuOpen={value} isScrolled={isScrolled}>
      <TopRow>
        <Link href="/">
          <LogoGiulia className={`transition-[height] duration-700 ease-in-out h-[67px] md:h-[77px] ${isScrolled ? 'lg:h-[67px]' : 'lg:h-[110px]'}`} />
        </Link>

        <Toggle
          onClick={toggleMenu}
          isMenuOpen={value}
        />
      </TopRow>

      <div className={`transition-all duration-700 ease-in-out ${isScrolled ? 'lg:px-8' : ''}`}>
        <MainMenu
          onClick={closeMenu}
          isMenuOpen={value}
        />
      </div>
    </HeaderWrapper>
  )
}

function HeaderWrapper({ isMenuOpen, isScrolled, children }: { isMenuOpen: boolean, isScrolled: boolean, children: React.ReactNode }) {
  // Scrolled: flex-row with logo absolutely centered and menu in flow (original layout)
  // Non-scrolled: flex-col with logo + menu stacked and centered
  const desktopLayout = isScrolled
    ? 'lg:flex-row lg:justify-between'
    : 'lg:flex-col lg:items-center lg:gap-4';

  const verticalPadding = isScrolled ? 'lg:py-3' : 'lg:py-6';
  const baseClasses = `fixed z-50 flex w-full lg:h-auto flex-col items-center ${desktopLayout} px-8 md:px-18 2xl:px-[6rem] py-6 ${verticalPadding} transition-all duration-700 ease-in-out`;

  const classes = isMenuOpen
    ? baseClasses + ' bg-slate-300 h-screen'
    : baseClasses + ' bg-white';

  return (
    <header className={classes}>
      {children}
    </header>
  )
}

function TopRow({ children }: { children: React.ReactNode }) {
  // When scrolled: absolute-centered (taken out of flex flow, menu can sit on right freely)
  // When not scrolled: in-flow, centered by parent flex-col items-center
  const positionClass = 'lg:w-auto';

  return (
    <div
      id="top-row"
      className={`flex items-center justify-between w-full h-12 md:h-20 lg:h-auto transition-[height,opacity] duration-700 ease-in-out ${positionClass}`}
    >
      {children}
    </div>
  )
}
