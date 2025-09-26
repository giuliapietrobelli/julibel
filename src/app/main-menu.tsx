"use client"
import Link from 'next/link'

export default function MainMenu(props: any) {
  const baseClasses = 'flex-col items-center text-center gap-4 text-4xl lg:text-base font-extralight leading-loose text-zinc-900 lg:flex lg:flex-row lg:gap-7';
  const closeClasses = baseClasses + ' ' + 'hidden lg:visible';

  return (
    <ul
      className={props.isMenuOpen
        ? baseClasses
        : closeClasses
      }>
      <li>
        <UnderlineLink onClick={props.onClick} href="/">Work</UnderlineLink>
      </li>
      <li>
        <UnderlineLink onClick={props.onClick} href="/about">About</UnderlineLink>
      </li>
      <li>
        <UnderlineLink onClick={props.onClick} href="/contact">Contact</UnderlineLink>
      </li>
    </ul>
  )
}

function UnderlineLink(props: any) {
  return (
    <Link 
      className='underline-offset-8 focus:underline focus-visible:underline active:decoration-solid decoration-1'
      {...props}
    />
  )
}