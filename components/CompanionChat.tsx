"use client";

import React, { useState, useRef, useEffect } from "react";
import { PersonalityAssessment } from "@/lib/gemini";
import {
  Send,
  User,
  ArrowLeft,
  Compass,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Brain,
  Lightbulb,
} from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

interface CompanionChatProps {
  assessment: PersonalityAssessment;
  onBackToDashboard: () => void;
}

export function CompanionChat({
  assessment,
  onBackToDashboard,
}: CompanionChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: `Welcome to your personal cognitive workspace. Based on your optical choices, you embody **${assessment.archetypeTitle}** — *"${assessment.tagline}"*.

I am your dedicated AI Cognitive Mentor. I have internalized your strengths, such as your macroscopic pattern recognition and emotional attunement, as well as your key growth areas.

How would you like to apply your perceptual strengths today? You can choose one of the starter topics below or ask any question about your leadership, career, or decision-making style.`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    "How does my archetype approach high-stakes decisions?",
    "What blind spots should I watch out for in team collaborations?",
    "How can I balance my macroscopic vision with detailed execution?",
    "How can I best communicate with opposing cognitive archetypes?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/companion/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          assessment,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to contact companion.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "I encountered a momentary connection hiccup. As your cognitive mentor, I encourage you to reflect on your core strengths and rephrase your inquiry.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "model",
        content: `Session refreshed. I am calibrated to **${assessment.archetypeTitle}**. What cognitive challenge or inquiry would you like to explore?`,
      },
    ]);
  };

  return (
    <div
      className="enterprise-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "24px 20px",
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto 20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <button
          onClick={onBackToDashboard}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
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
          <ArrowLeft size={15} />
          <span>Return to Full Dossier</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              fontSize: "12px",
              color: "var(--primary)",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} />
            <span>AI Mentor Calibrated</span>
          </div>

          <button
            onClick={handleResetChat}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 14px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            <RotateCcw size={13} />
            <span>Reset Dialogue</span>
          </button>
        </div>
      </div>

      {/* Main Workspace (Split Grid) */}
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {/* Left Sidebar: Cognitive Context Panel */}
        <div
          className="enterprise-card"
          style={{
            padding: "28px 24px",
            background: "rgba(21, 29, 44, 0.7)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            height: "fit-content",
          }}
        >
          {/* Profile Overview */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary)", marginBottom: "8px" }}>
              <Compass size={18} />
              <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                Active Archetype Profile
              </span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
              {assessment.archetypeTitle}
            </h3>
            <p style={{ fontSize: "13px", color: "#38bdf8", fontStyle: "italic", marginTop: "6px" }}>
              &ldquo;{assessment.tagline}&rdquo;
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />

          {/* Core Strengths */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontSize: "13px", fontWeight: 600, marginBottom: "12px" }}>
              <ShieldCheck size={16} style={{ color: "var(--primary)" }} />
              <span>Key Cognitive Strengths</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {assessment.coreStrengths.slice(0, 3).map((st, i) => (
                <li key={i} style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                  • {st}
                </li>
              ))}
            </ul>
          </div>

          {/* Blind Spots */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontSize: "13px", fontWeight: 600, marginBottom: "12px" }}>
              <AlertTriangle size={16} style={{ color: "var(--warning)" }} />
              <span>Growth Focus</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {assessment.growthAreas.slice(0, 2).map((gr, i) => (
                <li key={i} style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                  ! {gr}
                </li>
              ))}
            </ul>
          </div>

          {/* Starter Topics */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "12px", fontWeight: 600, marginBottom: "10px" }}>
              <Lightbulb size={14} />
              <span>Recommended Topics</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {starterPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    fontSize: "12px",
                    textAlign: "left",
                    cursor: "pointer",
                    lineHeight: 1.4,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Chat Pane */}
        <div
          className="enterprise-card"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            display: "flex",
            flexDirection: "column",
            minHeight: "650px",
            height: "75vh",
            overflow: "hidden",
          }}
        >
          {/* Chat Messages Stream */}
          <div
            style={{
              flex: 1,
              padding: "24px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {messages.map((msg, idx) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    alignSelf: isUser ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                  }}
                >
                  {!isUser && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #10b981 0%, #6366f1 100%)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Brain size={16} />
                    </div>
                  )}

                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: "14px",
                      background: isUser ? "var(--primary)" : "rgba(21, 29, 44, 0.9)",
                      border: isUser ? "none" : "1px solid var(--border)",
                      color: isUser ? "#ffffff" : "var(--text-secondary)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {msg.content}
                  </div>

                  {isUser && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#1e293b",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <User size={16} />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "13px", paddingLeft: "44px" }}>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseSubtle 1s infinite" }} />
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseSubtle 1s infinite 0.2s" }} />
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseSubtle 1s infinite 0.4s" }} />
                </div>
                <span>Reflecting on your cognitive profile...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div
            style={{
              padding: "16px 20px",
              background: "rgba(11, 17, 28, 0.9)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about leadership, blind spots, career alignment, or problem solving..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: inputValue.trim() && !isLoading ? "var(--primary)" : "rgba(255, 255, 255, 0.06)",
                  color: inputValue.trim() && !isLoading ? "#ffffff" : "var(--text-dim)",
                  border: "none",
                  cursor: inputValue.trim() && !isLoading ? "pointer" : "not-allowed",
                  transition: "all 0.2s ease",
                }}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
