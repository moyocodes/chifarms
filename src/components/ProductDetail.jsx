// ProductDetail.jsx
// Usage: <ProductDetail product={productObject} onBack={() => go back} />
// Import getProductById from products.js to look up a product by id.

import { useEffect } from "react";
import { motion } from "framer-motion";

import CallCTA from "./CallCTA";
export const EMAIL = "chifarms@clicktgi.net";

export const LOCATIONS = {
  hq: "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Lagos",
  processing: "KM 51, off Lagos-Ibadan Expressway, Ogun State",
  farm: "Ajanla Village, KM 20 off Ibadan–Lagos Expressway, Ibadan",
  diagnostic: "16, Alaafin Avenue, Oluyole Estate, Ibadan",
};

const ALL_LOCATIONS = [
  { name: "HQ & Frozen Food", addr: LOCATIONS.hq },
  { name: "Processing Plant", addr: LOCATIONS.processing },
  { name: "Farm Office", addr: LOCATIONS.farm },
  { name: "Diagnostic Centre", addr: LOCATIONS.diagnostic },
];

const BOOKING_LINES = ["08132592782", "08022078446"];

function Pill({ children, accent, tint, border }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        borderRadius: 99,
        background: tint,
        border: `1px solid ${border}`,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: accent,
      }}
    >
      {children}
    </span>
  );
}

function Card({ children, border, style = {} }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        border: `1px solid ${border}`,
        padding: "1.6rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 800,
        color: "#1A1A1A",
        marginBottom: 14,
      }}
    >
      {children}
    </h2>
  );
}

export default function ProductDetail({ product, onBack }) {
  const d = product.page;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.id]);

  // Breadcrumb from path
  const breadcrumb = product.path.join(" › ");

  return (
    <>
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "#F7FAF8", minHeight: "100vh" }}
      >
        {/* ── HERO ── */}
        <div
          style={{
            background: `linear-gradient(135deg, #0D4331 0%, ${product.accent} 100%)`,
            padding: "2.8rem 1.5rem 3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 64px)",
              pointerEvents: "none",
            }}
          />
          {/* big icon bg */}
          <div
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 220,
              opacity: 0.07,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {product.icon}
          </div>

          <div
            style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}
          >
            {/* back btn */}
            <button
              onClick={onBack}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 99,
                padding: "6px 15px",
                cursor: "pointer",
                marginBottom: 24,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              All Products
            </button>

            {/* breadcrumb */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.06em",
                marginBottom: 10,
              }}
            >
              {breadcrumb}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontSize: 44, marginBottom: 10, lineHeight: 1 }}>
                  {product.icon}
                </div>
                <h1
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(1.7rem,4vw,2.7rem)",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {product.path.at(-1)}
                </h1>
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {product.summary.split("—")[0].trim()}
                </p>
              </div>
              <div
                style={{
                  padding: "7px 18px",
                  borderRadius: 99,
                  background: "rgba(255,255,255,0.16)",
                  border: "1px solid rgba(255,255,255,0.26)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  color: "#fff",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                ★ {d.badge}
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "2rem 1.25rem 4rem",
          }}
        >
          <div
            className="detail-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card border={product.border}>
                  <SectionTitle>Overview</SectionTitle>
                  <p
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "0.9rem",
                      color: "#555",
                      lineHeight: 1.85,
                      marginBottom: d.longDesc ? 12 : 0,
                    }}
                  >
                    {d.description}
                  </p>
                  {d.longDesc && (
                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "0.84rem",
                        color: "#888",
                        lineHeight: 1.85,
                      }}
                    >
                      {d.longDesc}
                    </p>
                  )}
                </Card>
              </motion.div>

              {/* Key Features */}
              {d.highlights?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  <Card border={product.border}>
                    <SectionTitle>Key Features</SectionTitle>
                    <div
                      className="highlights-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.85rem",
                      }}
                    >
                      {d.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "0.95rem 1.1rem",
                            borderRadius: 12,
                            background: product.tint,
                            border: `1px solid ${product.border}`,
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          <span style={{ fontSize: 18, flexShrink: 0 }}>
                            {h.icon}
                          </span>
                          <div>
                            <p
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                color: "#1A1A1A",
                                marginBottom: 3,
                              }}
                            >
                              {h.label}
                            </p>
                            <p
                              style={{
                                fontFamily: "'Lora', serif",
                                fontSize: "0.74rem",
                                color: "#888",
                                lineHeight: 1.55,
                              }}
                            >
                              {h.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Available Options */}
              {d.variants?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                >
                  <Card border={product.border}>
                    <SectionTitle>Available Options</SectionTitle>
                    <div
                      className="variants-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.85rem",
                      }}
                    >
                      {d.variants.map((v, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "1.1rem 1.2rem",
                            borderRadius: 14,
                            border: `1.5px solid ${product.border}`,
                            background: "#FAFAF8",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{ position: "absolute", top: 10, right: 10 }}
                          >
                            <Pill
                              accent={product.accent}
                              tint={product.tint}
                              border={product.border}
                            >
                              {v.badge}
                            </Pill>
                          </div>
                          <p
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              color: "#1A1A1A",
                              marginBottom: 5,
                              paddingRight: 55,
                            }}
                          >
                            {v.name}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Lora', serif",
                              fontSize: "0.76rem",
                              color: "#888",
                              lineHeight: 1.6,
                            }}
                          >
                            {v.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              {/* Enquire CTA */}
              <CallCTA
                phone={d.contact.phone}
                label={d.contact.label}
                email={EMAIL}
                accent={product.accent}
                dark
              />

              {/* Location */}
              <Card border={product.border}>
                <div
                  style={{ display: "flex", gap: 11, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: product.tint,
                      border: `1px solid ${product.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 17,
                      flexShrink: 0,
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: product.accent,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 5,
                      }}
                    >
                      Product Location
                    </p>
                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "0.8rem",
                        color: "#666",
                        lineHeight: 1.6,
                      }}
                    >
                      {d.location}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Booking Lines */}
              <Card
                border={product.border}
                style={{ padding: "1.3rem 1.4rem" }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#aaa",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Booking Lines
                </p>
                {BOOKING_LINES.map((p, i) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "9px 0",
                      borderBottom:
                        i < BOOKING_LINES.length - 1
                          ? "1px solid rgba(31,143,99,0.1)"
                          : "none",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#1A1A1A",
                      }}
                    >
                      {p}
                    </span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={product.accent}
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ))}
              </Card>

              {/* All Locations */}
              <Card
                border={product.border}
                style={{ padding: "1.3rem 1.4rem" }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#aaa",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  All Locations
                </p>
                {ALL_LOCATIONS.map((loc, i) => (
                  <div
                    key={loc.name}
                    style={{
                      padding: "7px 0",
                      borderBottom:
                        i < ALL_LOCATIONS.length - 1
                          ? "1px solid rgba(31,143,99,0.07)"
                          : "none",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.67rem",
                        fontWeight: 700,
                        color: product.accent,
                        marginBottom: 2,
                      }}
                    >
                      {loc.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "0.72rem",
                        color: "#999",
                        lineHeight: 1.5,
                      }}
                    >
                      {loc.addr}
                    </p>
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            background: "#0D4331",
            padding: "2.5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#fff",
                    marginBottom: 5,
                  }}
                >
                  🐓 Chi <span style={{ color: "#6DCEAA" }}>Farms</span> Limited
                </p>
                <p
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.77rem",
                    color: "rgba(255,255,255,0.4)",
                    maxWidth: 240,
                  }}
                >
                  Foundational pillar of West Africa's poultry industry since
                  2005.
                </p>
              </div>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {ALL_LOCATIONS.slice(0, 3).map((loc) => (
                  <div key={loc.name}>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "#6DCEAA",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {loc.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "0.72rem",
                        color: "rgba(255,255,255,0.35)",
                        lineHeight: 1.65,
                        maxWidth: 180,
                      }}
                    >
                      {loc.addr}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "1.25rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.67rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                © 2025 — All Rights Reserved, CHI Farms Limited
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
