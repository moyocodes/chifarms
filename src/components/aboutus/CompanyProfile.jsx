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
    <div className="flex flex-col gap-[10px]">
      {/* Main slide */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-[0_32px_80px_rgba(0,0,0,0.18)] select-none">
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
            className="absolute inset-0 w-full h-full object-cover"
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
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-primary-500"
          />
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pt-10 pb-4 flex items-end justify-between">
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
              <p className="font-heading text-[10px] uppercase tracking-[0.14em] text-white/50 m-0">
                {idx + 1} / {carouselImages.length}
              </p>
              <p className="font-heading font-semibold text-[14px] text-white m-0 mt-[2px]">
                {img.label}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => paginate(d)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/15 backdrop-blur-[8px] border border-white/25 text-lg leading-none cursor-pointer transition-transform duration-200 hover:scale-110"
              >
                {d < 0 ? "‹" : "›"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2">
        {carouselImages.map((im, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 rounded-lg overflow-hidden aspect-[4/3] p-0 bg-transparent cursor-pointer transition-all duration-[350ms] ease-in-out"
            style={{
              outline: i === idx ? "2px solid #1F8F63" : "2px solid transparent",
              outlineOffset: 2,
              opacity: i === idx ? 1 : 0.5,
              transform: i === idx ? "scale(1)" : "scale(0.96)",
            }}
          >
            <img
              src={im.src}
              alt={im.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   COMPANY SECTION
══════════════════════════════════════════════ */
function CompanyProfile() {
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
      id="company-profile"
      ref={ref}
      className="relative overflow-hidden py-[clamp(1rem,8vw,1rem)] bg-[#f8faf9]"
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
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 0;
          }
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

      {/* BG blob top-left */}
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
          className="w-full h-full rounded-full blur-[64px]"
          style={{
            background:
              "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* BG blob right */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[480px] h-[480px] rounded-full pointer-events-none blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(65,170,128,0.07) 0%, transparent 65%)",
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
          WebkitMaskImage:
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

      {/* ── Main container ── */}
      <div className="relative max-w-[1152px] mx-auto px-6">

        <div className="about-grid">

          {/* ── HEADER LEFT: headline ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            className="mb-8"
          >
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading font-black leading-[1.05] m-0 text-[#0f1f16] text-[clamp(2.2rem,4.5vw,3.5rem)]"
            >
              Established since{" "}
              <br />
              <span
                className="pb-2 inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg,#1F8F63 0%,#41AA80 60%,#68C89F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1986.
              </span>
            </motion.h2>
          </motion.div>

          {/* ── HEADER RIGHT: sub-copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-end mb-10"
          >
            <p className="font-heading text-base leading-[1.7] m-0 text-[#5a7065]">
              With a broad and diversified products and services portfolio, chi farms impact directly the food industry with superior poultry and aquaculture genetics, frozen foods, precision laboratory, and technical support services across the value chains, ensuring that producers of animal protein from farm to the table are supported with top quality housing, machines and equipment supplies, with robust customer service, including training and capacity development in our poultry school.
            </p>
          </motion.div>

          {/* ── BODY LEFT: Carousel ── */}
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
              className="absolute -bottom-2 -right-4 rounded-xl p-[10px_14px] flex items-center gap-[10px] bg-white shadow-[0_12px_36px_rgba(31,143,99,0.25)]"
            >
              <div className="w-9 h-9 rounded-[9px] bg-primary-500/[0.12] flex items-center justify-center text-lg">
                🏅
              </div>
              <div>
                <p className="font-heading font-bold text-xs text-primary-500 m-0 leading-[1.2]">
                  NAFDAC & SON
                </p>
                <p className="font-heading text-[10px] text-primary-500/65 m-0 mt-[2px]">
                  Certified Operations
                </p>
              </div>
            </motion.div>

            {/* Dashed ring */}
            <div
              className="absolute -top-5 -left-5 -z-10 w-52 h-52 rounded-full border-2 border-dashed border-primary-500/20"
              aria-hidden
            />
          </motion.div>

          {/* ── RIGHT: Copy ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            className="pt-5 flex flex-col justify-center"
          >
            {/* Pull-quote card */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-2xl p-6 mb-7 relative overflow-hidden shadow-[0_8px_40px_rgba(31,143,99,0.28)]"
              style={{
                background: "linear-gradient(135deg, #1F8F63 0%, #166B4A 100%)",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 bg-[radial-gradient(circle,#fff_0%,transparent_70%)]" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10 bg-[radial-gradient(circle,#fff_0%,transparent_70%)]" />

              <p className="font-heading font-bold text-white leading-[1.45] m-0 text-[clamp(1rem,1.8vw,1.2rem)]">
                Chi Farms has progressed strategically in the Agro-livestock and Food industries to becoming a top Nigerian brand for quality products and services.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-[2px] rounded-full bg-white/35" />
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-heading text-[0.97rem] leading-[1.75] mb-6 text-[#5a7065]"
            >
              The main farm is located at Ajanla Village, KM 20, off Ibadan - Lagos Expressway, Ibadan, while the meat processing plant is located at KM 51, off Ibadan - Lagos Expressway, Ogun State. Our cold store and frozen foods distribution centre are located at our corporate head office, Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Apapa - Oworonshoki Expressway, Lagos, Nigeria.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center mb-6"
            >
              <a
                href="products"
                className="inline-flex items-center gap-2 font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-primary-500 no-underline"
              >
                Explore our products
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-primary-500/10 border border-primary-500/20 text-base transition-all duration-[250ms]">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="h-px origin-left"
          style={{
            background: "linear-gradient(90deg,#1F8F63,#41AA80,transparent)",
          }}
        />
      </div>
    </section>
  );
}

export default CompanyProfile;