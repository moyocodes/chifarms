import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

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
};

const locations = [
  {
    icon: "🏢",
    title: "HQ & Frozen Food Sales",
    address: "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Apapa–Oworonshoki Expressway, Lagos",
  },
  {
    icon: "🏭",
    title: "Processing Plant",
    address: "KM 51, off Lagos–Ibadan Expressway, Ogun State",
  },
  {
    icon: "🔬",
    title: "Booking / Diagnostic Centre",
    address: "16, Alaafin Avenue, Oluyole Estate, Ibadan",
  },
  {
    icon: "🌾",
    title: "Main Farm Office",
    address: "Ajanla Village, KM 20 off Ibadan–Lagos Expressway, Ibadan",
  },
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

function Logo({ size = "lg" }) {
  const isLg = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: isLg ? 12 : 8 }}>
      <img
        src="/chilogo.svg"
        alt="Chi Farms"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
        style={{
          width: "20%",
          height: "30%",
          objectFit: "contain",
          filter: "brightness(0) invert(1)",
        }}
      />
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
        .fg  { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
        .fl  { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
        .fb  { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
        .floc { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
        @media(max-width:900px){ .fg{ grid-template-columns:1fr 1fr; gap:2.5rem 2rem; } .floc{ grid-template-columns:1fr 1fr; } }
        @media(max-width:560px){
          .fg{ grid-template-columns:1fr; gap:2rem; }
          .fl{ grid-template-columns:1fr; }
          .fb{ flex-direction:column; align-items:flex-start; }
          .floc{ grid-template-columns:1fr; }
        }
      `}</style>

      <footer
        ref={ref}
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #0D4331 0%, #082A20 75%, #051a15 100%)",
        }}
      >
        {/* Atmosphere */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.055,
            backgroundImage:
              "radial-gradient(circle, #A6DDC8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "12%",
            width: 460,
            height: 460,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(31,143,99,0.13) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: "6%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(65,170,128,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-1%",
            bottom: "5%",
            fontSize: 250,
            opacity: 0.018,
            pointerEvents: "none",
            lineHeight: 1,
            userSelect: "none",
            transform: "rotate(8deg)",
          }}
        >
          🐓
        </div>

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
          }}
        >
          {/* ── Locations Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: "2.5rem 0 0" }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(121,204,172,0.5)",
                margin: "0 0 1rem",
              }}
            >
              📍 Our Locations
            </p>
            <div className="floc">
              {locations.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: "rgba(121,204,172,0.04)",
                    border: "1px solid rgba(121,204,172,0.08)",
                  }}
                >
                  <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{loc.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#79CCAC",
                        margin: "0 0 3px",
                      }}
                    >
                      {loc.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 400,
                        color: "rgba(121,204,172,0.45)",
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {loc.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Divider ── */}
          <div
            style={{
              height: 1,
              background: "rgba(121,204,172,0.08)",
              margin: "2rem 0 0",
            }}
          />

          {/* ── Bottom bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="fb"
            style={{ padding: "1.4rem 0" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Logo size="sm" />
              <div
                style={{
                  width: 1,
                  height: 24,
                  background: "rgba(121,204,172,0.1)",
                }}
              />
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(121,204,172,0.28)",
                  margin: 0,
                }}
              >
                © {new Date().getFullYear()} Chi Farms Ltd. All rights reserved.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1.3rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {["Privacy Policy", "Terms of Use", "NAFDAC Certified"].map(
                (t, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ color: "#79CCAC" }}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "rgba(121,204,172,0.28)",
                      textDecoration: "none",
                      transition: "color 0.18s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    {i === 2 && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#1F8F63",
                          display: "inline-block",
                        }}
                      />
                    )}
                    {t}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}