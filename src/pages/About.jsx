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
   IMAGE CAROUSEL — filmstrip thumbnails
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
    <div className="flex flex-col gap-3">
      {/* ── Main slide ── */}
      <div
        className="relative rounded-2xl overflow-hidden select-none"
        style={{
          aspectRatio: "16/11",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
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
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 35%, rgba(0,0,0,0.52) 100%)",
          }}
        />

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10">
          <motion.div
            key={idx + "-bar"}
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-10 flex items-end justify-between">
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
              <p className="font-body text-[10px] uppercase tracking-[0.14em] text-white/50 m-0">
                {idx + 1} / {carouselImages.length}
              </p>
              <p className="font-heading font-semibold text-[14px] text-white m-0 mt-0.5">
                {img.label}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => paginate(d)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontSize: "18px",
                  lineHeight: 1,
                }}
              >
                {d < 0 ? "‹" : "›"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="flex gap-2">
        {carouselImages.map((im, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative flex-1 rounded-lg overflow-hidden"
            style={{
              aspectRatio: "4/3",
              outline:
                i === idx
                  ? "2px solid var(--color-primary,#1F8F63)"
                  : "2px solid transparent",
              outlineOffset: "2px",
              opacity: i === idx ? 1 : 0.5,
              transform: i === idx ? "scale(1)" : "scale(0.96)",
              transition: "all 0.35s ease",
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
      className="relative overflow-hidden py-24 bg-secondary-50"
    >
      {/* ── BG blobs ── */}
      <motion.div
        style={{ y: blobY }}
        className="absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 65%)",
            filter: "blur(64px)",
          }}
        />
      </motion.div>

      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(65,170,128,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(31,143,99,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Decorative SVG arc */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full"
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

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-heading text-[10px] font-extrabold uppercase tracking-[0.18em] mb-5 bg-primary-100/50 border border-primary/20 text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Our Story
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          </motion.div>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading font-black leading-[1.05] m-0 text-dark"
              style={{ fontSize: "clamp(2.6rem,4.5vw,4rem)" }}
            >
              Rooted in nature,
              <br />
              <span
                className="text-primary"
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

            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body leading-relaxed m-0 text-dark-400"
              style={{ fontSize: "1.0rem", maxWidth: "420px" }}
            >
              Chi Farms Ltd. is an integrated poultry operation with breeding,
              commercial broiler processing, aquaculture, and veterinary
              services — all under one roof.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Main 2-col layout ── */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-20 items-start mb-16">
          {/* LEFT — Carousel */}
          <motion.div
            className="relative"
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
              className="absolute -bottom-2 -right-4 rounded-xl p-3 flex items-center gap-2.5 bg-secondary"
              style={{ boxShadow: "0 12px 36px rgba(31,143,99,0.35)" }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-lg">
                🏅
              </div>
              <div>
                <p className="font-heading font-bold text-[12px] text-primary m-0 leading-tight">
                  NAFDAC & SON
                </p>
                <p className="font-body text-[10px] text-primary/65 m-0 mt-0.5">
                  Certified Operations
                </p>
              </div>
            </motion.div>

            {/* Decorative dashed ring */}
            <div
              className="absolute -top-5 -left-5 -z-10 w-52 h-52 rounded-full border-2 border-dashed border-primary/20"
              aria-hidden
            />
          </motion.div>

          {/* RIGHT — Copy */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            className="flex flex-col justify-center"
          >
            {/* Pull-quote card */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-2xl p-6 mb-7 relative overflow-hidden bg-primary-400"
              style={{ boxShadow: "0 8px 40px rgba(31,143,99,0.28)" }}
            >
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle,#fff 0%,transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
                style={{
                  background: "radial-gradient(circle,#fff 0%,transparent 70%)",
                }}
              />
              <p
                className="font-heading font-bold text-white leading-snug m-0"
                style={{ fontSize: "clamp(1.05rem,1.8vw,1.25rem)" }}
              >
                "From hatchery to harvest — we power every link in Nigeria's
                poultry value chain."
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-[2px] rounded-full bg-white/35" />
                <span className="font-body text-[12px] text-white/55">
                  Chi Farms, Est. 2004
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body leading-relaxed mb-6 text-dark-400"
              style={{ fontSize: "0.97rem" }}
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
              className="flex items-center mb-6"
            >
              <a
                href="products"
                className="inline-flex items-center gap-2 font-heading font-bold text-[13px] uppercase tracking-[0.1em] text-primary transition-all duration-300 group"
              >
                Explore our products
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-primary-100/60 border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  →
                </span>
              </a>
            </motion.div>

            {/* ── Inline stats ── */}
            <motion.div
              ref={statsRef}
              variants={fadeUp}
              custom={4}
              className="grid grid-cols-4 gap-0 rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(31,143,99,0.13)",
                background:
                  "linear-gradient(135deg,#fff 0%,rgba(210,238,227,0.3) 100%)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center py-4 px-2 relative"
                  style={{
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(31,143,99,0.09)"
                        : "none",
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-b-full w-8"
                    style={{
                      background: "linear-gradient(90deg,#1F8F63,#41AA80)",
                      opacity: 0.55,
                    }}
                  />
                  <p
                    className="font-heading font-black m-0 leading-none"
                    style={{
                      fontSize: "1.45rem",
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
                  <p className="font-body text-[10px] mt-1 m-0 text-dark-400 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Partnerships strip ── */}
        <motion.div
          className="flex items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {[...Array(2)]
            .flatMap(() => [
              { name: "NAFDAC", logo: "https://chi-farms.com/wp-content/uploads/2021/04/download-1-150x150.png" },
              { name: "SON Nigeria", logo: "https://chi-farms.com/wp-content/uploads/2021/04/zoetis-150x150.png" },
              { name: "ABZ Pharma", logo: "https://chi-farms.com/wp-content/uploads/2021/04/aviagen-1-150x150.png" },
              { name: "AgroFeed Co.", logo: "https://chi-farms.com/wp-content/uploads/2021/04/hendrix-genetics-1-150x150.jpg" },
              { name: "PoultryCare", logo: "https://chi-farms.com/wp-content/uploads/2021/04/phosphea-1-150x150.jpg" },
              { name: "VetLine NG", logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912419023-150x150.jpg" },
              { name: "FarmTech Ltd", logo: "https://chi-farms.com/wp-content/uploads/2021/04/phosphea-1-150x150.jpg" },
              { name: "NigerAgro", logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912450162-150x150.jpg" },
              { name: "AgroTech Solutions", logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912776218-150x150.jpg" }

            ])
            .map((p, i) => (
              <div key={i} className="flex items-center gap-10 flex-shrink-0">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-32 w-32 object-contain opacity-70 hover:opacity-100 transition duration-300"
                />

                {/* divider */}
                <span className="w-1 h-1 rounded-full bg-green-700 opacity-30" />
              </div>
            ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="mt-10 h-px origin-left"
          style={{
            background: "linear-gradient(90deg,#1F8F63,#41AA80,transparent)",
          }}
        />
      </div>
    </section>
  );
}

export default About;
