import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide comprehensive poultry solutions including training, consultancy, and production support tailored to both beginners and large-scale farmers.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes, our poultry school offers hands-on and theoretical training designed to equip individuals with modern poultry farming techniques.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located in Nigeria with facilities that support both learning and production environments.",
  },
  {
    question: "How can I enroll in the poultry school?",
    answer:
      "You can enroll by contacting us through our website or visiting our training center directly.",
  },
  {
    question: "Do you provide consultancy services?",
    answer:
      "Yes, we offer expert consultancy services to help optimize poultry farm operations and maximize productivity.",
  },
];

export default function FAQPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(null);
  const [hov, setHov] = useState(null);

  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        id="faqs"
        ref={ref}
        className="relative overflow-hidden bg-[#f8faf9] py-[clamp(1rem,8vw,6rem)]"
      >
        {/* Background dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-[1152px] mx-auto px-6">

          {/* HEADER */}
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-heading font-extrabold leading-[1.12] text-[#111] text-[clamp(1.7rem,2.8vw,2.35rem)]"
            >
              Got Questions?<br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg,#1F8F63,#41AA80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We've Got Answers
              </span>
            </motion.h2>
          </div>

          {/* LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="h-px origin-left mb-0"
            style={{ background: "linear-gradient(to right,#A6DDC8,transparent)" }}
          />

          {/* FAQ GRID */}
          <div className="faq-grid border border-primary-500/[0.09] border-t-0">
            {faqs.map((faq, i) => {
              const isOpen = active === i;
              const isHov = hov === i;
              const col = i % 2;
              const row = Math.floor(i / 2);
              const totalRows = Math.ceil(faqs.length / 2);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                  onHoverStart={() => setHov(i)}
                  onHoverEnd={() => setHov(null)}
                  onClick={() => toggle(i)}
                  className="p-6 cursor-pointer relative"
                  style={{
                    background: isHov ? "rgba(240,249,245,1)" : "transparent",
                    borderRight: col === 0 ? "1px solid rgba(31,143,99,0.09)" : "none",
                    borderBottom: row < totalRows - 1 ? "1px solid rgba(31,143,99,0.09)" : "none",
                  }}
                >
                  {/* Left accent */}
                  <motion.div
                    animate={{ opacity: isHov ? 1 : 0, scaleY: isHov ? 1 : 0.3 }}
                    className="absolute left-0 top-[20%] bottom-[20%] w-[2.5px] bg-primary-500 rounded-full origin-center"
                  />

                  {/* Question */}
                  <div className="flex justify-between items-center">
                    <h3
                      className="font-heading text-[0.9rem] font-bold transition-colors duration-200"
                      style={{ color: isOpen ? "#1F8F63" : "#1A1A1A" }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-[0.6rem] font-['Lora',serif] text-[0.78rem] text-[#777] leading-[1.6]"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}