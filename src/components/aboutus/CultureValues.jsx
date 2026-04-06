import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { icon: "🏆", title: "Integrity",            desc: "We are fair, honest and transparent in all our actions, decisions and processes. Everything we do must uphold the highest ethical standards." },
  { icon: "🔄", title: "Owner's Mindset",       desc: "Every day, we take the initiative to make Chi Farms better. We treat every penny like our own and proactively work towards meeting our organizational goals." },
  { icon: "📋", title: "Diversity & Inclusion", desc: "Our presence creates a rich variety of perspectives, which makes our business better. We respect and appreciate each others' differences, and pledge to support a culture of respect towards each other." },
  { icon: "🧬", title: "Innovation",            desc: "Our curiosity has no limits. We are constantly exploring ideas that drive the growth of our business and meet the future needs of our customers and other stakeholders." },
  { icon: "📍", title: "Sustainability",        desc: "Our sustainable business model ensures we drive positive economic, environmental, and social impacts for all stakeholders." },
  { icon: "🤝", title: "Excellence",            desc: "We are committed to our employees' personal and professional growth and take pride in providing outstanding products and services to all our customers. We strive to be the best in everything we do." },
];

export default function CultureValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section
        id="culture"
        ref={ref}
        className="bg-primary-50/30 relative overflow-hidden py-6"
      >
        {/* Faint dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-[1152px] mx-auto px-6">

          {/* ── Header ── */}
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07 }}
                className="font-heading font-extrabold leading-[1.12] text-dark-900 m-0 text-[clamp(1.7rem,2.8vw,2.35rem)]"
              >
                What Defines<br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg,#1F8F63,#41AA80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Us
                </span>
              </motion.h2>
            </div>
          </div>

          {/* ── Thin accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="h-px origin-left mb-0"
            style={{ background: "linear-gradient(to right,#A6DDC8,transparent)" }}
          />

          {/* ── Reasons grid ── */}
          <div
            className="why-grid border border-primary-500/[0.09] border-t-0"
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
                  className="px-[1.6rem] py-6 relative cursor-default transition-colors duration-200"
                  style={{
                    background: isHov ? "rgba(240,249,245,1)" : "transparent",
                    borderRight: col < 2 ? "1px solid rgba(31,143,99,0.09)" : "none",
                    borderBottom: row < totalRows - 1 ? "1px solid rgba(31,143,99,0.09)" : "none",
                  }}
                >
                  {/* Left accent bar on hover */}
                  <motion.div
                    animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full bg-primary-500 origin-center"
                  />

                  {/* Icon pill */}
                  <div
                    className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] mb-3 border border-primary-500/[0.12] text-base transition-colors duration-200"
                    style={{
                      background: isHov ? "rgba(31,143,99,0.12)" : "rgba(31,143,99,0.07)",
                    }}
                  >
                    {r.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading text-[0.87rem] font-bold leading-[1.25] mb-[0.45rem] transition-colors duration-200"
                    style={{ color: isHov ? "#1F8F63" : "#1A1A1A" }}
                  >
                    {r.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-['Lora',serif] text-[0.78rem] text-[#888] leading-[1.68] m-0">
                    {r.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}