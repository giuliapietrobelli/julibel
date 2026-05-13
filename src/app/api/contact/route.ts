import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message, _hp } = body

  if (_hp) return NextResponse.json({ ok: true })

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'giuliapietrobelli@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}
