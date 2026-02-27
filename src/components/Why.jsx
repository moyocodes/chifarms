import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { icon: "🏆", title: "Industry Expertise",     desc: "Decades of integrated poultry & aquaculture leadership — we built Nigeria's protein supply chain." },
  { icon: "🔄", title: "Full Production Cycle",   desc: "From egg incubation through to frozen products — every stage owned and operated in-house." },
  { icon: "📋", title: "Customer Training",       desc: "Poultry school programs and post-sales technical support that make clients self-sufficient." },
  { icon: "🧬", title: "Proven Biosecurity",      desc: "Lab-backed vet protocols and vaccine supply that protect your flock and guarantee integrity." },
  { icon: "📍", title: "Nationwide Reach",        desc: "Four hubs across Lagos, Ibadan and Ogun State — consistent supply wherever you farm." },
  { icon: "🤝", title: "Trusted Partnerships",   desc: "A global network of feed, hatchery and biosecurity suppliers ensuring the best inputs." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="bg-primary-50/30 pt-10" ref={ref} style={{  padding: "4.5rem 0", position: "relative", overflow: "hidden" }}>

        {/* Faint dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.22,
          backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

          {/* ── Header ── */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 12px", borderRadius: 99, marginBottom: 12,
                  background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.16)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#14664A",
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
                Why Chi Farms
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07 }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
                  fontWeight: 800, lineHeight: 1.12,
                  color: "#111", margin: 0,
                }}
              >
                Why the best farms<br />
                <span style={{ backgroundImage: "linear-gradient(135deg,#1F8F63,#41AA80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  choose Chi Farms.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14 }}
              style={{
                fontFamily: "'Lora', serif", fontStyle: "italic",
                fontSize: "0.84rem", color: "#999",
                lineHeight: 1.72, maxWidth: 280,
              }}
            >
              We build partnerships that last decades — not just supply chains.
            </motion.p>
          </div>

          {/* ── Thin accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{ height: 1, transformOrigin: "left", background: "linear-gradient(to right,#A6DDC8,transparent)", marginBottom: 0 }}
          />

          {/* ── Reasons grid ── */}
          <div
            className="why-grid"
            style={{ border: "1px solid rgba(31,143,99,0.09)", borderTop: "none" }}
          >
            {reasons.map((r, i) => {
              const isHov = hov === i;
              const col = i % 3; // 0,1,2
              const row = Math.floor(i / 3);
              const totalRows = Math.ceil(reasons.length / 3);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                  onHoverStart={() => setHov(i)}
                  onHoverEnd={() => setHov(null)}
                  style={{
                    padding: "1.5rem 1.6rem",
                    background: isHov ? "rgba(240,249,245,1)" : "transparent",
                    borderRight: col < 2 ? "1px solid rgba(31,143,99,0.09)" : "none",
                    borderBottom: row < totalRows - 1 ? "1px solid rgba(31,143,99,0.09)" : "none",
                    position: "relative",
                    transition: "background 0.2s ease",
                    cursor: "default",
                  }}
                >
                  {/* Left accent bar on hover */}
                  <motion.div
                    animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute", left: 0, top: "20%", bottom: "20%", width: 2.5,
                      borderRadius: 99, background: "#1F8F63", transformOrigin: "center",
                    }}
                  />

                  {/* Icon pill */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: 10, marginBottom: "0.75rem",
                    background: isHov ? "rgba(31,143,99,0.12)" : "rgba(31,143,99,0.07)",
                    border: "1px solid rgba(31,143,99,0.12)",
                    fontSize: 16,
                    transition: "background 0.2s",
                  }}>{r.icon}</div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.87rem", fontWeight: 700,
                    color: isHov ? "#1F8F63" : "#1A1A1A",
                    lineHeight: 1.25, marginBottom: "0.45rem",
                    transition: "color 0.2s",
                  }}>{r.title}</h3>

                  {/* Desc */}
                  <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.78rem", color: "#888",
                    lineHeight: 1.68, margin: 0,
                  }}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>

        

        </div>
      </section>
    </>
  );
}