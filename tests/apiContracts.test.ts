import { describe, it, expect, vi } from "vitest";
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
    const body = await res.json();
    expect(body.error).toBeDefined();
  });

  it("returns fallback personality assessment safely if GEMINI_API_KEY is not configured", async () => {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const sampleSelections = [
      {
        stageId: 1,
        title: "Bird or Lynx?",
        selectedOption: "A Lynx",
        interpretation: "Strategic thinker",
      },
    ];

    const req = new Request("http://localhost:3000/api/synthesize", {
      method: "POST",
      body: JSON.stringify({ selections: sampleSelections }),
    });

    const res = await synthesizeHandler(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.assessment).toBeDefined();
    expect(body.assessment.archetypeTitle).toBeTruthy();
    expect(body.assessment.traitRadar).toBeDefined();
    expect(body.assessment.coreStrengths.length).toBeGreaterThan(0);

    process.env.GEMINI_API_KEY = originalKey;
  });

  it("handles companion chat gracefully and responds with grounded answers", async () => {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const req = new Request("http://localhost:3000/api/companion/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: "What does my archetype say?" }],
        assessment: {
          archetypeTitle: "The Intuitive Visionary",
          tagline: "Perceiving the horizon",
          traitRadar: {
            analyticalVsIntuitive: 75,
            orderVsImpulse: 50,
            leadershipVsEmpathy: 80,
            opennessVsGuardedness: 65,
          },
          coreStrengths: ["Pattern Recognition"],
          growthAreas: ["Detail Burnout"],
          synthesisNarrative: "Intuitive mind",
          companionDirective: "Be warm and supportive",
        },
      }),
    });

    const res = await companionHandler(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.reply).toBeDefined();
    expect(body.reply.length).toBeGreaterThan(10);

    process.env.GEMINI_API_KEY = originalKey;
  });
});
