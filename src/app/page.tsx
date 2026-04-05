"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const Wordmark = ({ size = "text-2xl" }: { size?: string }) => (
    <span
      className={size}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400,
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ color: "#F4EDD9" }}>L</span>
      <span style={{ color: "#F4EDD9" }}>oo</span>
      <span style={{ color: "#C9A96E" }}>mi</span>
    </span>
  );

  return (
    <div className="min-h-screen text-[#F4EDD9] relative" style={{ background: "#0C1610" }}>
      {/* Grain texture overlay */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-50" style={{ opacity: 0.035, mixBlendMode: "overlay" }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "#1A2B1D", opacity: 0.5 }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[160px]" style={{ background: "#2A1F10", opacity: 0.25 }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-5 md:px-7 py-6 max-w-[1200px] mx-auto">
          <Wordmark size="text-3xl" />
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how"
              className="transition-colors duration-200"
              style={{ color: "#A09880", fontSize: "12px", fontFamily: "Outfit, sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4EDD9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A09880")}
            >
              How It Works
            </a>
            <a
              href="#why"
              className="transition-colors duration-200"
              style={{ color: "#A09880", fontSize: "12px", fontFamily: "Outfit, sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4EDD9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A09880")}
            >
              Why Loomi
            </a>
            <a
              href="#trust"
              className="transition-colors duration-200"
              style={{ color: "#A09880", fontSize: "12px", fontFamily: "Outfit, sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4EDD9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A09880")}
            >
              Trust
            </a>
            <a
              href="#waitlist"
              className="transition-all duration-200"
              style={{
                color: "#C9A96E",
                fontSize: "12px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.04em",
                border: "1px solid rgba(201,169,110,0.4)",
                padding: "8px 20px",
                borderRadius: "28px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A96E";
                e.currentTarget.style.color = "#0C1610";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C9A96E";
              }}
            >
              Get Early Access
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center px-5 md:px-7 pt-28 pb-36 max-w-[1200px] mx-auto">
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-10"
            style={{
              background: "#1A2B1D",
              border: "1px solid rgba(201,169,110,0.15)",
              borderRadius: "20px",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#C9A96E",
                animation: "pulse-calm 2.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#A09880",
                textTransform: "uppercase",
              }}
            >
              AI-Powered Wellness Education
            </span>
          </div>

          <h1
            className="max-w-4xl leading-[1.08]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(42px, 6vw, 72px)",
            }}
          >
            <span style={{ color: "#F4EDD9" }}>Natural health education,</span>
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>without the hype.</em>
          </h1>

          <p
            className="mt-8 max-w-xl leading-relaxed"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "#A09880",
              lineHeight: "1.7",
            }}
          >
            Loomi helps you understand your options with clarity, honesty,
            and calibrated evidence. Not a doctor. Not an influencer.
            A knowledgeable friend who has read the research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a
              href="#waitlist"
              className="transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C9A96E, #B8943F)",
                color: "#0C1610",
                padding: "14px 32px",
                borderRadius: "28px",
                fontSize: "12px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Begin your journey
            </a>
            <a
              href="#how"
              className="transition-all duration-200"
              style={{
                background: "transparent",
                color: "#A09880",
                padding: "14px 32px",
                borderRadius: "28px",
                fontSize: "12px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.04em",
                border: "1px solid rgba(244,237,217,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(244,237,217,0.25)";
                e.currentTarget.style.color = "#F4EDD9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(244,237,217,0.1)";
                e.currentTarget.style.color = "#A09880";
              }}
            >
              See how it works
            </a>
          </div>

          {/* Tagline */}
          <p
            className="mt-20"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "15px",
              color: "#C9A96E",
              opacity: 0.6,
              letterSpacing: "0.02em",
            }}
          >
            natural wellness, honestly
          </p>
        </section>

        {/* Divider */}
        <div className="max-w-[800px] mx-auto px-7">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,237,217,0.08), transparent)" }} />
        </div>

        {/* How It Works */}
        <section id="how" className="px-5 md:px-7 py-28 max-w-[1200px] mx-auto">
          <p
            className="mb-4"
            style={{
              color: "#C9A96E",
              fontSize: "10px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            How It Works
          </p>
          <h2
            className="mb-20 max-w-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#F4EDD9",
              lineHeight: 1.15,
            }}
          >
            Three steps to supplements that
            <em style={{ fontStyle: "italic", color: "#C9A96E" }}> actually make sense.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                step: "01",
                title: "Tell Loomi about you",
                desc: "Your goals, your diet, your energy levels, what you have tried before. The more Loomi knows, the sharper your plan gets.",
              },
              {
                step: "02",
                title: "Get a plan that fits",
                desc: "Loomi cross-references your profile against published research and builds a plan with clear reasoning for every recommendation.",
              },
              {
                step: "03",
                title: "Buy direct on Amazon",
                desc: "Every product links straight to Amazon. No proprietary brands, no markup, no middleman. Just the best match for your needs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative p-8 transition-all duration-200"
                style={{
                  background: "#1A2B1D",
                  border: "1px solid rgba(244,237,217,0.07)",
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(244,237,217,0.07)";
                }}
              >
                <span
                  className="absolute top-6 right-8"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 600,
                    fontSize: "48px",
                    color: "rgba(201,169,110,0.08)",
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>
                <div className="relative z-10 mt-14">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 500,
                      fontSize: "18px",
                      color: "#F4EDD9",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#A09880",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[800px] mx-auto px-7">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,237,217,0.08), transparent)" }} />
        </div>

        {/* Why Loomi */}
        <section id="why" className="px-5 md:px-7 py-28 max-w-[1200px] mx-auto">
          <p
            className="mb-4"
            style={{
              color: "#C9A96E",
              fontSize: "10px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Why Loomi
          </p>
          <h2
            className="mb-4 max-w-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#F4EDD9",
              lineHeight: 1.15,
            }}
          >
            Not another supplement quiz.
          </h2>
          <p
            className="mb-20 max-w-2xl"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "#A09880",
              lineHeight: 1.7,
            }}
          >
            Most tools give you a generic checklist and forget you exist. Loomi is different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                title: "It remembers everything",
                desc: "Loomi stores your history, preferences, and feedback. Every conversation builds on the last. Your plan gets smarter the longer you use it.",
                accent: true,
              },
              {
                title: "Research, not marketing",
                desc: "Every recommendation comes with a plain-language explanation of the evidence behind it. No hype, no miracle claims.",
                accent: false,
              },
              {
                title: "No $200 naturopath fees",
                desc: "Quality supplement guidance should be accessible to everyone, not locked behind expensive consultations and proprietary product lines.",
                accent: false,
              },
              {
                title: "Your plan evolves with you",
                desc: "New goals? Different season? Something not working? Tell Loomi and your plan adapts instantly. Your wellness is not static and your supplements should not be either.",
                accent: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-200"
                style={{
                  background: item.accent
                    ? "linear-gradient(135deg, #1A2B1D, #142318)"
                    : "#0C1610",
                  border: item.accent
                    ? "1px solid rgba(201,169,110,0.12)"
                    : "1px solid rgba(244,237,217,0.07)",
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.accent
                    ? "rgba(201,169,110,0.3)"
                    : "rgba(244,237,217,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = item.accent
                    ? "rgba(201,169,110,0.12)"
                    : "rgba(244,237,217,0.07)";
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#F4EDD9",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#A09880",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[800px] mx-auto px-7">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,237,217,0.08), transparent)" }} />
        </div>

        {/* The statement */}
        <section className="px-5 md:px-7 py-28 max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#F4EDD9",
                lineHeight: 1.15,
              }}
            >
              You would not guess your{" "}
              <em style={{ fontStyle: "italic", color: "#C9A96E" }}>shoe size.</em>
            </h2>
            <p
              className="mt-6 max-w-xl mx-auto"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 300,
                fontSize: "17px",
                color: "#A09880",
                lineHeight: 1.7,
              }}
            >
              So why guess your supplements? Your body has specific needs.
              Loomi figures out what they are and points you to exactly what fits.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[800px] mx-auto px-7">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,237,217,0.08), transparent)" }} />
        </div>

        {/* Trust */}
        <section id="trust" className="px-5 md:px-7 py-28 max-w-[1200px] mx-auto">
          <p
            className="mb-4"
            style={{
              color: "#C9A96E",
              fontSize: "10px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Trust
          </p>
          <h2
            className="mb-16 max-w-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#F4EDD9",
              lineHeight: 1.15,
            }}
          >
            We tell you what we know,{" "}
            <em style={{ fontStyle: "italic", color: "#C9A96E" }}>and what we don't.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                title: "Evidence ratings on everything",
                desc: "Every supplement shows whether the evidence is strong, moderate, limited, or mixed. Because you deserve to know.",
              },
              {
                title: "Affiliate relationships disclosed",
                desc: "When we recommend products, we disclose every affiliate relationship. Openly. Adjacent to every recommendation. Your trust is the product.",
              },
              {
                title: "Safety restrictions built in",
                desc: "If you list a medication, Loomi filters out anything that could interact with it. Automatically. If something is outside our scope, we say so.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-200"
                style={{
                  background: "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.1)",
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,169,110,0.1)";
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#F4EDD9",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#A09880",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[800px] mx-auto px-7">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(244,237,217,0.08), transparent)" }} />
        </div>

        {/* Waitlist */}
        <section id="waitlist" className="px-5 md:px-7 py-28 max-w-[1200px] mx-auto">
          <div
            className="max-w-2xl mx-auto p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #1A2B1D, #142318)",
              border: "1px solid rgba(244,237,217,0.08)",
              borderRadius: "14px",
            }}
          >
            <div className="mb-8">
              <Wordmark size="text-4xl" />
            </div>

            {!submitted ? (
              <>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    color: "#F4EDD9",
                    lineHeight: 1.15,
                  }}
                >
                  Get in before launch.
                </h3>
                <p
                  className="mb-10 max-w-md mx-auto"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "#A09880",
                    lineHeight: 1.7,
                  }}
                >
                  Loomi is almost ready. Drop your email and you will be first in line when we open the doors.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3.5 transition-all duration-200 focus:outline-none"
                    style={{
                      background: "#0C1610",
                      border: "1px solid rgba(244,237,217,0.1)",
                      borderRadius: "10px",
                      color: "#F4EDD9",
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 300,
                      fontSize: "14px",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(244,237,217,0.1)";
                    }}
                  />
                  <button
                    type="submit"
                    className="transition-all duration-200 whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, #C9A96E, #B8943F)",
                      color: "#0C1610",
                      padding: "14px 28px",
                      borderRadius: "28px",
                      fontSize: "12px",
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Join the waitlist
                  </button>
                </form>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    fontSize: "11px",
                    color: "rgba(160,152,128,0.5)",
                  }}
                >
                  No spam. Just launch updates.
                </p>
              </>
            ) : (
              <>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "32px",
                    color: "#C9A96E",
                    lineHeight: 1.15,
                  }}
                >
                  You are in.
                </h3>
                <p
                  className="max-w-md mx-auto"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "#A09880",
                    lineHeight: 1.7,
                  }}
                >
                  We will reach out when Loomi is ready. Thank you for trusting us with your wellness.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer
          className="px-5 md:px-7 py-10 max-w-[1200px] mx-auto"
          style={{ borderTop: "1px solid rgba(244,237,217,0.05)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Wordmark size="text-xl" />
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 300,
                  fontSize: "12px",
                  color: "rgba(160,152,128,0.5)",
                }}
              >
                Loomi provides general wellness education, not medical advice.
              </span>
              <span
                className="hidden md:inline"
                style={{ color: "rgba(160,152,128,0.2)" }}
              >
                |
              </span>
              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 300,
                  fontSize: "12px",
                  color: "rgba(160,152,128,0.5)",
                }}
              >
                Loomi may use affiliate links. If you purchase through these links, we may earn a commission at no extra cost to you.
              </span>
            </div>
          </div>
          <div className="text-center mt-8">
            <span
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 300,
                fontSize: "11px",
                color: "rgba(160,152,128,0.3)",
              }}
            >
              &copy; {new Date().getFullYear()} Loomi. All rights reserved.
            </span>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse-calm {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}