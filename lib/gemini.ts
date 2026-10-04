import { GoogleGenAI } from "@google/genai";

let genaiClient: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  if (!genaiClient) {
    genaiClient = new GoogleGenAI({ apiKey });
  }
  return genaiClient;
}

export interface PersonalityAssessment {
  archetypeTitle: string;
  tagline: string;
  traitRadar: {
    analyticalVsIntuitive: number; // 0 (100% Analytical) to 100 (100% Intuitive)
    orderVsImpulse: number;        // 0 (Structured) to 100 (Spontaneous)
    leadershipVsEmpathy: number;   // 0 (Assertive Leader) to 100 (Empathetic Guide)
    opennessVsGuardedness: number; // 0 (Guarded/Discerning) to 100 (Open/Expansive)
  };
  coreStrengths: string[];
  growthAreas: string[];
  synthesisNarrative: string;
  companionDirective: string;
}
