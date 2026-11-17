/**
 * PulseQuo Book a Demo Request Form
 * Compact enterprise layout matching the clean Lead Qualification design language:
 * - 2-column paired inputs (Name + Email, Company + Phone, Product + Size)
 * - Tighter spacing, refined labels, and compact textarea
 * - Strictly zero pill shapes.
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
    } catch (_err) {
      setErrorMsg('An unexpected error occurred. Please contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="border-b border-slate-100 pb-3.5 mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Request a Personalized Demo
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          See how PulseQuo can streamline your communication channels, unify your CRM, and deploy AI agents.
        </p>
      </div>

      {/* Success Banner */}
      {successMsg && (
        <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-emerald-800 animate-in fade-in-50">
          <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <p className="font-semibold">Demo Request Submitted Successfully</p>
            <p className="mt-0.5 text-emerald-700">{successMsg}</p>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {errorMsg && (
        <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-rose-50 border border-rose-200 p-3.5 text-rose-800 animate-in fade-in-50">
          <AlertCircle className="size-4 shrink-0 text-rose-600 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <p className="font-semibold">Submission Issue</p>
            <p className="mt-0.5 text-rose-700">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Row 1: Full Name & Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="businessEmail" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
              Work / Business Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              required
              value={formData.businessEmail}
              onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              placeholder="jane@company.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 2: Company Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="companyName" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
              Company Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Enterprises"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 3: Product Interest & Company Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="productInterest" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
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
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            >
              <option value="Complete PulseQuo Platform">Complete PulseQuo Platform</option>
              <option value="Communication Cloud">Communication Cloud (CPaaS)</option>
              <option value="Sales CRM">Sales CRM & Pipelines</option>
              <option value="Support CRM">Customer Support CRM</option>
              <option value="AI & Automation">AI Agents & Automation Flow</option>
            </select>
          </div>

          <div>
            <label htmlFor="companySize" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
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
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
            >
              <option value="1-10">1 – 10 employees</option>
              <option value="11-50">11 – 50 employees</option>
              <option value="51-200">51 – 200 employees</option>
              <option value="201-500">201 – 500 employees</option>
              <option value="500+">500+ employees (Enterprise)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message (Optional) */}
        <div>
          <label htmlFor="message" className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1">
            Tell us about your requirements <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Current channels, expected monthly volume, or CRM integrations..."
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-2 pt-0.5">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 size-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="consent" className="text-[11px] text-slate-600 leading-snug">
            I agree to receive communications regarding PulseQuo solutions. You may unsubscribe at any time. Your details will never be sold or shared.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
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
        </div>
      </form>
    </div>
  )
}
