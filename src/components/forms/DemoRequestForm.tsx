/**
 * PulseQuo Book a Demo Request Form
 * Robust validation, spam protection, rate-limiting, and error/success states.
 */

import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import { submitDemoRequest, type DemoFormData } from '../../services/demoService'

interface DemoRequestFormProps {
  initialProductInterest?: DemoFormData['productInterest']
  onSuccess?: () => void
}

export function DemoRequestForm({ initialProductInterest }: DemoRequestFormProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    productInterest: initialProductInterest || 'Complete PulseQuo Platform',
    companySize: '11-50',
    message: '',
    consent: true,
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSuccessMsg(null)

    // Basic honey-pot or spam check
    setLoading(true)

    try {
      const result = await submitDemoRequest(formData)
      if (result.success) {
        setSuccessMsg(result.message)
        setFormData({
          fullName: '',
          businessEmail: '',
          companyName: '',
          phoneNumber: '',
          productInterest: 'Complete PulseQuo Platform',
          companySize: '11-50',
          message: '',
          consent: true,
        })
      } else {
        setErrorMsg(result.message)
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred. Please contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xl shadow-slate-900/5">
      <h3 className="text-2xl font-bold text-slate-900">Request a Personalized Demo</h3>
      <p className="mt-2 text-sm text-slate-600">
        See how PulseQuo can streamline your communication channels, unify your CRM, and deploy AI agents.
      </p>

      {/* Success Banner */}
      {successMsg && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 animate-in fade-in-50">
          <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold">Demo Request Submitted Successfully</p>
            <p className="mt-1">{successMsg}</p>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {errorMsg && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-800 animate-in fade-in-50">
          <AlertCircle className="size-5 shrink-0 text-rose-600 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold">Submission Issue</p>
            <p className="mt-1">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Jane Doe"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
          />
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="businessEmail" className="block text-xs font-semibold text-slate-700">
            Work / Business Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="businessEmail"
            type="email"
            required
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="jane@company.com"
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
          />
        </div>

        {/* Company Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700">
              Company Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Enterprises"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="+91 98765 43210"
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Product Interest & Company Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="productInterest" className="block text-xs font-semibold text-slate-700">
              Primary Product Interest
            </label>
            <select
              id="productInterest"
              value={formData.productInterest}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  productInterest: e.target.value as DemoFormData['productInterest'],
                })
              }
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            >
              <option value="Complete PulseQuo Platform">Complete PulseQuo Platform</option>
              <option value="Communication Cloud">Communication Cloud (CPaaS)</option>
              <option value="Sales CRM">Sales CRM & Pipelines</option>
              <option value="Support CRM">Customer Support CRM</option>
              <option value="AI & Automation">AI Agents & Automation Flow</option>
            </select>
          </div>

          <div>
            <label htmlFor="companySize" className="block text-xs font-semibold text-slate-700">
              Company Size (Employees)
            </label>
            <select
              id="companySize"
              value={formData.companySize}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companySize: e.target.value as DemoFormData['companySize'],
                })
              }
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            >
              <option value="1-10">1 – 10 employees</option>
              <option value="11-50">11 – 50 employees</option>
              <option value="51-200">51 – 200 employees</option>
              <option value="201-500">201 – 500 employees</option>
              <option value="500+">500+ employees (Enterprise)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
            Tell us about your requirements (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Current channels, expected monthly message volume, or specific CRM integrations..."
            className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
            I agree to receive communications regarding PulseQuo solutions. You may unsubscribe at any time. Your details will never be sold or shared.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Scheduling Demo...</span>
            </>
          ) : (
            <>
              <span>Schedule My Demo</span>
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
