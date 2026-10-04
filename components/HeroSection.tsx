"use client";

import React from "react";
import { Sparkles, Eye, Brain, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103, 242, 154, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(23, 51, 38, 0.4) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="glass-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "48px 36px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Brand Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "9999px",
            background: "rgba(103, 242, 154, 0.08)",
            border: "1px solid var(--border)",
            color: "var(--primary-foreground)",
            fontSize: "13px",
            fontWeight: 400,
            marginBottom: "24px",
          }}
        >
          <Sparkles size={14} />
          <span>Subconscious Optical Perception Engine</span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 54px)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "var(--text)",
            marginBottom: "18px",
            letterSpacing: "-0.02em",
          }}
        >
          nubeOfThaughts
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "var(--primary-foreground)",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          Unlocking the Secrets of Your Mind Through 19 Optical Illusions
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "var(--body)",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 36px auto",
          }}
        >
          Standard personality surveys force you to answer leading questions. Here, your subconscious mind speaks first. You will encounter 19 dual-perspective optical puzzles—simply click your instantaneous gut reaction without bias, and let Google Gemini synthesize your unique psychological archetype.
        </p>

        {/* Value Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "40px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-foreground)", marginBottom: "8px" }}>
              <Eye size={18} />
              <strong style={{ fontSize: "14px", fontWeight: 500 }}>Zero Priming Bias</strong>
            </div>
            <p style={{ fontSize: "12px", color: "var(--mute)", lineHeight: 1.4 }}>
              No descriptions or trait hints are shown during the quiz. Pure visual perception.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-foreground)", marginBottom: "8px" }}>
              <Brain size={18} />
              <strong style={{ fontSize: "14px", fontWeight: 500 }}>Gemini Synthesis</strong>
            </div>
            <p style={{ fontSize: "12px", color: "var(--mute)", lineHeight: 1.4 }}>
              19 perceptual data points synthesized into deep narrative archetypes and radar metrics.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary-foreground)", marginBottom: "8px" }}>
              <ShieldCheck size={18} />
              <strong style={{ fontSize: "14px", fontWeight: 500 }}>MVP 2 Companion</strong>
            </div>
            <p style={{ fontSize: "12px", color: "var(--mute)", lineHeight: 1.4 }}>
              Seamlessly converse with an AI companion tailored directly to your assessed traits.
            </p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartQuiz}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "16px 36px",
            borderRadius: "9999px",
            background: "var(--primary-foreground)",
            color: "#050606",
            fontSize: "16px",
            fontWeight: 500,
            cursor: "pointer",
            border: "none",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(103, 242, 154, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span>Begin Visual Assessment</span>
          <ArrowRight size={18} />
        </button>

        <div style={{ marginTop: "16px", fontSize: "12px", color: "var(--mute)" }}>
          Estimated time: 2-3 minutes • 19 visual stages
        </div>
      </div>
    </div>
  );
}
