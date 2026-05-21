export const metadata = {
  title: 'Cookie Policy — Julibel Studio',
}

export default function CookiePolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl text-charcoal mb-2">Cookie Policy</h1>
      <p className="text-warm-gray text-xs font-light tracking-widest uppercase mb-12">Last updated: May 2026</p>

      <Section title="What are cookies">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the site remember
          information about your visit and can improve your experience on future visits.
        </p>
      </Section>

      <Section title="How we use cookies">
        <p>
          We use Google Tag Manager to load all third-party scripts. No analytics or marketing cookies are set
          until you give consent via the cookie banner. You can change your preferences at any time using the
          Cookie Settings link in the footer.
        </p>
      </Section>

      <Section title="Cookie categories">

        <div className="mt-4 space-y-8">

          <div>
            <p className="text-charcoal text-xs tracking-widest uppercase mb-3">Necessary</p>
            <p className="mb-3">These cookies are essential for the website to function and cannot be disabled.</p>
            <CookieTable rows={[
              { name: 'Next.js / Vercel', purpose: 'Session routing and deployment infrastructure', duration: 'Session' },
            ]} />
          </div>

          <div>
            <p className="text-charcoal text-xs tracking-widest uppercase mb-3">Analytics — set only with your consent</p>
            <p className="mb-3">These cookies help us understand how visitors interact with the website. All data is anonymous and used solely to improve the site.</p>
            <CookieTable rows={[
              { name: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
              { name: '_ga_*', purpose: 'Google Analytics — stores session state for GA4 property', duration: '2 years' },
              { name: '_clck', purpose: 'Microsoft Clarity — persists Clarity User ID', duration: '1 year' },
              { name: '_clsk', purpose: 'Microsoft Clarity — connects page views to a session', duration: '1 day' },
            ]} />
          </div>

          <div>
            <p className="text-charcoal text-xs tracking-widest uppercase mb-3">Marketing — set only with your consent</p>
            <p className="mb-3">These cookies are used to measure the effectiveness of marketing campaigns and enable personalised content.</p>
            <CookieTable rows={[
              { name: '_pinterest_ct_ua', purpose: 'Pinterest Tag — identifies users for ad targeting', duration: '1 year' },
              { name: '_pin_unauth', purpose: 'Pinterest Tag — tracks non-logged-in users', duration: '1 year' },
            ]} />
          </div>

        </div>
      </Section>

      <Section title="Managing your preferences">
        <p>
          You can update your cookie preferences at any time by clicking{' '}
          <strong className="font-normal">Cookie Settings</strong> in the footer.
          You can also manage or delete cookies directly through your browser settings.
        </p>
        <p className="mt-2">
          Note that disabling analytics or marketing cookies will not affect your ability to use this website.
        </p>
      </Section>

      <Section title="Third-party privacy policies">
        <ul className="list-disc list-inside space-y-1">
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Privacy Policy</a></li>
          <li><a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Microsoft Privacy Statement</a></li>
          <li><a href="https://policy.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Pinterest Privacy Policy</a></li>
        </ul>
      </Section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-charcoal text-xs font-light tracking-widest uppercase mb-4 border-b border-sand pb-2">{title}</h2>
      <div className="text-warm-gray text-sm font-light leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  )
}

function CookieTable({ rows }: { rows: { name: string; purpose: string; duration: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs font-light border-collapse">
        <thead>
          <tr className="border-b border-sand">
            <th className="text-left text-charcoal tracking-widest uppercase font-light py-2 pr-4 w-32">Cookie</th>
            <th className="text-left text-charcoal tracking-widest uppercase font-light py-2 pr-4">Purpose</th>
            <th className="text-left text-charcoal tracking-widest uppercase font-light py-2 w-24">Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.name} className="border-b border-sand/40">
              <td className="py-2 pr-4 text-charcoal font-mono">{r.name}</td>
              <td className="py-2 pr-4 text-warm-gray">{r.purpose}</td>
              <td className="py-2 text-warm-gray">{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
