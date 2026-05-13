"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TinyBotanical } from '../ornaments'

const inputClass = "border border-[#ECE5DC] px-3 py-2.5 text-sm font-extralight text-[#4A4644] placeholder:text-[#7A726D] focus:outline-none focus:border-[#7E93A3] bg-card transition-colors duration-200 w-full"
const labelClass = "text-xs font-light text-zinc-400 tracking-widest uppercase"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [honeypot, setHoneypot] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, _hp: honeypot }),
    })
    setLoading(false)
    if (res.ok) {
      setSubmitted(true)
    } else {
      setError('Something went wrong. Please try again or email me directly.')
    }
  }

  useEffect(() => {
    if (submitted) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [submitted])

  if (submitted) {
    return (
      <div className="animate-fade-up container flex flex-col items-center gap-4 py-52">
        <h1 className="text-2xl font-light text-zinc-800">Thank you!</h1>
        <p className="text-zinc-400 font-extralight text-sm">Your message has been sent. I'll be in touch soon.</p>
        <Link href="/" className="mt-4 text-xs font-light text-zinc-400 hover:text-charcoal underline underline-offset-4 transition-colors duration-200">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-up min-h-screen bg-ivory">
      <div className="max-w-2xl mx-auto px-8 py-16 md:py-24 flex flex-col gap-12">

        <div className="flex flex-col items-center gap-4 text-center">
          <TinyBotanical color="#7A726D" />
          <p className="text-base font-light text-charcoal leading-relaxed">Have a project, collaboration or licensing opportunity in mind?</p>
          <p className="text-base font-light text-charcoal leading-relaxed">Let's create something beautiful together!</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            type="text"
            name="phone_number"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
          />

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Name <span className="text-zinc-400 normal-case">*</span></label>
            <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Email <span className="text-zinc-400 normal-case">*</span></label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Message <span className="text-zinc-400 normal-case">*</span></label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className={inputClass + " resize-y"}
            />
          </div>

          {error && (
            <p className="text-sm font-extralight text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="self-start px-10 py-3 bg-charcoal text-ivory text-xs font-light tracking-widest uppercase hover:bg-woodland transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending…' : 'Submit'}
          </button>

        </form>
      </div>
    </div>
  )
}
