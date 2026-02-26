import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ─── data ─── */
const inquiryTypes = [
  { value: "day-old-chicks", label: "Day Old Chicks Booking", icon: "🐣" },
  { value: "frozen-foods", label: "Frozen Foods", icon: "❄️" },
  { value: "career", label: "Career", icon: "💼" },
  { value: "catfish", label: "Catfish Products", icon: "🐟" },
  { value: "poultry-school", label: "Poultry School", icon: "📋" },
  { value: "technical", label: "Technical Support", icon: "🧬" },
];

const phones = [
  { label: "Frozen Foods", number: "09070269373" },
  { label: "Day Old Chick Sales", number: "08127138650" },
  { label: "Booking Line A", number: "08132592782" },
  { label: "Booking Line B", number: "08022078446" },
];

const locations = [
  {
    title: "Head Office & Frozen Food Sales",
    address:
      "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Lagos",
    icon: "🏢",
  },
  {
    title: "Main Farm Office",
    address: "Km 20 off Ibadan–Lagos Expressway, Ibadan",
    icon: "🌾",
  },
  {
    title: "Processing Plant",
    address: "KM 51, off Lagos–Ibadan Expressway, Ogun State",
    icon: "⚙️",
  },
  {
    title: "Booking / Diagnostic Centre",
    address: "Oluyole Estate, Ibadan",
    icon: "🧬",
  },
];

/* ══════════════════════
   CONTACT SECTION
══════════════════════ */

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);

  const selectedType = inquiryTypes.find((t) => t.value === form.subject);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSubmitted(true);
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "2.5rem" : "4rem",
  };

  const phoneGrid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "0.75rem",
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(4rem,8vw,7rem) 0",
        background:
          "linear-gradient(160deg,#fff 0%,#FAFAF8 50%,#F2F2EE 100%)",
      }}
    >
      <div
  style={{
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.18,
      filter: "grayscale(40%) contrast(1.1)",
    }}
  >
    <source src="/farm-bg.mp4" type="video/mp4" />
  </video>
</div>
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          padding: "0 clamp(1rem,5vw,1.5rem)",
        }}
      >
        {/* HEADER */}

        <div style={{ marginBottom: "3.5rem" }}>
          <motion.h2
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            Contact{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#1F8F63,#41AA80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Us
            </span>
          </motion.h2>

          <p
            style={{
              color: "#777",
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Reach out for bookings, enquiries or partnerships.
          </p>
        </div>

        {/* MAIN GRID */}

        <div style={containerStyle}>
          {/* FORM */}

          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: "2rem",
                    borderRadius: 18,
                    textAlign: "center",
                    background:
                      "linear-gradient(145deg,#EAF7F2,#D2EEE3)",
                  }}
                >
                  <div style={{ fontSize: 50 }}>✅</div>
                  <h3 style={{ marginTop: 10 }}>
                    Message Sent!
                  </h3>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  style={{
                    background: "#fff",
                    borderRadius: 22,
                    padding: "clamp(1.5rem,4vw,2.5rem)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <motion.input
                    variants={fadeUp}
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        name: e.target.value,
                      }))
                    }
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      border: "1px solid #ddd",
                    }}
                  />

                  <motion.input
                    variants={fadeUp}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        email: e.target.value,
                      }))
                    }
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      border: "1px solid #ddd",
                    }}
                  />

                  {/* SELECT */}

                  <motion.button
                    variants={fadeUp}
                    onClick={() => setSelectOpen(!selectOpen)}
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      border: "1px solid #ddd",
                      textAlign: "left",
                      background: "#fafafa",
                    }}
                  >
                    {selectedType
                      ? selectedType.label
                      : "Select Inquiry"}
                  </motion.button>

                  {selectOpen && (
                    <div
                      style={{
                        border: "1px solid #eee",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      {inquiryTypes.map((t) => (
                        <button
                          key={t.value}
                          onClick={() => {
                            setForm((p) => ({
                              ...p,
                              subject: t.value,
                            }));
                            setSelectOpen(false);
                          }}
                          style={{
                            width: "100%",
                            padding: 12,
                            border: "none",
                            background: "#fff",
                            textAlign: "left",
                          }}
                        >
                          {t.icon} {t.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <motion.textarea
                    variants={fadeUp}
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        message: e.target.value,
                      }))
                    }
                    style={{
                      padding: 14,
                      borderRadius: 10,
                      border: "1px solid #ddd",
                    }}
                  />

                  <motion.button
                    variants={fadeUp}
                    whileHover={{ y: -2 }}
                    onClick={handleSubmit}
                    style={{
                      padding: 14,
                      borderRadius: 12,
                      border: "none",
                      background:
                        "linear-gradient(135deg,#1F8F63,#125C42)",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* PHONE */}

            <div>
              <h3 style={{ marginBottom: 10 }}>📞 Call Us</h3>

              <div style={phoneGrid}>
                {phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number}`}
                    style={{
                      padding: 14,
                      borderRadius: 12,
                      background: "#F6FBF9",
                      border: "1px solid #e7e7e7",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#777" }}>
                      {p.label}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#1F8F63",
                      }}
                    >
                      {p.number}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* LOCATIONS */}

            <div>
              <h3 style={{ marginBottom: 10 }}>📍 Locations</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {locations.map((l, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 14,
                      borderRadius: 12,
                      background: "#fafafa",
                      border: "1px solid #eee",
                    }}
                  >
                    <strong>{l.icon} {l.title}</strong>
                    <p style={{ marginTop: 4, fontSize: 13, color: "#666" }}>
                      {l.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}