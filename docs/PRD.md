# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## DOCUMENT CONTROL

- **Feature / Product Name:** nubeOfThaughts (Subconscious Optical Illusion Personality Assessment & Conversational Companion)
- **AI Engine Profile:** PM Skill Persona v1.0 (Product Specification & Execution Focus)
- **Date Generated:** 2026-10-04
- **Target Release Milestone:** v1.0 MVP (MVP 1: Visual Perception Quiz & Gemini Synthesis; MVP 2: Conversational Onboarding Companion)
- **Associated Strategy Source:** [`/nubeOfThaughts/docs/SMA-PVR.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/SMA-PVR.md)

---

## 1. EXECUTIVE SUMMARY & OBJECTIVES

- **Product Vision:** `nubeOfThaughts` eliminates survey fatigue and conscious self-report bias by guiding users through an immersive, distraction-free visual perception journey of curated optical illusions. Users select what they immediately perceive without viewing psychological interpretations during the quiz. Upon completion, their aggregated perception matrix is synthesized via Google Gemini into a bespoke, multidimensional personality profile (MVP 1). This profile then feeds into an intelligent conversational onboarding and chat companion (MVP 2).
- **User Personas:**
  - **Persona A: "Curious Self-Explorer" (Alex, 24):** Digital native who enjoys viral quizzes and personality archetypes, wants quick, visually engaging self-discovery without answering 60 tedious questions, and loves sharing results on social media.
  - **Persona B: "Reflective Mentee" (Maya, 31):** Professional seeking deeper cognitive introspection, shadow trait awareness, and an interactive AI companion for personalized dialogue and coaching based on her subconscious tendencies.
- **Core Value Metrics:**
  - **Quiz Completion Rate:** >85% (measured by completed quiz steps vs started).
  - **Gemini Synthesis Latency:** <3.5 seconds end-to-end for report generation.
  - **MVP 2 Companion Engagement:** Average >4 chat turns per user in onboarding companion session.
  - **Social Sharing Virality (K-Factor):** >0.35 share rate of personality archetype cards.

---

## 2. SYSTEM USER STORIES & PRIORITIZATION (MoSCoW MATRIX)

| ID        | User Persona    | User Story (As a... I want to... So that...)                                                                                                                                                                    | Priority (MoSCoW)        |
| :-------- | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| **US-01** | Alex (Explorer) | As a user, I want to see a single optical illusion image with selectable answer options and a Next button without any revealed personality text, so that my choices remain completely unbiased.                 | **Must Have (MVP 1)**    |
| **US-02** | Alex (Explorer) | As a user, I want a clean progress indicator showing my current stage (e.g., 1 of 19) and the ability to advance smoothly, so that I understand my progress through the assessment.                             | **Must Have (MVP 1)**    |
| **US-03** | Alex (Explorer) | As a user, I want all my selected choices to be compiled at the end of the test with `data.md` psychological interpretations and sent to Google Gemini, so that I receive an authentic, personalized synthesis. | **Must Have (MVP 1)**    |
| **US-04** | Alex (Explorer) | As a user, I want a visually stunning personality assessment dashboard displaying my core Archetype, Trait Spectrum, Key Strengths, Blind Spots, and Cognitive Style, so that I gain meaningful insights.       | **Must Have (MVP 1)**    |
| **US-05** | Alex (Explorer) | As a user, I want to download or share my Archetype badge/card as an image or social link, so that I can show my friends.                                                                                       | **Should Have (MVP 1)**  |
| **US-06** | Maya (Mentee)   | As a user, I want to transition seamlessly from my test results into an interactive onboarding chat system, so that I can immediately converse with an AI companion tailored to my personality traits.          | **Must Have (MVP 2)**    |
| **US-07** | Maya (Mentee)   | As a user, I want the Gemini chat companion to remember my assessment choices and personality archetype during the conversation, so that its advice and dialogue feel deeply personalized.                      | **Must Have (MVP 2)**    |
| **US-08** | Alex (Explorer) | As a user, I want to retake the test or reset my session, so that I can explore alternative perceptions or clear my state.                                                                                      | **Should Have (MVP 1)**  |
| **US-09** | Maya (Mentee)   | As a user, I want pre-configured starter prompt pills in the chat (e.g., "Tell me about my blind spots", "How do I handle conflict?"), so that I know what to ask my companion.                                 | **Should Have (MVP 2)**  |
| **US-10** | Admin/System    | As a platform operator, I want an extensible quiz config schema in code mapping images to questions, options, and semantic keys, so that new optical illusions can be added effortlessly.                       | **Could Have (Phase 2)** |

---

## 3. FUNCTIONAL REQUIREMENTS & ACCEPTANCE CRITERIA

### FR-01: Blind Optical Illusion Stage Runner (MVP 1)

- **Description:** Presents 19 illusion stages sequentially. Each stage renders the high-res illusion image, title/prompt question, and mutually exclusive selectable options (pill/card buttons). Crucially, the psychological interpretation text from `data.md` is **strictly hidden** during the quiz.
- **Acceptance Criteria 1:** Given the user is on Stage $N$, when an option is selected, the "Next" button activates; clicking "Next" transitions smoothly to Stage $N+1$ and records `{ stageId, image, question, selectedOption, selectedInterpretation }`.
- **Acceptance Criteria 2:** If the user attempts to click "Next" without an active selection, the system prevents transition and provides a gentle micro-shake animation prompting a choice.

### FR-02: End-of-Quiz Data Aggregation & Gemini Synthesis Engine (MVP 1)

- **Description:** Upon completing the final illusion (Stage 19), the application packages the accumulated choices and cross-references each choice with its psychological meaning from `data.md`. It calls the backend API route `/api/synthesize`, which streams/prompts Google Gemini (`gemini-2.5-flash` or `gemini-1.5-pro`) using structured JSON schema.
- **Acceptance Criteria 1:** Given the 19 choices are submitted, the backend constructs the prompt embedding the `data.md` baseline context and returns a structured JSON payload:
  - `archetypeTitle` (e.g., "The Visionary Empathetic Strategist")
  - `tagline` (e.g., "Navigating the macroscopic horizon through deeply rooted human empathy")
  - `traitScores` (Analytical vs Intuitive, Order vs Impulse, Leadership vs Empathy, etc.)
  - `coreStrengths` (Array of 3-4 strings)
  - `growthAreas` (Array of 2-3 blind spots)
  - `deepSynthesis` (2-3 paragraphs of nuanced psychological narrative)
  - `companionPersonality` (Directives for MVP 2 chat agent)
- **Acceptance Criteria 2:** If the Gemini API call encounters network error or timeout, the UI displays an actionable retry modal with exponential backoff and cached fallback local synthesis.

### FR-03: Personality Assessment Result Presentation (MVP 1)

- **Description:** A premium, dark-mode glassmorphic dashboard showcasing the user's Archetype card, radar/spectrum trait meters, narrative synthesis, and breakdown of key illusions that defined their profile.
- **Acceptance Criteria 1:** The user can view the complete assessment and toggled breakdown of their selected illusions with their unlocked meanings.
- **Acceptance Criteria 2:** Includes a prominent CTA: _"Step Into Your Personal Companion"_ which activates MVP 2.

### FR-04: Conversational Onboarding System (MVP 2)

- **Description:** A tailored conversational onboarding flow. Once the personality profile is generated, the user enters an interactive onboarding screen where Gemini introduces itself in a voice and temperament calibrated to the user's specific traits.
- **Acceptance Criteria 1:** Given the user enters MVP 2, Gemini greets the user by acknowledging their dominant traits (e.g., "Welcome Alex. Seeing the bird first and the explosion suggests you lead through spontaneous creativity. What goal shall we explore today?").
- **Acceptance Criteria 2:** The onboarding system guides the user through 3 conversational onboarding milestones:
  1. _Trait Calibration & Reflection_
  2. _Goal & Focus Selection_ (Creative growth, emotional balance, leadership communication)
  3. _Handoff to Open Companion Chat_

### FR-05: Real-Time Dynamic Personality Companion Chat (MVP 2)

- **Description:** A persistent, responsive chat window allowing real-time multi-turn conversation with the Gemini companion.
- **Acceptance Criteria 1:** Every user chat message is sent along with conversation history and the user's core assessment system context. Gemini responds in character with streaming tokens.
- **Acceptance Criteria 2:** Provides quick suggested prompt chips (e.g., "How does my impulsive streak affect my career?", "Help me practice handling conflict with a structured thinker").

---

## 4. NON-FUNCTIONAL & COMPLIANCE REQUIREMENTS

- **Performance Baseline:**
  - First Contentful Paint (FCP) < 1.0s; images lazy-loaded and optimized with WebP/AVIF.
  - Quiz step transition latency < 150ms.
  - Gemini synthesis response time < 4.0s.
- **Security & Safety Standards:**
  - Client-side Gemini API key exposure is **strictly prohibited**. All LLM communication occurs server-side via Next.js API route / Server Actions.
  - Prompt guardrails ensure the AI explicitly states it is an introspective cognitive assessment tool, not a clinical diagnostic medical device.
  - Environment variables (`GEMINI_API_KEY`) protected according to global engine block rules.
- **UX/UI Interaction Guidelines:**
  - Dark mode aesthetic with celestial/nebula gradient accents ("nube of thoughts").
  - Smooth spring transitions, glassmorphic blur cards (`backdrop-blur-md`), responsive on mobile, tablet, and desktop.

---

## 5. PRODUCT ROADMAP & SCOPE BOUNDARIES

### MVP Phase 1 Core Scope

- Sequential 19-stage optical illusion test runner (clean image + radio options + next button).
- Zero-leak blind test design (interpretation strictly suppressed during quiz).
- Aggregation engine pairing user selections with `data.md` definitions.
- Server-side Gemini API integration synthesizing structured assessment.
- Interactive results dashboard with Archetype, traits, and unlocked choices.

### MVP Phase 2 Scope (Included in Project Plan)

- Conversational Onboarding Flow with contextual greeting.
- Multi-turn Gemini Chat Companion initialized with the user's unique personality context.
- Guided prompt chips and conversational exploration.

### Explicitly Out of Scope (Phase 3 / Future)

- Multi-user authentication & database persistence (Supabase/PostgreSQL) — initial version will use secure browser session storage (`localStorage`/`sessionStorage`).
- Paid paywall / Stripe billing integrations.
- Native mobile apps (iOS/Android) — mobile responsive web will be delivered first.
