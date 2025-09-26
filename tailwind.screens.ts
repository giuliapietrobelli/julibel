const screens =  {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px"
}

export const breakpoints = Object.fromEntries(Object.entries(screens).map(([key, value]) => [key, Number.parseInt(value)]))

export default screens;