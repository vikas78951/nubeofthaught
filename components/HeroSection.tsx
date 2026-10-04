"use client";

import React from "react";
import {
  Sparkles,
  Eye,
  Brain,
  ArrowRight,
  Layers,
  Compass,
  Users,
  Target,
  ChevronRight,
  CheckCircle2,
  LineChart,
  Lock,
} from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <div className="enterprise-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. TOP ENTERPRISE HEADER / NAVIGATION */}
      <header
        className="glass-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          padding: "14px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Logo & Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #10b981 0%, #6366f1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
              }}
            >
              <Brain size={18} />
            </div>
            <div>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                nube<span style={{ color: "var(--primary)" }}>Of</span>Thaughts
              </span>
              <span
                className="hide-on-mobile"
                style={{
                  display: "block",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                }}
              >
                Subconscious Cognitive Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav
            className="desktop-nav-links"
            style={{
              alignItems: "center",
              gap: "28px",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            <a href="#methodology" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              The Science
            </a>
            <a href="#dimensions" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              Cognitive Matrix
            </a>
            <a href="#enterprise" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              Teams & Enterprise
            </a>
            <a href="#pipeline" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              How It Works
            </a>
          </nav>

          {/* CTA & System Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div
              className="desktop-status-pill"
              style={{
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                fontSize: "12px",
                color: "#10b981",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10b981",
                  display: "inline-block",
                }}
              />
              <span>Gemini 2.5</span>
            </div>

            <button
              type="button"
              onClick={onStartQuiz}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 18px",
                borderRadius: "8px",
                background: "var(--primary)",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
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
              <span>Take Assessment</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* 2. EXPANSIVE HERO SECTION */}
      <section
        style={{
          padding: "48px 16px 64px 16px",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Subtle Category Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            fontSize: "12px",
            fontWeight: 500,
            marginBottom: "24px",
            maxWidth: "90%",
          }}
        >
          <Sparkles size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
          <span>Subconscious Psychometric Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(30px, 5.5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            maxWidth: "960px",
            margin: "0 auto 20px auto",
          }}
        >
          Discover Your True Cognitive Profile Through{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #38bdf8 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pure Visual Perception
          </span>
        </h1>

        {/* Clear Subtitle with Context */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: "780px",
            margin: "0 auto 36px auto",
            fontWeight: 400,
          }}
        >
          Standard personality assessments force you to answer 60+ leading questions tainted by conscious self-report bias. <strong>nubeOfThaughts</strong> decodes your instinctual neural reaction across <strong>19 dual-perspective optical illusions</strong>, synthesized by Google Gemini into a bespoke cognitive blueprint and interactive AI coach.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "48px",
          }}
        >
          <button
            type="button"
            onClick={onStartQuiz}
            className="emerald-glow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 32px",
              borderRadius: "10px",
              background: "var(--primary)",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              transition: "all 0.2s ease",
              width: "auto",
              minWidth: "220px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Begin 19-Stage Assessment</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#methodology"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "16px 24px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              width: "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <span>Explore Scientific Methodology</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Key Metric Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <div
            className="enterprise-card"
            style={{
              padding: "20px",
              textAlign: "left",
              background: "rgba(21, 29, 44, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary)", marginBottom: "6px" }}>
              <Eye size={18} />
              <strong style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>0% Priming Bias</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Strict blind visual testing: no psychological trait hints or descriptions are shown during the quiz.
            </p>
          </div>

          <div
            className="enterprise-card"
            style={{
              padding: "20px",
              textAlign: "left",
              background: "rgba(21, 29, 44, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#38bdf8", marginBottom: "6px" }}>
              <Layers size={18} />
              <strong style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>19 Optical Stages</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Scientifically curated dual-perspective figures testing spatial, contextual, and detail-level cognition.
            </p>
          </div>

          <div
            className="enterprise-card"
            style={{
              padding: "20px",
              textAlign: "left",
              background: "rgba(21, 29, 44, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#a855f7", marginBottom: "6px" }}>
              <Brain size={18} />
              <strong style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>Gemini Psychometrics</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Multi-signal pattern correlation synthesizing a nuanced, bespoke cognitive archetype & trait vector.
            </p>
          </div>

          <div
            className="enterprise-card"
            style={{
              padding: "20px",
              textAlign: "left",
              background: "rgba(21, 29, 44, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#f59e0b", marginBottom: "6px" }}>
              <Compass size={18} />
              <strong style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>AI Cognitive Mentor</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>
              A dedicated conversational companion primed with your exact archetype strengths and blind spots.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEEP CONTEXT & SCIENTIFIC METHODOLOGY SECTION */}
      <section
        id="methodology"
        style={{
          padding: "64px 16px",
          background: "var(--bg-subtle)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--primary)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              The Cognitive Science
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "14px",
              }}
            >
              Why Subconscious Perception Trumps Questionnaire Surveys
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                maxWidth: "720px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Traditional personality tests suffer from self-reporting bias. When prompted with questions like <em>&ldquo;Are you good under stress?&rdquo;</em>, the human ego answers how it wishes to be perceived.
            </p>
          </div>

          {/* Side-by-Side Comparison Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {/* Traditional Surveys Card */}
            <div
              className="enterprise-card"
              style={{
                padding: "28px 24px",
                background: "rgba(26, 17, 24, 0.4)",
                borderColor: "rgba(244, 63, 94, 0.2)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(244, 63, 94, 0.1)",
                  color: "#f43f5e",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Traditional Personality Inventories (MBTI, Big 5 Surveys)
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <span style={{ color: "#f43f5e", fontWeight: 700, marginTop: "1px" }}>✕</span>
                  <span><strong>Social Desirability Distortion:</strong> Test-takers consciously choose answers that align with workplace or personal ideals.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <span style={{ color: "#f43f5e", fontWeight: 700, marginTop: "1px" }}>✕</span>
                  <span><strong>Survey Fatigue:</strong> 50 to 100 repetitive Likert-scale questions degrade focus and answer fidelity.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <span style={{ color: "#f43f5e", fontWeight: 700, marginTop: "1px" }}>✕</span>
                  <span><strong>Static Binning:</strong> Forces complex humans into rigid, 4-letter static buckets without contextual nuance.</span>
                </li>
              </ul>
            </div>

            {/* nubeOfThaughts Card */}
            <div
              className="enterprise-card"
              style={{
                padding: "28px 24px",
                background: "rgba(16, 185, 129, 0.04)",
                borderColor: "var(--primary-border)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "var(--primary)",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                The nubeOfThaughts Visual Engine
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Sub-Second Neural Perception:</strong> The visual cortex (Ventral/Dorsal streams) selects dominant figures before the prefrontal ego rationalizes.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Zero Priming Bias:</strong> Pure imagery without leading text ensures untainted cognitive raw signals.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                  <span><strong>Dynamic Gemini Neural Synthesis:</strong> Formulates a 4-dimensional trait radar, actionable strengths, and tailored AI mentoring.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4-DIMENSIONAL COGNITIVE MATRIX */}
      <section
        id="dimensions"
        style={{
          padding: "64px 16px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--indigo-accent)",
              fontWeight: 600,
              display: "block",
              marginBottom: "8px",
            }}
          >
            Psychometric Framework
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "14px",
            }}
          >
            The 4 Core Cognitive Spectrum Dimensions
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Every choice across the 19 optical stages maps to a calibrated spectrum rather than an arbitrary binary.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Dimension 1 */}
          <div className="enterprise-card" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dimension 01</span>
              <LineChart size={18} style={{ color: "var(--primary)" }} />
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              Analytical vs. Intuitive
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Measures whether your perception first parses discrete constituent components (micro-analysis) or synthesizes global Gestalt patterns (macroscopic intuition).
            </p>
          </div>

          {/* Dimension 2 */}
          <div className="enterprise-card" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dimension 02</span>
              <Target size={18} style={{ color: "#38bdf8" }} />
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              Structured Order vs. Fluid Agility
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Examines tolerance for ambiguity, preference for methodical frameworks versus spontaneous adaptability and improvisation in shifting contexts.
            </p>
          </div>

          {/* Dimension 3 */}
          <div className="enterprise-card" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dimension 03</span>
              <Users size={18} style={{ color: "#a855f7" }} />
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              Assertive Leadership vs. Empathy
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Reveals whether subconscious attention prioritizes decisive outcome ownership and clarity or emotional resonance and collective harmony.
            </p>
          </div>

          {/* Dimension 4 */}
          <div className="enterprise-card" style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dimension 04</span>
              <Lock size={18} style={{ color: "#f59e0b" }} />
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              Critical Discernment vs. Openness
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              Assesses vigilance and risk scrutiny versus broad curiosity and rapid receptivity to novel inputs and perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / THE 3-STAGE ENTERPRISE PIPELINE */}
      <section
        id="pipeline"
        style={{
          padding: "64px 16px",
          background: "var(--bg-subtle)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--primary)",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Workflow Architecture
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "14px",
              }}
            >
              The 3-Step Cognitive Intelligence Journey
            </h2>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "640px", margin: "0 auto" }}>
              From rapid visual choices to an executive dossier and real-time AI mentoring.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Step 1 */}
            <div className="enterprise-card" style={{ padding: "28px 24px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(16, 185, 129, 0.12)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                Blind Optical Assessment
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Experience 19 dual-perspective optical puzzles in rapid succession. Select what your visual cortex immediately detects without seeing psychological hints or bias.
              </p>
            </div>

            {/* Step 2 */}
            <div className="enterprise-card" style={{ padding: "28px 24px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(99, 102, 241, 0.12)",
                  color: "#818cf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                Neural Psychometric Synthesis
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Google Gemini cross-correlates your 19 perceptual choices against psychometric benchmarks, assembling your multidimensional Archetype, radar vectors, and blind spots.
              </p>
            </div>

            {/* Step 3 */}
            <div className="enterprise-card" style={{ padding: "28px 24px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(245, 158, 11, 0.12)",
                  color: "#f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                Conversational AI Mentorship
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Engage in an interactive coaching dialogue with an AI companion primed on your exact psychological blueprint, strengths, and blind spots for actionable personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE & TEAMS SECTION */}
      <section
        id="enterprise"
        style={{
          padding: "64px 16px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          className="enterprise-card"
          style={{
            padding: "clamp(24px, 4vw, 48px) clamp(20px, 4vw, 36px)",
            background: "linear-gradient(135deg, rgba(21, 29, 44, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%)",
            border: "1px solid var(--primary-border)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.1)",
                color: "var(--primary)",
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              Enterprise & Executive Teams
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "14px",
                lineHeight: 1.25,
              }}
            >
              Cognitive Diversity for High-Velocity Teams
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
              Organizations encounter critical blind spots when leadership teams share the exact same subconscious cognitive preferences. <strong>nubeOfThaughts</strong> allows engineering, product, and executive leadership teams to map their collective cognitive styles and prevent groupthink.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span>Spot cross-functional communication friction before it impacts execution.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span>Pair macro-visionaries with detail-rigorous execution specialists.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span>100% anonymized psychometric data benchmarking.</span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(7, 9, 14, 0.7)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "24px 20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
              Ready to Discover Your Archetype?
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Takes under 3 minutes. Zero preparation required.
            </p>
            <button
              type="button"
              onClick={onStartQuiz}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                background: "var(--primary)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primary-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--primary)")}
            >
              Start 19-Stage Assessment Now
            </button>
            <div style={{ marginTop: "10px", fontSize: "12px", color: "var(--text-dim)" }}>
              No credit card or registration required for initial evaluation.
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE FOOTER */}
      <footer
        style={{
          marginTop: "auto",
          padding: "36px 16px",
          background: "rgba(7, 9, 14, 0.95)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Brain size={18} style={{ color: "var(--primary)" }} />
            <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)" }}>
              nubeOfThaughts
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              • Subconscious Optical Psychometrics
            </span>
          </div>

          <div style={{ fontSize: "12px", color: "var(--text-dim)" }}>
            Powered by Google Gemini 2.5 • Built for high-readability cognitive analysis
          </div>
        </div>
      </footer>
    </div>
  );
}
