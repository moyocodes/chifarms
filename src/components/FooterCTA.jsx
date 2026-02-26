import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const supportLinks = [
  { label: "Technical Support",  href: "#support"  },
  { label: "Booking Lines",      href: "#contact"  },
  { label: "Diagnostic Centre",  href: "#contact"  },
  { label: "Contact Sales",      href: "#contact"  },
  { label: "FAQs",               href: "#faqs"     },
];

const phones = [
  { label: "Frozen Foods", number: "09070 269 373" },
  { label: "DOC Sales",    number: "08127 138 650" },
  { label: "Booking A",    number: "08132 592 782" },
  { label: "Booking B",    number: "08022 078 446" },
];

export default function FooterCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Lora:ital@0;1&display=swap');
        .cta-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .quick-dial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
        }
        @media (max-width: 900px) {
          .cta-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .cta-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <section
        ref={ref}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#fff",
          padding: "6rem 0 7.5rem",
        }}
      >
        {/* Blobs */}
        <div style={{
          position: "absolute", top: "-20%", left: "20%", width: 700, height: 700,
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(31,143,99,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "5%", width: 480, height: 480,
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(65,170,128,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.32,
          backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
        }} />

        {/* Curved bleed into footer */}
        <div style={{
          position: "absolute", bottom: -2, left: 0, right: 0, height: 80, pointerEvents: "none",
          background: "linear-gradient(160deg, #0D4331 0%, #082A20 55%, #051a15 100%)",
          clipPath: "ellipse(58% 100% at 50% 100%)",
        }} />

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
          <div className="cta-grid">

            {/* ── COL 1 — Headline ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "5px 13px", borderRadius: 99,
                background: "rgba(31,143,99,0.07)",
                border: "1px solid rgba(31,143,99,0.18)",
                marginBottom: "1.3rem",
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.62rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.15em", color: "#1F8F63",
                }}>Get Started Today</span>
              </div>

              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 900,
                color: "#0f2b1e", lineHeight: 1.1, letterSpacing: "-0.025em",
                margin: "0 0 1.1rem",
              }}>
                Ready to grow with
                <br />
                <span style={{
                  backgroundImage: "linear-gradient(130deg, #1F8F63 0%, #41AA80 60%, #68C89F 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Nigeria's leading farm?</span>
              </h2>

              <p style={{
                fontFamily: "'Lora', serif", fontStyle: "italic",
                fontSize: "0.97rem", color: "#6a8a7a", lineHeight: 1.8,
                margin: "0 0 1.8rem", maxWidth: 360,
              }}>
                Join thousands of farmers who trust Chi Farms for quality chicks, nutrition, and expert technical support.
              </p>

              {/* Trust pills */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { icon: "✅", text: "NAFDAC Certified" },
                  { icon: "🌍", text: "Pan-Nigerian" },
                  { icon: "🔬", text: "Lab Backed" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "5px 11px", borderRadius: 99,
                    background: "rgba(31,143,99,0.06)",
                    border: "1px solid rgba(31,143,99,0.13)",
                  }}>
                    <span style={{ fontSize: 11 }}>{icon}</span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.68rem", fontWeight: 600, color: "#2E7D62",
                    }}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── COL 2 — Support + Quick Dial ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {/* Support heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "1.2rem" }}>
                <div style={{ width: 3, height: 13, borderRadius: 99, background: "linear-gradient(to bottom, #1F8F63, #41AA80)" }} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.62rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.15em", color: "#1F8F63", margin: 0,
                }}>Support</p>
              </div>

              <ul style={{ listStyle: "none", margin: "0 0 2rem", padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {supportLinks.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4, color: "#1F8F63" }}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.84rem", fontWeight: 500,
                        color: "#4a6a5a",
                        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                        transition: "color 0.18s ease",
                      }}
                    >
                      <span style={{
                        width: 4, height: 4, borderRadius: "50%",
                        background: "rgba(31,143,99,0.3)", flexShrink: 0,
                        display: "inline-block",
                      }} />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Quick Dial heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "0.9rem" }}>
                <div style={{ width: 3, height: 13, borderRadius: 99, background: "linear-gradient(to bottom, #1F8F63, #41AA80)" }} />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.62rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.15em", color: "#1F8F63", margin: 0,
                }}>Quick Dial</p>
              </div>

              <div className="quick-dial-grid">
                {phones.map((p, i) => (
                  <motion.a
                    key={i}
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                    whileHover={{ background: "rgba(31,143,99,0.07)", borderColor: "rgba(31,143,99,0.22)" }}
                    style={{
                      padding: "9px 11px", borderRadius: 10,
                      background: "rgba(31,143,99,0.04)",
                      border: "1px solid rgba(31,143,99,0.1)",
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.52rem", fontWeight: 700, color: "#41AA80",
                      textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px",
                    }}>{p.label}</p>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.78rem", fontWeight: 800, color: "#1a3a2a", margin: 0,
                    }}>{p.number}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── COL 3 — CTA card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Green card */}
              <div style={{
                padding: "2.2rem", borderRadius: 20,
                background: "linear-gradient(145deg, #1F8F63 0%, #0f5c3a 100%)",
                boxShadow: "0 20px 60px rgba(31,143,99,0.22), 0 1px 0 rgba(255,255,255,0.1) inset",
                position: "relative", overflow: "hidden",
              }}>
                {/* Decorative glows inside card */}
                <div style={{
                  position: "absolute", top: -30, right: -30, width: 120, height: 120,
                  borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.12) 0%,transparent 70%)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: -20, left: -20, width: 90, height: 90,
                  borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)",
                  pointerEvents: "none",
                }} />

                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.6rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  color: "rgba(166,221,200,0.6)", margin: "0 0 0.45rem",
                }}>Talk to us today</p>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.15rem", fontWeight: 900, color: "#fff",
                  lineHeight: 1.2, margin: "0 0 1.4rem",
                }}>Start your journey<br />with Chi Farms</p>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2, boxShadow: "0 14px 32px rgba(0,0,0,0.22)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
                    width: "100%", padding: "13px 20px", borderRadius: 12,
                    background: "#fff", textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem", fontWeight: 800, color: "#1F8F63",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    transition: "box-shadow 0.22s ease",
                  }}
                >
                  Contact Sales
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <motion.a
                    href="#school"
                    whileHover={{ background: "rgba(255,255,255,0.18)" }}
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "9px 10px", borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.1)",
                      textDecoration: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.82)",
                      transition: "background 0.2s ease", textAlign: "center",
                    }}
                  >🎓 Poultry School</motion.a>
                </div>
              </div>

              {/* Social proof */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex" }}>
                  {["#1F8F63","#41AA80","#2E7D62","#68C89F"].map((c, i) => (
                    <div key={i} style={{
                      width: 27, height: 27, borderRadius: "50%",
                      background: `radial-gradient(circle, ${c} 0%, #0a3320 100%)`,
                      border: "2px solid #fff",
                      marginLeft: i > 0 ? -7 : 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}>🐓</div>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.7rem", color: "#8aaa9a", margin: 0,
                }}>3,000+ farmers already on board</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}