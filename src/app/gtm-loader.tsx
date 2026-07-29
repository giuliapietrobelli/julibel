'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const GTM_ID = 'GTM-5SJCBSFK'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

type Prefs = { analytics: boolean; marketing: boolean }

// Loads the GTM container the moment consent is resolvable, instead of at
// initial page load. This lets a first-time EU visitor's tag evaluation see
// their just-made choice immediately (no reload, no waiting on a container
// re-check that most non-Google tags don't support mid-session).
export default function GtmLoader({ isEU }: { isEU: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const liveFromRef = useRef<string | null>(null)

  useEffect(() => {
    if (!isEU) {
      setLoaded(true)
      return
    }

    function hasStoredGrant() {
      try {
        return (
          localStorage.getItem('cookie_consent_analytics') === 'true' ||
          localStorage.getItem('cookie_consent_marketing') === 'true'
        )
      } catch (e) {
        return false
      }
    }

    if (hasStoredGrant()) {
      // Returning visitor who previously granted at least one category.
      setLoaded(true)
      return
    }

    // No grant yet — either undecided, or a stored "reject all". Either way,
    // GTM stays uninjected until an actual grant happens (fresh or via
    // Cookie Settings), since nothing would fire for a full reject anyway.
    function onDecided(e: Event) {
      const prefs = (e as CustomEvent<Prefs>).detail
      if (prefs && (prefs.analytics || prefs.marketing)) {
        setLoaded(true)
        window.removeEventListener('consent-decided', onDecided)
      }
    }
    window.addEventListener('consent-decided', onDecided)
    return () => window.removeEventListener('consent-decided', onDecided)
  }, [isEU])

  // SPA route-change tracking: push a virtual pageview for every subsequent
  // client-side navigation once GTM is live. The very first path we see here
  // is skipped because GTM's own Initialization trigger already covers it.
  useEffect(() => {
    if (!loaded) return
    const current = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (liveFromRef.current === null) {
      liveFromRef.current = current
      return
    }
    if (current === liveFromRef.current) return
    liveFromRef.current = current

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'virtualPageview',
      page_path: current,
      page_location: window.location.href,
    })
  }, [loaded, pathname, searchParams])

  if (!loaded) return null

  return (
    <Script id="gtm" strategy="afterInteractive">{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `}</Script>
  )
}
