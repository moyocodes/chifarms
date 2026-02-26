import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";

const slides = [
  {
    title: "Premium Poultry Production",
    sub: "Day-old chicks, parent stock and broilers",
    text: "Breeder chicks, parent stock and commercial day-old chicks raised for tropical excellence.",
    image: "/images/poultry.jpg",
    accent: "primary-400",
    cta: "Book Day-Old Chicks",
    tag: "🐓 Poultry Division",
  },
  {
    title: "Frozen Meat Products",
    sub: "From our processing plant to your shelf",
    text: "High-quality chicken, sausages and beef supplied to restaurants and supermarkets nationwide.",
    image: "/images/frozen.jpg",
    accent: "#4A9ECC",
    cta: "Order Frozen Products",
    tag: "❄️ Frozen Foods",
  },
  {
    title: "Aquaculture Excellence",
    sub: "Catfish, fingerlings & table fish",
    text: "Sustainably farmed catfish bred with best-practice biosecurity from water to market.",
    image: "/images/aquaculture.jpg",
    accent: "primary",
    cta: "Explore Aquaculture",
    tag: "🐟 Aqua Division",
  },
  {
    title: "Animal Health & Biosecurity",
    sub: "Vaccines, labs & veterinary expertise",
    text: "Modern diagnostics and veterinary protocols supporting Nigerian farmers at scale.",
    image: "/images/equipment.jpg",
    accent: "#A0845C",
    cta: "Learn More",
    tag: "🧬 Veterinary",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];
  const progressRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 3500);
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
      {/* ── background image ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* ── layered overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(8,42,32,0.88) 0%, rgba(8,42,32,0.55) 15%, rgba(0,0,0,0.15) 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(8,42,32,0.7) 0%, transparent 50%)",
        }}
      />

      {/* ── dot grid ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.06,
          backgroundImage:
            "radial-gradient(circle, #A6DDC8 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
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
            style={{ maxWidth: 680 }}
          >
            {/* tag pill */}
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
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
              }}
            >
              {slide.tag}
            </motion.div>

            {/* eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary-50"
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",

                marginBottom: 16,
              }}
            >
              Chi Farms Limited
            </motion.p>

            {/* headline */}
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
                fontWeight: 800,
                lineHeight: 1.07,
                color: "#fff",
                marginBottom: "1.25rem",
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

            {/* sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary-300"
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "1.1rem",

                lineHeight: 1.7,
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
              <motion.a
                href="contact"
                whileHover={{
                  y: -2,
                  boxShadow: "0 16px 40px rgba(31,143,99,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 14,
                  textDecoration: "none",
                  background: `linear-gradient(135deg,primary 0%,primary-700} 100%)`,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  boxShadow: "0 8px 28px rgba(31,143,99,0.4)",
                }}
              >
                {slide.cta}
                <ArrowRight size={16} />
              </motion.a>

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
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#fff",
                  transition: "background 0.2s ease",
                }}
              >
                See All Products
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── slide thumbnails (right side) ── */}
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
              border:
                i === index
                  ? `2px solid ${"primary-300"}`
                  : "2px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              padding: 0,
              background: "none",
              boxShadow:
                i === index ? "0 0 0 3px rgba(121,204,172,0.25)" : "none",
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
                filter: i === index ? "none" : "brightness(0.5)",
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* ── progress indicators ── */}
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
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{
                width: i === index ? 36 : 8,
                background:
                  i === index ? "primary-300" : "rgba(255,255,255,0.35)",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 6, borderRadius: 99 }}
            />
          </button>
        ))}

        {/* auto-play progress bar */}
        <AnimatePresence mode="wait">
          {!paused && (
            <motion.div
              key={index + "-bar"}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: 2,
                background: "primary-300",
                transformOrigin: "left",
                borderRadius: 99,
                opacity: 0.5,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Hero;
