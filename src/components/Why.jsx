import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Industry Expertise",
    icon: "🏆",
    desc: "Decades of integrated poultry and aquaculture leadership — we've built Nigeria's protein supply chain from the ground up.",
  },
  {
    number: "02",
    title: "Full Production Cycle",
    icon: "🔄",
    desc: "From egg incubation and parent stock through to processed frozen products — we own and operate every stage.",
  },
  {
    number: "03",
    title: "Customer Training",
    icon: "📋",
    desc: "Hands-on poultry school programs and post-sales technical support that make our clients genuinely self-sufficient.",
  },
  {
    number: "04",
    title: "Proven Biosecurity",
    icon: "🧬",
    desc: "Modern lab-backed veterinary protocols and vaccine supply that protect farms and guarantee product integrity.",
  },
  {
    number: "05",
    title: "Nationwide Reach",
    icon: "📍",
    desc: "Four operational hubs across Lagos, Ibadan and Ogun State keeping supply consistent wherever you are.",
  },
  {
    number: "06",
    title: "Trusted Partnerships",
    icon: "🤝",
    desc: "A curated network of global concentrate feed, hatchery and biosecurity suppliers ensuring highest quality inputs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const patternY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #F2F2EE 60%, #E7E7E1 100%)" }}
    >
      {/* ── parallax dot grid ── */}
      <motion.div
        style={{
          position: "absolute", inset: "-10%", y: patternY,
          pointerEvents: "none", opacity: 0.35,
          backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.22) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── soft green wash top-left ── */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(166,221,200,0.28) 0%, transparent 65%)", filter: "blur(60px)" }}
      />

      {/* ── watermark ── */}
      <div
        className="absolute right-[-1%] top-[8%] pointer-events-none select-none leading-none"
        style={{ fontSize: 220, opacity: 0.035, transform: "rotate(10deg)" }}
      >
        🌾
      </div>

      <div className="relative max-w-[1152px] mx-auto px-6">

        {/* ── header ── */}
        <div className="max-w-[680px] mb-16">
          <motion.div
            initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.18)", color: "#125C42" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#1F8F63" }} />
            Our Advantage
          </motion.div>

          <motion.h2
            initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={1}
            className="font-heading font-extrabold leading-[1.08] text-dark mb-5"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.3rem)" }}
          >
            Why the best farms<br />
            <span style={{
              backgroundImage: "linear-gradient(135deg, #1F8F63 0%, #41AA80 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              choose Chi Farms.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={2}
            className="font-body text-[1.05rem] text-dark-500 leading-relaxed"
          >
            We don't just supply inputs — we build partnerships that last decades. Here's what sets us apart.
          </motion.p>
        </div>

        {/* ── divider line ── */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-0 h-px"
          style={{ transformOrigin: "left", background: "linear-gradient(to right, #A6DDC8, transparent)" }}
        />

        {/* ── reasons grid ── */}
        <div className="grid md:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial="hidden" animate={inView ? "show" : "hidden"}
              variants={fadeUp} custom={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="flex items-start gap-6 p-7 cursor-default relative"
              style={{
                borderBottom: "1px solid rgba(31,143,99,0.08)",
                borderRight: i % 2 === 0 ? "1px solid rgba(31,143,99,0.08)" : "none",
                background: hovered === i ? "rgba(234,247,242,0.5)" : "transparent",
                transition: "background 0.25s ease",
              }}
            >
              {/* number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                <span
                  className="font-heading font-extrabold"
                  style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(31,143,99,0.35)" }}
                >
                  {r.number}
                </span>
                <motion.div
                  animate={{
                    background: hovered === i ? "rgba(31,143,99,0.12)" : "rgba(31,143,99,0.06)",
                    borderColor: hovered === i ? "rgba(31,143,99,0.25)" : "rgba(31,143,99,0.12)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ border: "1px solid rgba(31,143,99,0.12)" }}
                >
                  {r.icon}
                </motion.div>
              </div>

              {/* text */}
              <div className="pt-1">
                <motion.h3
                  animate={{ color: hovered === i ? "#1F8F63" : "#1A1A1A" }}
                  transition={{ duration: 0.2 }}
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: "1.05rem", lineHeight: 1.3 }}
                >
                  {r.title}
                </motion.h3>
                <p className="font-body text-sm text-dark-400 leading-relaxed m-0">
                  {r.desc}
                </p>
              </div>

              {/* hover accent line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                animate={{ opacity: hovered === i ? 1 : 0, scaleY: hovered === i ? 1 : 0.4 }}
                transition={{ duration: 0.25 }}
                style={{ background: "linear-gradient(to bottom, #1F8F63, #A6DDC8)", transformOrigin: "top" }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap"
          style={{
            background: "linear-gradient(135deg, #082A20 0%, #0D4331 100%)",
            boxShadow: "0 20px 60px rgba(8,42,32,0.18)",
          }}
        >
          <div>
            <p className="font-heading font-bold text-white text-[1.1rem] m-0 mb-1">
              Ready to work with Nigeria's leading integrated farm?
            </p>
            <p className="font-body text-sm m-0" style={{ color: "rgba(166,221,200,0.7)" }}>
              Join hundreds of farms that trust Chi Farms for consistent, quality supply.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 14px 32px rgba(31,143,99,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl no-underline font-heading font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg,#1F8F63,#125C42)", boxShadow: "0 6px 20px rgba(31,143,99,0.3)" }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ backgroundColor: "rgba(166,221,200,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl no-underline font-heading font-bold text-sm transition-colors"
              style={{ border: "1px solid rgba(121,204,172,0.3)", color: "#79CCAC" }}
            >
              Our Products
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}