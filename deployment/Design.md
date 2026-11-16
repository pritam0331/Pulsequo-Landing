# PulseQuo Marketing Website & Platform Architecture — Design Specification

Comprehensive technical and visual design specification for the **PulseQuo** marketing website, design system, and multi-product integration layer.

---

## 1. Executive Overview

PulseQuo is an AI-powered enterprise communication (CPaaS), Sales CRM, Support CRM, and workflow automation platform. The marketing website serves as the primary acquisition, onboarding, and lead-generation portal, while routing qualified users and enterprise customers into the core application suite at `app.pulsequo.com`.

### Core Goals
1. **Unified Enterprise Aesthetic**: Cohesive modern visual language reflecting dependability, high throughput, and AI innovation.
2. **Zero Drift with App Dashboards**: Standalone marketing deployment that mirrors design tokens and deep-links smoothly into existing CRM and CPaaS dashboards.
3. **High-Converting Information Architecture**: Clear pathways across 4 primary product suites, 6 solution verticals, developers portal, transparent pricing, and interactive demo qualification.
4. **Performance & SEO Excellence**: Sub-second initial load, strict semantic HTML, automated OpenGraph metadata, and structured JSON-LD schemas on all 24 routes.

---

## 2. Design System & Brand Tokens

PulseQuo follows a rigorous **Three-Layer Token Architecture** (`Primitive` → `Semantic` → `Component`) adhering to the `design-system`, `frontend-design`, and `ui-craft` engineering standards. It pairs deep midnight navy foundations (`#070d1e`) with purposeful enterprise blue (`#2563eb`) accents.

### 2.1 Color Token Architecture

#### Layer 1: Primitive Tokens
| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `--color-pq-navy` | `#070d1e` | Brand Primary Dark | Dark heroes, footer background, primary text on light mode |
| `--color-pq-navy-light`| `#0f1a36` | Brand Surface Dark | Dark container cards, dropdown menus, code blocks |
| `--color-pq-navy-card` | `#142247` | Elevation Dark | Hovered card backgrounds, elevated overlays |
| `--color-pq-blue` | `#2563eb` | Primary Brand Blue | Primary buttons, links, active state indicators |
| `--color-pq-blue-electric`| `#0066ff` | High-Energy Accent | Gradient stops, focus rings, callout badges, glow effects |
| `--color-pq-blue-hover` | `#1d4ed8` | Interactive Hover | Button hover states, focused interaction rings |
| `--color-pq-purple` | `#7c3aed` | AI / Automation Accent | AI features, badge backgrounds, gradient secondary stops |
| `--color-pq-violet` | `#8b5cf6` | Violet Highlight | Light badge borders, subtle gradient highlights |
| `--color-pq-cyan` | `#06b6d4` | Live Channel Accent | CPaaS metrics, WhatsApp/SMS channel badges |
| `--color-pq-emerald` | `#10b981` | Success / Live Status | Verified routes, uptime indicators, high intent scores |
| `--color-pq-amber` | `#f59e0b` | Warning / Hot Status | Fast deals, high-priority notifications |
| `--color-pq-slate` | `#f8fafc` | Background Light | Main page background, subtle alternating sections |
| `--color-pq-charcoal` | `#0f172a` | Text Primary | Body copy on light backgrounds, headers |

#### Layer 2 & 3: Semantic & Component Token Aliases
```css
/* Semantic Aliases */
--color-primary: var(--color-pq-blue);
--color-primary-hover: var(--color-pq-blue-hover);
--color-surface-light: #ffffff;
--color-surface-subtle: var(--color-pq-slate);
--color-surface-dark: var(--color-pq-navy);
--color-text-main: var(--color-pq-charcoal);
--color-text-muted: #64748b;
--color-border-subtle: #e2e8f0;
--color-border-strong: #cbd5e1;

/* Component Tokens */
--radius-badge: var(--radius-sm);       /* 6px crisp badge corners */
--radius-button: var(--radius-md);      /* 8px standard button corners */
--radius-card: var(--radius-lg);        /* 12px card containers */
--radius-modal: var(--radius-xl);       /* 16px modals & bento blocks */
--radius-container: var(--radius-2xl);  /* 20px major shells */
```

### 2.2 Typography

* **Primary Sans-Serif**: `Plus Jakarta Sans`, `Schibsted Grotesk`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`
  * Applied across all headers, titles, labels, and body copy.
  * Headings: Tight negative letter-spacing (`tracking-[-0.035em]`) with strict line-height rhythm (`leading-[1.05]` to `leading-[1.12]`).
  * Microcopy: Sentence case by default. Uppercase is strictly limited to 10px technical status codes.
* **Monospace / Code**: `JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `monospace`
  * Applied to API endpoints, webhook JSON payloads, code snippets, and metric counters.

### 2.3 Radii Token Scale (Anti-Pill Standard)

All capsule/pill shapes (`rounded-full`) have been eliminated in favor of an enterprise geometric radius scale:

```css
--radius-2xs: 2px;   /* Micro status indicator dots */
--radius-xs: 4px;    /* Miniature tags, code chips */
--radius-sm: 6px;    /* Category badges, status chips */
--radius-md: 8px;    /* Primary & secondary action buttons */
--radius-lg: 12px;   /* Product cards, preview modules */
--radius-xl: 16px;   /* Bento grid blocks, interactive consoles */
--radius-2xl: 20px;  /* Section containers, feature previews */
--radius-3xl: 24px;  /* Outer browser window mockups */
```

### 2.4 Shadows & Layered Elevation (UI Craft Rule 7)

* **Layered Ambient + Direct Shadows**: Rather than flat borders or heavy glowing shadows, cards utilize subtle layered elevation:
  `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05);` paired with `ring-1 ring-slate-900/5`.
* **Accent Budget (UI Craft Rule 10)**: Strict budget of maximum 3–5 placements of the primary blue accent per above-the-fold viewport to prevent focal-point dilution. Multi-colored rainbow card icons are replaced with unified neutral icons (`bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-600`).

---

## 3. Component Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Breadcrumbs.tsx          # Dynamic route hierarchy navigation
│   │   ├── CTASection.tsx           # Conversion-focused closing section
│   │   ├── FAQAccordion.tsx         # Accessible expand/collapse accordion
│   │   ├── FeatureCard.tsx          # Icon + title + description + badge card
│   │   ├── PlatformComposition.tsx   # Interactive tabbed CPaaS/CRM workspace preview
│   │   ├── ProductCard.tsx          # Showcase cards for the 4 core product pillars
│   │   ├── SectionHeading.tsx       # Standardized centered & left-aligned section headers
│   │   └── SEO.tsx                  # Meta tags, Twitter Cards, OpenGraph, JSON-LD
│   ├── forms/
│   │   ├── ContactForm.tsx          # Client-validated contact & inquiry form
│   │   └── DemoRequestForm.tsx      # Comprehensive lead qualification demo booking
│   └── layout/
│       ├── Footer.tsx               # 5-column navigation, social links, legal & status
│       ├── Logo.tsx                 # SVG & image brand emblem with responsive text
│       ├── MarketingLayout.tsx      # Global wrapper with sticky header & footer
│       └── Navbar.tsx               # Sticky desktop mega-menus & mobile slide-out drawer
```

### 3.1 Key Components

1. **`Navbar.tsx`**:
   * Fixed header with blur backdrop.
   * Desktop mega-menu dropdowns for **Products**, **Solutions**, and **Resources**.
   * One-click action buttons: **Sign In** (routes to `app.pulsequo.com/login`) and **Book a Demo** (`/book-demo`).
   * Full mobile responsive hamburger menu with nested accordion submenus.

2. **`PlatformComposition.tsx`**:
   * Live interactive tabbed interface simulating the PulseQuo unified dashboard.
   * Switch between **Communication Cloud**, **Sales CRM**, **Support Helpdesk**, and **AI Automation**.
   * Real-time metrics counters, chat transcript simulations, pipeline deal kanban, and workflow trigger steps.

3. **`DemoRequestForm.tsx` & `ContactForm.tsx`**:
   * Client-side validation for business email, phone, company size, and product selection.
   * Graceful fallback simulation when API endpoints are unreachable.
   * Rate limiting and anti-spam protection via submission timeouts.

4. **`SEO.tsx`**:
   * Dynamic `<title>` and `<meta name="description">` management per route.
   * OpenGraph image, URL, and locale tags.
   * Automatic injection of Schema.org `SoftwareApplication` or `Article` structured data.

---

## 4. Route Matrix & Information Architecture

The website exposes 24 public routes, grouped into clear functional segments:

| Section | Routes | Target Audience |
| :--- | :--- | :--- |
| **Core** | `/`, `/pricing`, `/about`, `/contact`, `/careers`, `/book-demo` | Prospective customers, investors, job candidates |
| **Products** | `/products/communication-cloud`<br>`/products/sales-crm`<br>`/products/support-crm`<br>`/products/ai-automation` | Technical buyers, product managers, sales & support heads |
| **Solutions** | `/solutions`<br>`/solutions/sales-teams`<br>`/solutions/customer-support`<br>`/solutions/marketing-teams`<br>`/solutions/startups`<br>`/solutions/enterprises` | Industry verticals, SMBs, scale-ups, and enterprise executives |
| **Developers** | `/developers`<br>`/developers/api-docs`<br>`/developers/webhooks` | Engineers, DevOps, integration architects |
| **Resources** | `/resources`<br>`/resources/blog`<br>`/resources/blog/:slug`<br>`/resources/guides` | Marketing leads, operations teams seeking playbooks |

---

## 5. Technology Stack

* **Frontend Framework**: React 19 (`react` & `react-dom` 19.3.x)
* **Routing**: React Router 8 (`react-router` 8.5.x)
* **Styling**: Tailwind CSS 4 (`@tailwindcss/vite` 4.3.x) using modern `@theme` token blocks
* **Icons**: Lucide React (`lucide-react` 1.61.x)
* **Build System**: Vite 8 (`vite` 8.3.x) with Rolldown-based runtime and ES chunk splitting
* **Type System**: TypeScript 6 (`typescript` 6.0.x) with strict mode enabled

---

## 6. Integration Architecture (Marketing to App)

```
                            pulsequo.com (Marketing)
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
        ▼                              ▼                              ▼
"Sign In" / "Login"            "Book a Demo"                  "Developers API"
        │                              │                              │
        ▼                              ▼                              ▼
https://app.pulsequo.com/login  /book-demo form submission    https://api.pulsequo.com
(Existing Auth System)          (Demo qualification pipeline)  (REST API / Webhooks)
```

* **Configuration**: Managed centrally in `src/config/siteConfig.ts` via environment variables:
  * `VITE_MARKETING_URL`: Root marketing origin (Default: `https://www.pulsequo.com`).
  * `VITE_APP_URL`: Product dashboard origin (Default: `https://app.pulsequo.com`).
  * `VITE_API_BASE_URL`: Backend API cluster origin (Default: `https://api.pulsequo.com`).

