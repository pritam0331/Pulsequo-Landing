/**
 * Webhooks Documentation Page
 * Route: /developers/webhooks
 */

import { Webhook, ShieldCheck } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'

export function WebhooksDocsPage() {

  const events = [
    {
      event: 'lead.created',
      description: 'Fired whenever an AI conversational flow or chat widget captures a new verified customer prospect.',
      payload: {
        event: 'lead.created',
        timestamp: '2026-11-14T10:45:00.000Z',
        data: {
          leadId: 'ld_8f9321',
          name: 'Vikram Mehta',
          phone: '+919811002233',
          company: 'Nexus Mobility',
          service: 'Communication Cloud (CPaaS)',
          channel: 'whatsapp',
        },
      },
    },
    {
      event: 'message.sent',
      description: 'Fired when an outbound or inbound message is transmitted across WhatsApp, SMS, or live chat.',
      payload: {
        event: 'message.sent',
        timestamp: '2026-11-14T10:46:12.000Z',
        data: {
          sessionId: 'ses_11a8b9',
          recipientId: '+919811002233',
          channel: 'whatsapp',
          status: 'delivered',
        },
      },
    },
    {
      event: 'conversation.handoff',
      description: 'Fired when an AI assistant determines a customer query requires human intervention.',
      payload: {
        event: 'conversation.handoff',
        timestamp: '2026-11-14T10:48:30.000Z',
        data: {
          sessionId: 'ses_11a8b9',
          customerName: 'Vikram Mehta',
          reason: 'Customer requested live pricing manager',
          assignedTeam: 'Sales Engineering',
        },
      },
    },
    {
      event: 'appointment.booked',
      description: 'Fired when an AI agent successfully reserves a calendar slot via the appointment MCP server.',
      payload: {
        event: 'appointment.booked',
        timestamp: '2026-11-14T11:00:00.000Z',
        data: {
          bookingId: 'apt_5599',
          attendeeEmail: 'vikram@nexusmobility.in',
          slotTime: '2026-11-16T15:00:00+05:30',
        },
      },
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Event Webhooks & Subscriptions Reference | PulseQuo Developers"
        description="Comprehensive documentation on PulseQuo event webhooks: lead.created, message.sent, conversation.handoff, and HMAC SHA-256 signature verification."
        canonicalPath="/developers/webhooks"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Developers', href: '/developers' },
                { label: 'Webhooks' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100/80 border border-emerald-200 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-6">
              <Webhook className="size-3.5 text-emerald-600" />
              <span>Event-Driven Architecture</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Real-Time Event Webhooks
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Subscribe your external backend, CRM, or data warehouse to live customer interaction events with automatic
              retry mechanisms and HMAC validation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Security & Verification */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-8 shadow-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-emerald-600 shrink-0" />
                <h3 className="text-lg font-bold text-slate-900">HMAC SHA-256 Signature Verification</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Every webhook dispatch includes the <code className="font-mono text-xs bg-slate-200 px-1.5 py-0.5 rounded">X-PulseQuo-Signature</code> HTTP header. To verify the payload was not intercepted or altered, compute the HMAC SHA-256 digest of the raw request body using your configured Webhook Secret.
              </p>
              <div className="mt-4 rounded-lg bg-[#020618] border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
                <pre>{`// Node.js Express Verification Example
const crypto = require('crypto');
const signature = req.headers['x-pulsequo-signature'];
const expected = crypto.createHmac('sha256', process.env.PULSEQUO_WEBHOOK_SECRET)
                       .update(JSON.stringify(req.body))
                       .digest('hex');
const isAuthentic = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));`}</pre>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Supported Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Supported Payloads"
            title="Core Platform Webhook Events"
            description="Subscribe to specific events or all lifecycle updates in your PulseQuo dashboard settings."
          />

          <div className="space-y-8 mt-12">
            {events.map((evt, idx) => (
              <StaggerItem key={evt.event} index={idx} hoverElevation>
                <div className="rounded-xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-mono text-base font-bold text-blue-600">{evt.event}</span>
                    <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-mono">
                      JSON POST
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600">{evt.description}</p>

                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Example Payload</h4>
                    <div className="rounded-lg bg-[#020618] border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                      <pre>{JSON.stringify(evt.payload, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
