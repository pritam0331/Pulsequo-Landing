/**
 * PulseQuo Global Marketing Footer
 * Professional SaaS footer with comprehensive product, solution, resource, and legal links.
 * All internal links smoothly take the user to the top of the page.
 */

import { Link } from 'react-router'
import {
  Mail,
  MapPin,
  ShieldCheck,
  ExternalLink,
  Phone,
} from 'lucide-react'
import { Logo } from './Logo'
import { siteConfig } from '../../config/siteConfig'

function FooterLink({
  to,
  children,
  className = '',
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className={className || 'hover:text-white transition-colors cursor-pointer'}
    >
      {children}
    </Link>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-12">
          {/* Column 1 & 2: Brand, Tagline, & Contact Details */}
          <div className="col-span-1 sm:col-span-2">
            <Logo variant="dark" showTagline={true} />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              PulseQuo is the unified customer experience platform uniting omnichannel CPaaS messaging, sales CRM,
              customer support helpdesk, and AI automation into a single cohesive infrastructure.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-blue-400 shrink-0" />
                <span>{siteConfig.phonePlaceholder}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.addressPlaceholder}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="PulseQuo on LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="PulseQuo on Twitter"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="PulseQuo on GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="PulseQuo on YouTube"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <FooterLink to="/products/communication-cloud">Communication Cloud</FooterLink>
              </li>
              <li>
                <FooterLink to="/products/sales-crm">Sales CRM</FooterLink>
              </li>
              <li>
                <FooterLink to="/products/support-crm">Support CRM</FooterLink>
              </li>
              <li>
                <FooterLink to="/products/ai-automation">AI & Automation</FooterLink>
              </li>
              <li>
                <FooterLink to="/integrations">Integrations Directory</FooterLink>
              </li>
              <li>
                <FooterLink to="/pricing">Pricing Plans</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Solutions</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <FooterLink to="/solutions/sales-teams">Sales Teams</FooterLink>
              </li>
              <li>
                <FooterLink to="/solutions/customer-support">Customer Support</FooterLink>
              </li>
              <li>
                <FooterLink to="/solutions/marketing-teams">Marketing Teams</FooterLink>
              </li>
              <li>
                <FooterLink to="/solutions/startups">Startups & Scaleups</FooterLink>
              </li>
              <li>
                <FooterLink to="/solutions/enterprises">Enterprises</FooterLink>
              </li>
              <li>
                <FooterLink to="/solutions">All Solutions</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 5: Developers & Resources */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <FooterLink to="/resources/blog">Blog & Articles</FooterLink>
              </li>
              <li>
                <FooterLink to="/resources/guides">Implementation Guides</FooterLink>
              </li>
              <li>
                <FooterLink to="/developers/api-documentation">API Documentation</FooterLink>
              </li>
              <li>
                <FooterLink to="/developers/webhooks">Webhooks & Events</FooterLink>
              </li>
              <li>
                <FooterLink to="/developers">Developer Portal</FooterLink>
              </li>
              <li>
                <a
                  href={siteConfig.statusPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>System Status</span>
                  <ExternalLink className="size-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: Company & Trust */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <FooterLink to="/about">About PulseQuo</FooterLink>
              </li>
              <li>
                <FooterLink to="/careers">
                  <span>Careers</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded-full ml-1">Hiring</span>
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/book-demo">Book a Demo</FooterLink>
              </li>
              <li>
                <a
                  href={siteConfig.appUrl.startsWith('http') ? `${siteConfig.appUrl}/login` : '/login'}
                  className="hover:text-white transition-colors"
                >
                  Customer Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance, Legal */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
            <span>
              &copy; {currentYear} PulseQuo Technologies. All rights reserved. One Platform. Complete Customer Experience.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Terms of Service
            </span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              TRAI DLT Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Security & GDPR
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
