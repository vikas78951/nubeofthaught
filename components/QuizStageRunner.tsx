"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IllusionStage } from "@/lib/illusionsData";
import { ArrowRight, Check, AlertCircle, Eye, Zap } from "lucide-react";

interface QuizStageRunnerProps {
  stage: IllusionStage;
  currentStageIndex: number;
  totalStages: number;
  onNextStage: (selectedOptionId: string) => void;
}

export function QuizStageRunner({
  stage,
  currentStageIndex,
  totalStages,
  onNextStage,
}: QuizStageRunnerProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasValidationError, setHasValidationError] = useState(false);

  const handleSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
    setHasValidationError(false);
  };

  const handleNextClick = useCallback(() => {
    if (!selectedOptionId) {
      setHasValidationError(true);
      return;
    }
    const chosen = selectedOptionId;
    setSelectedOptionId(null);
    setHasValidationError(false);
    onNextStage(chosen);
  }, [selectedOptionId, onNextStage]);

  // Keyboard shortcut support (1, 2, 3, 4, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= stage.options.length) {
        setSelectedOptionId(stage.options[num - 1].id);
        setHasValidationError(false);
      } else if (e.key === "Enter") {
        if (selectedOptionId) {
          handleNextClick();
        } else {
          setHasValidationError(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stage.options, selectedOptionId, handleNextClick]);

  const progressPercent = Math.round(((currentStageIndex + 1) / totalStages) * 100);

  return (
    <div
      className="enterprise-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px 20px 40px 20px",
      }}
    >
      {/* Top Header / Progress Strip */}
      <div
        style={{
          maxWidth: "1160px",
          width: "100%",
          margin: "0 auto 24px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
            fontSize: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "3px 10px",
                borderRadius: "6px",
                background: "rgba(16, 185, 129, 0.12)",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "12px",
              }}
            >
              Stage {currentStageIndex + 1} of {totalStages}
            </span>
            <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              {stage.title}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "13px" }}>
            <span>{progressPercent}% Complete</span>
          </div>
        </div>

        {/* High Precision Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "6px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "linear-gradient(90deg, #10b981 0%, #6366f1 100%)",
              transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>

      {/* Main Studio View (Split Screen) */}
      <div
        style={{
          maxWidth: "1160px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {/* Left Pane: Optical Illusion Stage Image */}
        <div
          className="enterprise-card subtle-shadow"
          style={{
            padding: "16px",
            background: "rgba(15, 23, 42, 0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "440px",
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#0a0f18",
            }}
          >
            <Image
              src={stage.imageSrc}
              alt={stage.title}
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          <div
            style={{
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--text-dim)",
            }}
          >
            <Eye size={13} />
            <span>Dual-Perspective Perceptual Stimulus</span>
          </div>
        </div>

        {/* Right Pane: Context Prompt & Selections */}
        <div
          className={`enterprise-card ${hasValidationError ? "animate-shake" : ""}`}
          style={{
            padding: "36px 32px",
            background: "rgba(21, 29, 44, 0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              <Zap size={13} style={{ color: "var(--warning)" }} />
              <span>Gut Reaction Benchmark</span>
            </div>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "10px",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              {stage.question}
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                marginBottom: "24px",
              }}
            >
              Select the option that your visual cortex registered first. Do not rationalize or search for alternate figures.
            </p>

            {/* Selectable Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {stage.options.map((option, idx) => {
                const isSelected = selectedOptionId === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderRadius: "10px",
                      background: isSelected ? "rgba(16, 185, 129, 0.12)" : "rgba(255, 255, 255, 0.03)",
                      border: isSelected ? "1px solid var(--primary)" : "1px solid var(--border)",
                      color: isSelected ? "#ffffff" : "var(--text-secondary)",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: isSelected ? 600 : 400,
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                        e.currentTarget.style.borderColor = "var(--border-hover)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "6px",
                          background: isSelected ? "var(--primary)" : "rgba(255, 255, 255, 0.08)",
                          color: isSelected ? "#ffffff" : "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span>{option.text}</span>
                    </div>

                    {isSelected && (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "var(--primary)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Validation Notice & Action Bar */}
          <div>
            {hasValidationError && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--error)",
                  fontSize: "13px",
                  marginBottom: "12px",
                }}
              >
                <AlertCircle size={15} />
                <span>Please select an option before continuing.</span>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                Tip: Use keys <kbd style={{ padding: "2px 6px", background: "#1e293b", borderRadius: "4px", color: "#cbd5e1" }}>1</kbd> <kbd style={{ padding: "2px 6px", background: "#1e293b", borderRadius: "4px", color: "#cbd5e1" }}>2</kbd> <kbd style={{ padding: "2px 6px", background: "#1e293b", borderRadius: "4px", color: "#cbd5e1" }}>3</kbd> and <kbd style={{ padding: "2px 6px", background: "#1e293b", borderRadius: "4px", color: "#cbd5e1" }}>Enter</kbd>
              </span>

              <button
                onClick={handleNextClick}
                disabled={!selectedOptionId}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: selectedOptionId ? "var(--primary)" : "rgba(255, 255, 255, 0.06)",
                  color: selectedOptionId ? "#ffffff" : "var(--text-dim)",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: selectedOptionId ? "pointer" : "not-allowed",
                  border: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (selectedOptionId) {
                    e.currentTarget.style.background = "var(--primary-hover)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedOptionId) {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <span>{currentStageIndex === totalStages - 1 ? "Synthesize Results" : "Next Stage"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
          Strict Blind Testing Protocol • Perception choices are sealed until synthesis
        </span>
      </div>
    </div>
  );
}
