// VisionMissionCard.jsx
import { motion } from "framer-motion";

export function VisionMissionCard({ number, icon, title, desc, index = 0, isHov, onHoverStart, onHoverEnd, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ y: -5 }}
      style={{
        position: "relative", padding: "2.2rem 2rem", overflow: "hidden", minHeight: 240,
        background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
        border: `1px solid ${isHov ? "rgba(31,143,99,0.25)" : "rgba(31,143,99,0.1)"}`,
        boxShadow: isHov ? "0 16px 48px rgba(31,143,99,0.2)" : "0 8px 24px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease", cursor: "default",
      }}
    >
      {/* Top bar */}
      <motion.div animate={{ scaleX: isHov ? 1 : 0 }} transition={{ duration: 0.35 }}
        style={{ position: "absolute", top: 0, left: 0, height: 3, width: "100%",
          background: "linear-gradient(to right,#1F8F63,#41AA80)", transformOrigin: "left" }} />

      {/* Glow */}
      <motion.div animate={{ opacity: isHov ? 1 : 0 }} transition={{ duration: 0.3 }}
        style={{ position: "absolute", inset: 0,
          background: "linear-gradient(135deg,rgba(31,143,99,0.07),rgba(65,170,128,0.07))", pointerEvents: "none" }} />

      {/* Corner bloom */}
      <motion.div animate={{ scale: isHov ? 1.6 : 1, opacity: isHov ? 1 : 0.4 }} transition={{ duration: 0.3 }}
        style={{ position: "absolute", bottom: -10, right: -10, width: 80, height: 80, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(31,143,99,0.1),transparent 70%)" }} />

      {/* Ghost number */}
      {number && (
        <span style={{
          position: "absolute", top: "1.6rem", right: "1.6rem",
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "3rem", fontWeight: 900,
          color: isHov ? "rgba(31,143,99,0.1)" : "rgba(31,143,99,0.05)",
          lineHeight: 1, userSelect: "none", transition: "color 0.3s ease",
        }}>{number}</span>
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {icon && (
          <motion.div animate={{ scale: isHov ? 1.08 : 1 }} transition={{ duration: 0.25 }}
            style={{
              width: 48, height: 48, borderRadius: 14, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 20, marginBottom: "1.1rem",
              background: isHov ? "rgba(31,143,99,0.14)" : "rgba(31,143,99,0.08)",
              border: "1px solid rgba(31,143,99,0.15)", transition: "background 0.25s",
            }}>{icon}</motion.div>
        )}

        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.25rem", fontWeight: 800,
          color: isHov ? "#1F8F63" : "#111", marginBottom: "0.6rem", transition: "color 0.2s",
        }}>{title}</h3>

        <p style={{ fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "#777", lineHeight: 1.78, margin: 0 }}>{desc}</p>
      </div>
    </motion.div>
  );
}