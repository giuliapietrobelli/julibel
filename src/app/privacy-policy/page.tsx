export const metadata = {
  title: 'Privacy Policy — Julibel Studio',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl text-charcoal mb-2">Privacy Policy</h1>
      <p className="text-warm-gray text-xs font-light tracking-widest uppercase mb-12">Last updated: May 2026</p>

      <Section title="Who we are">
        <p>
          This website is operated by Giulia Pietrobelli, trading as Julibel Studio, based in Italy.
          You can contact us via the <a href="/contact" className="underline underline-offset-2 hover:text-charcoal transition-colors">contact page</a>.
        </p>
      </Section>

      <Section title="What data we collect">
        <p>We collect the following categories of personal data:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li><strong className="font-normal">Usage data</strong> — pages visited, time on site, browser type, device, approximate location (country/city). Collected via analytics cookies when you give consent.</li>
          <li><strong className="font-normal">Contact data</strong> — name and email address, only if you submit the contact form.</li>
        </ul>
        <p className="mt-3">We do not collect sensitive personal data and we do not sell your data to third parties.</p>
      </Section>

      <Section title="Legal basis for processing">
        <ul className="list-disc list-inside space-y-1">
          <li><strong className="font-normal">Consent</strong> — analytics and marketing cookies are only placed after you accept them in the cookie banner.</li>
          <li><strong className="font-normal">Legitimate interest</strong> — basic server logs necessary to operate the website securely.</li>
          <li><strong className="font-normal">Contract</strong> — contact form submissions, to respond to your enquiry.</li>
        </ul>
      </Section>

      <Section title="Third-party processors">
        <p>When you consent, we share data with the following processors:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li><strong className="font-normal">Google Analytics 4</strong> (Google LLC) — website analytics. Data may be transferred to the US under Standard Contractual Clauses. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Privacy Policy</a></li>
          <li><strong className="font-normal">Microsoft Clarity</strong> (Microsoft Corporation) — session recordings and heatmaps. <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Microsoft Privacy Statement</a></li>
          <li><strong className="font-normal">Pinterest Tag</strong> (Pinterest, Inc.) — marketing and campaign measurement. <a href="https://policy.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Pinterest Privacy Policy</a></li>
        </ul>
        <p className="mt-3">All analytics and marketing tools are managed through Google Tag Manager and only activated after your consent.</p>
      </Section>

      <Section title="Data retention">
        <ul className="list-disc list-inside space-y-1">
          <li>Google Analytics data: 26 months (Google&apos;s default retention period)</li>
          <li>Microsoft Clarity data: 13 months</li>
          <li>Contact form submissions: retained for as long as needed to respond to your enquiry</li>
        </ul>
      </Section>

      <Section title="Your rights under GDPR">
        <p>If you are located in the European Economic Area, you have the right to:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing</li>
          <li>Withdraw consent at any time (via the Cookie Settings link in the footer)</li>
          <li>Lodge a complaint with your national data protection authority</li>
        </ul>
        <p className="mt-3">To exercise these rights, please contact us via the <a href="/contact" className="underline underline-offset-2 hover:text-charcoal transition-colors">contact page</a>.</p>
      </Section>

      <Section title="Cookies">
        <p>
          For full details on the cookies we use, see our{' '}
          <a href="/cookie-policy" className="underline underline-offset-2 hover:text-charcoal transition-colors">Cookie Policy</a>.
          You can update your preferences at any time using the Cookie Settings link in the footer.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>We may update this policy from time to time. The date at the top of this page will reflect the latest revision.</p>
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
