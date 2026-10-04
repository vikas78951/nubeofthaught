"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Brain, Eye, Cpu } from "lucide-react";

export function SynthesisLoader() {
  const [pulseIndex, setPulseIndex] = useState(0);

  const statuses = [
    { text: "Decoding 19 subconscious perceptual choices...", icon: Eye },
    { text: "Cross-referencing psychological perception matrix...", icon: Cpu },
    { text: "Synthesizing cognitive archetypes via Google Gemini...", icon: Brain },
    { text: "Assembling personality radar and companion directive...", icon: Sparkles },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % statuses.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [statuses.length]);

  const ActiveIcon = statuses[pulseIndex].icon;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: "540px",
          width: "100%",
          padding: "48px 32px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Pulsing Orb Center */}
        <div
          style={{
            position: "relative",
            width: "90px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="animate-pulse-glow"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(103, 242, 154, 0.2)",
              border: "1px solid var(--primary-foreground)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActiveIcon size={28} />
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "var(--text)",
              marginBottom: "8px",
            }}
          >
            Unlocking Your Mind
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "var(--primary-foreground)",
              minHeight: "24px",
              transition: "opacity 0.3s ease",
            }}
          >
            {statuses[pulseIndex].text}
          </p>
        </div>

        <p style={{ fontSize: "12px", color: "var(--mute)", lineHeight: 1.5 }}>
          Our neural pipeline is correlating your instant visual impressions with behavioral psychology models.
        </p>
      </div>
    </div>
  );
}
