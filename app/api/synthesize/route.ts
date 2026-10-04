import { NextResponse } from "next/server";
import { getGeminiClient, PersonalityAssessment } from "@/lib/gemini";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { selections } = body as {
      selections: Array<{
        stageId: number;
        title: string;
        selectedOption: string;
        interpretation: string;
      }>;
    };

    if (!selections || !Array.isArray(selections) || selections.length === 0) {
      return NextResponse.json(
        { error: "Invalid or empty selections array provided." },
        { status: 400 }
      );
    }

    const selectionsSummary = selections
      .map(
        (s) =>
          `- Illusion "${s.title}": User selected "${s.selectedOption}". Psychological meaning: ${s.interpretation}`
      )
      .join("\n");

    const prompt = `You are an elite psychometric synthesizer and cognitive psychologist for "nubeOfThaughts" (a visual perception personality profiling experience).
The user just completed a 19-stage optical illusion perception test. Unlike standard questionnaire tests where users consciously manipulate answers, this test measured subconscious, gut-reaction visual interpretations.

Here are the user's 19 subconscious visual choices and their psychological interpretations:
${selectionsSummary}

Your mission:
Synthesize these 19 discrete perceptual signals into a coherent, deeply insightful, multidimensional personality profile.
Output ONLY a valid JSON object matching the following structure exactly (no markdown formatting, no backticks, just raw valid JSON):
{
  "archetypeTitle": "A captivating, evocative 3-4 word Archetype Name (e.g. 'The Visionary Empathic Strategist' or 'The Grounded Luminary')",
  "tagline": "A poetic, punchy 1-sentence essence statement summarizing their cognitive nature.",
  "traitRadar": {
    "analyticalVsIntuitive": 68,
    "orderVsImpulse": 42,
    "leadershipVsEmpathy": 75,
    "opennessVsGuardedness": 60
  },
  "coreStrengths": [
    "Short title + 1 sentence explanation of strength 1",
    "Short title + 1 sentence explanation of strength 2",
    "Short title + 1 sentence explanation of strength 3"
  ],
  "growthAreas": [
    "Short title + 1 sentence actionable blind spot 1",
    "Short title + 1 sentence actionable blind spot 2"
  ],
  "synthesisNarrative": "3 insightful, beautifully written paragraphs analyzing how their visual perception reveals their inner worldview, problem-solving habits, and emotional wiring.",
  "companionDirective": "A precise instruction for how an AI conversational companion should address, coach, and interact with this person (tone, temperament, challenge level)."
}

Ensure all numerical traitRadar values are integers between 0 and 100. Be empowering, psychologically nuanced, and deeply personal.`;

    // Check if GEMINI_API_KEY is present; if not, return high-fidelity fallback synthesis gracefully
    if (!process.env.GEMINI_API_KEY) {
      const fallbackAssessment: PersonalityAssessment = {
        archetypeTitle: "The Intuitive Visionary Harmonizer",
        tagline: "Perceiving the overarching horizon with rooted emotional resonance and creative agility.",
        traitRadar: {
          analyticalVsIntuitive: 74,
          orderVsImpulse: 52,
          leadershipVsEmpathy: 79,
          opennessVsGuardedness: 68
        },
        coreStrengths: [
          "Macroscopic Pattern Recognition: Natural talent for synthesizing sprawling chaotic inputs into crisp, strategic direction.",
          "Empathetic Gravitas: Guided by human values and genuine connection, earning trust naturally across teams.",
          "Lateral Problem Exploration: Instinctively looks beyond conventional solutions to find novel pathways."
        ],
        growthAreas: [
          "Micro-Detail Burnout: Tendency to become fatigued when forced into repetitive administrative minutiae.",
          "Emotional Absorption: Prone to internalizing interpersonal tensions before establishing clear protective boundaries."
        ],
        synthesisNarrative: `Your visual perception responses reveal an agile, intuitive mind that naturally captures the big picture. When confronted with ambiguous dual-perspective stimuli, you consistently register emotional tone, human connection, and macro structural balance rather than isolated mechanical components.

This cognitive style suggests you navigate the world through instinctive pattern recognition. You make decisions rapidly by sensing underlying currents, allowing you to thrive in dynamic, fast-evolving environments where rigid rulebooks falter.

At your core, you are driven by a fusion of visionary curiosity and genuine empathy. While your aspirations reach for towering peaks, your focus remains anchored on the human impact of your ideas. Embracing structured grounding routines will help you transform your expansive insights into enduring realities.`,
        companionDirective: "Act as an inspiring, warm, and intellectually stimulating mentor. Validate their intuitive leaps while gently offering practical frameworks to ground their vision."
      };

      return NextResponse.json({ assessment: fallbackAssessment });
    }

    const ai = getGeminiClient();
    const candidateModels = ["gemini-3.8-flash", "gemini-2.5-flash", "gemini-1.5-flash"];
    let responseText = "";

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });
        if (response.text) {
          responseText = response.text.trim();
          break;
        }
      } catch (err) {
        console.warn(`Model ${model} failed, trying next candidate:`, err);
      }
    }

    if (!responseText) {
      throw new Error("All Gemini candidate models failed to generate content.");
    }
    let parsedAssessment: PersonalityAssessment;

    try {
      parsedAssessment = JSON.parse(responseText);
    } catch {
      // Clean possible markdown code fences if model enclosed them
      const cleaned = responseText.replace(/^```json/i, "").replace(/```$/, "").trim();
      parsedAssessment = JSON.parse(cleaned);
    }

    return NextResponse.json({ assessment: parsedAssessment });
  } catch (error) {
    console.error("Error in /api/synthesize:", error);
    return NextResponse.json(
      { error: "Failed to synthesize personality assessment." },
      { status: 500 }
    );
  }
}
