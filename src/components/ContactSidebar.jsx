"use client";

import { motion } from "framer-motion";
import { F, hex2rgb } from "@/lib/constants";

const PHONES = [
  { label: "Frozen Foods", number: "09070 269 373", tel: "09070269373" },
  { label: "Day Old Chick Sales", number: "08127 138 650", tel: "08127138650" },
  { label: "Booking Lines", number: "08132 592 782", tel: "08132592782" },
  { label: "", number: "08022 078 446", tel: "08022078446" },
];

const OFFICES = [
  {
    tag: "HQ & Frozen Food Sales",
    address:
      "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Apapa–Oworonshoki Expressway, Lagos",
    icon: "🏢",
  },
  {
    tag: "Processing Plant",
    address: "KM 51, off Lagos–Ibadan Expressway, Ogun State",
    icon: "🏭",
  },
  {
    tag: "Booking / Diagnostic Centre",
    address: "16, Alaafin Avenue, Oluyole Estate, Ibadan",
    icon: "🔬",
  },
  {
    tag: "Main Farm Office",
    address: "Ajanla Village, KM 20 off Ibadan–Lagos Expressway, Ibadan",
    icon: "🌾",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function ContactSidebar({ d }) {
  const rgb = hex2rgb(d.accent);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease, delay: 0.2 }}
      style={{
        position: "sticky",
        top: "calc(var(--nav-h, 88px) + 1.5rem)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minWidth: 0,
      }}
    >
      {/* ── Phone numbers ── */}
      <div
        style={{
          borderRadius: 16,
          background: "#fff",
          border: `1.5px solid rgba(${rgb},0.14)`,
          boxShadow: `0 4px 24px rgba(${rgb},0.08)`,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 16px 10px",
            borderBottom: `1px solid rgba(${rgb},0.1)`,
            background: `rgba(${rgb},0.05)`,
          }}
        >
          <p
            style={{
              fontFamily: F.sans,
              fontSize: "0.55rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: d.accent,
              margin: 0,
            }}
          >
            📞 Sales Hotlines
          </p>
        </div>

        <div style={{ padding: "8px 0" }}>
          {PHONES.map((p, i) => (
            <a
              key={i}
              href={`tel:${p.tel}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px",
                textDecoration: "none",
                borderBottom:
                  i < PHONES.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = `rgba(${rgb},0.05)`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div>
                {p.label && (
                  <p
                    style={{
                      fontFamily: F.sans,
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      color: "#bbb",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 1px",
                    }}
                  >
                    {p.label}
                  </p>
                )}
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {p.number}
                </p>
              </div>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: `rgba(${rgb},0.1)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={d.accent}
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Email ── */}
      <a
        href="mailto:chifarms@clicktgi.net"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 16px",
          borderRadius: 12,
          background: "#fff",
          border: `1.5px solid rgba(${rgb},0.14)`,
          boxShadow: `0 2px 12px rgba(${rgb},0.06)`,
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `rgba(${rgb},0.06)`;
          e.currentTarget.style.borderColor = d.accent + "44";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.borderColor = `rgba(${rgb},0.14)`;
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            flexShrink: 0,
            background: `rgba(${rgb},0.1)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={d.accent}
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p
            style={{
              fontFamily: F.sans,
              fontSize: "0.5rem",
              fontWeight: 700,
              color: "#bbb",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 1px",
            }}
          >
            Email Us
          </p>
          <p
            style={{
              fontFamily: F.sans,
              fontSize: "0.72rem",
              fontWeight: 700,
              color: d.accent,
              margin: 0,
            }}
          >
            chifarms@clicktgi.net
          </p>
        </div>
      </a>

      {/* ── Offices ── */}
      <div
        style={{
          borderRadius: 16,
          background: "#fff",
          border: `1.5px solid rgba(${rgb},0.14)`,
          boxShadow: `0 4px 24px rgba(${rgb},0.06)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px 10px",
            borderBottom: `1px solid rgba(${rgb},0.1)`,
            background: `rgba(${rgb},0.05)`,
          }}
        >
          <p
            style={{
              fontFamily: F.sans,
              fontSize: "0.55rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: d.accent,
              margin: 0,
            }}
          >
            📍 Our Locations
          </p>
        </div>

        <div style={{ padding: "4px 0 8px" }}>
          {OFFICES.map((o, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 16px",
                borderBottom:
                  i < OFFICES.length - 1
                    ? "1px solid rgba(0,0,0,0.04)"
                    : "none",
              }}
            >
              <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>
                {o.icon}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.52rem",
                    fontWeight: 800,
                    color: d.accent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: "0 0 2px",
                  }}
                >
                  {o.tag}
                </p>
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "#666",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {o.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
