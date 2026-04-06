
import { certs } from '../../lib/whyUs';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import SectionPill from './SectionPill';
import AccentLine from './AccentLine';



function CertSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

 

  return (
    <section ref={ref} className="py-20 bg-[#f5f9f7] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <SectionPill label="Standards & Certifications" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-extrabold text-[#111] leading-tight m-0 font-['Plus Jakarta Sans',sans-serif] text-[clamp(1.7rem,2.8vw,2.35rem)]"
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
              <div className="w-12 h-12 rounded-2xl bg-[#1F8F63]/[0.08] border border-[#1F8F63]/[0.12] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#1F8F63]/[0.15] transition-colors duration-200">
                {c.icon}
              </div>

              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2 group-hover:text-[#1F8F63] transition-colors duration-200 font-['Plus Jakarta Sans',sans-serif]">
                {c.title}
              </h3>

              <p className="text-xs text-[#888] leading-relaxed m-0 font-['Lora',serif]">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertSection;