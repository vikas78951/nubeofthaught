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
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

interface AssessmentDashboardProps {
  assessment: PersonalityAssessment;
  allStages: IllusionStage[];
  userSelections: Record<number, string>;
  onStartCompanion: () => void;
  onRetakeQuiz: () => void;
}

// Feature Flag: AI Cognitive Mentor Chat (Currently hidden until release)
const SHOW_COMPANION_CHAT = false;

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
      dimensionNumber: "01",
      dimensionName: "Information Processing & Pattern Synthesis",
      leftPole: {
        name: "Analytical",
        subtitle: "Detail & Logic Focus",
        percentage: 100 - assessment.traitRadar.analyticalVsIntuitive,
        color: "#38bdf8",
      },
      rightPole: {
        name: "Intuitive",
        subtitle: "Gestalt & Macro Vision",
        percentage: assessment.traitRadar.analyticalVsIntuitive,
        color: "#10b981",
      },
      dominantPole:
        assessment.traitRadar.analyticalVsIntuitive >= 50 ? "Intuitive" : "Analytical",
      dominantPercentage:
        assessment.traitRadar.analyticalVsIntuitive >= 50
          ? assessment.traitRadar.analyticalVsIntuitive
          : 100 - assessment.traitRadar.analyticalVsIntuitive,
      dominantColor:
        assessment.traitRadar.analyticalVsIntuitive >= 50 ? "#10b981" : "#38bdf8",
      explanation:
        assessment.traitRadar.analyticalVsIntuitive > 50
          ? "Your visual perception instinctively synthesized global Gestalt patterns and overarching horizons before parsing granular pieces. You naturally perceive the whole ecosystem, spot macro trends, and formulate visionary pathways."
          : "Your visual perception instinctively anchored on discrete constituent details and structural precision before considering the broader image. You excel at logical deconstruction, technical scrutiny, and structural rigor.",
      actionableTip:
        assessment.traitRadar.analyticalVsIntuitive > 50
          ? "Actionable advice: Pair your expansive strategic vision with structured checklist habits or detail-focused collaborators to ensure flawless operational execution."
          : "Actionable advice: Periodically step back to connect granular micro-tasks with the 30,000-foot overarching strategic objective.",
    },
    {
      dimensionNumber: "02",
      dimensionName: "Operational Cadence & Framework Rigor",
      leftPole: {
        name: "Structured Order",
        subtitle: "Methodical & Disciplined",
        percentage: 100 - assessment.traitRadar.orderVsImpulse,
        color: "#6366f1",
      },
      rightPole: {
        name: "Fluid Agility",
        subtitle: "Spontaneous & Adaptable",
        percentage: assessment.traitRadar.orderVsImpulse,
        color: "#a855f7",
      },
      dominantPole:
        assessment.traitRadar.orderVsImpulse >= 50 ? "Fluid Agility" : "Structured Order",
      dominantPercentage:
        assessment.traitRadar.orderVsImpulse >= 50
          ? assessment.traitRadar.orderVsImpulse
          : 100 - assessment.traitRadar.orderVsImpulse,
      dominantColor:
        assessment.traitRadar.orderVsImpulse >= 50 ? "#a855f7" : "#6366f1",
      explanation:
        assessment.traitRadar.orderVsImpulse > 50
          ? "You thrive in fast-evolving, ambiguous environments where improvisation and rapid lateral pivots are required. You view rigid protocols as potential friction and prefer fluid momentum."
          : "You excel at establishing clear procedural guardrails, predictable cadences, and organized discipline. You bring consistency, predictability, and repeatability to complex systems.",
      actionableTip:
        assessment.traitRadar.orderVsImpulse > 50
          ? "Actionable advice: Anchor your creative flexibility with minimal viable guardrails (daily top 3 priorities) to avoid scattered focus."
          : "Actionable advice: Create dedicated buffer space for spontaneous innovation that falls outside standard roadmap playbooks.",
    },
    {
      dimensionNumber: "03",
      dimensionName: "Interpersonal Dynamics & Leadership Stance",
      leftPole: {
        name: "Assertive Direction",
        subtitle: "Outcome-Driven & Decisive",
        percentage: 100 - assessment.traitRadar.leadershipVsEmpathy,
        color: "#f59e0b",
      },
      rightPole: {
        name: "Empathetic Guidance",
        subtitle: "People-Centric & Collaborative",
        percentage: assessment.traitRadar.leadershipVsEmpathy,
        color: "#10b981",
      },
      dominantPole:
        assessment.traitRadar.leadershipVsEmpathy >= 50 ? "Empathetic Guidance" : "Assertive Direction",
      dominantPercentage:
        assessment.traitRadar.leadershipVsEmpathy >= 50
          ? assessment.traitRadar.leadershipVsEmpathy
          : 100 - assessment.traitRadar.leadershipVsEmpathy,
      dominantColor:
        assessment.traitRadar.leadershipVsEmpathy >= 50 ? "#10b981" : "#f59e0b",
      explanation:
        assessment.traitRadar.leadershipVsEmpathy > 50
          ? "Your decision-making instinctively prioritizes human resonance, psychological safety, and collective alignment. You build enduring trust through genuine empathy and active listening."
          : "Your attention focuses sharply on decisive resolution, clear accountability, and objective speed. You cut through interpersonal friction with clarity and firm outcome ownership.",
      actionableTip:
        assessment.traitRadar.leadershipVsEmpathy > 50
          ? "Actionable advice: Ensure empathy does not delay difficult conversations or hard organizational calls; balance compassion with clear deadlines."
          : "Actionable advice: Invest time explaining the underlying rationale behind directives to foster genuine team engagement and collective ownership.",
    },
    {
      dimensionNumber: "04",
      dimensionName: "Cognitive Aperture & Risk Receptivity",
      leftPole: {
        name: "Critical Discernment",
        subtitle: "Vigilant & Risk-Scrutinizing",
        percentage: 100 - assessment.traitRadar.opennessVsGuardedness,
        color: "#f43f5e",
      },
      rightPole: {
        name: "Expansive Openness",
        subtitle: "Curious & Experiment-Driven",
        percentage: assessment.traitRadar.opennessVsGuardedness,
        color: "#38bdf8",
      },
      dominantPole:
        assessment.traitRadar.opennessVsGuardedness >= 50 ? "Expansive Openness" : "Critical Discernment",
      dominantPercentage:
        assessment.traitRadar.opennessVsGuardedness >= 50
          ? assessment.traitRadar.opennessVsGuardedness
          : 100 - assessment.traitRadar.opennessVsGuardedness,
      dominantColor:
        assessment.traitRadar.opennessVsGuardedness >= 50 ? "#38bdf8" : "#f43f5e",
      explanation:
        assessment.traitRadar.opennessVsGuardedness > 50
          ? "You welcome unconventional paradigms, novel ideas, and experimental hypotheses with minimal resistance. You are energized by exploration and intellectual curiosity."
          : "You maintain a healthy cognitive firewall, actively stress-testing assumptions and spotting hidden vulnerabilities before adopting new ideas. You protect systems against costly errors.",
      actionableTip:
        assessment.traitRadar.opennessVsGuardedness > 50
          ? "Actionable advice: Establish validation criteria before chasing novel initiatives to maintain focus on highest-impact opportunities."
          : "Actionable advice: Give early-stage creative ideas a trial period to develop before subjecting them to full risk scrutiny.",
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
          gap: "36px",
        }}
      >
        {/* Top Header Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "var(--primary-soft)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Brain size={18} />
            </div>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>
              Cognitive Intelligence Dossier
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              type="button"
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
              type="button"
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
              fontSize: "clamp(28px, 4.5vw, 46px)",
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
            {SHOW_COMPANION_CHAT ? (
              <button
                type="button"
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
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleShare}
                  className="emerald-glow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    borderRadius: "10px",
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
                  {copiedLink ? <CheckCircle size={16} /> : <Share2 size={16} />}
                  <span>{copiedLink ? "Dossier Link Copied!" : "Share Cognitive Dossier"}</span>
                </button>

                <button
                  type="button"
                  onClick={onRetakeQuiz}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)")}
                >
                  <RotateCcw size={16} />
                  <span>Retake Assessment</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* 2. THE 4-DIMENSIONAL SPECTRUM BREAKDOWN (HIGH READABILITY OVERHAUL) */}
        <div
          className="enterprise-card"
          style={{
            padding: "36px 32px",
            background: "rgba(21, 29, 44, 0.8)",
          }}
        >
          <div style={{ marginBottom: "32px" }}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--primary)", fontWeight: 700 }}>
              Psychometric Calibration
            </span>
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginTop: "4px", letterSpacing: "-0.01em" }}>
              4-Pole Cognitive Trait Spectrum
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "6px" }}>
              Each dimension reveals how your subconscious visual perception balances two essential cognitive superpowers.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {radarMetrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(11, 16, 26, 0.9)",
                  padding: "24px",
                  borderRadius: "14px",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Dimension Title & Dominant Trait Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.08)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {metric.dimensionNumber}
                    </span>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--text-primary)" }}>
                      {metric.dimensionName}
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${metric.dominantColor}55`,
                      color: metric.dominantColor,
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={14} />
                    <span>Dominant Tendency: {metric.dominantPercentage}% {metric.dominantPole}</span>
                  </div>
                </div>

                {/* Split Dual-Pole Visual Meter */}
                <div>
                  {/* Pole Labels & Percentage Readouts */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {/* Left Pole */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontWeight: 700, color: metric.leftPole.color, fontSize: "15px" }}>
                          {metric.leftPole.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            fontWeight: 700,
                            padding: "2px 6px",
                            borderRadius: "4px",
                            background: "rgba(56, 189, 248, 0.12)",
                            color: "#38bdf8",
                          }}
                        >
                          {metric.leftPole.percentage}%
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", color: "var(--text-dim)", display: "block", marginTop: "2px" }}>
                        {metric.leftPole.subtitle}
                      </span>
                    </div>

                    {/* Right Pole */}
                    <div style={{ textAlign: "right" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            fontWeight: 700,
                            padding: "2px 6px",
                            borderRadius: "4px",
                            background: "rgba(16, 185, 129, 0.12)",
                            color: "#10b981",
                          }}
                        >
                          {metric.rightPole.percentage}%
                        </span>
                        <span style={{ fontWeight: 700, color: metric.rightPole.color, fontSize: "15px" }}>
                          {metric.rightPole.name}
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", color: "var(--text-dim)", display: "block", marginTop: "2px" }}>
                        {metric.rightPole.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Dual Segment Fill Bar */}
                  <div
                    style={{
                      width: "100%",
                      height: "12px",
                      borderRadius: "9999px",
                      background: "#080c14",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {/* Left Segment */}
                    <div
                      style={{
                        width: `${metric.leftPole.percentage}%`,
                        height: "100%",
                        background: metric.leftPole.color,
                        transition: "width 0.4s ease",
                      }}
                    />
                    {/* Right Segment */}
                    <div
                      style={{
                        width: `${metric.rightPole.percentage}%`,
                        height: "100%",
                        background: metric.rightPole.color,
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Detailed Analysis & Actionable Insight Box */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "10px",
                    padding: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {metric.explanation}
                  </p>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    <Lightbulb size={14} style={{ color: "var(--warning)", flexShrink: 0, marginTop: "2px" }} />
                    <span>{metric.actionableTip}</span>
                  </div>
                </div>
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
            type="button"
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

        {/* 6. BOTTOM ACTION LAUNCHPAD (Conditionally hidden until companion release) */}
        {SHOW_COMPANION_CHAT && (
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
              type="button"
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
        )}
      </div>
    </div>
  );
}
