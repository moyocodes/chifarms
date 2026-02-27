"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { F, hex2rgb } from "@/lib/constants";

export default function ProductCard({ item, cat, d, index, onSelect }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const rgb = hex2rgb(d.accent);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      style={{ height: "100%" }}
    >
      <motion.button
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        onClick={() => onSelect(item)}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{
          all: "unset",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
          border: `1.5px solid ${hov ? d.accentBorder.replace("0.18", "0.5") : d.accentBorder}`,
          boxShadow: hov
            ? `0 18px 44px rgba(${rgb},0.14)`
            : "0 2px 10px rgba(0,0,0,0.05)",
          transition: "border-color 0.22s, box-shadow 0.26s",
          boxSizing: "border-box",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: 162,
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <motion.img
            src={item.image}
            alt={item.name}
            animate={{ scale: hov ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${d.dark}CC 0%, transparent 55%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 9,
              padding: "2px 8px",
              borderRadius: 99,
              background: d.accent,
              fontFamily: F.sans,
              fontSize: "0.5rem",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            {item.badge}
          </div>
          <p
            style={{
              position: "absolute",
              bottom: 10,
              left: 11,
              right: 11,
              fontFamily: F.sans,
              fontSize: "0.84rem",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {item.name}
          </p>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            padding: "12px 13px 13px",
            display: "flex",
            flexDirection: "column",
            gap: 9,
          }}
        >
          <p
            style={{
              fontFamily: F.serif,
              fontSize: "0.72rem",
              color: "#777",
              lineHeight: 1.7,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {item.specs.slice(0, 2).map((s, i) => (
              <span
                key={i}
                style={{
                  padding: "2px 7px",
                  borderRadius: 99,
                  background: d.accentLight,
                  border: `1px solid ${d.accentBorder}`,
                  fontFamily: F.sans,
                  fontSize: "0.5rem",
                  fontWeight: 600,
                  color: d.accent,
                  whiteSpace: "nowrap",
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontFamily: F.sans,
              fontSize: "0.63rem",
              fontWeight: 700,
              color: d.accent,
            }}
          >
            View details
            <motion.span
              animate={{ x: hov ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 420 }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
