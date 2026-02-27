import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

/* ══════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ══════════════════════════════════════════════
   STATS DATA
══════════════════════════════════════════════ */
const stats = [
  { raw: 20, suffix: "+", label: "Years Operating", icon: "🌱" },
  { raw: 18, suffix: "", label: "Product Lines", icon: "📦" },
  {
    raw: 3000,
    suffix: "+",
    label: "Farmers Trained",
    icon: "🤝",
    compact: true,
  },
  { raw: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
];

/* ══════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = "", compact = false, inView }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target]);

  const display =
    compact && count >= 1000
      ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K`
      : count.toLocaleString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

/* ══════════════════════════════════════════════
   IMAGE CAROUSEL
══════════════════════════════════════════════ */
const carouselImages = [
  {
    src: "https://chi-farms.com/wp-content/uploads/2021/07/cropped-IMG_4965-1536x708.jpg",
    label: "Our Team",
  },
  {
    src: "https://chi-farms.com/wp-content/uploads/2021/04/Owode-closed-houses-external-768x576.jpg",
    label: "Pen House",
  },
  {
    src: "https://chi-farms.com/wp-content/uploads/2021/04/Owode-Cluster-IV.jpg",
    label: "Owode Farm",
  },
  {
    src: "https://chi-farms.com/wp-content/uploads/2021/04/Sanusi-Farm-v1.jpg",
    label: "GPS Farm",
  },
  {
    src: "https://chi-farms.com/wp-content/uploads/2021/10/WhatsAppImage-2021-09-27-at-14.09.53.jpeg",
    label: "Catfish Farm",
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 1.03 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ImageCarousel() {
  const [[idx, dir], setSlide] = useState([0, 0]);
  const paginate = (newDir) =>
    setSlide(([prev]) => [
      (prev + newDir + carouselImages.length) % carouselImages.length,
      newDir,
    ]);
  const goTo = (i) => setSlide([i, i > idx ? 1 : -1]);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
  }, [idx]);

  const img = carouselImages[idx];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Main slide */}
      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          aspectRatio: "16/11",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
          userSelect: "none",
        }}
      >
        <AnimatePresence initial={false} custom={dir}>
          <motion.img
            key={idx}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            src={img.src}
            alt={img.label}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>

        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 35%, rgba(0,0,0,0.52) 100%)",
          }}
        />

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <motion.div
            key={idx + "-bar"}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            style={{ height: "100%", background: "#1F8F63" }}
          />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2.5rem 1.25rem 1rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx + "-label"}
              initial={{ opacity: 0, x: -8 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              exit={{ opacity: 0, x: 8 }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                {idx + 1} / {carouselImages.length}
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#fff",
                  margin: "2px 0 0",
                }}
              >
                {img.label}
              </p>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: "flex", gap: 8 }}>
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => paginate(d)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontSize: 18,
                  lineHeight: 1,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {d < 0 ? "‹" : "›"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div style={{ display: "flex", gap: 8 }}>
        {carouselImages.map((im, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              flex: 1,
              borderRadius: 8,
              overflow: "hidden",
              aspectRatio: "4/3",
              outline:
                i === idx ? "2px solid #1F8F63" : "2px solid transparent",
              outlineOffset: 2,
              opacity: i === idx ? 1 : 0.5,
              transform: i === idx ? "scale(1)" : "scale(0.96)",
              transition: "all 0.35s ease",
              cursor: "pointer",
              padding: 0,
              background: "none",
            }}
          >
            <img
              src={im.src}
              alt={im.label}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════════════ */
function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-24px", "24px"]);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(3rem, 8vw, 6rem) 0",
        background: "#f8faf9",
      }}
    >
      {/* Responsive styles injected */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          column-gap: clamp(2rem, 4vw, 5rem);
          row-gap: 0;
      
     
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .partners-outer {
          overflow: hidden;
          /* mask fade edges */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 0;
          }
          /* On mobile, header-right (sub-copy) sits right after header-left */
        }

        @media (max-width: 560px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) {
            border-bottom: 1px solid rgba(31,143,99,0.09);
          }
        }
      `}</style>

      {/* BG blobs */}
      <motion.div
        style={{
          y: blobY,
          position: "absolute",
          top: -128,
          left: -96,
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 65%)",
            filter: "blur(64px)",
          }}
        />
      </motion.div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          width: 480,
          height: 480,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(65,170,128,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.25,
          backgroundImage:
            "radial-gradient(circle, rgba(31,143,99,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Decorative SVG arc */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          opacity: 0.07,
        }}
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
          preserveAspectRatio="none"
        >
          <path
            d="M-100 500 Q360 200 720 350 Q1080 500 1540 150"
            stroke="#1F8F63"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M-100 600 Q360 300 720 450 Q1080 600 1540 250"
            stroke="#41AA80"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* ── Main container — same maxWidth + padding as navbar/ProductListing ── */}
      <div
        style={{
          position: "relative",
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/*
          ── Unified grid: header row + body row share the same column track,
             so "OUR STORY"/headline left-edge = carousel left-edge,
             and sub-copy/right-col left-edge = "From hatchery" card left-edge.
        ── */}
        <div className="about-grid">
          {/* ── HEADER LEFT: pill + headline ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            style={{ marginBottom: "2rem" }}
          >
            {/* "Our Story" pill */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "6px 16px",
                borderRadius: 99,
                marginBottom: 20,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "rgba(31,143,99,0.08)",
                border: "1px solid rgba(31,143,99,0.2)",
                color: "#1F8F63",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1F8F63",
                  display: "inline-block",
                }}
              />
              Our Story
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1F8F63",
                  display: "inline-block",
                }}
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
            
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 900,
                lineHeight: 1.05,
                margin: 0,
                color: "#0f1f16",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              }}
            >
              Rooted in nature,
              <br />
              <span
              className="pb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg,#1F8F63 0%,#41AA80 60%,#68C89F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                driven by science.
              </span>
            </motion.h2>
          </motion.div>

          {/* ── HEADER RIGHT: sub-copy — left edge = "From hatchery" card left edge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                margin: 0,
                color: "#5a7065",
              }}
            >
              Chi Farms Ltd. is an integrated poultry operation with breeding,
              commercial broiler processing, aquaculture, and veterinary
              services — all under one roof.
            </p>
          </motion.div>

          {/* ── BODY LEFT: Carousel (starts on new row, same left column) ── */}
          <motion.div
            style={{ position: "relative" }}
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <ImageCarousel />

            {/* Cert badge floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.78, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                delay: 0.9,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                bottom: -8,
                right: -16,
                borderRadius: 12,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#fff",
                boxShadow: "0 12px 36px rgba(31,143,99,0.25)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "rgba(31,143,99,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                🏅
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    color: "#1F8F63",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  NAFDAC & SON
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 10,
                    color: "rgba(31,143,99,0.65)",
                    margin: "2px 0 0",
                  }}
                >
                  Certified Operations
                </p>
              </div>
            </motion.div>

            {/* Dashed ring */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                zIndex: -1,
                width: 208,
                height: 208,
                borderRadius: "50%",
                border: "2px dashed rgba(31,143,99,0.2)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* RIGHT — Copy */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            className="pt-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Pull-quote card */}
            <motion.div
              variants={fadeUp}
              custom={1}
              style={{
                borderRadius: 16,
                padding: "1.5rem",
                marginBottom: "1.75rem",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #1F8F63 0%, #166B4A 100%)",
                boxShadow: "0 8px 40px rgba(31,143,99,0.28)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -32,
                  right: -32,
                  width: 128,
                  height: 128,
                  borderRadius: "50%",
                  opacity: 0.2,
                  background: "radial-gradient(circle,#fff 0%,transparent 70%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  opacity: 0.1,
                  background: "radial-gradient(circle,#fff 0%,transparent 70%)",
                }}
              />
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.45,
                  margin: 0,
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                }}
              >
                "From hatchery to harvest — we power every link in Nigeria's
                poultry value chain."
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 2,
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.35)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Chi Farms, Est. 2004
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "0.97rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                color: "#5a7065",
              }}
            >
              We provide parent stock to hatcheries, distribute commercial
              chicks, and support customers with post-sales technical services.
              Our aquaculture division breeds premium catfish while our
              veterinary division supplies vaccines backed by modern lab
              infrastructure.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={3}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <a
                href="products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#1F8F63",
                  textDecoration: "none",
                }}
              >
                Explore our products
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(31,143,99,0.1)",
                    border: "1px solid rgba(31,143,99,0.2)",
                    fontSize: 16,
                    transition: "all 0.25s",
                  }}
                >
                  →
                </span>
              </a>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              ref={statsRef}
              variants={fadeUp}
              custom={4}
              className="stats-grid"
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(31,143,99,0.13)",
                background:
                  "linear-gradient(135deg,#fff 0%,rgba(210,238,227,0.3) 100%)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "1rem 0.5rem",
                    position: "relative",
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(31,143,99,0.09)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: 2,
                      width: 32,
                      borderRadius: "0 0 4px 4px",
                      background: "linear-gradient(90deg,#1F8F63,#41AA80)",
                      opacity: 0.55,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      margin: 0,
                      lineHeight: 1,
                      backgroundImage:
                        "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <AnimatedCounter
                      target={s.raw}
                      suffix={s.suffix}
                      compact={s.compact}
                      inView={statsInView}
                    />
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 10,
                      marginTop: 4,
                      color: "#7a9a8a",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Partners marquee ── */}
        <div
          className="partners-outer"
          className="pt-10"
          style={{ marginBottom: "2.5rem" }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              width: "max-content",
            }}
          >
            {[...Array(2)]
              .flatMap(() => [
                {
                  name: "NAFDAC",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/download-1-150x150.png",
                },
                {
                  name: "SON Nigeria",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/zoetis-150x150.png",
                },
                {
                  name: "ABZ Pharma",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/aviagen-1-150x150.png",
                },
                {
                  name: "AgroFeed Co.",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/hendrix-genetics-1-150x150.jpg",
                },
                {
                  name: "PoultryCare",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/phosphea-1-150x150.jpg",
                },
                {
                  name: "VetLine NG",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912419023-150x150.jpg",
                },
                {
                  name: "FarmTech Ltd",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/phosphea-1-150x150.jpg",
                },
                {
                  name: "NigerAgro",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912450162-150x150.jpg",
                },
                {
                  name: "AgroTech Solutions",
                  logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912776218-150x150.jpg",
                },
              ])
              .map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 40,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    style={{
                      height: 80,
                      width: 80,
                      objectFit: "contain",
                      opacity: 0.65,
                      transition: "opacity 0.3s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "0.65")
                    }
                  />
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#1F8F63",
                      opacity: 0.3,
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          style={{
            height: 1,
            transformOrigin: "left",
            background: "linear-gradient(90deg,#1F8F63,#41AA80,transparent)",
          }}
        />
      </div>
    </section>
  );
}

export default About;
