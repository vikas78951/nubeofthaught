# TECHNICAL DESIGN DOCUMENT (TDD)

## DOCUMENT CONTROL

- **System / Project Title:** nubeOfThaughts
- **AI Engine Profile:** CTO Skill Persona v1.0 (Technical Architecture & Systems Engineering)
- **Date Generated:** 2026-10-04
- **Associated Product Source:** [`/nubeOfThaughts/docs/PRD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/PRD.md)
- **Primary Milestone:** v1.0 MVP Launch (Visual Quiz Engine + Gemini Synthesis + Conversational Onboarding Companion)

---

## 1. HIGH-LEVEL SYSTEM ARCHITECTURE (HLD)

The architecture is built for rapid, modern execution using a **Next.js 15 (App Router)** unified application architecture with serverless edge API routes for secure Google Gemini communication, zero client secret leaks, and high-performance WebP image caching.

```text
                                 ┌──────────────────────────────────────────────┐
                                 │           Cloudflare Edge / Vercel CDN       │
                                 └──────────────────────┬───────────────────────┘
                                                        │
                                                        ▼
                                 ┌──────────────────────────────────────────────┐
                                 │     nubeOfThaughts Next.js Web Engine        │
                                 │   (App Router, React 19, Vanilla/Tailwind)   │
                                 └──────┬───────────────────────┬───────────────┘
                                        │                       │
             ┌──────────────────────────┴────────┐     ┌────────┴──────────────────────────┐
             │ Client-Side Reactive State Engine │     │ Edge Server API Endpoints         │
             │  - Quiz Stage Runner (1-19)       │     │  - /api/synthesize (POST)         │
             │  - Blind Perception Collector     │     │  - /api/companion/chat (POST)     │
             │  - Assessment Dashboard View      │     │  - Image Optimization Layer       │
             │  - MVP 2 Dynamic Chat Companion   │     └──────────────────┬────────────────┘
             └───────────────────────────────────┘                        │
                                                                          ▼
                                                       ┌───────────────────────────────────┐
                                                       │ Google Gemini Intelligence Engine │
                                                       │  - Model: gemini-2.5-flash        │
                                                       │  - Structured JSON Synthesis      │
                                                       │  - Contextual Companion Chat      │
                                                       └───────────────────────────────────┘
```

### Tech Stack Specifications

| Layer | Technology | Primary Function |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) + TypeScript | React Server Components, server actions, dynamic routes, and static asset streaming. |
| **Design & UI Tokens** | CSS Modules / Vanilla CSS & Tailwind | Powder Dark Theme (`#050606`, `#121513`, `#67F29A`), Lexend font, glassmorphism. |
| **AI Synthesis & Chat** | `@google/genai` SDK | Gemini 2.5 Flash for high-speed structured JSON psychometric evaluation & streaming chat. |
| **Static Perception Data** | `data.md` parsed JSON schema | 19 curated illusions, prompt queries, options list, and hidden psychological interpretations. |
| **Session State** | React Context + LocalStorage / SessionStorage | Preserves test choices across stages without requiring mandatory sign-in. |
| **Runtime / Edge** | Node.js 20+ / Edge Runtime | Low-latency edge responses and strict server-side protection of `GEMINI_API_KEY`. |

---

## 2. API CONTRACTS & DATA FLOW

### A. Endpoint: `POST /api/synthesize`
Aggregates all 19 completed choices and calls Google Gemini with system instructions embedding the psychological decoding rules.

#### Request Payload:
```json
{
  "answers": [
    {
      "stageId": 1,
      "title": "Bird or Lynx? A Dual-Perspective Dilemma",
      "selectedOption": "Lynx",
      "interpretation": "Strategic thinker, capable of grasping the big picture..."
    }
  ]
}
```

#### Response Payload (Structured JSON via Gemini Schema):
```json
{
  "archetypeTitle": "The Visionary Empathetic Strategist",
  "tagline": "Balancing macroscopic innovation with instinctive emotional attunement.",
  "traitRadar": {
    "analyticalVsIntuitive": 78,
    "orderVsImpulse": 45,
    "leadershipVsEmpathy": 82,
    "opennessVsGuardedness": 65
  },
  "coreStrengths": [
    "Holistic Pattern Recognition",
    "Empathetic Leadership",
    "Creative Problem Navigation"
  ],
  "growthAreas": [
    "Occasional analysis paralysis in micro-details",
    "Tendency to shoulder team emotional weight"
  ],
  "synthesisNarrative": "Your subconscious perception reveals a mind comfortable with duality...",
  "companionDirective": "Act as an introspective, empowering philosophical mentor who challenges Alex to ground their high-altitude visions."
}
```

### B. Endpoint: `POST /api/companion/chat`
Powers the MVP 2 dynamic conversational onboarding and continuous companion dialogue.

#### Request Payload:
```json
{
  "messages": [
    { "role": "user", "content": "How can I balance my strategic vision with daily execution?" }
  ],
  "profileContext": {
    "archetypeTitle": "The Visionary Empathetic Strategist",
    "coreStrengths": ["..."],
    "companionDirective": "..."
  }
}
```

#### Response Payload:
Streaming text response or JSON chunk with markdown support.

---

## 3. COMPONENT ARCHITECTURE & FILE TREE

```text
nubeOfThaughts/
├── app/
│   ├── layout.tsx              # Root HTML, Lexend font injection, Powder Dark metadata
│   ├── page.tsx                # Dynamic controller: Hero -> Quiz Runner -> Results -> MVP 2 Chat
│   ├── globals.css             # Powder Dark CSS tokens, animations, glassmorphic utilities
│   └── api/
│       ├── synthesize/
│       │   └── route.ts        # Server-side Gemini structured assessment generation
│       └── companion/
│           └── chat/
│               └── route.ts    # Server-side Gemini conversational companion endpoint
├── components/
│   ├── HeroSection.tsx         # Clean landing introduction & test start trigger
│   ├── QuizStageRunner.tsx     # 1-of-19 stage runner (image, options, progress, Next button)
│   ├── SynthesisLoader.tsx     # Ethereal neural pulse animation during AI synthesis
│   ├── AssessmentDashboard.tsx # Archetype card, radar traits, revealed illusion gallery
│   └── CompanionChat.tsx       # MVP 2 conversational onboarding & real-time chat
├── lib/
│   ├── illusionsData.ts        # Parsed structured data representing all 19 illusions in data.md
│   └── gemini.ts               # Google Gemini client initialization and prompt blueprints
├── public/
│   └── images/                 # All 19 illusion assets (bird_or_lynx.webp, etc.)
└── docs/
    ├── SMA-PVR.md
    ├── PRD.md
    ├── UIUX_SPEC.md
    ├── TDD.md
    └── DB.md
```

---

## 4. SECURITY, SECRETS & PERFORMANCE

1. **Zero Secret Leakage:** `GEMINI_API_KEY` is loaded exclusively inside Next.js server route handlers (`app/api/*`). No client bundle ever receives the raw API token.
2. **Blind Test Enforcement:** Options sent to the client during stages 1-19 only include `{ id, text }`. The psychological text is held in memory / server payload and only revealed in the post-quiz review phase.
3. **Optimized Asset Delivery:** Next.js `<Image />` component with `priority` for current and prefetching for stage $N+1$ ensures 0ms noticeable transition latency.
