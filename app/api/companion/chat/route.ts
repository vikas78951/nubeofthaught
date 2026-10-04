import { NextResponse } from "next/server";
import { getGeminiClient, PersonalityAssessment } from "@/lib/gemini";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, assessment } = body as {
      messages: Array<{ role: "user" | "model"; content: string }>;
      assessment?: PersonalityAssessment;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid or empty messages array provided." },
        { status: 400 }
      );
    }

    const latestUserMessage = messages[messages.length - 1].content;

    // Check if GEMINI_API_KEY is present; fallback gracefully with an intelligent mock companion
    if (!process.env.GEMINI_API_KEY) {
      let mockReply = "";
      if (assessment) {
        mockReply = `As your **${assessment.archetypeTitle}** companion, I notice how your intuitive and visionary nature guides your thinking. Regarding "${latestUserMessage}", remember that your natural strength is seeing the overarching pattern. When faced with complexity, trust your gut instinct while setting small, steady grounding milestones. How would you like us to break this down today?`;
      } else {
        mockReply = `I am your NubeOfThaughts companion. That's a thoughtful question: "${latestUserMessage}". How can we best apply your perceptual strengths to move forward?`;
      }

      return NextResponse.json({ reply: mockReply });
    }

    const ai = getGeminiClient();

    let systemInstruction = `You are the dedicated AI Companion and Onboarding Mentor for "nubeOfThaughts".
Your goal is to converse with the user in a deeply empathetic, psychologically perceptive, and engaging manner.`;

    if (assessment) {
      systemInstruction += `
The user has been assessed with the following cognitive archetype profile:
- Archetype: ${assessment.archetypeTitle}
- Core Tagline: "${assessment.tagline}"
- Key Strengths: ${assessment.coreStrengths.join(" | ")}
- Growth Areas: ${assessment.growthAreas.join(" | ")}
- Narrative Essence: ${assessment.synthesisNarrative}
- Companion Directive: ${assessment.companionDirective}

Always embody the Companion Directive. Be encouraging, intellectually rich, warm, and concise (2-4 paragraphs max). Frame your insights through the lens of their unique perceptual tendencies.`;
    }

    // Format chat history for Gemini SDK
    const contents = messages.map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content }],
    }));

    const candidateModels = ["gemini-3.8-flash", "gemini-2.5-flash", "gemini-1.5-flash"];
    let reply = "";

    for (const model of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction,
          },
        });
        if (response.text) {
          reply = response.text;
          break;
        }
      } catch (err) {
        console.warn(`Companion chat model ${model} failed, trying next:`, err);
      }
    }

    if (!reply) {
      reply = "I am reflecting on your thoughts. Let us explore further.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in /api/companion/chat:", error);
    return NextResponse.json(
      { error: "Failed to process companion chat message." },
      { status: 500 }
    );
  }
}
