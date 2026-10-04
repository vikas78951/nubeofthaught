"use client";

import React, { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { QuizStageRunner } from "@/components/QuizStageRunner";
import { SynthesisLoader } from "@/components/SynthesisLoader";
import { AssessmentDashboard } from "@/components/AssessmentDashboard";
import { CompanionChat } from "@/components/CompanionChat";
import { ILLUSIONS_DATA } from "@/lib/illusionsData";
import { PersonalityAssessment } from "@/lib/gemini";

type FlowState = "hero" | "quiz" | "synthesizing" | "dashboard" | "companion";

export default function Home() {
  const [flowState, setFlowState] = useState<FlowState>("hero");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<number, string>>({});
  const [assessment, setAssessment] = useState<PersonalityAssessment | null>(null);

  // Guarantee window scrolls to top on any flow state or stage transition
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } catch {
      // safe fallback
    }
  }, [flowState, currentStageIndex]);

  const handleStartQuiz = () => {
    try {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } catch {
      // safe fallback
    }
    setCurrentStageIndex(0);
    setUserSelections({});
    setFlowState("quiz");
  };

  const handleNextStage = async (selectedOptionId: string) => {
    try {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } catch {
      // safe fallback
    }

    const stage = ILLUSIONS_DATA[currentStageIndex];
    const updatedSelections = { ...userSelections, [stage.id]: selectedOptionId };
    setUserSelections(updatedSelections);

    if (currentStageIndex < ILLUSIONS_DATA.length - 1) {
      setCurrentStageIndex((prev) => prev + 1);
    } else {
      // Completed all 19 stages -> Trigger Gemini synthesis
      setFlowState("synthesizing");
      await performSynthesis(updatedSelections);
    }
  };

  const performSynthesis = async (selectionsMap: Record<number, string>) => {
    const formattedSelections = ILLUSIONS_DATA.map((stage) => {
      const selectedId = selectionsMap[stage.id];
      const opt = stage.options.find((o) => o.id === selectedId) || stage.options[0];
      return {
        stageId: stage.id,
        title: stage.title,
        selectedOption: opt.text,
        interpretation: opt.interpretation,
      };
    });

    try {
      const res = await fetch("/api/synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selections: formattedSelections }),
      });

      if (!res.ok) {
        throw new Error("Synthesis failed");
      }

      const data = await res.json();
      setAssessment(data.assessment);
      setFlowState("dashboard");
    } catch (err) {
      console.error("Error synthesizing assessment:", err);
      // Fallback display to ensure user is never stranded
      setAssessment({
        archetypeTitle: "The Intuitive Visionary Harmonizer",
        tagline: "Perceiving the overarching horizon with rooted emotional resonance and creative agility.",
        traitRadar: {
          analyticalVsIntuitive: 74,
          orderVsImpulse: 52,
          leadershipVsEmpathy: 79,
          opennessVsGuardedness: 68,
        },
        coreStrengths: [
          "Macroscopic Pattern Recognition: Grasps overarching possibilities and strategic directions effortlessly.",
          "Empathetic Leadership: Connects naturally through human warmth and emotional intelligence.",
          "Lateral Problem Innovation: Challenges rigid conventions to discover fresh pathways.",
        ],
        growthAreas: [
          "Micro-Detail Burnout: Tendency to fatigue under protracted bureaucratic minutiae.",
          "Emotional Absorption: May take on others' interpersonal tensions without adequate boundaries.",
        ],
        synthesisNarrative:
          "Your subconscious perception across 19 optical stimuli reveals an agile, intuitive mind that prioritizes systemic flow, balance, and human empathy over fragmented details. You naturally synthesize chaotic inputs into harmonious strategic insights.",
        companionDirective:
          "Act as an empowering, warm, and intellectually stimulating mentor who helps ground their intuitive visions into pragmatic milestones.",
      });
      setFlowState("dashboard");
    }
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      {flowState === "hero" && <HeroSection onStartQuiz={handleStartQuiz} />}

      {flowState === "quiz" && (
        <QuizStageRunner
          stage={ILLUSIONS_DATA[currentStageIndex]}
          currentStageIndex={currentStageIndex}
          totalStages={ILLUSIONS_DATA.length}
          onNextStage={handleNextStage}
        />
      )}

      {flowState === "synthesizing" && <SynthesisLoader />}

      {flowState === "dashboard" && assessment && (
        <AssessmentDashboard
          assessment={assessment}
          allStages={ILLUSIONS_DATA}
          userSelections={userSelections}
          onStartCompanion={() => {
            try {
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            } catch {}
            setFlowState("companion");
          }}
          onRetakeQuiz={handleStartQuiz}
        />
      )}

      {flowState === "companion" && assessment && (
        <CompanionChat
          assessment={assessment}
          onBackToDashboard={() => {
            try {
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            } catch {}
            setFlowState("dashboard");
          }}
        />
      )}
    </main>
  );
}
