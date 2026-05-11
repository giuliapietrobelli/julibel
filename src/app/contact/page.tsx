"use client"
import { useState } from 'react'

const inputClass = "border border-zinc-200 px-3 py-2.5 text-sm font-extralight text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 bg-white transition-colors duration-200 w-full"
const labelClass = "text-xs font-light text-zinc-500 tracking-wide uppercase"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    businessName: '', website: '', social: '', additionalInfo: '',
  })
  const [designLinks, setDesignLinks] = useState([''])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleDesignLinkChange(index: number, value: string) {
    const updated = [...designLinks]
    updated[index] = value
    setDesignLinks(updated)
  }

  function addDesignLink() {
    setDesignLinks([...designLinks, ''])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="animate-fade-up container flex flex-col items-center gap-4 py-52">
        <h1 className="text-2xl font-light text-zinc-800">Thank you!</h1>
        <p className="text-zinc-400 font-extralight text-sm">Your enquiry has been submitted. I'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <div className="animate-fade-up min-h-screen bg-stone-100">
      <div className="max-w-2xl mx-auto px-8 py-16 md:py-24 flex flex-col gap-12">

        <h1 className="text-3xl md:text-4xl font-light text-zinc-800 text-center">Enquiry Form</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">

          {/* Name section */}
          <div className="flex flex-col gap-6">
            <span className="text-base font-light text-zinc-700">Name</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>First Name <span className="text-zinc-400 normal-case">*</span></label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Last Name <span className="text-zinc-400 normal-case">*</span></label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className={labelClass}>Email <span className="text-zinc-400 normal-case">*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
            </div>
          </div>

          {/* Business */}
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Business Name <span className="text-zinc-400 normal-case">*</span></label>
            <input name="businessName" value={form.businessName} onChange={handleChange} required className={inputClass} />
          </div>

          {/* Website */}
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Link to your Website</label>
            <input name="website" type="url" value={form.website} onChange={handleChange} placeholder="http://" className={inputClass} />
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Link to one of your Social Media Channels</label>
            <input name="social" type="url" value={form.social} onChange={handleChange} placeholder="http://" className={inputClass} />
          </div>

          {/* Design links */}
          <div className="flex flex-col gap-4">
            <div>
              <label className={labelClass}>Design 1</label>
              <p className="text-xs font-extralight text-zinc-400 mt-1">Link to one of my designs that you're interested in</p>
            </div>

            <div className="flex flex-col gap-3">
              {designLinks.map((link, index) => (
                <div key={index} className="flex flex-col gap-1">
                  {index > 0 && (
                    <span className="text-xs font-extralight text-zinc-400">Design {index + 1}</span>
                  )}
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleDesignLinkChange(index, e.target.value)}
                    placeholder="http://"
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addDesignLink}
              className="flex items-center gap-2 self-start text-xs font-light text-zinc-400 hover:text-zinc-700 transition-colors duration-200 group"
            >
              <span className="w-5 h-5 rounded-full border border-zinc-300 group-hover:border-zinc-600 flex items-center justify-center transition-colors duration-200 text-base leading-none">+</span>
              Add more links
            </button>
          </div>

          {/* Additional info */}
          <div className="flex flex-col gap-2">
            <label className={labelClass}>Additional Information</label>
            <textarea
              name="additionalInfo"
              value={form.additionalInfo}
              onChange={handleChange}
              placeholder="Please provide as much information as you can."
              rows={5}
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            className="self-start px-10 py-3 bg-zinc-800 text-white text-sm font-light tracking-widest hover:bg-zinc-600 transition-colors duration-300"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}
