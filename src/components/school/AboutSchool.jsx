import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Stats from "./Stats";
import SchoolVision from "./SchoolVision";

const AboutSchool = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1150px] mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
              About the Institution
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-heading font-extrabold text-[#111] leading-tight text-[clamp(1.7rem,2.8vw,2.35rem)]"
          >
            Building capacity across
            <br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              the protein value chain.
            </span>
          </motion.h2>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-px mb-10 origin-left bg-gradient-to-r from-primary-200 to-transparent"
        />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-dark-500 text-sm leading-7 font-serif max-w-3xl mb-2"
        >
          Chi Farms Training Centre aims to create, share and provide knowledge
          and experience to customers and clients. We execute capacity building
          and skill acquisition initiatives to strengthen the skills of people
          in the poultry industry. As a resource centre, we collaborate with
          other institution initiatives and engagements in both the public and
          private sectors, to empower people across the animal protein value
          chains.
        </motion.p>

        <Stats />
        <SchoolVision />
      </div>
    </section>
  );
};

export default AboutSchool;
