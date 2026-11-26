import { useState } from 'react'
import {
  ShieldCheck,
  KeyRound,
  Zap,
  RefreshCw,
  Server,
  Code2,
  Radio,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { CodeShowcaseCard } from '../../components/common/CodeShowcaseCard'
import { indexBy } from '../../lib/dsa'

const HERO_WEBHOOK_JSON = `{
  "event": "lead.created",
  "eventId": "evt_98f4a12c",
  "timestamp": "2026-11-17T09:30:15.000Z",
  "data": {
    "leadId": "ld_8f9321",
    "name": "Vikram Mehta",
    "phone": "+919811002233",
    "channel": "whatsapp",
    "intent": "Enterprise CPaaS & WhatsApp API",
    "qualificationScore": 94
  }
}`

const HMAC_LANG_TABS = [
  { id: 'node', label: 'Node.js' },
  { id: 'python', label: 'Python' },
  { id: 'go', label: 'Go' },
  { id: 'curl', label: 'cURL' },
] as const

interface WebhookEventItem {
  id: string
  event: string
  category: 'Messaging' | 'Sales' | 'AI & Support' | 'Automation'
  description: string
  trigger: string
  payload: Record<string, unknown>
}

const webhookEvents: WebhookEventItem[] = [
  {
    id: 'lead-created',
    event: 'lead.created',
    category: 'Sales',
    description: 'Emitted immediately when an autonomous AI agent, WhatsApp inbound flow, or web widget captures and qualifies a prospect.',
    trigger: 'Inbound chat qualified by AI agent or CRM webform',
    payload: {
      event: 'lead.created',
      eventId: 'evt_98f4a12c',
      timestamp: '2026-11-17T09:30:15.000Z',
      data: {
        leadId: 'ld_8f9321',
        name: 'Vikram Mehta',
        phone: '+919811002233',
        company: 'Nexus Mobility Pvt Ltd',
        intent: 'Enterprise CPaaS & WhatsApp API',
        qualificationScore: 94,
        assignedPipelineStage: 'Demo Scheduled',
        sourceChannel: 'whatsapp_official_api',
      },
    },
  },
  {
    id: 'message-sent',
    event: 'message.sent',
    category: 'Messaging',
    description: 'Fired when an outbound or inbound message is dispatched across WhatsApp Cloud API, carrier SMPP, or SMS route.',
    trigger: 'Outbound campaign dispatch or live agent message transmission',
    payload: {
      event: 'message.sent',
      eventId: 'evt_22b109cc',
      timestamp: '2026-11-17T09:30:28.000Z',
      data: {
        messageId: 'msg_wamid_994102',
        recipient: '+919811002233',
        channel: 'whatsapp',
        templateName: 'order_dispatch_v2',
        dltTemplateId: '1107161829304859',
        status: 'accepted',
        carrierLatencyMs: 18,
      },
    },
  },
  {
    id: 'message-delivered',
    event: 'message.delivered',
    category: 'Messaging',
    description: 'Emitted upon receiving the upstream carrier delivery receipt (DLR) or Meta Cloud API delivery confirmation.',
    trigger: 'Terminal operator DLR handshake or handset delivery receipt',
    payload: {
      event: 'message.delivered',
      eventId: 'evt_77d33810',
      timestamp: '2026-11-17T09:30:31.000Z',
      data: {
        messageId: 'msg_wamid_994102',
        recipient: '+919811002233',
        channel: 'whatsapp',
        dlrStatus: 'DELIVRD',
        roundTripLatencyMs: 42,
      },
    },
  },
  {
    id: 'conversation-handoff',
    event: 'conversation.handoff',
    category: 'AI & Support',
    description: 'Fired when an autonomous AI agent determines human intervention is required based on confidence thresholds or SLA triggers.',
    trigger: 'AI intent deflection threshold exceeded or customer request for human agent',
    payload: {
      event: 'conversation.handoff',
      eventId: 'evt_66c401aa',
      timestamp: '2026-11-17T09:31:04.000Z',
      data: {
        sessionId: 'ses_11a8b9',
        customerPhone: '+919811002233',
        reason: 'Customer requested bespoke commercial contract review',
        handoffPriority: 'high',
        assignedTeamQueue: 'Enterprise Sales Desk',
        sentimentScore: 0.88,
      },
    },
  },
  {
    id: 'appointment-booked',
    event: 'appointment.booked',
    category: 'Automation',
    description: 'Emitted when an AI assistant successfully books a calendar demonstration slot via Model Context Protocol (MCP) tooling.',
    trigger: 'Autonomous AI agent execution of calendar MCP server reservation tool',
    payload: {
      event: 'appointment.booked',
      eventId: 'evt_33e990ff',
      timestamp: '2026-11-17T09:32:18.000Z',
      data: {
        bookingId: 'apt_559901',
        attendeeEmail: 'vikram@nexusmobility.in',
        attendeeName: 'Vikram Mehta',
        slotIso: '2026-11-20T14:30:00+05:30',
        assignedHost: 'Aarav Patel (Solution Architect)',
        meetingUrl: 'https://meet.pulsequo.com/demo-apt-559901',
      },
    },
  },
]

const WEBHOOK_EVENT_BY_ID = indexBy(webhookEvents, (e) => e.id)

export function WebhooksDocsPage() {
  const [selectedEventId, setSelectedEventId] = useState<string>('lead-created')
  const [activeCodeLang, setActiveCodeLang] = useState<'node' | 'python' | 'go' | 'curl'>('node')

  const activeEvent = WEBHOOK_EVENT_BY_ID.get(selectedEventId) ?? webhookEvents[0]

  const codeSnippets = {
    node: `// Node.js (Express) - Cryptographic HMAC SHA-256 Verification
const crypto = require('crypto');
const express = require('express');
const app = express();

app.post('/api/pulsequo-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['x-pulsequo-signature'];
  const secret = process.env.PULSEQUO_WEBHOOK_SECRET;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(req.body)
    .digest('hex');

  // Mitigate timing attacks with constant-time equality
  const isValid = crypto.timingSafeEqual(
    Buffer.from(signature || '', 'hex'),
    Buffer.from(expected, 'hex')
  );

  if (!isValid) return res.status(401).send('Invalid signature');

  const payload = JSON.parse(req.body.toString());
  console.log('Verified Event:', payload.event, payload.eventId);
  return res.status(200).json({ received: true });
});`,

    python: `# Python (FastAPI / Flask) - Cryptographic HMAC SHA-256 Verification
import hmac
import hashlib
import json
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()
WEBHOOK_SECRET = "whsec_live_948f21903ba84f".encode('utf-8')

@app.post("/api/pulsequo-webhook")
async def handle_webhook(request: Request):
    signature = request.headers.get("X-PulseQuo-Signature", "")
    body = await request.body()

    expected = hmac.new(WEBHOOK_SECRET, body, hashlib.sha256).hexdigest()

    if not hmac.compare_digest(signature, expected):
        raise HTTPException(status_code=401, detail="Invalid HMAC signature")

    event = json.loads(body)
    print(f"Verified Event: {event['event']} ({event['eventId']})")
    return {"received": True}`,

    go: `// Go (net/http) - Cryptographic HMAC SHA-256 Verification
package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
    "io"
    "net/http"
)

func webhookHandler(w http.ResponseWriter, r *http.Request) {
    signature := r.Header.Get("X-PulseQuo-Signature")
    secret := []byte("whsec_live_948f21903ba84f")

    body, _ := io.ReadAll(r.Body)
    mac := hmac.New(sha256.New, secret)
    mac.Write(body)
    expected := hex.EncodeToString(mac.Sum(nil))

    if !hmac.Equal([]byte(signature), []byte(expected)) {
        http.Error(w, "Invalid signature", http.StatusUnauthorized)
        return
    }

    w.WriteHeader(http.StatusOK)
    w.Write([]byte("{\\"received\\":true}"))
}`,

    curl: `# Send a synthetic test webhook verification payload
curl -X POST https://your-server.com/api/pulsequo-webhook \\
  -H "Content-Type: application/json" \\
  -H "X-PulseQuo-Signature: 8f9b4c03847291a0f9b8c7e6d5a4b3c2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6" \\
  -H "X-PulseQuo-Event: lead.created" \\
  -d '{
    "event": "lead.created",
    "eventId": "evt_98f4a12c",
    "timestamp": "2026-11-17T09:30:15.000Z",
    "data": { "leadId": "ld_8f9321", "name": "Vikram Mehta" }
  }'`,
  }

  const codeLanguageMap = {
    node: 'ts',
    python: 'python',
    go: 'go',
    curl: 'bash',
  } as const

  return (
    <div className="relative overflow-hidden bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Event Webhooks & Subscriptions Reference | PulseQuo Developers"
        description="Comprehensive enterprise documentation on PulseQuo event webhooks: lead.created, message.sent, message.delivered, conversation.handoff, and HMAC SHA-256 cryptographic verification."
        canonicalPath="/developers/webhooks"
      />

      <section
        id="hero"
        className="relative bg-white pt-8 sm:pt-12 pb-16 sm:pb-20 overflow-hidden"
      >
        <BackgroundAnimation variant="hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <Breadcrumbs
              items={[
                { label: 'Developers', href: '/developers' },
                { label: 'Webhooks' },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                Real-Time Event Webhooks.{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Instant, Signed &amp; Scalable.
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                Stream live customer lifecycle events directly to your backend, data warehouse, or CRM. Built with sub-120ms relay latency, automated exponential backoff retries, and cryptographic HMAC SHA-256 verification.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#events"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                >
                  <Code2 className="size-4" />
                  <span>Explore 5 core events</span>
                </a>
                <a
                  href="#security"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors shadow-2xs"
                >
                  <ShieldCheck className="size-4 text-slate-500" />
                  <span>Verify HMAC signature</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-xs bg-emerald-500" /> Sub-120ms Relay
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-xs bg-blue-500" /> SHA-256 Signatures
                </span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-xs bg-purple-500" /> 5x Exponential Retries
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <CodeShowcaseCard
                variant="dark"
                filename="webhook-dispatcher.ts"
                language="json"
                statusBadge="HTTP 200 OK"
                statusTone="blue"
                code={HERO_WEBHOOK_JSON}
                copyLabel="Copy JSON"
                headerPreamble={
                  <>
                    <p className="text-slate-500">// Inbound HTTP POST callback from PulseQuo Event Engine</p>
                    <p className="text-purple-400">
                      POST <span className="text-slate-200">/api/v1/customer-callbacks</span> HTTP/1.1
                    </p>
                    <p className="text-slate-400">
                      Host: <span className="text-slate-200">api.enterprise.com</span>
                    </p>
                    <p className="text-slate-400">
                      X-PulseQuo-Signature: <span className="text-emerald-400">8f9b4c03847291a0...</span>
                    </p>
                    <p className="text-slate-400">
                      X-PulseQuo-Event: <span className="text-blue-400">lead.created</span>
                    </p>
                  </>
                }
                footerLeft={
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-xs bg-emerald-400" /> Verified in 1.4ms
                  </span>
                }
                footerRight={<span className="text-purple-300">HMAC SHA-256 Active</span>}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="telemetry" className="py-8 sm:py-10 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col">
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                &lt; 120ms
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1">Event Relay Latency</p>
              <p className="text-xs text-slate-500 mt-0.5">Real-time global edge relay</p>
            </div>

            <div className="flex flex-col">
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                5 Retries
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1">Exponential Backoff</p>
              <p className="text-xs text-slate-500 mt-0.5">Automated retry with jitter</p>
            </div>

            <div className="flex flex-col">
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                SHA-256
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1">HMAC Digest</p>
              <p className="text-xs text-slate-500 mt-0.5">Tamper-proof payload verification</p>
            </div>

            <div className="flex flex-col">
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                99.99%
              </p>
              <p className="text-sm font-semibold text-slate-800 mt-1">Delivery SLA</p>
              <p className="text-xs text-slate-500 mt-0.5">Enterprise dead-letter queues</p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CRYPTOGRAPHIC VERIFICATION"
            title="Tamper-Proof HMAC SHA-256 Signing"
            description="Prevent man-in-the-middle tampering and replay attacks. Every webhook dispatch is cryptographically signed with your secret key."
          />

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 shadow-2xs">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <KeyRound className="size-4" />
                  </div>
                  <span>1. X-PulseQuo-Signature Header</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  Each HTTP request includes a hexadecimal SHA-256 hash in the{' '}
                  <code className="font-mono text-xs bg-slate-200/70 text-slate-800 px-1 py-0.5 rounded-sm">
                    X-PulseQuo-Signature
                  </code>{' '}
                  header.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 shadow-2xs">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                  <div className="size-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                    <ShieldCheck className="size-4" />
                  </div>
                  <span>2. Raw Payload Hashing</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  Compute the HMAC digest using your raw, unparsed request bytes and your workspace webhook signing secret key.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 shadow-2xs">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Zap className="size-4" />
                  </div>
                  <span>3. Constant-Time Equality</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  Always use constant-time comparison methods (
                  <code className="font-mono text-xs bg-slate-200/70 text-slate-800 px-1 py-0.5 rounded-sm">
                    timingSafeEqual
                  </code>{' '}
                  or{' '}
                  <code className="font-mono text-xs bg-slate-200/70 text-slate-800 px-1 py-0.5 rounded-sm">
                    compare_digest
                  </code>
                  ) to eliminate timing attacks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CodeShowcaseCard
                variant="dark"
                filename={`verify-hmac.${activeCodeLang === 'node' ? 'js' : activeCodeLang === 'python' ? 'py' : activeCodeLang === 'go' ? 'go' : 'sh'}`}
                language={codeLanguageMap[activeCodeLang]}
                statusBadge="RFC 2104"
                statusTone="emerald"
                tabs={HMAC_LANG_TABS}
                activeTabId={activeCodeLang}
                onTabChange={(id) => setActiveCodeLang(id as 'node' | 'python' | 'go' | 'curl')}
                code={codeSnippets[activeCodeLang]}
                copyLabel="Copy Code"
                maxHeightClass="max-h-[380px]"
                footerLeft={<span>Cryptographic Standard: RFC 2104</span>}
                footerRight={<span className="text-emerald-400">Ready for Production</span>}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-6 sm:py-8 lg:py-10 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EVENT SPECIFICATIONS"
            title="Core Customer Lifecycle Events"
            description="Select an event below to inspect its trigger conditions, JSON payload structure, and downstream payload schemas."
          />

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              {webhookEvents.map((item) => {
                const isSelected = selectedEventId === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedEventId(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-sm ring-1 ring-blue-600/20'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className={`size-2 rounded-xs ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
                        {item.event}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 text-[10px] font-mono font-semibold uppercase">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Trigger: {item.trigger.slice(0, 36)}...</span>
                      <span className="text-blue-600 font-semibold">
                        {isSelected ? 'Active Schema →' : 'View →'}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="lg:col-span-7 sticky top-24">
              <CodeShowcaseCard
                variant="dark"
                filename={`${activeEvent.event}.json`}
                language="json"
                statusBadge={activeEvent.category}
                statusTone="purple"
                code={JSON.stringify(activeEvent.payload, null, 2)}
                copyLabel="Copy JSON"
                maxHeightClass="max-h-[460px]"
                footerLeft={
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Zap className="size-3.5 text-blue-400 shrink-0" />
                    <span>Trigger: {activeEvent.trigger}</span>
                  </span>
                }
                footerRight={<span className="text-purple-400">OpenAPI 3.1 Spec Verified</span>}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="retries" className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DELIVERY GUARANTEES"
            title="Engineered for Zero Data Loss"
            description="Automatic exponential backoff, circuit breaking, and dead-letter queue diagnostics keep your integrations resilient."
          />

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-4">
                  <RefreshCw className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">5-Tier Exponential Retry</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your server returns a non-2xx status or times out after 10s, PulseQuo automatically retries at 1m, 5m, 30m, 2h, and 6h intervals with randomized jitter.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-blue-600 font-semibold">
                Automatic Failover Active
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 mb-4">
                  <Server className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Dead-Letter Queue (DLQ)</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Permanently failed deliveries are captured in your developer console. Inspect the exact HTTP error code, response headers, and re-dispatch with 1 click.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-purple-600 font-semibold">
                30-Day Replay Buffer
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="size-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-4">
                  <Radio className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">High Throughput Relay</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered to process over 10,000 concurrent events per second with distributed Kafka pipelines, ensuring zero latency spikes during broadcast campaigns.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-blue-600 font-semibold">
                Sub-120ms Ingestion
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="get-started"
        eyebrow="DEVELOPER RUNTIME INTEGRATION"
        headline="Ready to Connect PulseQuo Webhooks to Your Stack?"
        subheadline="Create your free developer sandbox, generate your webhook signing secret, and start streaming live customer events in minutes."
        primaryCtaText="Get Free API Keys"
        primaryCtaHref="/book-demo"
        secondaryCtaText="View OpenAPI 3.1 Specs"
        secondaryCtaHref="/developers/api-documentation"
        showTrustBadges={false}
      />
    </div>
  )
}
