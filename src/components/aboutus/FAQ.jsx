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

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital@1&display=swap');

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

     

      <section
      id="faqs"
        ref={ref}
        // className="bg-primary-50/30"
        style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(3rem, 8vw, 6rem) 0",
        background: "#f8faf9",
      }}
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
          {/* HEADER */}
          <div style={{ marginBottom: "2.5rem" }}>
           <motion.div
                initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 12px", borderRadius: 99, marginBottom: 12,
                  background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.16)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#14664A",
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
                FAQ
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
              }}
            >
              Got Questions?<br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,#1F8F63,#41AA80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We’ve Got Answers
              </span>
            </motion.h2>
          </div>

          {/* LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              height: 1,
              transformOrigin: "left",
              background:
                "linear-gradient(to right,#A6DDC8,transparent)",
              marginBottom: 0,
            }}
          />

          {/* FAQ GRID */}
          <div
            className="faq-grid"
            style={{
              border: "1px solid rgba(31,143,99,0.09)",
              borderTop: "none",
            }}
          >
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
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                  }}
                  onHoverStart={() => setHov(i)}
                  onHoverEnd={() => setHov(null)}
                  onClick={() => toggle(i)}
                  style={{
                    padding: "1.5rem",
                    cursor: "pointer",
                    background: isHov
                      ? "rgba(240,249,245,1)"
                      : "transparent",
                    borderRight:
                      col === 0
                        ? "1px solid rgba(31,143,99,0.09)"
                        : "none",
                    borderBottom:
                      row < totalRows - 1
                        ? "1px solid rgba(31,143,99,0.09)"
                        : "none",
                    position: "relative",
                  }}
                >
                  {/* Left accent */}
                  <motion.div
                    animate={{
                      opacity: isHov ? 1 : 0,
                      scaleY: isHov ? 1 : 0.3,
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "20%",
                      bottom: "20%",
                      width: 2.5,
                      background: "#1F8F63",
                      borderRadius: 99,
                    }}
                  />

                  {/* Question */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: isOpen
                          ? "#1F8F63"
                          : "#1A1A1A",
                      }}
                    >
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          marginTop: "0.6rem",
                          fontFamily: "'Lora', serif",
                          fontSize: "0.78rem",
                          color: "#777",
                          lineHeight: 1.6,
                        }}
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