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
  Brain,
  ShieldCheck,
  AlertTriangle,
  Compass,
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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#10b981", "#6366f1", "#f8fafc"],
      });
    } catch {
      // Ignored
    }
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `I just completed the subconscious optical perception assessment on nubeOfThaughts! My Cognitive Archetype is: ${assessment.archetypeTitle}.`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const radarMetrics = [
    {
      leftLabel: "Analytical (Detail Focus)",
      rightLabel: "Intuitive (Gestalt Vision)",
      value: assessment.traitRadar.analyticalVsIntuitive,
      description:
        assessment.traitRadar.analyticalVsIntuitive > 50
          ? "You naturally synthesize macro-level patterns and holistic possibilities before examining granular details."
          : "You naturally decompose complex systems into constituent logic, precision, and structural rigor.",
    },
    {
      leftLabel: "Structured Order",
      rightLabel: "Fluid Agility",
      value: assessment.traitRadar.orderVsImpulse,
      description:
        assessment.traitRadar.orderVsImpulse > 50
          ? "You thrive in rapidly evolving, ambiguous environments with spontaneous adaptability."
          : "You excel at establishing methodical frameworks, predictable cadences, and disciplined consistency.",
    },
    {
      leftLabel: "Assertive Leadership",
      rightLabel: "Empathetic Guidance",
      value: assessment.traitRadar.leadershipVsEmpathy,
      description:
        assessment.traitRadar.leadershipVsEmpathy > 50
          ? "Your decision-making is anchored in emotional intelligence, psychological safety, and collective alignment."
          : "Your decision-making is driven by decisive execution, clear accountability, and objective outcomes.",
    },
    {
      leftLabel: "Critical Discernment",
      rightLabel: "Expansive Openness",
      value: assessment.traitRadar.opennessVsGuardedness,
      description:
        assessment.traitRadar.opennessVsGuardedness > 50
          ? "You are exceptionally receptive to novel ideas, unconventional viewpoints, and experimental exploration."
          : "You maintain a healthy cognitive firewall, rigorously testing assumptions and scrutinizing potential risks.",
    },
  ];

  return (
    <div
      className="enterprise-bg"
      style={{
        minHeight: "100vh",
        padding: "48px 24px 80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Top Header Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "var(--primary-soft)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Brain size={16} />
            </div>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
              Cognitive Intelligence Dossier
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={handleShare}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)")}
            >
              {copiedLink ? <CheckCircle size={14} style={{ color: "var(--primary)" }} /> : <Share2 size={14} />}
              <span>{copiedLink ? "Link Copied!" : "Share Dossier"}</span>
            </button>

            <button
              onClick={onRetakeQuiz}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)")}
            >
              <RotateCcw size={14} />
              <span>Retake Assessment</span>
            </button>
          </div>
        </div>

        {/* 1. EXECUTIVE ARCHETYPE HERO CARD */}
        <div
          className="enterprise-card emerald-glow"
          style={{
            padding: "48px 36px",
            background: "linear-gradient(135deg, rgba(21, 29, 44, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)",
            border: "1px solid var(--primary-border)",
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
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              color: "var(--primary)",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            <Sparkles size={14} />
            <span>Assessed Cognitive Archetype</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "14px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {assessment.archetypeTitle}
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 19px)",
              color: "#38bdf8",
              fontStyle: "italic",
              maxWidth: "760px",
              margin: "0 auto 32px auto",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            &ldquo;{assessment.tagline}&rdquo;
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={onStartCompanion}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                borderRadius: "10px",
                background: "var(--primary)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Compass size={18} />
              <span>Step Into AI Cognitive Mentorship</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 2. THE 4-DIMENSIONAL SPECTRUM BREAKDOWN */}
        <div
          className="enterprise-card"
          style={{
            padding: "36px 32px",
            background: "rgba(21, 29, 44, 0.7)",
          }}
        >
          <div style={{ marginBottom: "28px" }}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", fontWeight: 600 }}>
              Psychometric Calibration
            </span>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginTop: "4px" }}>
              4-Pole Cognitive Trait Spectrum
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {radarMetrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  padding: "20px 24px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: metric.value < 50 ? "#38bdf8" : "var(--text-secondary)" }}>
                    {metric.leftLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {metric.value}% / 100%
                  </span>
                  <span style={{ color: metric.value >= 50 ? "var(--primary)" : "var(--text-secondary)" }}>
                    {metric.rightLabel}
                  </span>
                </div>

                {/* Trait Spectrum Bar */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "8px",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.08)",
                    marginBottom: "12px",
                  }}
                >
                  {/* Center Marker */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "-2px",
                      width: "2px",
                      height: "12px",
                      background: "rgba(255, 255, 255, 0.2)",
                    }}
                  />
                  {/* Active Indicator */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${Math.max(2, Math.min(96, metric.value))}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: metric.value > 50 ? "var(--primary)" : "#38bdf8",
                      border: "3px solid #0f172a",
                      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE STRENGTHS & GROWTH AREAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Strengths */}
          <div
            className="enterprise-card"
            style={{
              padding: "32px",
              background: "rgba(16, 185, 129, 0.03)",
              borderColor: "var(--primary-border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <ShieldCheck size={22} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                Core Cognitive Strengths
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {assessment.coreStrengths.map((strength, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary)",
                      fontWeight: 700,
                      marginTop: "1px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Areas & Blind Spots */}
          <div
            className="enterprise-card"
            style={{
              padding: "32px",
              background: "rgba(245, 158, 11, 0.03)",
              borderColor: "rgba(245, 158, 11, 0.25)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <AlertTriangle size={22} style={{ color: "var(--warning)" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                Blind Spots & Growth Vectors
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {assessment.growthAreas.map((growth, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "var(--warning)",
                      fontWeight: 700,
                      marginTop: "1px",
                      flexShrink: 0,
                    }}
                  >
                    !
                  </span>
                  <span>{growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. DEEP PSYCHOLOGICAL SYNTHESIS NARRATIVE */}
        <div
          className="enterprise-card"
          style={{
            padding: "36px 32px",
            background: "rgba(21, 29, 44, 0.7)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Brain size={22} style={{ color: "#a855f7" }} />
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)" }}>
              Deep Psychological Synthesis Narrative
            </h3>
          </div>

          <div
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {assessment.synthesisNarrative}
          </div>
        </div>

        {/* 5. 19-STAGE OPTICAL PERCEPTION AUDIT */}
        <div
          className="enterprise-card"
          style={{
            padding: "32px",
            background: "rgba(21, 29, 44, 0.7)",
          }}
        >
          <button
            onClick={() => setShowIllusionBreakdown(!showIllusionBreakdown)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Eye size={22} style={{ color: "var(--primary)" }} />
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                  Perceptual Audit: 19-Stage Optical Choices & Subconscious Meanings
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>
                  {showIllusionBreakdown ? "Click to collapse full breakdown" : "Click to inspect each optical stimulus and psychological meaning"}
                </p>
              </div>
            </div>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
              }}
            >
              {showIllusionBreakdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {showIllusionBreakdown && (
            <div
              style={{
                marginTop: "28px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border)",
              }}
            >
              {allStages.map((stage) => {
                const userChoiceId = userSelections[stage.id];
                const selectedOpt = stage.options.find((o) => o.id === userChoiceId) || stage.options[0];

                return (
                  <div
                    key={stage.id}
                    style={{
                      background: "rgba(15, 23, 42, 0.6)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                          flexShrink: 0,
                          background: "#080c14",
                        }}
                      >
                        <Image
                          src={stage.imageSrc}
                          alt={stage.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div>
                        <span style={{ fontSize: "11px", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Stage {stage.id}
                        </span>
                        <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
                          {stage.title}
                        </h4>
                      </div>
                    </div>

                    <div style={{ fontSize: "12px", padding: "8px 12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px" }}>
                      <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>
                        Your Choice: <strong style={{ color: "var(--primary)" }}>{selectedOpt.text}</strong>
                      </div>
                      <div style={{ color: "var(--text-secondary)", lineHeight: 1.4 }}>
                        {selectedOpt.interpretation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 6. BOTTOM ACTION LAUNCHPAD */}
        <div
          className="enterprise-card"
          style={{
            padding: "32px",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)",
            border: "1px solid var(--primary-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
              Converse With Your Tailored AI Cognitive Mentor
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
              Explore career alignment, leadership tactics, and blind spot mitigation.
            </p>
          </div>

          <button
            onClick={onStartCompanion}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "8px",
              background: "var(--primary)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primary-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--primary)")}
          >
            <Compass size={16} />
            <span>Launch Cognitive Mentor</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
