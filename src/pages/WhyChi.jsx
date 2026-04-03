import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import FooterCTA from "@/components/FooterCTA";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const reasons = [
  {
    icon: "🏆",
    title: "Industry Expertise",
    desc: "Decades of integrated poultry & aquaculture leadership — we built Nigeria's protein supply chain from the ground up.",
    stat: "38+", statLabel: "Years of operation",
  },
  {
    icon: "🔄",
    title: "Full Production Cycle",
    desc: "From egg incubation through to frozen products — every stage owned and operated in-house for unmatched quality control.",
    stat: "18+", statLabel: "Product lines",
  },
  {
    icon: "📋",
    title: "Customer Training",
    desc: "Poultry school programs and post-sales technical support that make clients fully self-sufficient and profitable.",
    stat: "3K+", statLabel: "Farmers trained",
  },
  {
    icon: "🧬",
    title: "Proven Biosecurity",
    desc: "Lab-backed vet protocols and vaccine supply that protect your flock, guarantee integrity and minimise losses.",
    stat: "98%", statLabel: "Satisfaction rate",
  },
  {
    icon: "📍",
    title: "Nationwide Reach",
    desc: "Four hubs across Lagos, Ibadan and Ogun State — consistent supply and support wherever you farm in Nigeria.",
    stat: "4", statLabel: "Strategic hubs",
  },
  {
    icon: "🤝",
    title: "Trusted Partnerships",
    desc: "A global network of feed, hatchery and biosecurity partners ensuring only the finest inputs reach your farm.",
    stat: "20+", statLabel: "Global partners",
  },
];

const timeline = [
  { year: "1986", title: "Founded", desc: "Chi Farms established in Ibadan, pioneering integrated poultry production in Nigeria." },
  { year: "1995", title: "Aquaculture Launch", desc: "Expanded into catfish breeding and aquaculture genetics, diversifying Nigeria's protein supply." },
  { year: "2004", title: "Poultry School", desc: "Launched our training academy, empowering thousands of Nigerian farmers with modern techniques." },
  { year: "2010", title: "Frozen Foods Division", desc: "Opened meat processing plant and cold-chain distribution centre, completing the farm-to-table vision." },
  { year: "2018", title: "NAFDAC & SON Certified", desc: "Achieved dual certification across all product lines, setting the national standard for quality." },
  { year: "2024", title: "Today", desc: "A top Nigerian agro-livestock brand, serving producers across the entire protein value chain." },
];

const testimonials = [
  {
    quote: "Chi Farms transformed how we run our poultry operation. The training and ongoing support is unmatched anywhere in Nigeria.",
    name: "Adebayo Okonkwo",
    role: "Poultry Farmer, Oyo State",
    initials: "AO",
  },
  {
    quote: "The quality of their day-old chicks is consistently superior. Our mortality rates dropped significantly after switching.",
    name: "Fatima Bello",
    role: "Commercial Layer Producer, Kano",
    initials: "FB",
  },
  {
    quote: "From equipment to veterinary support — they truly cover every part of the value chain. A genuine one-stop partner.",
    name: "Chukwuemeka Eze",
    role: "Integrated Farm Owner, Enugu",
    initials: "CE",
  },
];

/* ══════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════ */
function SectionPill({ label }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-[#1F8F63]/8 border border-[#1F8F63]/16 text-[#14664A] text-[10px] font-bold tracking-[0.14em] uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-[#1F8F63] inline-block" />
      {label}
    </div>
  );
}

function AccentLine({ inView }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.18 }}
      className="h-px origin-left mb-10"
      style={{ background: "linear-gradient(to right, #A6DDC8, transparent)" }}
    />
  );
}

/* ══════════════════════════════════════════════
   SECTIONS
══════════════════════════════════════════════ */

/* 1 — Reasons grid (reused from home, enriched with stats) */
function ReasonsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-[#f5f9f7]">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <SectionPill label="Why Chi Farms" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              className="font-extrabold text-[#111] leading-tight m-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)" }}
            >
              Why the best farms<br />
              <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
                choose Chi Farms.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.14 }}
            className="text-sm text-[#999] leading-relaxed max-w-[280px]"
            style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}
          >
            We build partnerships that last decades — not just supply chains.
          </motion.p>
        </div>

        <AccentLine inView={inView} />

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#1F8F63]/10"
        >
          {reasons.map((r, i) => {
            const isHov = hov === i;
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(reasons.length / 3);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                className="p-6 relative transition-colors duration-200 cursor-default"
                style={{
                  background: isHov ? "rgba(240,249,245,1)" : "transparent",
                  borderRight: col < 2 ? "1px solid rgba(31,143,99,0.09)" : "none",
                  borderBottom: row < totalRows - 1 ? "1px solid rgba(31,143,99,0.09)" : "none",
                }}
              >
                {/* Hover accent bar */}
                <motion.div
                  animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full bg-[#1F8F63] origin-center"
                />

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3 border border-[#1F8F63]/12 text-base transition-colors duration-200"
                  style={{ background: isHov ? "rgba(31,143,99,0.12)" : "rgba(31,143,99,0.07)" }}
                >
                  {r.icon}
                </div>

                {/* Stat badge */}
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span
                    className="text-2xl font-black bg-gradient-to-br from-[#1F8F63] to-[#41AA80] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {r.stat}
                  </span>
                  <span className="text-[10px] text-[#aaa] font-medium uppercase tracking-wide">{r.statLabel}</span>
                </div>

                <h3
                  className="text-sm font-bold mb-1.5 leading-tight transition-colors duration-200"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: isHov ? "#1F8F63" : "#1A1A1A",
                  }}
                >
                  {r.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed m-0" style={{ fontFamily: "'Lora', serif" }}>
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 2 — Timeline */
function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(31,143,99,0.07), transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <SectionPill label="Our Journey" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
            className="font-extrabold text-[#111] leading-tight m-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)" }}
          >
            38 years of building<br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Nigeria's food future.
            </span>
          </motion.h2>
        </div>

        <AccentLine inView={inView} />

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, #1F8F63, rgba(31,143,99,0.1))", transform: "translateX(-50%)" }}
          />

          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`relative flex items-center gap-6 sm:gap-0 pl-12 sm:pl-0 pb-10 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content card */}
                  <div className={`sm:w-[calc(50%-2.5rem)] ${isRight ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"}`}>
                    <div
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-2 border"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        background: "rgba(31,143,99,0.07)",
                        border: "1px solid rgba(31,143,99,0.18)",
                        color: "#1F8F63",
                      }}
                    >
                      {t.year}
                    </div>
                    <h3
                      className="font-bold text-[#1A1A1A] text-sm mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t.title}
                    </h3>
                    <p className="text-xs text-[#888] leading-relaxed m-0" style={{ fontFamily: "'Lora', serif" }}>
                      {t.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#1F8F63] bg-white z-10 flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F8F63]" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3 — Certifications & Standards */
function CertSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const certs = [
    { icon: "🏅", title: "NAFDAC Certified", desc: "All products comply with National Agency for Food & Drug Administration standards." },
    { icon: "✅", title: "SON Certified",     desc: "Standards Organisation of Nigeria quality mark across our full operations." },
    { icon: "🔬", title: "Precision Laboratory", desc: "In-house diagnostic lab providing rapid, accurate disease detection & monitoring." },
    { icon: "🌍", title: "Global Genetics Partners", desc: "Sourcing from Aviagen, Hendrix Genetics and other world-leading breed suppliers." },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#f5f9f7] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <SectionPill label="Standards & Certifications" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
              className="font-extrabold text-[#111] leading-tight m-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)" }}
            >
              Quality you can<br />
              <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
                trust and verify.
              </span>
            </motion.h2>
          </div>
        </div>

        <AccentLine inView={inView} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#1F8F63]/10 hover:border-[#1F8F63]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1F8F63]/08 border border-[#1F8F63]/12 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#1F8F63]/15 transition-colors duration-200">
                {c.icon}
              </div>
              <h3
                className="font-bold text-[#1A1A1A] text-sm mb-2 group-hover:text-[#1F8F63] transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {c.title}
              </h3>
              <p className="text-xs text-[#888] leading-relaxed m-0" style={{ fontFamily: "'Lora', serif" }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4 — Testimonials */
function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(31,143,99,0.06), transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <SectionPill label="Farmer Stories" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
            className="font-extrabold text-[#111] leading-tight m-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)" }}
          >
            Farmers who've seen<br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              the difference.
            </span>
          </motion.h2>
        </div>

        <AccentLine inView={inView} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="bg-[#f5f9f7] rounded-2xl p-6 border border-[#1F8F63]/10 relative flex flex-col justify-between gap-4"
            >
              {/* Quote mark */}
              <div
                className="text-6xl leading-none text-[#1F8F63]/15 font-serif absolute top-3 right-5 select-none"
                aria-hidden
              >
                "
              </div>

              <p
                className="text-sm text-[#555] leading-relaxed m-0 relative z-10"
                style={{ fontFamily: "'Lora', serif", fontStyle: "italic" }}
              >
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#1F8F63]/08">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1F8F63, #41AA80)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A] m-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-[10px] text-[#aaa] m-0">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function WhyChi() {
  const bgImg = "https://chi-farms.com/wp-content/uploads/2021/07/cropped-IMG_4965-1536x708.jpg";

  return (
    <div className="bg-white min-h-screen pt-12">
      <ReasonsSection />
      <TimelineSection />
      <CertSection />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
}