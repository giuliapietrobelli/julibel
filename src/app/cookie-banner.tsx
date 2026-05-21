'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type Prefs = { analytics: boolean; marketing: boolean }

function applyConsent(prefs: Prefs) {
  window.gtag?.('consent', 'update', {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  })
}

function persist(prefs: Prefs) {
  localStorage.setItem('cookie_consent', 'saved')
  localStorage.setItem('cookie_consent_analytics', String(prefs.analytics))
  localStorage.setItem('cookie_consent_marketing', String(prefs.marketing))
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 w-9 h-[18px] rounded-full border transition-colors ${
        checked ? 'border-sand/50 bg-sand/20' : 'border-sand/20 bg-transparent'
      }`}
    >
      <span
        className={`absolute top-0.5 h-3 w-3 rounded-full bg-sand/60 transition-all ${
          checked ? 'left-[18px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}

const btn = 'text-sand/60 text-xs font-light tracking-widest uppercase border border-sand/25 px-4 py-2 hover:text-sand/90 hover:border-sand/50 transition-colors whitespace-nowrap'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, marketing: false })

  useEffect(() => {
    const show = () => { setShowPrefs(false); setVisible(true) }
    window.addEventListener('show-cookie-banner', show)
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
    return () => window.removeEventListener('show-cookie-banner', show)
  }, [])

  if (!visible) return null

  const commit = (p: Prefs) => { persist(p); applyConsent(p); setVisible(false); setShowPrefs(false) }

  if (showPrefs) return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-woodland border-t border-sand/10 px-6 py-8 md:px-12">
      <div className="max-w-2xl mx-auto">
        <p className="text-sand/50 text-xs tracking-widest uppercase mb-6">Cookie Preferences</p>
        <div className="flex flex-col divide-y divide-sand/10">

          <div className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="text-sand/80 text-xs font-light tracking-wide">Necessary</p>
              <p className="text-sand/40 text-xs font-light mt-1 leading-relaxed max-w-sm">
                Required for the website to function. Cannot be disabled.
              </p>
            </div>
            <span className="text-sand/30 text-xs font-light tracking-widest uppercase shrink-0 mt-0.5">Always on</span>
          </div>

          <div className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="text-sand/80 text-xs font-light tracking-wide">Analytics</p>
              <p className="text-sand/40 text-xs font-light mt-1 leading-relaxed max-w-sm">
                Google Analytics & Microsoft Clarity — help us understand how visitors use the site.
              </p>
            </div>
            <Toggle checked={prefs.analytics} onChange={v => setPrefs(p => ({ ...p, analytics: v }))} />
          </div>

          <div className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="text-sand/80 text-xs font-light tracking-wide">Marketing</p>
              <p className="text-sand/40 text-xs font-light mt-1 leading-relaxed max-w-sm">
                Pinterest Tag — enables personalised content and campaign measurement.
              </p>
            </div>
            <Toggle checked={prefs.marketing} onChange={v => setPrefs(p => ({ ...p, marketing: v }))} />
          </div>

        </div>
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setShowPrefs(false)}
            className="text-sand/40 text-xs font-light tracking-widest uppercase hover:text-sand/60 transition-colors mr-auto"
          >
            ← Back
          </button>
          <button onClick={() => commit({ analytics: false, marketing: false })} className={btn}>
            Reject All
          </button>
          <button onClick={() => commit(prefs)} className={btn}>
            Save
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-woodland border-t border-sand/10 px-6 py-5 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-sand/60 text-xs font-light tracking-wide leading-relaxed flex-1">
          We use cookies to understand how visitors interact with our site.{' '}
          <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-sand/90 transition-colors">
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button
            onClick={() => setShowPrefs(true)}
            className="text-sand/40 text-xs font-light tracking-widest uppercase hover:text-sand/70 transition-colors"
          >
            Preferences
          </button>
          <button onClick={() => commit({ analytics: false, marketing: false })} className={btn}>
            Reject
          </button>
          <button onClick={() => commit({ analytics: true, marketing: true })} className={btn}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
