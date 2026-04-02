import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "",
    before: "/images/renovation-before.jpg",
    after: "/images/renovation-after.jpg",
    desc: `Renovation and provision of classroom furniture of Ebenezer primary school at Ajanla village.`,
  },
  {
    title: "",
    before: "/images/boreholes.jpg",
    after: "",
    desc: `Provision of potable water (boreholes) at Ajanla, Sanusi and Onigambari villages.`,
  },
  {
    title: "",
    before: "/images/electricity.jpg",
    after: "",
    desc: `Provision of electricity (free consumption) at Ajanla village and connection of Sanusi village to the National grid (dedicated line with 20 hours daily supplies at zero cost to community on monthly consumption).

Daily free transportation to and from Ibadan, Sanusi, Ajanla & Sangobiyi villages.

Provision of employment for qualified indigenes (all host communities) as and when vacancies are declared.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function CSR() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState({}); // controls auto switching

  /* 🔁 AUTO SWITCH LOGIC */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const updated = { ...prev };

        projects.forEach((item, i) => {
          const hasAfter = item.after && item.after.trim() !== "";
          if (hasAfter) {
            updated[i] = !updated[i]; // toggle
          }
        });

        return updated;
      });
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="csr"
      ref={ref}
      className="relative py-20 bg-primary-50/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[length:32px_32px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* HEADER */}
        <div className="mb-12">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-5 text-[10px] font-extrabold tracking-[0.18em] uppercase border border-[#1F8F63]/20 bg-[#1F8F63]/10 text-[#1F8F63]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#1F8F63]" />
            Corporate social responsibility
            <span className="w-[6px] h-[6px] rounded-full bg-[#1F8F63]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="font-extrabold text-dark"
            style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)" }}
          >
            Transforming Communities Through <br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-500 bg-clip-text text-transparent">
              Sustainable Impact
            </span>
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-primary-500/10">
          {projects.map((item, i) => {
            const hasAfter = item.after && item.after.trim() !== "";
            const isHovered = hovered === i;

            // 🔥 decide what to show
            const showAfter = hasAfter
              ? isHovered
                ? true
                : activeIndex[i]
              : false;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative border-b md:border-r border-[#1F8F63]/10 p-5 group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4">
                  {/* BEFORE */}
                  <img
                    src={item.before}
                    alt="before"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      showAfter
                        ? "opacity-0 scale-110"
                        : "opacity-100 scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* AFTER */}
                  {hasAfter && (
                    <img
                      src={item.after}
                      alt="after"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        showAfter
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-110"
                      }`}
                    />
                  )}

                  {/* LABEL */}
                  {hasAfter && (
                    <div className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded bg-black/60 text-white">
                      {showAfter ? "AFTER" : "BEFORE"}
                    </div>
                  )}
                </div>

                {/* TEXT */}
                {item.title && (
                  <h3 className="text-sm font-bold text-[#1A1A1A] mb-1 group-hover:text-[#1F8F63] transition">
                    {item.title}
                  </h3>
                )}

                {/* MULTI PARAGRAPH */}
                <div className="text-xs text-[#777] leading-relaxed font-serif space-y-2">
                  {item.desc.split("\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* HOVER ACCENT (ALL CARDS) */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scaleY: isHovered ? 1 : 0.3,
                  }}
                  className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#1F8F63] rounded-full origin-center"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}