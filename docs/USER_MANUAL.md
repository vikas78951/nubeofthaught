# END-USER INTEGRATION & SYSTEM OPERATIONS MANUAL (USER_MANUAL)

## DOCUMENT CONTROL
* **Product Infrastructure Blueprint:** nubeOfThaughts
* **AI Engine Profile:** Technical Documentation & Systems Training Specialist v1.0
* **Date Engineered:** 2026-10-04
* **Associated Technical Sources:** [`/docs/TDD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/TDD.md), [`/docs/DEPLOY_SPEC.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/DEPLOY_SPEC.md), and [`/docs/SECURITY_PATCH_SPEC.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/SECURITY_PATCH_SPEC.md)

---

## 1. THIRD-PARTY CREDENTIAL PROVISIONING & SECURITY (PRIMARY TIER)

### 1.1 Google Gemini AI Engine Gateway Setup
* **Objective:** Obtain a valid API key for Google Gemini to power structured psychometric synthesis and MVP 2 conversational companion chat.
* **Step-by-Step Provisioning Path:**
  1. Open a web browser and navigate to Google AI Studio at `https://aistudio.google.com/`.
  2. Sign in with your Google account.
  3. In the left navigation menu, click **"Get API key"**.
  4. Click **"Create API key"** and select or create a Google Cloud project.
  5. Copy the generated key (starts with `AIzaSy...`).
  6. Export the environment variable in your terminal session before launching the server:
     ```bash
     export GEMINI_API_KEY="AIzaSyYourSecretKeyHere"
     ```
     *(Note: If no key is set, nubeOfThaughts automatically falls back to high-fidelity mock synthesis and responsive companion modes to ensure uninterrupted operation).*

---

## 2. SYSTEM ARCHITECTURE & RUNBOOK (SECONDARY TIER)

### 2.1 Starting the Development Server
Navigate to the project root directory and start the Next.js server:
```bash
cd /home/vikas/Documents/professional/Projects/nubeOfThaughts
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:3000
```

### 2.2 Executing Automated Quality & Regression Tests
To run the automated Vitest test suite:
```bash
cd /home/vikas/Documents/professional/Projects/nubeOfThaughts
npx vitest run
```

### 2.3 Compiling Production Builds
```bash
npm run build
npm run start
```

---

## 3. USER JOURNEY & INTERACTION FLOW

1. **Screen 1 (Landing Hero):** 
   - User reviews the purpose of the 19 optical illusions.
   - Clicks **"Begin Visual Assessment"**.
2. **Screen 2 (Blind Quiz Stage Runner):**
   - User experiences 19 stages displaying one illusion image at a time.
   - Selects their instantaneous gut-reaction choice from the options.
   - *Zero personality descriptions are displayed to prevent self-reporting bias.*
   - Clicks **"Next Stage"** to advance.
3. **Screen 3 (Neural Synthesis Loader):**
   - Ethereal status indicator pulses while the 19 selections are compiled and sent to `/api/synthesize`.
4. **Screen 4 (Personality Assessment Dashboard - MVP 1):**
   - Displays Archetype Title, Tagline, Subconscious Cognitive Spectrums (Analytical, Impulsive, Leadership, Openness), Core Strengths, and Growth Areas.
   - Accordion gallery allows reviewing each of the 19 illusions with its revealed psychological meaning.
   - Clicks **"Step Into Companion Dialogue (MVP 2)"**.
5. **Screen 5 (Conversational Onboarding & Companion Chat - MVP 2):**
   - User is greeted by an AI companion conditioned specifically on their assessed archetype.
   - Provides multi-turn conversational support, exploration of blind spots, and career reflection.

---

## 4. SYSTEM TROUBLESHOOTING & INCIDENT RESPONSE MATRIX

| Observed System Exception | Probable Architecture Vector | Immediate Resolution Remedy Script |
| :--- | :--- | :--- |
| Gemini API calls return fallback data | `GEMINI_API_KEY` not exported in current shell | Run `export GEMINI_API_KEY="AIzaSy..."` in terminal and restart `npm run dev`. |
| Optical images fail to display | Missing image path or broken public directory | Check `/public/images/` and ensure all 19 image assets are in place. |
| Test suite path alias error | Vitest configuration missing `@/` alias | Ensure `vitest.config.ts` includes `resolve.alias: { '@': path.resolve(__dirname, './') }`. |
| Port 3000 already in use | Conflicting local process | Run `npx kill-port 3000` or run on an alternate port: `npm run dev -- -p 3001`. |
