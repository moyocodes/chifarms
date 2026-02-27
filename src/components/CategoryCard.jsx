"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { F, hex2rgb } from "@/lib/constants";

export default function CategoryCard({ cat, d, index, slug }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const rgb = hex2rgb(d.accent);
  const previewImage = cat.items?.[0]?.image;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <Link
        to={`/products/${slug}/${cat.id}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <motion.div
          onHoverStart={() => setHov(true)}
          onHoverEnd={() => setHov(false)}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
            border: `1.5px solid ${hov ? d.accent + "55" : "rgba(0,0,0,0.07)"}`,
            boxShadow: hov
              ? `0 24px 60px rgba(${rgb},0.15)`
              : "0 2px 14px rgba(0,0,0,0.05)",
            transition: "border-color 0.28s, box-shadow 0.32s",
            cursor: "pointer",
          }}
        >
          {/* Image hero */}
          <div
            style={{ position: "relative", height: 210, overflow: "hidden" }}
          >
            {previewImage && (
              <motion.img
                src={previewImage}
                alt={cat.label}
                animate={{ scale: hov ? 1.07 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${d.dark}EE 0%, ${d.dark}33 55%, transparent 100%)`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.13)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    marginBottom: 8,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: F.sans,
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.45)",
                    margin: "4px 0 0",
                  }}
                >
                  {cat.items.length} product{cat.items.length !== 1 ? "s" : ""}
                </p>
              </div>
              <motion.div
                animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.6 }}
                transition={{ type: "spring", stiffness: 420 }}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: d.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
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

          {/* Body */}
          <div
            style={{
              padding: "1.1rem 1.25rem 1.3rem",
              display: "flex",
              flexDirection: "column",
              gap: 11,
            }}
          >
            <p
              style={{
                fontFamily: F.serif,
                fontSize: "0.75rem",
                color: "#777",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {cat.summary}
            </p>

          

            {/* Product name preview pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {cat.items.slice(0, 3).map((item, i) => (
                <span
                  key={i}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 99,
                    background: hov ? d.accentLight : "rgba(0,0,0,0.04)",
                    border: `1px solid ${hov ? d.accentBorder : "rgba(0,0,0,0.07)"}`,
                    fontFamily: F.sans,
                    fontSize: "0.52rem",
                    fontWeight: 600,
                    color: hov ? d.accent : "#888",
                    whiteSpace: "nowrap",
                    transition: "all 0.22s",
                  }}
                >
                  {item.name.split(" ").slice(0, 3).join(" ")}
                </span>
              ))}
              {cat.items.length > 3 && (
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 99,
                    background: "rgba(0,0,0,0.04)",
                    fontFamily: F.sans,
                    fontSize: "0.52rem",
                    fontWeight: 600,
                    color: "#bbb",
                  }}
                >
                  +{cat.items.length - 3} more
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
