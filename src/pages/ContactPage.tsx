/**
 * Contact Us Page
 * Route: /contact
 */

import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { ContactForm } from '../components/forms/ContactForm'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { siteConfig } from '../config/siteConfig'

export function ContactPage() {
  return (
    <div className="relative">
      <SEO
        title="Contact PulseQuo · Enterprise Sales & Technical Support"
        description="Get in touch with PulseQuo’s enterprise solutions, sales, and technical support teams. We are here to help scale your customer communications."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <ScrollReveal direction="up" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} className="justify-center mb-6" />

          <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
            We&apos;re Here to Help Your Team Scale
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            Reach out for enterprise pricing, technical architecture inquiries, custom MCP tool integrations, or partnership opportunities.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Content */}
      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <ScrollReveal direction="left" className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Communication Desks</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Our distributed engineering and solution architecture teams monitor inquiries continuously.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">General Inquiries</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Response within 24 hours</p>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="mt-2 block text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Enterprise Sales & Solutions</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Custom volume quotes & demos</p>
                    <a
                      href={`mailto:${siteConfig.salesEmail}`}
                      className="mt-2 block text-sm font-semibold text-indigo-600 hover:underline"
                    >
                      {siteConfig.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Customer Support Desk</h4>
                    <p className="text-xs text-slate-500 mt-0.5">For active platform customers</p>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="mt-2 block text-sm font-semibold text-violet-600 hover:underline"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office & Phone Placeholders */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Registered Office</span>
                    <span>{siteConfig.addressPlaceholder}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Phone Desk</span>
                    <span>{siteConfig.phonePlaceholder}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Business Hours</span>
                    <span>Monday – Friday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Form Column */}
            <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
