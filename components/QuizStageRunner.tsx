"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IllusionStage } from "@/lib/illusionsData";
import { ArrowRight, AlertCircle, Check } from "lucide-react";

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

  const handleNextClick = () => {
    if (!selectedOptionId) {
      setHasValidationError(true);
      return;
    }
    const chosen = selectedOptionId;
    setSelectedOptionId(null);
    setHasValidationError(false);
    onNextStage(chosen);
  };

  const progressPercent = Math.round(((currentStageIndex + 1) / totalStages) * 100);

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
        className={`glass-panel ${hasValidationError ? "animate-shake" : ""}`}
        style={{
          maxWidth: "760px",
          width: "100%",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
        }}
      >
        {/* Top Progress Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
              fontSize: "13px",
              color: "var(--mute)",
            }}
          >
            <span>
              Stage <strong style={{ color: "var(--text)" }}>{currentStageIndex + 1}</strong> of {totalStages}
            </span>
            <span style={{ color: "var(--primary-foreground)", fontWeight: 400 }}>
              {progressPercent}% Complete
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "6px",
              background: "rgba(255, 255, 255, 0.06)",
              borderRadius: "9999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                background: "linear-gradient(90deg, #173326 0%, #67F29A 100%)",
                borderRadius: "9999px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Stage Header */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 500,
              color: "var(--text)",
              marginBottom: "8px",
            }}
          >
            {stage.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--primary-foreground)",
              fontWeight: 300,
            }}
          >
            {stage.question}
          </p>
        </div>

        {/* Illusion Visual Display Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(260px, 45vh, 420px)",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#0a0d0b",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={stage.imageSrc}
            alt={stage.title}
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            priority
            style={{
              objectFit: "contain",
              transition: "transform 0.4s ease",
            }}
          />
        </div>

        {/* Selectable Option Cards (Zero interpretation revealed) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: stage.options.length > 2 ? "repeat(auto-fit, minmax(200px, 1fr))" : "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {stage.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: isSelected ? "var(--primary)" : "rgba(255, 255, 255, 0.03)",
                  border: isSelected ? "1.5px solid var(--primary-foreground)" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: isSelected ? "var(--primary-foreground)" : "var(--text)",
                  fontSize: "15px",
                  fontWeight: isSelected ? 400 : 300,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  transform: isSelected ? "scale(1.01)" : "scale(1)",
                  boxShadow: isSelected ? "0 0 16px rgba(103, 242, 154, 0.2)" : "none",
                }}
              >
                <span>{option.text}</span>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: isSelected ? "none" : "1.5px solid var(--mute)",
                    background: isSelected ? "var(--primary-foreground)" : "transparent",
                    color: "#050606",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  {isSelected && <Check size={14} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Validation Notice */}
        {hasValidationError && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(201, 135, 147, 0.1)",
              border: "1px solid var(--error)",
              color: "var(--error)",
              fontSize: "13px",
            }}
          >
            <AlertCircle size={16} />
            <span>Please select your instantaneous gut reaction to proceed.</span>
          </div>
        )}

        {/* Next Stage Action Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={handleNextClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "9999px",
              background: selectedOptionId ? "var(--primary-foreground)" : "rgba(255, 255, 255, 0.08)",
              color: selectedOptionId ? "#050606" : "var(--mute)",
              fontSize: "15px",
              fontWeight: 500,
              cursor: selectedOptionId ? "pointer" : "not-allowed",
              border: "none",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <span>{currentStageIndex === totalStages - 1 ? "Complete & Synthesize" : "Next Stage"}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
