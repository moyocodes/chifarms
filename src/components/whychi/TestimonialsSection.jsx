import { testimonials } from '../../lib/whyUs';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import SectionPill from './SectionPill';
import AccentLine from './AccentLine';


function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.06),transparent_70%)] blur-[60px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <SectionPill label="Farmer Stories" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-extrabold text-[#111] leading-tight m-0 font-['Plus Jakarta Sans',sans-serif] text-[clamp(1.7rem,2.8vw,2.35rem)]"
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
              <div className="text-6xl leading-none text-[#1F8F63]/15 font-serif absolute top-3 right-5 select-none">
                "
              </div>

              <p className="text-sm text-[#555] leading-relaxed m-0 relative z-10 font-['Lora',serif] italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#1F8F63]/[0.08]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0 bg-[linear-gradient(135deg,#1F8F63,#41AA80)] font-['Plus Jakarta Sans',sans-serif]">
                  {t.initials}
                </div>

                <div>
                  <p className="text-xs font-bold text-[#1A1A1A] m-0 font-['Plus Jakarta Sans',sans-serif]">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-[#aaa] m-0">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;