"use client";

/**
 * Products.jsx — Home page division overview
 *
 * Changes:
 * - Image strip shown on the right side of each card (from first category item)
 * - "Explore" footer links via react-router-dom <Link to={d.href}>
 * - All href → to fixes for react-router-dom compatibility
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { DIVISIONS } from "@/lib/product";

const F = { sans: "'Plus Jakarta Sans', sans-serif", serif: "'Lora', serif" };

function hex2rgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function DivisionCard({ d, index }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const rgb = hex2rgb(d.accent);

  // Pull a preview image from the first item of the first category
  const previewImage = d.categories?.[0]?.items?.[0]?.image ?? null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.09,
      }}
      style={{ height: "100%" }}
    >
      <Link
        to={d.href}
        style={{ textDecoration: "none", display: "block", height: "100%" }}
      >
        <motion.div
          onHoverStart={() => setHov(true)}
          onHoverEnd={() => setHov(false)}
          whileHover={{ y: -7 }}
          whileTap={{ scale: 0.984 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
            border: `1.5px solid ${!hov ? d.accent + "55" : "rgba(0,0,0,0.07)"}`,
            boxShadow: !hov
              ? `0 24px 60px rgba(${rgb},0.14), 0 4px 16px rgba(0,0,0,0.06)`
              : "0 2px 14px rgba(0,0,0,0.05)",
            transition: "border-color 0.28s, box-shadow 0.32s",
            cursor: "pointer",
          }}
        >
          {/* ── MAIN CONTENT ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
              padding: "1.35rem 1.35rem 1.25rem",
              gap: 11,
              background: !hov ? `rgba(${rgb},0.025)` : "#fff",
              transition: "background 0.32s",
            }}
          >
            {/* Group pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "2px 9px",
                borderRadius: 99,
                background: d.accentLight,
                border: `1px solid ${d.accentBorder}`,
                fontFamily: F.sans,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: d.accent,
                alignSelf: "flex-start",
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: d.accent,
                  display: "inline-block",
                }}
              />
              {d.group}
            </div>

            {/* Title */}
            <div>
              <h3
                style={{
                  fontFamily: F.sans,
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "#161616",
                  margin: "0 0 4px",
                  lineHeight: 1.15,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: F.sans,
                  fontSize: "0.59rem",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: d.accent,
                  margin: 0,
                }}
              >
                {d.sub}
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: F.serif,
                fontSize: "0.76rem",
                color: "#606060",
                lineHeight: 1.8,
                margin: 0,
                flex: 1,
              }}
            >
              {d.desc}
            </p>

            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {d.pills.map((p, i) => (
                <span
                  key={i}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 99,
                    background: !hov ? `rgba(${rgb},0.09)` : "rgba(0,0,0,0.04)",
                    border: `1px solid ${!hov ? d.accent + "30" : "rgba(0,0,0,0.07)"}`,
                    fontFamily: F.sans,
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    color: !hov ? d.accent : "#888",
                    whiteSpace: "nowrap",
                    transition: "all 0.22s",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Footer: stat + Explore CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: 12,
                background: !hov ? `rgba(${rgb},0.07)` : "rgba(0,0,0,0.03)",
                border: `1px solid ${!hov ? d.accent + "28" : "rgba(0,0,0,0.06)"}`,
                transition: "all 0.28s",
              }}
            >
            

              {/* Explore Products — routes to /poultry, /frozen, etc. */}
              <motion.div
                animate={{ x: !hov ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: F.sans,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  color: !hov ? d.accent : "#c0c0c0",
                  transition: "color 0.22s",
                }}
              >
                Explore Products
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ── IMAGE STRIP — right side preview ── */}
          {previewImage && (
            <div
              style={{
                width: 110,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.img
                src={previewImage}
                alt={d.title}
                animate={{ scale: !hov ? 1.08 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Gradient overlay blending into card */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to right, ${!hov ? `rgba(${rgb},0.18)` : "rgba(255,255,255,0.10)"} 0%, transparent 40%, ${d.dark}66 100%)`,
                  transition: "background 0.32s",
                }}
              />
              {/* Category count badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  padding: "3px 8px",
                  borderRadius: 99,
                  background: "rgba(0,0,0,0.52)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontFamily: F.sans,
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {d.categories?.[0]?.items?.length ?? 0} products
              </div>
            </div>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
         .div-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          align-items: stretch;
        }
        @media (max-width: 980px)  { .div-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px)  { .div-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section
        ref={ref}
        className="pt-32"
        style={{
          backgroundColor: "#F5F7F5",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.25,
            backgroundImage:
              "radial-gradient(circle, rgba(31,143,99,0.22) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -140,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 68%)",
            filter: "blur(72px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -60,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(31,143,99,0.07) 0%, transparent 68%)",
            filter: "blur(72px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
          }}
        >
          {/* ── Header ── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "5px 14px",
                    borderRadius: 99,
                    marginBottom: 18,
                    background: "rgba(31,143,99,0.08)",
                    border: "1px solid rgba(31,143,99,0.2)",
                    fontFamily: F.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#125C42",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#1F8F63",
                      display: "inline-block",
                    }}
                  />
                  What We Offer
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  style={{
                    fontFamily: F.sans,
                    fontSize: "clamp(2.2rem,3.6vw,3.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    color: "#1A1A1A",
                    margin: 0,
                  }}
                >
                  Products &amp;
                  <br />
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Services
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontFamily: F.serif,
                  fontSize: "0.9rem",
                  color: "#888",
                  lineHeight: 1.85,
                  maxWidth: 300,
                  paddingBottom: 4,
                  margin: 0,
                }}
              >
                End-to-end solutions across the protein value chain.{" "}
                <span
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "#1F8F63",
                  }}
                >
                  Select a division →
                </span>
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.3 }}
              style={{
                marginTop: 28,
                height: 1,
                transformOrigin: "left",
                background: "linear-gradient(to right,#A6DDC8,transparent)",
              }}
            />
          </div>

          {/* ── Cards ── */}
          <div className="div-grid">
            {DIVISIONS.map((d, i) => (
              <DivisionCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
