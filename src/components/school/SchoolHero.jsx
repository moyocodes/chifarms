import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Stats from "./Stats";
import SchoolVision from "./SchoolVision";

export default function SchoolHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary-50/30 pt-[9rem] md:pt-[10rem] pb-20"
    >
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.18)_1px,transparent_1px)] bg-[length:32px_32px]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { className: "w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] -top-24 -right-24 opacity-[0.02]" },
          { className: "w-[13rem] h-[13rem] md:w-[18rem] md:h-[18rem] -bottom-12 -left-16 opacity-[0.02]" },
          { className: "hidden md:block w-44 h-44 top-[28%] right-[24%] opacity-[0.05]" },
        ].map((logo, i) => (
          <img
            key={i}
            src="/chilogo.svg"
            alt=""
            className={`absolute object-contain ${logo.className}`}
          />
        ))}
      </div>

      <div className="relative max-w-[1150px] mx-auto px-4 sm:px-6">
        {/* ── Hero headline ── */}
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
            Poultry School
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.07 }}
            className="font-heading font-extrabold text-[#111] leading-[1.1] text-[clamp(2rem,4vw,3rem)] mb-5"
          >
            Training excellence for
            <br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              modern poultry growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14 }}
            className="font-serif italic text-dark-500 text-base leading-relaxed"
          >
            Chi Farms Training Centre provides expert knowledge and hands-on
            experience to clients across the poultry value chain. We build
            capacity through skill acquisition programs designed to strengthen
            industry competencies — from farm to market. As a resource hub, we
            collaborate with public and private sector partners to empower
            professionals across the animal protein ecosystem.
          </motion.p>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="h-px mb-2 origin-left bg-gradient-to-r from-primary-200 to-transparent"
        />

        {/* ── Stats ── */}
        <Stats />

        {/* ── Vision / Mission ── */}
        <SchoolVision />
      </div>
    </section>
  );
}
