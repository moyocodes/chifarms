import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ─── Design tokens (replace Tailwind class strings with real values) ───────────
const colors = {
  primary:       "#1F8F63",   // Chi Farms brand green
  primaryDark:   "#166B4A",
  primaryLight:  "#79CCAC",
  overlayDeep:   "rgba(6, 28, 20, 0.92)",   // near-black dark-green (left anchor)
  overlayMid:    "rgba(6, 28, 20, 0.50)",   // softer mid-zone
  overlayBottom: "rgba(6, 28, 20, 0.65)",   // vignette at bottom
};

const slides = [
  {
    title: "Premium Poultry Production",
    sub: "Day-old chicks, parent stock and broilers",
    text: "Breeder chicks, parent stock and commercial day-old chicks raised for tropical excellence.",
    image: "/images/poultry.jpg",
    cta: "Book Day-Old Chicks",
    tag: "🐓 Poultry Division",
  },
  {
    title: "Frozen Meat Products",
    sub: "From our processing plant to your shelf",
    text: "High-quality chicken, sausages and beef supplied to restaurants and supermarkets nationwide.",
    image: "/images/froze.jpg",
    cta: "Order Frozen Products",
    tag: "❄️ Frozen Foods",
  },
  {
    title: "Aquaculture Excellence",
    sub: "Catfish, fingerlings & table fish",
    text: "Sustainably farmed catfish bred with best-practice biosecurity from water to market.",
    image: "/images/aquaculture.jpg",
    cta: "Explore Aquaculture",
    tag: "🐟 Aqua Division",
  },
  {
    title: "Animal Health & Biosecurity",
    sub: "Vaccines, labs & veterinary expertise",
    text: "Modern diagnostics and veterinary protocols supporting Nigerian farmers at scale.",
    image: "/images/equipment.jpg",
    cta: "Learn More",
    tag: "🧬 Veterinary",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 5000);
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
      {/* ── Background image ─────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* ── FIX: Overlays use near-BLACK (not green) on the left so white text pops */}
      {/* Left anchor: very dark, almost black */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            108deg,
            ${colors.overlayDeep}  0%,
            ${colors.overlayMid}   38%,
            rgba(0,0,0,0.05)       70%
          )`,
        }}
      />
      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, ${colors.overlayBottom} 0%, transparent 45%)`,
        }}
      />

      {/* ── Subtle dot grid texture ───────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.05,
          backgroundImage: "radial-gradient(circle, #A6DDC8 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Thin accent bar (left edge) ──────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: 3,
          borderRadius: 99,
          background: `linear-gradient(to bottom, transparent, ${colors.primaryLight}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 660 }}
          >
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
                padding: "6px 16px",
                borderRadius: 99,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {slide.tag}
            </motion.div>

            {/* Eyebrow — now uses bright mint so it stands out on the dark BG */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.primaryLight,   // ✅ bright mint on dark — readable
                marginBottom: 16,
              }}
            >
              Chi Farms Limited
            </motion.p>

            {/* Headline — pure white, high contrast */}
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#FFFFFF",
                marginBottom: "1.2rem",
              }}
            >
              {slide.title.split(" ").map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + wi * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Body — off-white (not the same green as brand) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)",   // ✅ off-white, clearly legible
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: 500,
              }}
            >
              {slide.text}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              {/* Primary CTA — solid brand green (works on dark bg) */}
              <motion.a
                href="contact"
                whileHover={{
                  y: -2,
                  boxShadow: `0 16px 40px rgba(31,143,99,0.55)`,
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 14,
                  textDecoration: "none",
                  // ✅ Real gradient — no broken template literals
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  boxShadow: `0 8px 28px rgba(31,143,99,0.4)`,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {slide.cta}
                <ArrowRight size={16} />
              </motion.a>

              {/* Secondary CTA — frosted glass */}
              <motion.a
                href="products"
                whileHover={{ background: "rgba(255,255,255,0.18)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 14,
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#fff",
                  transition: "background 0.2s ease",
                  cursor: "pointer",
                }}
              >
                See All Products
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide thumbnails (right side) ────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {slides.map((s, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 52,
              height: 40,
              borderRadius: 8,
              overflow: "hidden",
              border: i === index
                ? `2px solid ${colors.primaryLight}`   // ✅ real color value
                : "2px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              padding: 0,
              background: "none",
              boxShadow: i === index ? `0 0 0 3px rgba(121,204,172,0.25)` : "none",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <img
              src={s.image}
              alt={s.tag}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: i === index ? "none" : "brightness(0.45)",
                transition: "filter 0.25s ease",
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* ── Progress indicators ───────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
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
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: 2,
                background: colors.primaryLight,
                transformOrigin: "left",
                borderRadius: 99,
                opacity: 0.55,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}