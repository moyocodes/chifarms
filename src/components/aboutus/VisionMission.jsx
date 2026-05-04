// VisionMission.jsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { VisionMissionCard } from "./VisionMissionCard";

const defaultCards = [
  { number: "01", icon: "🏆", title: "Vision", desc: "To become the market leader in every market we serve in the livestock industry by meeting quality expectations." },
  { number: "02", icon: "🔄", title: "Mission", desc: "To continually strive to offer the livestock industry breeds with requisite genetic potentials that deliver on performance characteristics." },
];

export default function VisionMission({ cards = defaultCards}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');
        .vm-grid { display: grid; grid-template-columns: repeat(${cards.length}, 1fr); gap: 1.75rem; }
        @media (max-width: 640px) { .vm-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section
        id="vision"
        ref={ref}
        className="py-4 relative overflow-hidden bg-[#f5f9f7]"
      >

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.22] bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Ambient orbs */}
        <div className="absolute top-[-80px] right-[-60px] w-[340px] h-[340px] rounded-full pointer-events-none blur-[70px] bg-[radial-gradient(circle,rgba(31,143,99,0.12),transparent_70%)]" />
        
        <div className="absolute bottom-0 left-[5%] w-[260px] h-[260px] rounded-full pointer-events-none blur-[70px] bg-[radial-gradient(circle,rgba(65,170,128,0.09),transparent_70%)]" />

        <div className="max-w-[1060px] mx-auto px-6 relative">

          {/* Header */}
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07 }}
                className="font-heading text-[clamp(1.7rem,2.8vw,2.35rem)] font-extrabold leading-[1.12] text-[#111] m-0"
              >
                Training, innovation &<br />
                <span className="bg-[linear-gradient(135deg,#1F8F63,#41AA80)] bg-clip-text text-transparent">
                  sustainable poultry growth.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="font-serif italic text-[0.84rem] text-[#999] leading-[1.72] max-w-[280px]"
            >
              Purpose-driven farming — rooted in science, built on trust.
            </motion.p>
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="h-[1px] origin-left bg-[linear-gradient(to_right,#A6DDC8,transparent)] mb-12"
          />

          {/* Cards */}
          <div className="vm-grid">
            {cards.map((card, i) => (
              <VisionMissionCard
                key={i}
                index={i}
                inView={inView}
                isHov={hov === i}
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                {...card}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}