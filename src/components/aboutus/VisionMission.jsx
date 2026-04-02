import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "🏆",
    title: "Vision",
    desc: "To become the market leader in every market we serve in the livestock industry by meeting quality expectations.",
  },
  {
    icon: "🔄",
    title: "Mission",
    desc: "To continually strive to offer the livestock industry breeds with requisite genetic potentials that deliver on performance characteristics.",
  },
];

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');

  .why-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .why-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`}</style>


      <section
        id="vision"
        className="bg-primary-50/30 pt-10"
        ref={ref}
        style={{
          padding: "4.5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.22,
            backgroundImage:
              "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
          position: "relative",
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 99,
                  marginBottom: 12,
                  background: "rgba(31,143,99,0.08)",
                  border: "1px solid rgba(31,143,99,0.16)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#14664A",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#1F8F63",
                  }}
                />
                Vision & Mission
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07 }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: "#111",
                  margin: 0,
                }}
              >
                Training, innovation &<br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#1F8F63,#41AA80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  sustainable poultry growth.
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              height: 1,
              transformOrigin: "left",
              background: "linear-gradient(to right,#A6DDC8,transparent)",
            }}
          />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginTop: "2.5rem",
}}>
            {reasons.map((r, i) => {
              const isHov = hov === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  onHoverStart={() => setHov(i)}
                  onHoverEnd={() => setHov(null)}
                  whileHover={{
                    y: -5,
                    rotateX: 3,
                    rotateY: -3,
                    // scale: 1.02,
                  }}
                  style={{
                    position: "relative",
                    // borderRadius: "0px",
                    padding: "2rem",
                    background: "rgba(247, 247, 247, 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(48, 197, 137, 0.12)",
                    boxShadow: isHov
                      ? "0 10px 40px rgba(31,143,99,0.25)"
                      : "0 10px 10px rgba(0,0,0,0.06)",
                    transition: "all 0.1s ease",
                    overflow: "hidden",
                    minHeight: "220px",
                    width: "100%",
                  }}
                >
                  {/* Glow */}
                  <motion.div
                    animate={{ opacity: isHov ? 0.4 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg, rgba(31,143,99,0.2), rgba(65,170,128,0.2))",
                      filter: "blur(40px)",
                      zIndex: 0,
                    }}
                  />

                  {/* Top line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isHov ? { scaleX: 1 } : { scaleX: 0 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: 3,
                      width: "100%",
                      background:
                        "linear-gradient(to right,#1F8F63,#41AA80)",
                      transformOrigin: "left",
                    }}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        marginBottom: "1rem",
                        background: "rgba(31,143,99,0.1)",
                        border: "1px solid rgba(31,143,99,0.2)",
                      }}
                    >
                      {r.icon}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        marginBottom: "0.5rem",
                        color: "#111",
                      }}
                    >
                      {r.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: 1.7,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}