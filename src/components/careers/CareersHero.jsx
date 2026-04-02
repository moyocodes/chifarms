import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


export default function CareersHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <>
      <section
        id=""
        className="relative overflow-hidden bg-primary-50/30 pb-[4rem] pt-[6rem] md:pt-[10rem]"
        ref={ref}
        
    
      >
        {/* Background dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.22,
            backgroundImage:
              "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
          position: "relative",
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
        >
          {/* Header */}
          <div
            className="flex flex-end justify-between gap-[1.5rem] flex-wrap mb-[2.5rem]"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  background: "rgba(31,143,99,0.08)",
                  border: "1px solid rgba(31,143,99,0.16)",
                  letterSpacing: "0.14em",
                  
                }}

                className="inline-flex items-center gap-6 py-[4px] px-[12px] rounded-[99] mb-12 text-head text-[0.6rem] font-[700] uppercase text-primary-500"
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#1F8F63",
                  }}
                />
                Careers
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.07 }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: "#111",
                  margin: 0,
                }}
              >
                Training, innovation &<br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#1F8F63,#41AA80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  sustainable poultry growth.
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              height: 1,
              transformOrigin: "left",
              background: "linear-gradient(to right,#A6DDC8,transparent)",
            }}
          />

          
        </div>
      </section>
    </>
  );
}