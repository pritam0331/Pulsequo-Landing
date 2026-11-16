# PulseQuo Marketing Website (AI & CPaaS)

A standalone, production-ready marketing website for **PulseQuo** — an AI-powered business communication (CPaaS), Sales CRM, Support CRM, and workflow automation platform.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Starts the local development server (Vite) with instant Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Type checks the codebase with TypeScript (`tsc -b`) and bundles production assets with Vite into the `dist/` directory.

### 4. Local Preview of Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
AI and cpass website/
├── public/
│   ├── pulsequo-logo.png       # Official PulseQuo brand logo
│   ├── pulsequo-logo.jpg       # Brand logo graphic
│   ├── favicon.svg             # Browser favicon
│   ├── robots.txt              # Production search engine crawler rules
│   └── sitemap.xml             # XML sitemap covering all 24 marketing pages
├── src/
│   ├── components/
│   │   ├── common/             # SEO, SectionHeading, ProductCard, CTASection, FAQAccordion, etc.
│   │   ├── forms/              # DemoRequestForm, ContactForm (with client validation & error handling)
│   │   └── layout/             # MarketingLayout, Navbar (responsive mega-menus), Footer, Logo
│   ├── config/
│   │   └── siteConfig.ts       # Site metadata, dashboard URLs, contact emails, social links
│   ├── data/                   # Structured content for products, solutions, pricing, FAQs, integrations
│   ├── pages/
│   │   ├── developers/         # Developers portal, API Docs, Webhooks Docs
│   │   ├── products/           # Communication Cloud, Sales CRM, Support CRM, AI & Automation
│   │   ├── resources/          # Resources hub, Blog listing, Blog details, Guides
│   │   ├── solutions/          # Solutions hub, Sales, Support, Marketing, Startups, Enterprises
│   │   ├── AboutPage.tsx       # Company story, values, team & career openings
│   │   ├── BookDemoPage.tsx    # Interactive demo booking with qualification form
│   │   ├── CareersPage.tsx     # Open job positions & culture
│   │   ├── ContactPage.tsx     # Contact channels, support tickets & form
│   │   ├── HomePage.tsx        # High-converting homepage with interactive tabs & dashboard preview
│   │   ├── IntegrationsPage.tsx# Omnichannel directory with category filters
│   │   ├── NotFoundPage.tsx    # Custom 404 page with quick navigation
│   │   └── PricingPage.tsx     # Transparent pricing tiers & billing switch
│   ├── services/
│   │   └── demoService.ts      # Demo request validation, API client & rate limiting
│   ├── index.css               # Tailwind CSS theme with PulseQuo navy/electric blue design tokens
│   └── main.tsx                # Standalone React Router entry point
├── .env.example                # Local environment template
├── .env.production.example     # Production environment template
├── AWS_DEPLOYMENT_GUIDE.md     # Step-by-step S3 + CloudFront + ACM deployment guide
├── DNS_CONFIGURATION_GUIDE.md  # DNS routing guide (marketing domain vs app dashboard domain)
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with chunk splitting
```

---

## 🌐 Routes Overview

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | Home | Hero, platform overview, why PulseQuo, solutions, integrations, how it works |
| `/products/communication-cloud` | Communication Cloud | WhatsApp Business API, SMS gateway, Voice, Email, Inbox |
| `/products/sales-crm` | Sales CRM | Lead management, deal pipelines, sales automation, analytics |
| `/products/support-crm` | Customer Support CRM | Tickets, SLA management, agent assignment, knowledge base |
| `/products/ai-automation` | AI & Automation | AI chatbots, autonomous agents, workflow triggers, analytics |
| `/solutions` | Solutions Hub | Role-based & company-size solutions |
| `/solutions/sales-teams` | Sales Teams | Outbound sequences, omnichannel outreach, closing deals |
| `/solutions/customer-support` | Customer Support | SLA management, ticket triaging, automated resolutions |
| `/solutions/marketing-teams` | Marketing Teams | Omnichannel campaigns, broadcast messaging, analytics |
| `/solutions/startups` | Startups | Rapid setup, cost efficiency, starter growth stacks |
| `/solutions/enterprises` | Enterprises | High throughput, dedicated SLAs, enterprise compliance |
| `/integrations` | Integrations Directory | Filterable directory of supported channels & software |
| `/pricing` | Pricing | Transparent plans, add-ons, FAQ |
| `/about` | About Us | Mission, vision, core values, leadership |
| `/contact` | Contact Us | Inquiries, support channels, direct contact |
| `/careers` | Careers | Culture, perks, open roles |
| `/book-demo` | Book a Demo | Comprehensive lead capture and qualification |
| `/resources` | Resources Hub | Guides, articles, case studies |
| `/resources/blog` | Blog | Industry insights, product announcements |
| `/resources/blog/:slug` | Blog Article | In-depth guides and articles |
| `/resources/guides` | Guides & Tutorials | Technical and operational walkthroughs |
| `/developers` | Developers Portal | SDKs, quickstarts, API keys |
| `/developers/api-docs` | REST API Reference | Authentication, endpoints, schemas, samples |
| `/developers/webhooks` | Webhooks Reference | Event types, payload formats, verification |
| `*` | 404 Not Found | Friendly error page with site links |

---

## 🔗 Connecting to PulseQuo Dashboards

The marketing website links out to the PulseQuo application dashboards via `src/config/siteConfig.ts` and environment variables:

```env
VITE_APP_URL=https://app.pulsequo.com
VITE_API_BASE_URL=https://api.pulsequo.com
```

All **Login**, **Get Started**, and **Open App** buttons navigate users seamlessly to the existing application dashboard.

