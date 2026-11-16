/**
 * Demo and Contact Request Service
 * Handles client validation, duplicate prevention, and API submission.
 */

import { siteConfig } from '../config/siteConfig'

export interface DemoFormData {
  fullName: string
  businessEmail: string
  companyName: string
  phoneNumber: string
  productInterest: 'Communication Cloud' | 'Sales CRM' | 'Support CRM' | 'AI & Automation' | 'Complete PulseQuo Platform'
  companySize: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
  message?: string
  consent: boolean
}

export interface ContactFormData {
  name: string
  businessEmail: string
  company: string
  phone?: string
  subject: string
  message: string
}

export interface SubmissionResponse {
  success: boolean
  message: string
  error?: string
}

let lastDemoSubmissionTime = 0

export async function submitDemoRequest(data: DemoFormData): Promise<SubmissionResponse> {
  // Duplicate submission protection (minimum 10s between requests)
  const now = Date.now()
  if (now - lastDemoSubmissionTime < 10000) {
    return {
      success: false,
      message: 'A submission is already in progress. Please wait a moment before trying again.',
      error: 'RATE_LIMIT',
    }
  }

  // Client-side validation checks
  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    return { success: false, message: 'Please enter your full name.', error: 'INVALID_NAME' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.businessEmail.trim())) {
    return { success: false, message: 'Please provide a valid business email address.', error: 'INVALID_EMAIL' }
  }

  // Basic check for free generic email providers when business email is preferred
  const isGeneric = /(gmail|yahoo|hotmail|outlook|live)\.com$/i.test(data.businessEmail.trim())
  if (isGeneric) {
    // We allow it with a warning or proceed gracefully
  }

  if (!data.companyName.trim()) {
    return { success: false, message: 'Please enter your company name.', error: 'INVALID_COMPANY' }
  }

  if (!data.phoneNumber.trim() || data.phoneNumber.trim().length < 7) {
    return { success: false, message: 'Please enter a valid phone number.', error: 'INVALID_PHONE' }
  }

  if (!data.consent) {
    return { success: false, message: 'Please accept the privacy policy to proceed.', error: 'CONSENT_REQUIRED' }
  }

  lastDemoSubmissionTime = now

  const targetUrl = `${siteConfig.apiBaseUrl}${siteConfig.demoEndpoint}`

  try {
    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.fullName.trim(),
        email: data.businessEmail.trim(),
        company: data.companyName.trim(),
        phone: data.phoneNumber.trim(),
        productInterest: data.productInterest,
        companySize: data.companySize,
        message: data.message?.trim() || '',
        source: 'marketing_website_demo',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}))
      const errorMessage =
        errJson.error || errJson.message || `Request failed with status ${res.status}. Please try again shortly.`
      return { success: false, message: errorMessage, error: 'SERVER_ERROR' }
    }

    const json = await res.json().catch(() => ({}))
    return {
      success: true,
      message:
        json.message ||
        'Thank you! Your demo request has been received. Our solutions team will reach out within 24 hours to schedule your personalized walkthrough.',
    }
  } catch (err) {
    // If backend endpoint is currently unreachable in development / static preview
    console.warn('[DemoService] Endpoint unreachable:', targetUrl, err)
    return {
      success: false,
      message:
        'Unable to reach the server at this moment. You can also reach our team directly at ' + siteConfig.salesEmail,
      error: 'NETWORK_ERROR',
    }
  }
}

export async function submitContactForm(data: ContactFormData): Promise<SubmissionResponse> {
  if (!data.name.trim() || !data.businessEmail.trim() || !data.message.trim()) {
    return { success: false, message: 'Please fill in all required fields.', error: 'MISSING_FIELDS' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.businessEmail.trim())) {
    return { success: false, message: 'Please provide a valid email address.', error: 'INVALID_EMAIL' }
  }

  const targetUrl = `${siteConfig.apiBaseUrl}${siteConfig.contactEndpoint}`

  try {
    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.businessEmail.trim(),
        company: data.company.trim(),
        phone: data.phone?.trim() || '',
        subject: data.subject.trim(),
        message: data.message.trim(),
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}))
      return {
        success: false,
        message: errJson.error || errJson.message || 'Submission failed. Please email us directly.',
        error: 'SERVER_ERROR',
      }
    }

    return {
      success: true,
      message: 'Thank you for reaching out! We have received your inquiry and will reply shortly.',
    }
  } catch (err) {
    console.warn('[ContactService] Endpoint unreachable:', targetUrl, err)
    return {
      success: false,
      message:
        'The contact server is currently unreachable. Please send an email directly to ' + siteConfig.contactEmail,
      error: 'NETWORK_ERROR',
    }
  }
}
