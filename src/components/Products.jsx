import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: "Poultry",
    tag: "Core Division",
    icon: "🐓",
    desc: "Breeding, processing and live bird distribution — integrated from egg to table.",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.07)",
    border: "rgba(31,143,99,0.15)",
  },
  {
    title: "Aquaculture",
    tag: "Aqua Division",
    icon: "🐟",
    desc: "Premium catfish breeding with best-practice grow-out and cold-chain distribution.",
    accent: "#187553",
    tint: "rgba(24,117,83,0.07)",
    border: "rgba(24,117,83,0.15)",
  },
  {
    title: "Frozen Food",
    tag: "Processing",
    icon: "❄️",
    desc: "Processed and packaged frozen protein maintaining cold-chain integrity.",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.07)",
    border: "rgba(18,92,66,0.15)",
  },
  {
    title: "Equipment",
    tag: "Infrastructure",
    icon: "⚙️",
    desc: "Farm machinery and poultry housing systems from trusted global manufacturers.",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.07)",
    border: "rgba(13,67,49,0.15)",
  },
  {
    title: "Training & Support",
    tag: "Advisory",
    icon: "📋",
    desc: "Hands-on farm management training, post-sales support and ongoing advisory.",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.07)",
    border: "rgba(31,143,99,0.15)",
  },
  {
    title: "Health & Biosecurity",
    tag: "Veterinary",
    icon: "🧬",
    desc: "Vaccine supply, lab diagnostics and biosecurity protocols by veterinary experts.",
    accent: "#187553",
    tint: "rgba(24,117,83,0.07)",
    border: "rgba(24,117,83,0.15)",
  },
];

function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
    }),
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
  };

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 0",
      }}
    >
      {/* ── subtle stripe pattern ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.018,
          backgroundImage:
            "repeating-linear-gradient(0deg, #1F8F63, #1F8F63 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1F8F63, #1F8F63 1px, transparent 1px, transparent 48px)",
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
        {/* ── header row ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "4rem",
          }}
        >
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              marginBottom: 20,
              background: "rgba(31,143,99,0.07)",
              border: "1px solid rgba(31,143,99,0.18)",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#125C42",
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#1F8F63",
                display: "inline-block",
              }}
            />
            What We Offer
          </motion.div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <motion.h2
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              custom={1}
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#1A1A1A",
              }}
            >
              Products &<br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #1F8F63 0%, #41AA80 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              custom={2}
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.95rem",
                color: "#888888",
                lineHeight: 1.75,
                maxWidth: 320,
                paddingBottom: 4,
              }}
            >
              End-to-end solutions across the protein value chain — from live
              inputs to processing, equipment and expert support.
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              marginTop: 28,
              height: 1,
              transformOrigin: "left",
              background:
                "linear-gradient(to right, #A6DDC8, rgba(166,221,200,0))",
            }}
          />
        </div>

        {/* ── cards ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              style={{
                padding: "2rem",
                borderRadius: 20,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                background:
                  hovered === i
                    ? `linear-gradient(145deg, #fff 0%, ${p.tint.replace("0.07", "0.14")} 100%)`
                    : `linear-gradient(145deg, #FAFAF8 60%, ${p.tint} 100%)`,
                border: `1px solid ${hovered === i ? p.border.replace("0.15", "0.35") : p.border}`,
                boxShadow:
                  hovered === i
                    ? `0 20px 52px ${p.accent}20`
                    : "0 2px 10px rgba(0,0,0,0.04)",
                transition:
                  "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* large watermark icon */}
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  right: 0,
                  fontSize: 96,
                  opacity: hovered === i ? 0.09 : 0.05,
                  pointerEvents: "none",
                  lineHeight: 1,
                  transition: "opacity 0.4s ease",
                  userSelect: "none",
                }}
              >
                {p.icon}
              </div>

              {/* tag */}
              <div
                style={{
                  display: "inline-block",
                  marginBottom: 16,
                  padding: "3px 10px",
                  borderRadius: 99,
                  background: p.tint,
                  border: `1px solid ${p.border}`,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: p.accent,
                }}
              >
                {p.tag}
              </div>

              {/* icon badge */}
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  fontSize: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: p.tint,
                  border: `1px solid ${p.border}`,
                  marginBottom: "1rem",
                }}
              >
                {p.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: 8,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.85rem",
                  color: "#888888",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>

              {/* animated arrow */}
              <motion.div
                animate={{ x: hovered === i ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  color: p.accent,
                }}
              >
                Learn more
                <svg
                  width="14"
                  height="14"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Products;
