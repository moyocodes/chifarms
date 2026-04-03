import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const requirements = [
  "Minimum grade of Second-Class Upper Division from a recognized university",
  "Bachelor's degree in Food Science, Agriculture, Microbiology, Marketing, Business Administration, Finance, Accounting, Computer Science, Computer/Mechanical/Civil/Electrical Engineering, or related fields",
  "0–2 years' relevant work experience",
  "Excellent research and writing skills",
  "Strong communication and presentation skills",
  "Strong analytical, critical thinking and problem-solving skills",
  "Proficiency in Microsoft Office (Word, PowerPoint, Excel) applications",
  "Willingness to work in any of our locations within and outside Nigeria",
  "Not older than 30 years by 31st December 2023",
];

const highlights = [
  { icon: "🎓", label: "Mentorship", desc: "Learn from multi-disciplinary professionals" },
  { icon: "🔁", label: "Rotation Scheme", desc: "Gain knowledge across all business areas" },
  { icon: "🌍", label: "Nationwide", desc: "Multiple locations across Nigeria" },
  { icon: "🚀", label: "Career Growth", desc: "Fast-track your early career" },
];

export default function CareersHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital,wght@1,400&display=swap');
        .careers-highlights {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .careers-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .careers-highlights { grid-template-columns: repeat(2, 1fr); }
          .careers-body { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .careers-highlights { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section
        className="relative overflow-hidden bg-primary-50/30 pb-[5rem] pt-[9rem] md:pt-[10rem]"
        ref={ref}
      >
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.22,
          backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Ambient orbs */}
        <div style={{
          position: "absolute", top: -100, right: -80, width: 400, height: 400,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(31,143,99,0.1), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: "10%", width: 300, height: 300,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(65,170,128,0.08), transparent 70%)",
          filter: "blur(70px)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>

          {/* ── Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6 text-[10px] font-extrabold tracking-[0.14em] uppercase border border-[#1F8F63]/20 bg-[#1F8F63]/10 text-[#14664A]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F8F63]" />
            Careers
          </motion.div>

          {/* ── Heading ── */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
              fontWeight: 800, lineHeight: 1.12, color: "#111",
              marginBottom: "0.5rem",
            }}
          >
            Grow with us —<br />
            <span style={{
              backgroundImage: "linear-gradient(135deg,#1F8F63,#41AA80)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              do work that matters.
            </span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            style={{
              fontFamily: "'Lora', serif", fontStyle: "italic",
              fontSize: "0.9rem", color: "#999", lineHeight: 1.72,
              maxWidth: 480, marginBottom: "2.5rem",
            }}
          >
            Join a community that values diversity, invests in people, and builds Nigeria's protein future.
          </motion.p> */}

          {/* ── Accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              height: 1, transformOrigin: "left",
              background: "linear-gradient(to right,#A6DDC8,transparent)",
              marginBottom: "3rem",
            }}
          />

          {/* ── Program title ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22 }}
            style={{ marginBottom: "2rem" }}
          >
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1F8F63",
            }}>
              Open Program
            </span>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.2rem, 2vw, 1.55rem)", fontWeight: 800,
              color: "#111", lineHeight: 1.2, marginTop: "0.3rem",
            }}>
              2024 Graduate Trainee Program
            </h2>
          </motion.div>

          {/* ── Highlight pills ── */}
          <div className="careers-highlights" style={{ marginBottom: "3rem" }}>
            {highlights.map((h, i) => {
              const isH = hov === `pill-${i}`;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.07 }}
                  onHoverStart={() => setHov(`pill-${i}`)}
                  onHoverEnd={() => setHov(null)}
                  style={{
                    padding: "1rem 1.2rem",
                    border: `1px solid ${isH ? "rgba(31,143,99,0.25)" : "rgba(31,143,99,0.1)"}`,
                    background: isH ? "rgba(240,249,245,1)" : "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(8px)",
                    position: "relative", overflow: "hidden",
                    transition: "all 0.25s ease",
                    boxShadow: isH ? "0 8px 24px rgba(31,143,99,0.12)" : "none",
                  }}
                >
                  <motion.div
                    animate={{ scaleX: isH ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute", top: 0, left: 0, height: 2, width: "100%",
                      background: "linear-gradient(to right,#1F8F63,#41AA80)", transformOrigin: "left",
                    }}
                  />
                  <div style={{ fontSize: 18, marginBottom: "0.4rem" }}>{h.icon}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8rem", fontWeight: 700, color: isH ? "#1F8F63" : "#1A1A1A",
                    marginBottom: "0.2rem", transition: "color 0.2s",
                  }}>{h.label}</div>
                  <div style={{
                    fontFamily: "'Lora', serif", fontStyle: "italic",
                    fontSize: "0.72rem", color: "#999", lineHeight: 1.5,
                  }}>{h.desc}</div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Body: Description + Requirements ── */}
          <div className="careers-body">

            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#1F8F63", marginBottom: "1rem",
              }}>
                About the Program
              </h3>
              <div style={{
                fontFamily: "'Lora', serif", fontSize: "0.88rem",
                color: "#555", lineHeight: 1.85,
              }}>
                <p style={{ marginBottom: "1rem" }}>
                  Our Graduate Trainee Program seeks smart, young university graduates to step into the future with us. We aim to empower people to grow their career, gain insight and do work that matters, supported by a community that values diversity and cares about the individual.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  The program is designed to provide you with invaluable learning and mentoring opportunities from multi-disciplinary experienced professionals to help you make the most of your early years in the workforce.
                </p>
                <p>
                  Our rotation scheme ensures that trainees gather knowledge from all aspects of the business and are stationed where best suited for them. We welcome candidates with an innovative mindset, a passion for excellence, collaboration, and a commitment to outstanding solutions.
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  marginTop: "2rem", padding: "0.75rem 1.75rem",
                  background: "linear-gradient(135deg,#1F8F63,#2DA876)",
                  color: "#fff", textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.04em",
                  boxShadow: "0 4px 20px rgba(31,143,99,0.3)",
                  transition: "box-shadow 0.25s ease",
                }}
              >
                Apply Now
                <span style={{ fontSize: 14 }}>→</span>
              </motion.a>
            </motion.div>

            {/* Right: Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.42 }}
              style={{
                padding: "2rem",
                border: "1px solid rgba(31,143,99,0.1)",
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(10px)",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Corner bloom */}
              <div style={{
                position: "absolute", bottom: -20, right: -20, width: 120, height: 120,
                borderRadius: "50%", background: "radial-gradient(circle,rgba(31,143,99,0.07),transparent 70%)",
                pointerEvents: "none",
              }} />

              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#1F8F63", marginBottom: "1.25rem",
              }}>
                Requirements
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "0.65rem",
                      paddingBottom: "0.75rem", marginBottom: "0.75rem",
                      borderBottom: i < requirements.length - 1 ? "1px solid rgba(31,143,99,0.07)" : "none",
                    }}
                  >
                    <span style={{
                      flexShrink: 0, marginTop: 4,
                      width: 6, height: 6, borderRadius: "50%",
                      background: "linear-gradient(135deg,#1F8F63,#41AA80)",
                    }} />
                    <span style={{
                      fontFamily: "'Lora', serif", fontSize: "0.8rem",
                      color: "#555", lineHeight: 1.65,
                    }}>{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}