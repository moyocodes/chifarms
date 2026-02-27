"use client";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { F, hex2rgb } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease, delay },
});

/**
 * HeroBanner — light, airy design
 *
 * Background: soft white/warm-cream with a barely-visible logo watermark SVG
 * tiled in the background. Accent colour used only for small pops of colour.
 *
 * Pass logoSrc="/your-logo.svg" (or .png) from the parent if you have one.
 * Falls back gracefully to an SVG leaf mark when logoSrc is not provided.
 */
export default function HeroBanner({ d, activeCat, logoSrc }) {
  const stats = activeCat?.stats ?? d.categories[0]?.stats ?? [];
  const { slug } = useParams();
  const rgb = hex2rgb(d.accent);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "4rem 0 3.5rem",
        // Light warm-white base — single, subtle gradient
        background: `linear-gradient(160deg, #ffffff 0%, #f4f9f6 55%, #eef5f1 100%)`,
      }}
    >
      {/* ── Faint logo / brand-mark tiled watermark ── */}
      <motion.div
        {...fadeIn(0)}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* We place several copies at different sizes/positions for a natural feel */}
        {[
          { size: 340, top: "-60px",  right: "-60px",  opacity: 0.03 },
          { size: 200, bottom: "-30px", left: "-40px",  opacity: 0.03  },
          { size: 130, top: "30%",    right: "28%",    opacity: 0.10 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: pos.top,
              bottom: pos.bottom,
              left: pos.left,
              right: pos.right,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              /* Fallback: simple SVG leaf/branch mark */
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}>
                <path
                  d="M100 180 C100 180 20 130 20 70 C20 30 60 10 100 10 C140 10 180 30 180 70 C180 130 100 180 100 180Z"
                  stroke={d.accent}
                  strokeWidth="6"
                  fill="none"
                />
                <path
                  d="M100 180 L100 80"
                  stroke={d.accent}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M100 120 C80 105 60 100 50 95"
                  stroke={d.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M100 100 C120 85 140 82 155 78"
                  stroke={d.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        ))}
      </motion.div>

      {/* ── Very soft accent gradient wash, bottom edge only ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: `linear-gradient(to top, rgba(${rgb},0.06), transparent)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Thin accent top border ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(to right, ${d.accent}, ${d.accent}55 60%, transparent)`,
        }}
      />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

        {/* Breadcrumb */}
        <motion.nav
          {...fadeIn(0.05)}
          style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1.75rem", flexWrap: "wrap" }}
        >
          {[
            { to: "/", label: "Home", icon: true },
            { to: "/products", label: "Products" },
            { to: `/products/${slug}`, label: d.title, dim: !!activeCat },
            ...(activeCat ? [{ label: activeCat.label }] : []),
          ].map((crumb, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: i === arr.length - 1 ? "#555" : "#b0b0b0",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {crumb.icon && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ fontFamily: F.sans, fontSize: "0.68rem", fontWeight: 700, color: "#333" }}>
                  {crumb.label}
                </span>
              )}
              {i < arr.length - 1 && (
                <span style={{ color: "#ddd", fontSize: 11 }}>›</span>
              )}
            </span>
          ))}
        </motion.nav>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            {/* Division pill badge */}
            <motion.div {...fadeUp(0.14)} style={{ marginBottom: 14 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "4px 12px",
                  borderRadius: 99,
                  background: `rgba(${rgb}, 0.1)`,
                  border: `1px solid rgba(${rgb}, 0.22)`,
                  fontFamily: F.sans,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: d.accent,
                }}
              >
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: d.accent, display: "inline-block",
                }} />
                {d.group}
              </span>
            </motion.div>

            {/* Headline — dark text on light bg */}
            <motion.h1
              {...fadeUp(0.22)}
              style={{
                fontFamily: F.sans,
                fontSize: "clamp(2rem, 4.2vw, 3rem)",
                fontWeight: 900,
                color: "#111",
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: "-0.025em",
              }}
            >
              {activeCat ? activeCat.label : d.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.div {...fadeUp(0.3)} style={{ marginTop: 10 }}>
              <p style={{
                fontFamily: F.sans,
                fontSize: "0.71rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: d.accent,
                margin: 0,
              }}>
                {activeCat ? activeCat.summary : d.sub}
              </p>
              {/* Short accent underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.7, ease, delay: 0.46 }}
                style={{
                  height: 2,
                  borderRadius: 99,
                  background: `linear-gradient(to right, ${d.accent}, transparent)`,
                  marginTop: 8,
                }}
              />
            </motion.div>
          </div>

        
        </div>
      </div>
    </section>
  );
}