# DESIGN SYSTEM & UI/UX SPECIFICATION (UIUX_SPEC)

## DOCUMENT CONTROL
- **Product / Project Title:** nubeOfThaughts
- **AI Engine Profile:** UI/UX Skill Persona v2.0 (Design System & Interface Focus)
- **Date Generated:** 2026-10-04
- **Associated Product Source:** [`/nubeOfThaughts/docs/PRD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/PRD.md)
- **Target Implementation Path:** `app/`, `components/`, `styles/`

---

## 1. GLOBAL VISUAL IDENTITY & POWDER DARK COLOR PALETTE

### Design Theme Strategy
- **Aesthetic Direction:** Powder Dark Theme with subtle celestial/nebular ethereal glassmorphism. Deep, calming dark surfaces reduce visual fatigue while powder mint and forest green accents give an elevated, introspective scientific aura.
- **Typography Standard:** **Lexend** (Google Font), with **Light (300)** and **Regular (400)** font weights applied as the default UI typography across all screens and components.

### Color Tokens (Powder Dark Theme)
| Token Name | Hex Code | Purpose / Usage Context |
| :--- | :--- | :--- |
| **`bg`** | `#050606` | Main application canvas background |
| **`surface`** | `#121513` | Elevated card surfaces, illusion display panels, chat bubbles |
| **`surface-glass`** | `rgba(18, 21, 19, 0.75)` | Translucent glass container with `backdrop-filter: blur(16px)` |
| **`primary`** | `#173326` | Deep powder forest green button backgrounds, active option pill bases |
| **`primary-foreground`** | `#67F29A` | High-luminance powder mint green for active text, badges, CTAs & progress bar |
| **`text`** | `#F5F7F5` | Primary headings, title banners, crisp white-mint typography |
| **`body`** | `#D7DCD9` | Default body copy, illusion prompts, chat dialogs, synthesis paragraphs |
| **`mute`** | `#7C8580` | Step counters (`Stage 1 of 19`), subtle borders, unselected option pills |
| **`border`** | `rgba(103, 242, 154, 0.12)` | Subtle iridescent mint border around cards and interactive tiles |
| **`error`** | `#C98793` | Soft powder rose/red for validation shakes, retry alerts, failed states |

---

## 2. DESIGN SYSTEM GUIDELINES & STANDARDS (GLOBAL SYSTEM GUIDE)

### A. Device Breakpoint Matrix
| Device Profile | Breakpoint Range | Grid Columns | Navigation & Layout Pattern | Container Max-Width |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile** | `320px – 639px` (`sm`) | 4 Columns | Vertical stack: illusion image on top, option pills below, sticky Next bar | 100% (Fluid) |
| **Tablet** | `640px – 1023px` (`md`) | 8 Columns | Centered card container with 16px padding | 720px |
| **Desktop** | `1024px – 1919px` (`lg`/`xl`) | 12 Columns | Split view or large focal canvas: stage centered, 580px image frame | 1100px |
| **Ultra-Wide** | `≥ 1920px` (`2xl`) | 16 Columns | Centered Canvas with ambient floating glowing nebulas | 1400px |

### B. Typography Scaling Matrix per Device (Lexend Default)
| Element | Mobile (`sm`) | Tablet (`md`) | Desktop (`lg`/`xl`) | Font Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `26px` / `32px` LH | `36px` / `44px` LH | `48px` / `56px` LH | Lexend Medium (500) |
| **Heading 1 (H1)** | `22px` / `28px` LH | `28px` / `34px` LH | `32px` / `40px` LH | Lexend Regular (400) |
| **Heading 2 (H2)** | `18px` / `24px` LH | `20px` / `26px` LH | `22px` / `30px` LH | Lexend Regular (400) |
| **Heading 3 (H3)** | `15px` / `20px` LH | `16px` / `22px` LH | `18px` / `24px` LH | Lexend Light (300) |
| **Body Text** | `14px` / `20px` LH | `14px` / `22px` LH | `15px` / `24px` LH | Lexend Light (300) |
| **Caption / Muted** | `12px` / `16px` LH | `12px` / `16px` LH | `13px` / `18px` LH | Lexend Light (300) |

### C. Spatial System & Grid Rhythm (8px Base Grid)
- `2xs`: 4px
- `xs`: 8px
- `sm`: 12px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

### D. Border Radius Scale
- `sm`: 6px (Subtle chips, tooltips)
- `md`: 10px (Option selectable pills)
- `lg`: 16px (Card containers, image frames)
- `xl`: 24px (Hero modals, archetype badge frame)
- `full`: 9999px (Progress bars, circular avatars)

### E. Button Sizes & Touch Targets
- `btn-md`: 44px height (Minimum touch target compliant with Apple HIG & Material 3)
- `btn-lg`: 52px height (Primary "Next Illusion", "Synthesize Personality", "Start Companion Chat")

---

## 3. SCREEN ARCHITECTURE & USER FLOW

```
[Screen 1: Landing / Intro Hero]
               │
               ▼ (User clicks "Begin Assessment")
[Screen 2: Blind Illusion Stage Runner] (Iterates 1 through 19 stages)
  - Illusion Image Frame (Clean, high-res)
  - Question / Gut Prompt (e.g. "What did you notice first?")
  - Option Selectable Cards (Strictly no interpretations revealed!)
  - Progress Bar ("Stage 4 of 19" with glowing mint indicator)
  - Next Button (Enabled only upon selection)
               │
               ▼ (On Stage 19 Completion)
[Screen 3: Gemini Synthesis Loading Canvas] (Ethereal pulses, neural analysis feedback)
               │
               ▼ (Gemini returns structured assessment)
[Screen 4: Personality Assessment Dashboard (MVP 1)]
  - Archetype Header & Tagline
  - Trait Polar Radar / Sliders (Intuitive vs Analytical, etc.)
  - Core Strengths & Blind Spots
  - Unlocked Optical Illusion Gallery (revealing the meaning of each user choice)
  - CTA: "Enter Conversational Onboarding (MVP 2)"
               │
               ▼ (User clicks Companion CTA)
[Screen 5: Conversational Onboarding & Companion Chat (MVP 2)]
  - Contextual AI Companion Greeting calibrated to user archetype
  - Onboarding Milestones (Validation -> Goals -> Open Dialogue)
  - Persistent Chat Window with quick-prompt chips & streaming Gemini responses
```

---

## 4. COMPONENT STATE GRANULARITY STANDARDS

### Screen 2: Blind Illusion Stage Runner
- **Ideal State:** Current stage illusion loaded crisp in center; radio/pill options rendered below with hover/focus glow; smooth mint indicator filling the top progress bar; Next button glowing `#67F29A` once selected.
- **Empty / Initial State:** Stage 1 renders automatically upon landing with no option selected; Next button in disabled muted styling (`#7C8580`).
- **Loading Skeleton State:** Shimmering dark placeholder (`#121513` pulse) matching the aspect ratio of the illusion image before WebP/JPEG fully loads.
- **Error / Validation State:** If user clicks "Next" without an active option, stage card performs a subtle horizontal micro-shake (±6px, 200ms) with a soft powder rose banner: *"Please select what you saw first to proceed."*

### Screen 4: Personality Assessment Dashboard (MVP 1)
- **Ideal State:** Full dynamic personality cards rendered, showing Archetype badge, trait bars, synthesis narrative, and expandable list of the 19 illusion decisions with their revealed `data.md` interpretations.
- **Empty State:** N/A (Only reached upon completing all 19 stages).
- **Loading Skeleton State:** Animated neural aura with pulsing status chips: *"Decoding visual perception signals..."* $\rightarrow$ *"Synthesizing archetype via Gemini..."*.
- **Error State:** If Gemini API call fails, presents an inline retry card: *"Cognitive synthesis timed out. [Retry Assessment Analysis]"* with optional local fallback baseline report.

### Screen 5: Conversational Onboarding & Chat (MVP 2)
- **Ideal State:** Left panel displays compact Archetype summary; main panel renders multi-turn chat stream with markdown support, active typing indicators, and starter prompt pills.
- **Empty State:** Initial personalized greeting from Gemini reflecting the user's specific choices.
- **Loading State:** Three bouncing powder mint dots while waiting for Gemini streaming chunks.
- **Error State:** Inline error banner with a 1-click *"Regenerate response"* action.

---

## 5. MOTION & MICRO-INTERACTION SPECIFICATIONS

- **Step Transition:** Horizontal slide with subtle cross-fade (`opacity: 0 -> 1`, `transform: translateX(12px) -> translateX(0px)`, duration `220ms ease-out`).
- **Option Selection:** Spring scale effect (`scale: 1.02`), border shifts from `rgba(103, 242, 154, 0.12)` to `#67F29A` with background illuminating `#173326`.
- **Button Hover:** Radiant powder mint glow (`box-shadow: 0 0 16px rgba(103, 242, 154, 0.25)`).
