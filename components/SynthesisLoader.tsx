"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Brain, Eye, Cpu, Activity } from "lucide-react";

export function SynthesisLoader() {
  const [pulseIndex, setPulseIndex] = useState(0);

  const statuses = [
    { text: "Decoding 19 raw visual cortex perceptual signals...", icon: Eye, detail: "Ventral & Dorsal stream correlation" },
    { text: "Cross-referencing psychological perception matrix...", icon: Cpu, detail: "Gestalt multi-factor calibration" },
    { text: "Synthesizing cognitive archetypes via Google Gemini...", icon: Brain, detail: "Deep neural psychometric inference" },
    { text: "Calibrating 4-pole trait spectrum & mentor persona...", icon: Sparkles, detail: "Formatting executive intelligence dossier" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % statuses.length);
    }, 1600);
    return () => clearInterval(timer);
  }, [statuses.length]);

  const currentStatus = statuses[pulseIndex];
  const ActiveIcon = currentStatus.icon;

  return (
    <div
      className="enterprise-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 20px",
      }}
    >
      <div
        className="enterprise-card subtle-shadow"
        style={{
          maxWidth: "580px",
          width: "100%",
          padding: "48px 36px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          background: "rgba(21, 29, 44, 0.85)",
        }}
      >
        {/* Animated Central Node */}
        <div
          style={{
            position: "relative",
            width: "84px",
            height: "84px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="animate-pulse-subtle"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #10b981 0%, #6366f1 100%)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(16, 185, 129, 0.25)",
            }}
          >
            <ActiveIcon size={26} />
          </div>
        </div>

        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border)",
              fontSize: "12px",
              color: "var(--text-muted)",
              marginBottom: "12px",
            }}
          >
            <Activity size={13} style={{ color: "var(--primary)" }} />
            <span>Neural Synthesis Engine</span>
          </div>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            Synthesizing Your Cognitive Blueprint
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              minHeight: "24px",
              fontWeight: 500,
              transition: "opacity 0.2s ease",
            }}
          >
            {currentStatus.text}
          </p>

          <span
            style={{
              display: "block",
              fontSize: "12px",
              color: "var(--text-dim)",
              marginTop: "4px",
              fontFamily: "var(--font-mono)",
            }}
          >
            [{currentStatus.detail}]
          </span>
        </div>

        {/* Step Progress Pills */}
        <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "center" }}>
          {statuses.map((_, i) => (
            <div
              key={i}
              style={{
                height: "4px",
                flex: 1,
                maxWidth: "60px",
                borderRadius: "9999px",
                background: i <= pulseIndex ? "var(--primary)" : "rgba(255, 255, 255, 0.08)",
                transition: "background 0.3s ease",
              }}
            />
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "var(--text-dim)", lineHeight: 1.5 }}>
          Subconscious visual perceptions are being mapped into a multi-factor psychological archetype.
        </p>
      </div>
    </div>
  );
}
