// VisionMission.jsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { VisionMissionCard } from "./VisionMissionCard";

const defaultCards = [
  { number: "01", icon: "🏆", title: "Vision", desc: "To become the market leader in every market we serve in the livestock industry by meeting quality expectations." },
  { number: "02", icon: "🔄", title: "Mission", desc: "To continually strive to offer the livestock industry breeds with requisite genetic potentials that deliver on performance characteristics." },
];

export default function VisionMission({ cards = defaultCards}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');
        .vm-grid { display: grid; grid-template-columns: repeat(${cards.length}, 1fr); gap: 1.75rem; }
        @media (max-width: 640px) { .vm-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section id="vision" ref={ref} style={{ padding: "1rem 0", position: "relative", overflow: "hidden", background: "#f5f9f7" }}>

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.22,
          backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px" }} />

        {/* Ambient orbs */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 340, height: 340, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(31,143,99,0.12), transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "5%", width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(65,170,128,0.09), transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

           {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <div>
              {/* <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 99, marginBottom: 12,
                  background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.16)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#14664A" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
                Vision & Mission
              </motion.div> */}

              <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
                  fontWeight: 800, lineHeight: 1.12, color: "#111", margin: 0 }}>
                Training, innovation &<br />
                <span style={{ backgroundImage: "linear-gradient(135deg,#1F8F63,#41AA80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  sustainable poultry growth.
                </span>
              </motion.h2>
            </div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.14 }}
              style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "0.84rem", color: "#999", lineHeight: 1.72, maxWidth: 280 }}>
              Purpose-driven farming — rooted in science, built on trust.
            </motion.p>
          </div>

          {/* Accent line */}
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, delay: 0.18 }}
            style={{ height: 1, transformOrigin: "left", background: "linear-gradient(to right,#A6DDC8,transparent)", marginBottom: "3rem" }} />

          {/* Cards */}
          <div className="vm-grid">
            {cards.map((card, i) => (
              <VisionMissionCard
                key={i}
                index={i}
                inView={inView}
                isHov={hov === i}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                {...card}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}