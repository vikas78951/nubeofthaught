"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { PersonalityAssessment } from "@/lib/gemini";
import { IllusionStage } from "@/lib/illusionsData";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Share2,
  CheckCircle,
  Eye,
} from "lucide-react";

interface AssessmentDashboardProps {
  assessment: PersonalityAssessment;
  allStages: IllusionStage[];
  userSelections: Record<number, string>;
  onStartCompanion: () => void;
  onRetakeQuiz: () => void;
}

export function AssessmentDashboard({
  assessment,
  allStages,
  userSelections,
  onStartCompanion,
  onRetakeQuiz,
}: AssessmentDashboardProps) {
  const [showIllusionBreakdown, setShowIllusionBreakdown] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#67F29A", "#173326", "#F5F7F5"],
      });
    } catch {
      // Ignored if canvas-confetti is not loaded
    }
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `I just took the optical illusion personality test on nubeOfThaughts! My Archetype is: ${assessment.archetypeTitle}.`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const radarMetrics = [
    {
      leftLabel: "Analytical",
      rightLabel: "Intuitive",
      value: assessment.traitRadar.analyticalVsIntuitive,
    },
    {
      leftLabel: "Structured Order",
      rightLabel: "Spontaneous Impulse",
      value: assessment.traitRadar.orderVsImpulse,
    },
    {
      leftLabel: "Assertive Leadership",
      rightLabel: "Empathetic Guidance",
      value: assessment.traitRadar.leadershipVsEmpathy,
    },
    {
      leftLabel: "Guarded / Discerning",
      rightLabel: "Expansive Openness",
      value: assessment.traitRadar.opennessVsGuardedness,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "880px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Archetype Hero Card */}
        <div
          className="glass-panel mint-glow"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "rgba(103, 242, 154, 0.1)",
              border: "1px solid var(--border)",
              color: "var(--primary-foreground)",
              fontSize: "13px",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            <span>Assessed Cognitive Archetype</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "var(--text)",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            {assessment.archetypeTitle}
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "var(--primary-foreground)",
              fontStyle: "italic",
              maxWidth: "680px",
              margin: "0 auto 28px auto",
              lineHeight: 1.5,
            }}
          >
            "{assessment.tagline}"
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={onStartCompanion}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "9999px",
                background: "var(--primary-foreground)",
                color: "#050606",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
              }}
            >
              <span>Step Into Companion Dialogue (MVP 2)</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={handleShare}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 22px",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.05)",
                color: "var(--text)",
                fontSize: "14px",
                cursor: "pointer",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Share2 size={16} />
              <span>{copiedLink ? "Badge Copied!" : "Share Archetype"}</span>
            </button>

            <button
              onClick={onRetakeQuiz}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 20px",
                borderRadius: "9999px",
                background: "transparent",
                color: "var(--mute)",
                fontSize: "14px",
                cursor: "pointer",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <RotateCcw size={16} />
              <span>Retake</span>
            </button>
          </div>
        </div>

        {/* Cognitive Radar Trait Spectrums */}
        <div
          className="glass-panel"
          style={{
            padding: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "var(--text)",
              marginBottom: "24px",
            }}
          >
            Subconscious Cognitive Spectrums
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {radarMetrics.map((metric, idx) => (
              <div key={idx}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ color: "var(--mute)" }}>{metric.leftLabel}</span>
                  <span style={{ color: "var(--primary-foreground)", fontWeight: 400 }}>
                    {metric.value}%
                  </span>
                  <span style={{ color: "var(--mute)" }}>{metric.rightLabel}</span>
                </div>

                <div
                  style={{
                    height: "8px",
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "9999px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: `${metric.value}%`,
                      background: "linear-gradient(90deg, #173326 0%, #67F29A 100%)",
                      borderRadius: "9999px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Growth Areas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          <div className="glass-panel" style={{ padding: "28px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--primary-foreground)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={18} />
              <span>Core Psychological Strengths</span>
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {assessment.coreStrengths.map((str, idx) => (
                <li key={idx} style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.5 }}>
                  • {str}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: "28px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--error)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Eye size={18} />
              <span>Introspective Growth Areas</span>
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {assessment.growthAreas.map((area, idx) => (
                <li key={idx} style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.5 }}>
                  • {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deep Narrative Synthesis */}
        <div className="glass-panel" style={{ padding: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Perceptual Synthesis Narrative
          </h2>
          <div
            style={{
              fontSize: "15px",
              color: "var(--body)",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {assessment.synthesisNarrative}
          </div>
        </div>

        {/* Unlocked Optical Illusion Gallery (Accordion) */}
        <div className="glass-panel" style={{ padding: "28px" }}>
          <button
            type="button"
            onClick={() => setShowIllusionBreakdown(!showIllusionBreakdown)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "transparent",
              border: "none",
              color: "var(--text)",
              fontSize: "18px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <span>Your 19 Perception Choices & Unlocked Meanings</span>
            {showIllusionBreakdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showIllusionBreakdown && (
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {allStages.map((stage) => {
                const chosenOptionId = userSelections[stage.id];
                const chosenOption = stage.options.find((o) => o.id === chosenOptionId);

                return (
                  <div
                    key={stage.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "16px",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "60px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={stage.imageSrc}
                          alt={stage.title}
                          fill
                          sizes="80px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div>
                        <strong style={{ fontSize: "14px", color: "var(--text)" }}>
                          Stage {stage.id}: {stage.title}
                        </strong>
                        <div style={{ fontSize: "13px", color: "var(--primary-foreground)", marginTop: "2px" }}>
                          You saw: {chosenOption ? chosenOption.text : "N/A"}
                        </div>
                      </div>
                    </div>

                    {chosenOption && (
                      <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.4 }}>
                        <em>Unlocked Psychological Meaning:</em> {chosenOption.interpretation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
