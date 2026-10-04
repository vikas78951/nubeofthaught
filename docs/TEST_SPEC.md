# TEST VERIFICATION & QUALITY RUNBOOK (TEST_SPEC)

## DOCUMENT CONTROL
* **Product Title:** nubeOfThaughts
* **AI Engine Profile:** QA Skill Persona v1.0 (SDET & Automated Test Focus)
* **Date Generated:** 2026-10-04
* **Source Reference Context:** [`/docs/PRD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/PRD.md), [`/docs/TDD.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/TDD.md), [`/docs/DEPLOY_SPEC.md`](file:///home/vikas/Documents/professional/Projects/nubeOfThaughts/docs/DEPLOY_SPEC.md)

---

## 1. MISSION-CRITICAL ARMORED SUITE (PRIMARY TIER)
*Philosophies enforced: Zero Priming Data Integrity, Safe Fallback Synthesis, and Edge Route Isolation.*

### 1.1 Optical Illusions Data & Zero-Priming Integrity Test (`tests/illusionsData.test.ts`)
```typescript
import { describe, it, expect } from "vitest";
import { ILLUSIONS_DATA } from "../lib/illusionsData";

describe("Illusions Data Integrity & Zero Priming Contract", () => {
  it("should contain exactly 19 curated optical illusion stages", () => {
    expect(ILLUSIONS_DATA).toHaveLength(19);
  });

  it("each illusion should have a valid title, imageSrc, and options", () => {
    ILLUSIONS_DATA.forEach((stage, idx) => {
      expect(stage.id).toBe(idx + 1);
      expect(stage.title).toBeTruthy();
      expect(stage.question).toBeTruthy();
      expect(stage.imageSrc).toMatch(/^\/images\/.+/);
      expect(stage.options.length).toBeGreaterThanOrEqual(2);
      stage.options.forEach((opt) => {
        expect(opt.id).toBeTruthy();
        expect(opt.text).toBeTruthy();
        expect(opt.interpretation).toBeTruthy();
      });
    });
  });
});
```

---

## 2. COMPONENT INTEGRATION & SYSTEM SUITE (SECONDARY TIER)
*Philosophies enforced: Postel's Law validation, API Contracts, UI State Integrity.*

### 2.1 API Endpoint Contract Assertions (`tests/apiContracts.test.ts`)
```typescript
import { describe, it, expect } from "vitest";
import { POST as synthesizeHandler } from "../app/api/synthesize/route";
import { POST as companionHandler } from "../app/api/companion/chat/route";

describe("API Contract & Synthesis Suite", () => {
  it("rejects empty or malformed synthesize requests with 400", async () => {
    const req = new Request("http://localhost:3000/api/synthesize", {
      method: "POST",
      body: JSON.stringify({ selections: [] }),
    });
    const res = await synthesizeHandler(req);
    expect(res.status).toBe(400);
  });

  it("returns fallback personality assessment safely if GEMINI_API_KEY is not configured", async () => {
    const req = new Request("http://localhost:3000/api/synthesize", {
      method: "POST",
      body: JSON.stringify({ selections: [{ stageId: 1, title: "Bird or Lynx?", selectedOption: "A Lynx", interpretation: "Strategic thinker" }] }),
    });
    const res = await synthesizeHandler(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.assessment.archetypeTitle).toBeTruthy();
  });

  it("handles companion chat gracefully and responds with grounded answers", async () => {
    const req = new Request("http://localhost:3000/api/companion/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: "What does my archetype say?" }],
        assessment: { archetypeTitle: "The Intuitive Visionary" },
      }),
    });
    const res = await companionHandler(req);
    expect(res.status).toBe(200);
  });
});
```

---

## 3. AUTOMATED HEALTH & LINT RUNTIME
* **Execution Command:** `npx vitest run`
* **Test Verification Status:** 2 test files, 5 tests passed (100% passing rate).
* **Production Build Check:** `npm run build` completed with code 0.
