"use client"
import Link from 'next/link'
import MainMenu from './main-menu'
import LogoGiulia from './logo'
import SocialNav from './social-nav'
import Toggle from './toggle-menu'
import { useState, useEffect } from 'react';

// export function MyButton() {
//   const risultatoDellaChiamataAUseState = useState('visibile');

//   const valoreDiState = risultatoDellaChiamataAUseState[0];
//   const aggiornaLoStatoCon = risultatoDellaChiamataAUseState[1];

//   function gestisciclick(event: React.SyntheticEvent) {
//     event.stopPropagation();

//     if (valoreDiState === 'visibile') {
//       aggiornaLoStatoCon('nascosto')
//     } else {
//       aggiornaLoStatoCon('visibile')
//     }
//   }

//   return (
//     <button onClick={gestisciclick}>
//       Ci sono {valoreDiState}
//     </button>
//   );
// }

export default function Header() {
  const [value, setValue] = useState(false);

  function toggleMenu() {
    if (value) {
      setValue(false)
    } else {
      setValue(true)
    }
  }

  function closeMenu() {
    setValue(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setValue(false);
      }
    };

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <HeaderWrapper
      isMenuOpen={value}
    >
      <TopRow>
        <Link href="/">
          <LogoGiulia />
        </Link>

        <Toggle 
          // className={value ? 'bg-red-500' : 'bg-green-500'} 
          onClick={toggleMenu}
          isMenuOpen={value}
        />
      </TopRow >

      {/* {windowWidth} */}
      <MainMenu
        onClick={closeMenu}
        isMenuOpen={value}
      />

      <SocialNav
        isMenuOpen={value}
      />
    </HeaderWrapper>
  )
}

function HeaderWrapper(props: any) {
  const baseClasses = 'fixed z-10 flex w-full lg:h-auto flex-col lg:flex-row justify-between items-center px-8 md:px-18 2xl:px-[6rem] py-6 transition-all';
  const openClasses = 'h-screen transition-all';
  
  const classes = props.isMenuOpen 
    ? baseClasses + ' bg-slate-300 ' + openClasses 
    : baseClasses + ' bg-white ';

  return (
    <header 
      className={classes}
    >
      {props.children}
    </header>
  )
}

function TopRow(props: any) {
  return (
    <div id="top-row" className="flex items-center justify-between w-full h-12 md:h-20 lg:flex-row lg:w-auto lg:order-1">
      {props.children}
  </div>
  )
}