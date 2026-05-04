import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionPill from "./SectionPill";
import AccentLine from "./AccentLine";
import { reasons } from '../../lib/whyUs';

export default function ReasonsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-[#f5f9f7]">
      
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.18)_1px,transparent_1px)] bg-[size:32px_32px]" />
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
              <SectionPill label="Why Chi Farms" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-heading font-extrabold text-[#111] leading-tight text-[clamp(1.7rem,2.8vw,2.35rem)]"
            >
              Why the best farms<br />
              <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
                choose Chi Farms.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm text-[#999] italic leading-relaxed max-w-[280px] font-serif"
          >
            We build partnerships that last decades — not just supply chains.
          </motion.p>
        </div>

        <AccentLine inView={inView} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-primary-500/10">
          {reasons.map((r, i) => {
            const isHov = hov === i;
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(reasons.length / 3);

            return (
              <motion.div
                key={i}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                className={`p-6 relative transition-all duration-200 cursor-default
                ${isHov ? "bg-[#f0f9f5]" : ""}
                ${col < 2 ? "border-r border-primary-500/10" : ""}
                ${row < totalRows - 1 ? "border-b border-primary-500/10" : ""}`}
              >

                <motion.div
                  animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                  className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] rounded-full bg-primary-500"
                />

                <div className={`w-9 h-9 rounded-xl mb-3 border flex items-center justify-center transition
                  ${isHov ? "bg-primary-500/20" : "bg-primary-500/10"} border-primary-500/20`}>
                  {r.icon}
                </div>

                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className="text-2xl font-black bg-gradient-to-br from-primary-500 to-primary-400 bg-clip-text text-transparent font-heading">
                    {r.stat}
                  </span>
                  <span className="text-[10px] text-[#aaa] uppercase">
                    {r.statLabel}
                  </span>
                </div>

                <h3 className={`text-sm font-bold mb-1.5 font-heading ${isHov ? "text-primary-500" : "text-dark"}`}>
                  {r.title}
                </h3>

                <p className="text-xs text-[#888] leading-relaxed font-serif">
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
