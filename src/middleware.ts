import { NextRequest, NextResponse } from 'next/server'

const EU_COUNTRIES = new Set([
  // EU member states
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR',
  'HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK',
  // EEA (GDPR applies)
  'IS','LI','NO',
  // UK (UK GDPR)
  'GB',
])

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') ?? ''
  // Default to showing banner if country is unknown (safe fallback for local dev / non-Vercel)
  const isEU = !country || EU_COUNTRIES.has(country)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-is-eu', isEU ? '1' : '0')
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon).*)'],
}
