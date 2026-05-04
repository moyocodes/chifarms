import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "📈",
    title: "Business Success & Sustainability",
    desc: "From in-house training to a fully established capacity-building facility. Programs are based on tested industry practices that drive stakeholder success and long-term sustainability.",
  },
  {
    icon: "💡",
    title: "Empowered by the Right Knowledge",
    desc: "Critical insights guide smart business decisions, while practical skill sets prepare participants for real-world operational challenges and ongoing learning opportunities.",
  },
  {
    icon: "🔬",
    title: "Innovation & New Technology",
    desc: "We integrate technical and economic business demands, ensuring solutions are sustainable, future-ready, and grounded in innovation and new technology.",
  },
];

export default function WhyPoultrySchool() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-primary-50/30 py-[4.5rem] relative overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-[1060px] mx-auto px-6 relative">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
              Why Chi Farms Training Centre
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-heading font-extrabold text-dark-900 leading-tight text-[clamp(1.7rem,2.8vw,2.35rem)]"
            >
              Why Chi Farms <br />
              <span className="bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text text-transparent">
                training centre?
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="text-sm text-dark-400 italic leading-relaxed max-w-[280px]"
          >
            Equipping farmers and professionals with the knowledge, tools, and mindset to thrive across the poultry value chain.
          </motion.p>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="h-px origin-left mb-0 bg-gradient-to-r from-primary-200 to-transparent"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-primary-500/10 border-t-0">
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
                  borderRight: col < 2 ? "1px solid rgba(31,143,99,0.09)" : "none",
                  borderBottom: row < totalRows - 1 ? "1px solid rgba(31,143,99,0.09)" : "none",
                }}
              >
                {/* Hover bg */}
                <div className={`absolute inset-0 transition ${isHov ? "bg-primary-50" : ""}`} />

                {/* Accent bar */}
                <motion.div
                  animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full bg-primary-500 origin-center"
                />

                {/* Badge */}
                <div className={`relative z-10 w-9 h-9 flex items-center justify-center rounded-xl mb-3 border border-primary-500/20 font-heading font-black text-primary-500 transition ${
                  isHov ? "bg-primary-500/10" : "bg-primary-500/5"
                }`}>
                  {i + 1}
                </div>

                {/* Title */}
                <h3 className={`relative z-10 text-sm font-bold mb-1.5 leading-tight font-heading transition ${
                  isHov ? "text-primary-500" : "text-dark-900"
                }`}>
                  {r.title}
                </h3>

                {/* Desc */}
                <p className="relative z-10 text-xs text-dark-400 leading-relaxed m-0">
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
