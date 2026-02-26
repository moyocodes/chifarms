import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════
   SHARED ANIMATION VARIANTS
══════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const dropIn = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.14 } },
};



const stats = [
  { value: "20+", label: "Years Operating" },
  { value: "500K+", label: "Chicks / Year" },
  { value: "12", label: "Regional Partners" },
  { value: "98%", label: "Satisfaction" },
];

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative pt-20 overflow-hidden bg-secondary-100"
    >
      <div
        className="absolute -top-20 -left-16 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(166,221,200,0.32) 0%, transparent 65%)",
          filter: "blur(52px)",
        }}
      />
      <div
        className="absolute bottom-0 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(65,170,128,0.16) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1152px] mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 border border-primary-200 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-primary-700 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          Who We Are
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-heading font-extrabold leading-[1.08] text-dark mb-5"
              style={{ fontSize: "clamp(2.2rem,3.5vw,3.2rem)" }}
            >
              Rooted in nature,
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                driven by science.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-[1.05rem] text-dark-500 leading-relaxed mb-4"
            >
              Chi Farms Ltd. is an integrated poultry farm with breeding
              operations and processing of commercial broilers. We provide
              parent stock to hatcheries, distribute commercial chicks and
              support customers with post-sales technical services.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="font-body text-[0.95rem] text-dark-400 leading-relaxed mb-8"
            >
              Our aquaculture division breeds and raises premium catfish, while
              our veterinary division supplies vaccines backed by modern
              laboratory infrastructure.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={4}
              href="#contact"
              whileHover={{
                y: -2,
                boxShadow: "0 14px 32px rgba(31,143,99,0.38)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl no-underline font-heading font-bold text-sm text-white"
              style={{
                background: "linear-gradient(135deg,#1F8F63,#125C42)",
                boxShadow: "0 6px 20px rgba(31,143,99,0.3)",
              }}
            >
              Partner With Us <ArrowRight size={15} />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              }}
            >
              <motion.img
                src="/images/farm-team.jpg"
                alt="Chi Farms"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  y: imgY,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(31,143,99,0.1) 0%, transparent 55%)",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.55,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3.5 flex items-center gap-3"
              style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.1)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-xl">
                ✅
              </div>
              <div>
                <p className="font-heading font-bold text-[13px] text-dark m-0">
                  Certified Operations
                </p>
                <p className="font-body text-[11px] text-dark-400 m-0">
                  NAFDAC & SON Compliant
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-primary-100 mb-16"
          style={{
            background:
              "linear-gradient(135deg,#fff 0%,rgba(210,238,227,0.3) 100%)",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p
                className="font-heading font-extrabold text-primary m-0"
                style={{ fontSize: "2.2rem", lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p className="font-body text-[13px] text-dark-400 mt-1.5">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>


      </div>
         <Products />
    </section>
  );
}

/* ══════════════════════════════════════════════
   PRODUCTS
══════════════════════════════════════════════ */
const products = [
  {
    title: "Poultry",
    tag: "Core Division",
    icon: "🐓",
    desc: "Breeding, processing and live bird distribution — integrated from egg to table.",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.07)",
    border: "rgba(31,143,99,0.14)",
  },
  {
    title: "Aquaculture",
    tag: "Aqua Division",
    icon: "🐟",
    desc: "Premium catfish breeding with best-practice grow-out and cold-chain distribution.",
    accent: "#187553",
    tint: "rgba(24,117,83,0.07)",
    border: "rgba(24,117,83,0.14)",
  },
  {
    title: "Frozen Food",
    tag: "Processing",
    icon: "❄️",
    desc: "Processed and packaged frozen protein maintaining cold-chain integrity.",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.07)",
    border: "rgba(18,92,66,0.14)",
  },
  {
    title: "Equipment",
    tag: "Infrastructure",
    icon: "⚙️",
    desc: "Farm machinery and poultry housing from trusted global manufacturers.",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.07)",
    border: "rgba(13,67,49,0.14)",
  },
  {
    title: "Training & Support",
    tag: "Advisory",
    icon: "📋",
    desc: "Hands-on training, post-sales support and ongoing advisory services.",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.07)",
    border: "rgba(31,143,99,0.14)",
  },
  {
    title: "Health & Biosecurity",
    tag: "Veterinary",
    icon: "🧬",
    desc: "Vaccine supply, lab diagnostics and biosecurity protocols by veterinary experts.",
    accent: "#187553",
    tint: "rgba(24,117,83,0.07)",
    border: "rgba(24,117,83,0.14)",
  },
];

function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-28 overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#1F8F63,#1F8F63 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#1F8F63,#1F8F63 1px,transparent 1px,transparent 48px)",
        }}
      />

      <div className="relative max-w-[1152px] mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-primary-700 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block" /> What
          We Offer
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2">
          <motion.h2
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="font-heading font-extrabold leading-[1.08] text-dark"
            style={{ fontSize: "clamp(2.2rem,3.5vw,3.2rem)" }}
          >
            Products &<br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="font-body text-[0.95rem] text-dark-400 leading-relaxed max-w-sm pb-1"
          >
            End-to-end solutions across the protein value chain.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 mb-14 h-px"
          style={{
            transformOrigin: "left",
            background: "linear-gradient(to right,#A6DDC8,transparent)",
          }}
        />

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative p-7 rounded-2xl overflow-hidden cursor-default"
              style={{
                background:
                  hovered === i
                    ? `linear-gradient(145deg,#fff 0%,${p.tint.replace("0.07", "0.14")} 100%)`
                    : `linear-gradient(145deg,#FAFAF8 60%,${p.tint} 100%)`,
                border: `1px solid ${hovered === i ? p.border.replace("0.14", "0.35") : p.border}`,
                boxShadow:
                  hovered === i
                    ? `0 20px 52px ${p.accent}20`
                    : "0 2px 10px rgba(0,0,0,0.04)",
                transition:
                  "background 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <div
                className="absolute bottom-[-12px] right-0 pointer-events-none select-none leading-none"
                style={{
                  fontSize: 96,
                  opacity: hovered === i ? 0.09 : 0.05,
                  transition: "opacity 0.4s",
                }}
              >
                {p.icon}
              </div>
              <span
                className="inline-block mb-4 px-2.5 py-0.5 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: p.tint,
                  border: `1px solid ${p.border}`,
                  color: p.accent,
                }}
              >
                {p.tag}
              </span>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: p.tint, border: `1px solid ${p.border}` }}
              >
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-[1.05rem] text-dark mb-2">
                {p.title}
              </h3>
              <p className="font-body text-sm text-dark-400 leading-relaxed">
                {p.desc}
              </p>
              <motion.div
                animate={{ x: hovered === i ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-5 flex items-center gap-1.5 font-heading text-xs font-bold"
                style={{ color: p.accent }}
              >
                Learn more <ArrowRight size={13} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
