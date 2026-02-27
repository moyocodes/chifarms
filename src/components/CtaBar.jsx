"use client";

import { motion } from "framer-motion";
import { F, hex2rgb, CONTACT_NUMBERS } from "@/lib/constants";

export default function CtaBar({ d }) {
  const rgb = hex2rgb(d.accent);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      style={{
        marginTop: "2.5rem",
        padding: "1.35rem 1.75rem",
        borderRadius: 16,
        background: `linear-gradient(135deg, ${d.dark} 0%, #0D4331 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        boxShadow: `0 16px 48px rgba(${rgb},0.2)`,
      }}
    >
      <div>
        <p
          style={{
            fontFamily: F.sans,
            fontWeight: 800,
            fontSize: "0.95rem",
            color: "#fff",
            margin: "0 0 3px",
          }}
        >
          Ready to place an order?
        </p>
        <p
          style={{
            fontFamily: F.serif,
            fontSize: "0.78rem",
            color: "rgba(166,221,200,0.65)",
            margin: 0,
          }}
        >
          Our sales team is available across all divisions.
        </p>
      </div>
      <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
        {CONTACT_NUMBERS.map((c) => (
          <a
            key={c.tel}
            href={`tel:${c.tel}`}
            style={{
              padding: "9px 14px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              textDecoration: "none",
            }}
          >
            <p
              style={{
                fontFamily: F.sans,
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(166,221,200,0.7)",
                margin: "0 0 2px",
              }}
            >
              {c.label}
            </p>
            <p
              style={{
                fontFamily: F.sans,
                fontSize: "0.84rem",
                fontWeight: 800,
                color: "#fff",
                margin: 0,
              }}
            >
              {c.num}
            </p>
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: "9px 18px",
            borderRadius: 10,
            background: `linear-gradient(135deg,${d.accent},${d.dark})`,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontFamily: F.sans,
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "#fff",
            boxShadow: `0 6px 18px rgba(${rgb},0.4)`,
          }}
        >
          Get Started
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
      </div>
    </motion.div>
  );
}
