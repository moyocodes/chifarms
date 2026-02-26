import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

/* ─── data ─── */
const footerLinks = {
  Products: [
    { label: "Breeder & DOC Chicks", href: "#products" },
    { label: "Frozen Chicken", href: "#products" },
    { label: "Beef & Sausage", href: "#products" },
    { label: "French Fries", href: "#products" },
    { label: "Catfish & Aquaculture", href: "#products" },
    { label: "Pizza Toppings", href: "#products" },
  ],
  Company: [
    { label: "About Chi Farms", href: "#about" },
    { label: "Vision & Mission", href: "#about" },
    { label: "Our Values", href: "#why" },
    { label: "Careers", href: "#careers" },
    { label: "Poultry School", href: "#school" },
    { label: "News & Updates", href: "#news" },
  ],
  Support: [
    { label: "Technical Support", href: "#support" },
    { label: "Booking Lines", href: "#contact" },
    { label: "Diagnostic Centre", href: "#contact" },
    { label: "Contact Sales", href: "#contact" },
    { label: "FAQs", href: "#faqs" },
  ],
};

const phones = [
  { label: "Frozen Foods", number: "09070 269 373" },
  { label: "DOC Sales", number: "08127 138 650" },
  { label: "Booking A", number: "08132 592 782" },
  { label: "Booking B", number: "08022 078 446" },
];

const locations = [
  { icon: "🏢", title: "Head Office & Frozen Food", short: "Ilupeju Industrial Estate, Lagos" },
  { icon: "🌾", title: "Main Farm", short: "Km 20, Ibadan–Lagos Expressway" },
  { icon: "⚙️", title: "Processing Plant", short: "Km 51, Lagos–Ibadan Expressway" },
  { icon: "🧬", title: "Diagnostic Centre", short: "Oluyole Estate, Ibadan" },
];

const socials = [
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

/* ─── Logo component — uses /chilogo.svg with text fallback ─── */
function Logo({ size = "lg" }) {
  const isLg = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: isLg ? 12 : 8 }}>
      <div style={{
        position: "relative",
        width: isLg ? 48 : 36, height: isLg ? 48 : 36,
        borderRadius: isLg ? 14 : 10,
        background: "linear-gradient(135deg, #1F8F63 0%, #0D4331 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 14px rgba(31,143,99,0.35)",
        flexShrink: 0,
        overflow: "hidden",
      }}>
        <img
          src="/chilogo.svg"
          alt="Chi Farms"
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          style={{ width: "80%", height: "80%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
        {/* Fallback if SVG fails */}
        <span style={{
          display: "none", alignItems: "center", justifyContent: "center",
          fontSize: isLg ? 22 : 16,
        }}>🐓</span>
      </div>
      <div>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: isLg ? "1.25rem" : "1rem",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>Chi <span style={{ color: "#41AA80" }}>Farms</span></p>
        {isLg && (
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.6rem", fontWeight: 600,
            color: "rgba(121,204,172,0.5)",
            letterSpacing: "0.12em", textTransform: "uppercase",
            margin: 0, marginTop: 1,
          }}>Limited · Est. 2005</p>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Lora:ital@0;1&display=swap');

        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr;
          gap: 3rem;
        }
        .footer-phones {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .footer-locations {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem 2rem;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-phones {
            grid-template-columns: 1fr 1fr;
          }
          .footer-locations {
            grid-template-columns: 1fr;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer
        ref={ref}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #0D4331 0%, #082A20 55%, #051a15 100%)",
        }}
      >
        {/* ── Atmospheric background layers ── */}
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.07,
          backgroundImage: "radial-gradient(circle, #A6DDC8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Glow top-left */}
        <div style={{
          position: "absolute", top: -100, left: "15%",
          width: 500, height: 500, borderRadius: "50%",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(31,143,99,0.16) 0%, transparent 65%)",
          filter: "blur(70px)",
        }} />
        {/* Glow bottom-right */}
        <div style={{
          position: "absolute", bottom: -60, right: "5%",
          width: 360, height: 360, borderRadius: "50%",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(65,170,128,0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
        }} />
        {/* Watermark */}
        <div style={{
          position: "absolute", right: "-1%", bottom: "8%",
          fontSize: 280, opacity: 0.025, pointerEvents: "none",
          lineHeight: 1, userSelect: "none", transform: "rotate(8deg)",
        }}>🐓</div>

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

          {/* ── CTA STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              margin: "0 0",
              padding: "2.5rem 2.5rem",
              borderRadius: "0 0 24px 24px",
              background: "linear-gradient(135deg, rgba(31,143,99,0.18) 0%, rgba(13,67,49,0.12) 100%)",
              border: "1px solid rgba(65,170,128,0.15)",
              borderTop: "none",
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            <div>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 800,
                color: "#fff", lineHeight: 1.2, marginBottom: 6,
              }}>
                Ready to grow with<br />
                <span style={{
                  backgroundImage: "linear-gradient(135deg, #41AA80, #A6DDC8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Nigeria's leading integrated farm?</span>
              </p>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(166,221,200,0.6)" }}>
                Join thousands of farmers who trust Chi Farms.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 14px 32px rgba(31,143,99,0.5)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 22px", borderRadius: 12,
                  background: "linear-gradient(135deg, #1F8F63, #125C42)",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.85rem", fontWeight: 700, color: "#fff",
                  boxShadow: "0 6px 20px rgba(31,143,99,0.3)",
                }}
              >
                Contact Sales
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#school"
                whileHover={{ backgroundColor: "rgba(65,170,128,0.12)" }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 22px", borderRadius: 12,
                  border: "1px solid rgba(65,170,128,0.3)",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.85rem", fontWeight: 600, color: "#79CCAC",
                  transition: "background 0.2s",
                }}
              >
                Poultry School
              </motion.a>
            </div>
          </motion.div>

          {/* ── MAIN GRID ── */}
          <motion.div
            className="footer-grid"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            style={{ paddingBottom: "3.5rem", borderBottom: "1px solid rgba(121,204,172,0.1)" }}
          >
            {/* ── Brand column ── */}
            <motion.div variants={fadeUp}>
              <Logo size="lg" />

              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.87rem",
                color: "rgba(166,221,200,0.65)",
                lineHeight: 1.82, maxWidth: 280,
                margin: "1.5rem 0",
              }}>
                Integrated poultry breeding, frozen foods, aquaculture and veterinary services — delivering protein security from farm to table across Nigeria since 2005.
              </p>

              {/* Social links */}
              <div style={{ display: "flex", gap: 9, marginBottom: "2rem" }}>
                {socials.map((s, i) => (
                  <motion.a
                    key={i} href={s.href}
                    whileHover={{ y: -3, background: "rgba(31,143,99,0.4)" }}
                    title={s.label}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      border: "1px solid rgba(121,204,172,0.18)",
                      background: "rgba(31,143,99,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", transition: "all 0.22s ease",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(121,204,172,0.8)">
                      <path d={s.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Phone quick-links */}
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.58rem", fontWeight: 800,
                letterSpacing: "0.13em", textTransform: "uppercase",
                color: "rgba(121,204,172,0.4)", marginBottom: 10,
              }}>Quick Dial</p>
              <div className="footer-phones">
                {phones.map((p, i) => (
                  <motion.a
                    key={i} href={`tel:${p.number.replace(/\s/g, "")}`}
                    whileHover={{ background: "rgba(31,143,99,0.18)" }}
                    style={{
                      padding: "9px 11px", borderRadius: 10,
                      border: "1px solid rgba(65,170,128,0.13)",
                      background: "rgba(31,143,99,0.07)",
                      textDecoration: "none", transition: "background 0.2s",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.55rem", fontWeight: 700,
                      color: "#41AA80", textTransform: "uppercase",
                      letterSpacing: "0.08em", marginBottom: 2,
                    }}>{p.label}</p>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.8rem", fontWeight: 800,
                      color: "#fff",
                    }}>{p.number}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Link columns ── */}
            {Object.entries(footerLinks).map(([heading, links], ci) => (
              <motion.div key={ci} variants={fadeUp} custom={ci + 1}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 7, marginBottom: "1.4rem",
                }}>
                  <div style={{
                    width: 3, height: 14, borderRadius: 99,
                    background: "linear-gradient(to bottom, #1F8F63, #41AA80)",
                  }} />
                  <h4 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 11, fontWeight: 800,
                    textTransform: "uppercase", letterSpacing: "0.13em",
                    color: "#41AA80", margin: 0,
                  }}>{heading}</h4>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {links.map((link, li) => (
                    <li key={li}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4, color: "#A6DDC8" }}
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.82rem", fontWeight: 500,
                          color: "rgba(166,221,200,0.58)",
                          textDecoration: "none",
                          display: "inline-flex", alignItems: "center", gap: 6,
                          transition: "color 0.18s ease",
                        }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Locations below Support column */}
                {heading === "Support" && (
                  <div style={{ marginTop: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "1rem" }}>
                      <div style={{ width: 3, height: 14, borderRadius: 99, background: "linear-gradient(to bottom, #1F8F63, #41AA80)" }} />
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.13em", color: "#41AA80", margin: 0 }}>Locations</h4>
                    </div>
                    <div className="footer-locations">
                      {locations.map((loc, i) => (
                        <div key={i} style={{
                          padding: "9px 11px", borderRadius: 10,
                          border: "1px solid rgba(65,170,128,0.1)",
                          background: "rgba(31,143,99,0.05)",
                        }}>
                          <p style={{ fontSize: 14, marginBottom: 4 }}>{loc.icon}</p>
                          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "#41AA80", marginBottom: 3 }}>{loc.title}</p>
                          <p style={{ fontFamily: "'Lora', serif", fontSize: "0.68rem", color: "rgba(166,221,200,0.5)", lineHeight: 1.5 }}>{loc.short}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ── BOTTOM BAR ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="footer-bottom-inner"
            style={{ padding: "1.6rem 0" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Logo size="sm" />
              <div style={{ width: 1, height: 28, background: "rgba(121,204,172,0.12)" }} />
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.75rem", color: "rgba(121,204,172,0.38)",
              }}>
                © {new Date().getFullYear()} Chi Farms Ltd. All rights reserved.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              {["Privacy Policy", "Terms of Use", "NAFDAC Certified"].map((t, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ color: "#79CCAC" }}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.72rem", fontWeight: 500,
                    color: "rgba(121,204,172,0.38)",
                    textDecoration: "none",
                    transition: "color 0.18s ease",
                    display: "flex", alignItems: "center", gap: 5,
                  }}
                >
                  {i === 2 && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />}
                  {t}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </footer>
    </>
  );
}