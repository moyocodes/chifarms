import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "🏆",
    title: "Our Vision",
    desc: "To become a global center of excellence for training and capacity development in the Animal protein value chains, fostering sustainable investment, through innovative knowledge-based solutions.",
  },
  {
    icon: "🔄",
    title: "Our Mission",
    desc: "To develop skilled manpower that meets the evolving needs of the Poultry Industry – empowering individuals and supporting global food security.",
  },
];

const SchoolVision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {reasons.map((r, i) => {
          const isHov = hov === i;

          return (
            <div>
                <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onHoverStart={() => setHov(i)}
              onHoverEnd={() => setHov(null)}
              whileHover={{
                y: -6,
                rotateX: 3,
                rotateY: -3,
              }}
              style={{
                position: "relative",
                padding: "2rem",
                background: "rgba(247, 247, 247, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(48, 197, 137, 0.12)",
                boxShadow: isHov
                  ? "0 15px 45px rgba(31,143,99,0.25)"
                  : "0 8px 20px rgba(0,0,0,0.05)",
                transition: "all 0.2s ease",
                overflow: "hidden",
                minHeight: "220px",
                width: "100%",
                borderRadius: "18px",
              }}
            >
              {/* Glow */}
              <motion.div
                animate={{ opacity: isHov ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, rgba(31,143,99,0.2), rgba(65,170,128,0.2))",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Top line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isHov ? { scaleX: 1 } : { scaleX: 0 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 3,
                  width: "100%",
                  background: "linear-gradient(to right,#1F8F63,#41AA80)",
                  transformOrigin: "left",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "1rem",
                    background: "rgba(31,143,99,0.1)",
                    border: "1px solid rgba(31,143,99,0.2)",
                  }}
                >
                  {r.icon}
                </div>

                <h3 className="font-bold text-lg mb-2">{r.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolVision;