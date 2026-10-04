"use client";

import React, { useState, useRef, useEffect } from "react";
import { PersonalityAssessment } from "@/lib/gemini";
import { Send, Bot, User, ArrowLeft, Sparkles, Compass } from "lucide-react";

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
      content: `Welcome to your personal introspective space. Based on your optical choices, you embody **${assessment.archetypeTitle}** — *"${assessment.tagline}"*.

I am here as your cognitive companion. I have internalized your strengths, such as your knack for macroscopic synthesis and emotional attunement, as well as your blind spots.

What challenge, thought, or goal is on your mind today?`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    "How does my archetype approach major life decisions?",
    "What blind spots should I watch out for in my career?",
    "How can I balance my gut intuition with detailed execution?",
    "Tell me more about what my optical choices say about my leadership style.",
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
            "I encountered a momentary cloud while processing. Please feel free to rephrase or share your thought again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px",
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: "880px",
          width: "100%",
          height: "calc(100vh - 48px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(18, 21, 19, 0.9)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={onBackToDashboard}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--mute)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              title="Back to Dashboard"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: 500, color: "var(--text)", fontSize: "16px" }}>
                  Companion • {assessment.archetypeTitle}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--primary-foreground)",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", color: "var(--mute)" }}>
                Conditioned on your 19 subconscious optical responses
              </p>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "rgba(103, 242, 154, 0.08)",
              color: "var(--primary-foreground)",
              fontSize: "12px",
            }}
          >
            <Sparkles size={13} />
            <span>MVP 2 Active</span>
          </div>
        </div>

        {/* Message Stream */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {messages.map((msg, index) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignSelf: isUser ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                }}
              >
                {!isUser && (
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={18} />
                  </div>
                )}

                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: "16px",
                    background: isUser ? "var(--primary)" : "rgba(255, 255, 255, 0.04)",
                    border: isUser ? "1px solid var(--border)" : "1px solid rgba(255, 255, 255, 0.06)",
                    color: isUser ? "var(--text)" : "var(--body)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.content}
                </div>

                {isUser && (
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "var(--text)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <User size={18} />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignSelf: "flex-start",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={18} />
              </div>
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.04)",
                  color: "var(--primary-foreground)",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span className="animate-pulse-glow">●</span>
                <span className="animate-pulse-glow" style={{ animationDelay: "0.2s" }}>●</span>
                <span className="animate-pulse-glow" style={{ animationDelay: "0.4s" }}>●</span>
                <span style={{ marginLeft: "6px", color: "var(--mute)" }}>Reflecting...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Starter Prompt Pills (Only show if <= 2 messages) */}
        {messages.length <= 2 && (
          <div
            style={{
              padding: "0 20px 12px 20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {starterPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--body)",
                  fontSize: "12px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary-foreground)";
                  e.currentTarget.style.color = "var(--primary-foreground)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "var(--body)";
                }}
              >
                <Compass size={12} />
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div
          style={{
            padding: "16px 20px",
            borderTop: "1px solid var(--border)",
            background: "rgba(18, 21, 19, 0.9)",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "9999px",
              padding: "6px 8px 6px 18px",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask your companion about your traits, career, or relationships..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text)",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: inputValue.trim() ? "var(--primary-foreground)" : "rgba(255, 255, 255, 0.05)",
                color: inputValue.trim() ? "#050606" : "var(--mute)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: inputValue.trim() ? "pointer" : "not-allowed",
                transition: "all 0.2s ease",
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
