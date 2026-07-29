'use client'

export default function CookieSettingsLink() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('cookie_consent')
        localStorage.removeItem('cookie_consent_analytics')
        localStorage.removeItem('cookie_consent_marketing')
        window.dispatchEvent(new Event('show-cookie-banner'))
      }}
      className="text-sand/60 text-[9px] font-light tracking-widest lowercase hover:text-sand/90 transition-colors duration-300"
    >
      Cookie Settings
    </button>
  )
}
