import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { firstName, lastName, email, businessName, website, social, designLinks, additionalInfo, _hp } = body

  if (_hp) return NextResponse.json({ ok: true })

  const designLinksHtml = (designLinks as string[])
    .filter(Boolean)
    .map((link, i) => `<li>Design ${i + 1}: <a href="${link}">${link}</a></li>`)
    .join('')

  try {
    await resend.emails.send({
      from: 'Enquiry Form <onboarding@resend.dev>',
      to: 'giuliapietrobelli@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
        ${social ? `<p><strong>Social:</strong> <a href="${social}">${social}</a></p>` : ''}
        ${designLinksHtml ? `<p><strong>Design Links:</strong></p><ul>${designLinksHtml}</ul>` : ''}
        ${additionalInfo ? `<p><strong>Additional Info:</strong></p><p>${additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
