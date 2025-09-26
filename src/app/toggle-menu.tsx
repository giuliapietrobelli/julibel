"use client"

export default function Toggle(props: any) {
  

  return (
    <button 
      onClick={props.onClick} 
      // className={"w-10 h-10 p-4 lg:hidden " + props.className}
      className="w-10 h-10 md:h-12 p-4 lg:hidden"
      aria-expanded={props.isMenuOpen ? 'true' : 'false'}
    >
      <svg fill="var(--button-color)" id="hamburger" viewBox="0 0 100 100" width="50" className="relative top-[-20px] right-[20px]">
        <rect
          className={props.isMenuOpen 
            ? 'origin-center rotate-45 transition-all ease-in duration-200'
            : 'origin-center transition-all ease-in duration-200' 
          }
          // id="line top" 
          width="80" 
          height="3" 
          x="10" 
          y={props.isMenuOpen ? '45' : '35'} 
          rx="5"
        >
        </rect>

        <rect 
          className={props.isMenuOpen  
            ? 'origin-center rotate-[-45deg] transition-all ease-in duration-200'
            : 'origin-center transition-all ease-in duration-200'
          }
          // id="line bottom" 
          width="80" 
          height="3" 
          x="10" 
          y={props.isMenuOpen ? '45' : '65'} 
          rx="5"
        >
        </rect>
      </svg>
    </button>
    )
}