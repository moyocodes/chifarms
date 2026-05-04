import { timeline } from '../../lib/whyUs';
import { motion,useInView } from 'framer-motion';
import React, { useRef } from 'react';
import SectionPill from './SectionPill';
import AccentLine from './AccentLine';


function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.07),transparent_70%)] blur-[60px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <SectionPill label="Our Journey" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-extrabold text-dark-900 leading-tight m-0 font-heading text-[clamp(1.7rem,2.8vw,2.35rem)]"
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
            className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2 bg-[linear-gradient(to_bottom,#1F8F63,rgba(31,143,99,0.1))]"
          />

          <div className="flex flex-col">
            {timeline.map((t, i) => {
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`relative flex items-center gap-6 sm:gap-0 pl-12 sm:pl-0 pb-10 ${
                    isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className={`sm:w-[calc(50%-2.5rem)] ${isRight ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"}`}>
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest mb-2 border font-['Plus Jakarta Sans',sans-serif] bg-[#1F8F63]/[0.07] border-[#1F8F63]/[0.18] text-[#1F8F63]">
                      {t.year}
                    </div>

                    <h3 className="font-bold text-dark-900 text-sm mb-1 font-heading">
                      {t.title}
                    </h3>

                    <p className="text-xs text-dark-600 leading-relaxed m-0 font-body">
                      {t.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-500 bg-white z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  </div>

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

export default TimelineSection;