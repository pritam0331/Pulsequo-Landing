/**
 * PulseQuo Contact Us Form Component
 */

import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { submitContactForm, type ContactFormData } from '../../services/demoService'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessEmail: '',
    company: '',
    phone: '',
    subject: 'General Enterprise Inquiry',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSuccessMsg(null)
    setLoading(true)

    try {
      const res = await submitContactForm(formData)
      if (res.success) {
        setSuccessMsg(res.message)
        setFormData({
          name: '',
          businessEmail: '',
          company: '',
          phone: '',
          subject: 'General Enterprise Inquiry',
          message: '',
        })
      } else {
        setErrorMsg(res.message)
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please write directly to contact@pulsequo.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xl shadow-slate-900/5">
      <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
      <p className="mt-2 text-sm text-slate-600">
        Our enterprise solutions and technical support desks are here to assist you.
      </p>

      {successMsg && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
          <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Message Received</p>
            <p className="mt-1">{successMsg}</p>
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-800">
          <AlertCircle className="size-5 shrink-0 text-rose-600 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Notice</p>
            <p className="mt-1">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Michael Chen"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700">
            Work Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="m.chen@organization.com"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700">
              Company / Organization <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Enterprise Name"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700">
              Phone / Mobile (Optional)
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 90000 00000"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700">
            Inquiry Subject
          </label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          >
            <option value="General Enterprise Inquiry">General Enterprise Inquiry</option>
            <option value="CPaaS & WhatsApp Throughput Pricing">CPaaS & WhatsApp High-Volume Pricing</option>
            <option value="Carrier SMS & DLT Routing">Carrier SMS & DLT Routing</option>
            <option value="Custom MCP Tool Integration">Custom MCP Tool Integration</option>
            <option value="Partnership & Ecosystem">Partnership & Reseller Program</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="How can our technical or sales specialists help your business?"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Transmitting message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
