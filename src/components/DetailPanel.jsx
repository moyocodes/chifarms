"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { F, hex2rgb, CONTACT_NUMBERS } from "@/lib/constants";

export default function DetailPanel({ item, cat, div: d, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!item || !cat || !d) return null;
  const rgb = hex2rgb(d.accent);

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 80,
              background: "rgba(4,14,8,0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(480px,100vw)",
              zIndex: 90,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              background: "#fff",
              boxShadow: `-24px 0 80px rgba(${rgb},0.2)`,
            }}
          >
            {/* Hero image */}
            <div
              style={{
                position: "relative",
                height: 220,
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${d.dark}F5 0%, ${d.accent}44 55%, transparent 100%)`,
                }}
              />
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: 20,
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
              <div style={{ position: "absolute", bottom: 14, left: 16 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "2px 9px",
                    borderRadius: 99,
                    background: d.accent,
                    fontFamily: F.sans,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.11em",
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: 6,
                  }}
                >
                  {item.badge}
                </span>
                <h2
                  style={{
                    fontFamily: F.sans,
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {item.name}
                </h2>
              </div>
            </div>

            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 18px",
                borderBottom: `1px solid ${d.accentBorder}`,
                background: d.accentLight,
                flexWrap: "wrap",
              }}
            >
              {[
                { to: "/products", label: "Products", color: "#aaa" },
                {
                  to: `/products/${d.slug}`,
                  label: `${d.icon} ${d.title}`,
                  color: d.accent,
                  uppercase: true,
                },
                {
                  to: `/products/${d.slug}/${cat.id}`,
                  label: cat.label,
                  color: "#999",
                },
                { label: item.name, color: "#555" },
              ].map((crumb, i, arr) => (
                <span
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      style={{
                        fontFamily: F.sans,
                        fontSize: "0.6rem",
                        fontWeight: crumb.uppercase ? 700 : 600,
                        color: crumb.color,
                        textTransform: crumb.uppercase ? "uppercase" : "none",
                        letterSpacing: crumb.uppercase ? "0.1em" : "normal",
                        textDecoration: "none",
                      }}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      style={{
                        fontFamily: F.sans,
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: crumb.color,
                      }}
                    >
                      {crumb.label}
                    </span>
                  )}
                  {i < arr.length - 1 && (
                    <span style={{ color: "#ccc", fontSize: 10 }}>›</span>
                  )}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexShrink: 0,
                borderBottom: `1px solid ${d.accentBorder}`,
              }}
            >
              {cat.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    textAlign: "center",
                    borderRight:
                      i < cat.stats.length - 1
                        ? `1px solid ${d.accentBorder}`
                        : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: F.sans,
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: d.accent,
                      margin: "0 0 2px",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: F.sans,
                      fontSize: "0.5rem",
                      fontWeight: 600,
                      color: "#c0c0c0",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ padding: "1.2rem 1.5rem 0.8rem" }}>
              <p
                style={{
                  fontFamily: F.serif,
                  fontSize: "0.84rem",
                  color: "#555",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>

            {/* Specs */}
            {item.specs?.length > 0 && (
              <div style={{ padding: "0 1.5rem 1.2rem" }}>
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.54rem",
                    fontWeight: 800,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#c8c8c8",
                    margin: "0 0 9px",
                  }}
                >
                  Specifications
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6,
                  }}
                >
                  {item.specs.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "7px 11px",
                        borderRadius: 9,
                        background: d.accentLight,
                        border: `1px solid ${d.accentBorder}`,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: d.accent,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: F.sans,
                          fontSize: "0.64rem",
                          fontWeight: 600,
                          color: "#444",
                        }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div
              style={{
                padding: "0 1.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: "auto",
                flexShrink: 0,
              }}
            >
              <a
                href="#contact"
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "13px",
                  borderRadius: 12,
                  background: `linear-gradient(135deg,${d.accent},${d.dark})`,
                  textDecoration: "none",
                  fontFamily: F.sans,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#fff",
                  boxShadow: `0 10px 28px rgba(${hex2rgb(d.accent)},0.3)`,
                }}
              >
                Enquire about {item.name.split(" ").slice(0, 3).join(" ")}
                <svg
                  width="12"
                  height="12"
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
              </a>
              <div style={{ display: "flex", gap: 8 }}>
                {CONTACT_NUMBERS.map((c) => (
                  <a
                    key={c.tel}
                    href={`tel:${c.tel}`}
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      borderRadius: 11,
                      border: `1px solid ${d.accentBorder}`,
                      textDecoration: "none",
                      textAlign: "center",
                      background: d.accentLight,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: F.sans,
                        fontSize: "0.5rem",
                        fontWeight: 700,
                        color: "#bbb",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        margin: "0 0 2px",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: F.sans,
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: d.accent,
                        margin: 0,
                      }}
                    >
                      {c.num}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
