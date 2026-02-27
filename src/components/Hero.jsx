import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DIVISIONS } from "@/lib/product";

// Map each division to a hero slide — one image per division slug
const DIVISION_IMAGES = {
  poultry:     "/images/poultry.jpg",
  frozen:      "/images/froze.jpg",
  aquaculture: "/images/aquaculture.jpg",
  veterinary:  "/images/vett.jpg",
  support:     "/images/suppo.jpg",
  equipment:   "/images/equipment.jpg",
};

const colors = {
  primaryLight:  "#79CCAC",
  overlayDeep:   "rgba(6, 28, 20, 0.92)",
  overlayMid:    "rgba(6, 28, 20, 0.50)",
  overlayBottom: "rgba(6, 28, 20, 0.65)",
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const division = DIVISIONS[index];
  const image = DIVISION_IMAGES[division.slug] ?? "/images/poultry.jpg";

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % DIVISIONS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(108deg, ${colors.overlayDeep} 0%, ${colors.overlayMid} 38%, rgba(0,0,0,0.05) 70%)`,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${colors.overlayBottom} 0%, transparent 45%)`,
      }} />

      {/* Dot grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05,
        backgroundImage: "radial-gradient(circle, #A6DDC8 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* Left accent bar */}
      <div style={{
        position: "absolute", left: 0, top: "20%", bottom: "20%",
        width: 3, borderRadius: 99,
        background: `linear-gradient(to bottom, transparent, ${colors.primaryLight}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1152, margin: "0 auto", padding: "0 2rem", width: "100%",
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={division.slug}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 660 }}
          >
           

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 800,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: colors.primaryLight, marginBottom: 16,
              }}
            >
              Chi Farms Limited — {division.number}
            </motion.p>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
              fontWeight: 800, lineHeight: 1.08, color: "#FFFFFF", marginBottom: "1.2rem",
            }}>
              {division.title.split(" ").map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + wi * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem",
                fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)", marginBottom: 12,
              }}
            >
              {division.sub}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.75,
                marginBottom: "2rem", maxWidth: 500,
              }}
            >
              {division.desc}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <motion.a
                href={division.href}
                whileHover={{ y: -2, boxShadow: `0 16px 40px rgba(31,143,99,0.55)` }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px", borderRadius: 14, textDecoration: "none",
                  background: `linear-gradient(135deg, ${division.accent} 0%, ${division.dark}cc 100%)`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                  fontSize: 14, color: "#fff",
                  boxShadow: `0 8px 28px ${division.accent}66`,
                  border: "none", cursor: "pointer",
                }}
              >
                Explore {division.title}
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/products"
                whileHover={{ background: "rgba(255,255,255,0.18)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 24px", borderRadius: 14, textDecoration: "none",
                  background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)", fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600, fontSize: 14, color: "#fff",
                  transition: "background 0.2s ease", cursor: "pointer",
                }}
              >
                See All Products
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right-side thumbnail rail — all 6 divisions */}
      <div style={{
        position: "absolute", right: "2rem", top: "50%",
        transform: "translateY(-50%)", zIndex: 10,
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        {DIVISIONS.map((div, i) => (
          <motion.button
            key={div.slug}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            title={div.title}
            style={{
              width: 52, height: 40, borderRadius: 8, overflow: "hidden",
              border: i === index
                ? `2px solid ${colors.primaryLight}`
                : "2px solid rgba(255,255,255,0.2)",
              cursor: "pointer", padding: 0, background: "none",
              boxShadow: i === index ? `0 0 0 3px rgba(121,204,172,0.25)` : "none",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <img
              src={DIVISION_IMAGES[div.slug] ?? "/images/poultry.jpg"}
              alt={div.title}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                filter: i === index ? "none" : "brightness(0.4)",
                transition: "filter 0.25s ease",
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* Bottom progress dots — all 6 */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", alignItems: "center", gap: 8, zIndex: 10,
      }}>
        {DIVISIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}
          >
            <motion.div
              animate={{
                width: i === index ? 36 : 8,
                background: i === index ? colors.primaryLight : "rgba(255,255,255,0.35)",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 6, borderRadius: 99 }}
            />
          </button>
        ))}

        {/* Auto-play progress bar */}
        <AnimatePresence mode="wait">
          {!paused && (
            <motion.div
              key={index + "-bar"}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              style={{
                position: "absolute", bottom: -8, left: 0, right: 0,
                height: 2, background: colors.primaryLight,
                transformOrigin: "left", borderRadius: 99, opacity: 0.55,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}