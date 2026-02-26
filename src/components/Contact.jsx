import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── animation variants ─── */
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
    address: "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Lagos",
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

/* ─── floating orb ─── */
function Orb({ style, delay = 0 }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -24, 0], scale: [1, 1.07, 1] }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={style}
    />
  );
}

/* ─── field wrapper ─── */
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#6B8F7E",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  padding: "13px 16px",
  borderRadius: 12,
  border: "1.5px solid #E0EDE8",
  background: "#F7FBF9",
  fontSize: 14,
  color: "#1a1a1a",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
  width: "100%",
  boxSizing: "border-box",
};

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
  const [focused, setFocused] = useState(null);

  const selectedType = inquiryTypes.find((t) => t.value === form.subject);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSubmitted(true);
  };

  const focusStyle = (name) =>
    focused === name
      ? { borderColor: "#1F8F63", boxShadow: "0 0 0 3px rgba(31,143,99,0.1)" }
      : {};

  return (
    <section
      ref={ref}
      id="contact"
      className="pt-20 bg-gradient-to-r from-secondary/80 to-secondary-400/90"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(5rem,9vw,8rem) 0",
      }}
    >
      {/* ── background video ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.38,
            filter: "grayscale(20%) contrast(1.2)",
          }}
        >
          <source src="/chi-farms-video.mp4" type="video/mp4" />
        </video>
        {/* strong dark scrim so text always reads clearly over any video frame */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,30,20,0.82) 0%, rgba(15,50,35,0.75) 30%, rgba(10,30,20,0.85) 100%)",
          }}
        />
      </div>

      {/* ── decorative orbs ── */}
      <Orb
        delay={0}
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(65,170,128,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <Orb
        delay={2.5}
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(31,143,99,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <Orb
        delay={1.2}
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(100,210,160,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── dot grid pattern ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── top edge fade ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* ── content ── */}
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 clamp(1rem,5vw,2rem)",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          style={{ marginBottom: "3.5rem" }}
        >
          <motion.div
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 999,
                background: "rgba(65,170,128,0.15)",
                border: "1px solid rgba(65,170,128,0.3)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7DDBB0",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#41AA80",
                  display: "inline-block",
                }}
              />
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.2rem,4.5vw,3.4rem)",
              fontWeight: 800,
              /* ✅ force white so it's always visible over the dark scrim */
              color: "#ffffff",
              marginBottom: 12,
              lineHeight: 1.15,
              /* subtle text-shadow for extra legibility on any bg */
              textShadow: "0 2px 16px rgba(0,0,0,0.5)",
            }}
          >
            We'd Love to{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7DDBB0,#41AA80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hear From You
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              /* ✅ explicit light color — no relying on Tailwind class over a dark bg */
              color: "rgba(255,255,255,0.75)",
              maxWidth: 440,
              lineHeight: 1.7,
              fontSize: 15,
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            Reach out for bookings, enquiries or partnerships. Our team
            typically responds within 24 hours.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
            gap: isMobile ? "2.5rem" : "3.5rem",
            alignItems: "start",
          }}
        >
          {/* ── FORM ── */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "3.5rem 2.5rem",
                  borderRadius: 24,
                  textAlign: "center",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  style={{ fontSize: 64, marginBottom: 16 }}
                >
                  ✅
                </motion.div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for reaching out. A member of our team will get back
                  to you shortly.
                </p>
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  style={{
                    marginTop: 24,
                    padding: "11px 28px",
                    borderRadius: 12,
                    border: "1px solid rgba(65,170,128,0.4)",
                    background: "rgba(65,170,128,0.15)",
                    color: "#7DDBB0",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                variants={stagger}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                style={{
                  /* ✅ white card with a faint green tint on the border */
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: 24,
                  padding: "clamp(1.6rem,4vw,2.6rem)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(65,170,128,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                <motion.div variants={fadeUp} style={{ marginBottom: 4 }}>
                  <p
                    style={{ fontSize: 13, color: "#6B8F7E", fontWeight: 600 }}
                  >
                    Fill out the form below
                  </p>
                </motion.div>

                {/* Name + Email row */}
                <motion.div
                  variants={fadeUp}
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "0.9rem",
                  }}
                >
                  <Field label="Full Name">
                    <input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle, ...focusStyle("name") }}
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      placeholder="john@example.com"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle, ...focusStyle("email") }}
                    />
                  </Field>
                </motion.div>

                {/* Inquiry type */}
                <motion.div variants={fadeUp}>
                  <Field label="Inquiry Type">
                    <div style={{ position: "relative" }}>
                      <button
                        onClick={() => setSelectOpen(!selectOpen)}
                        style={{
                          ...inputStyle,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          border: "1.5px solid #E0EDE8",
                          ...(selectOpen
                            ? {
                                borderColor: "#1F8F63",
                                boxShadow: "0 0 0 3px rgba(31,143,99,0.1)",
                              }
                            : {}),
                        }}
                      >
                        <span
                          style={{ color: selectedType ? "#1a1a1a" : "#aaa" }}
                        >
                          {selectedType
                            ? `${selectedType.icon} ${selectedType.label}`
                            : "Select inquiry type…"}
                        </span>
                        <motion.span
                          animate={{ rotate: selectOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ color: "#6B8F7E", fontSize: 12 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {selectOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            style={{
                              position: "absolute",
                              top: "calc(100% + 6px)",
                              left: 0,
                              right: 0,
                              zIndex: 50,
                              background: "#fff",
                              borderRadius: 14,
                              border: "1.5px solid #E0EDE8",
                              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                              overflow: "hidden",
                            }}
                          >
                            {inquiryTypes.map((t) => (
                              <motion.button
                                key={t.value}
                                whileHover={{ backgroundColor: "#F0FAF5" }}
                                onClick={() => {
                                  setForm((p) => ({ ...p, subject: t.value }));
                                  setSelectOpen(false);
                                }}
                                style={{
                                  width: "100%",
                                  padding: "11px 16px",
                                  border: "none",
                                  background:
                                    form.subject === t.value
                                      ? "#EAF7F2"
                                      : "#fff",
                                  textAlign: "left",
                                  cursor: "pointer",
                                  fontSize: 14,
                                  fontFamily: "inherit",
                                  color:
                                    form.subject === t.value
                                      ? "#1F8F63"
                                      : "#333",
                                  fontWeight:
                                    form.subject === t.value ? 600 : 400,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                }}
                              >
                                <span style={{ fontSize: 16 }}>{t.icon}</span>
                                {t.label}
                                {form.subject === t.value && (
                                  <span
                                    style={{
                                      marginLeft: "auto",
                                      color: "#1F8F63",
                                    }}
                                  >
                                    ✓
                                  </span>
                                )}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Field>
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <Field label="Message">
                    <textarea
                      placeholder="Tell us what you need…"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        lineHeight: 1.6,
                        ...focusStyle("message"),
                      }}
                    />
                  </Field>
                </motion.div>

                {/* Submit */}
                <motion.div variants={fadeUp}>
                  <motion.button
                    whileHover={{
                      y: -2,
                      boxShadow: "0 16px 40px rgba(31,143,99,0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    style={{
                      width: "100%",
                      padding: "15px 24px",
                      borderRadius: 13,
                      border: "none",
                      background: "linear-gradient(135deg,#1F8F63,#125C42)",
                      color: "#fff",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 15,
                      fontFamily: "inherit",
                      letterSpacing: "0.01em",
                      boxShadow: "0 8px 24px rgba(31,143,99,0.3)",
                    }}
                  >
                    Send Message →
                  </motion.button>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 11,
                      color: "#9CB5AC",
                      marginTop: 10,
                    }}
                  >
                    🔒 Your information is safe with us
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── RIGHT: Phones + Locations ── */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={stagger}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Phone */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(65,170,128,0.2)",
                    fontSize: 16,
                  }}
                >
                  📞
                </span>
                <h3
                  style={{
                    /* ✅ explicit white — never transparent over video */
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 17,
                    margin: 0,
                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  Call Us Directly
                </h3>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "0.7rem",
                }}
              >
                {phones.map((p) => (
                  <motion.a
                    key={p.number}
                    href={`tel:${p.number}`}
                    whileHover={{ y: -2, background: "rgba(255,255,255,0.16)" }}
                    style={{
                      padding: "13px 16px",
                      borderRadius: 14,
                      /* ✅ slightly more opaque so cards pop over video */
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      textDecoration: "none",
                      backdropFilter: "blur(10px)",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        /* ✅ bumped opacity from 0.5 → 0.7 */
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {p.label}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#7DDBB0",
                        fontSize: 14,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.number}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Locations */}
            <motion.div variants={fadeUp}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(65,170,128,0.2)",
                    fontSize: 16,
                  }}
                >
                  📍
                </span>
                <h3
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 17,
                    margin: 0,
                    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  Our Locations
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {locations.map((l, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      transition: "background 0.2s",
                    }}
                  >
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        minWidth: 32,
                        borderRadius: 8,
                        fontSize: 14,
                        background: "rgba(65,170,128,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {l.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          /* ✅ full white, not class-dependent */
                          color: "#ffffff",
                          fontSize: 13,
                          marginBottom: 3,
                        }}
                      >
                        {l.title}
                      </div>
                      <div
                        style={{
                          /* ✅ bumped from 0.5 → 0.72 for readability */
                          color: "rgba(255,255,255,0.72)",
                          fontSize: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {l.address}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email CTA */}
            <motion.a
              variants={fadeUp}
              href="mailto:info@chifarms.com"
              whileHover={{ y: -2, background: "rgba(65,170,128,0.28)" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: 16,
                background: "rgba(65,170,128,0.16)",
                border: "1px solid rgba(65,170,128,0.35)",
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                transition: "background 0.2s",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#7DDBB0",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  Email Us
                </div>
                <div style={{ fontWeight: 700, color: "#ffffff", fontSize: 14 }}>
                  info@chifarms.com
                </div>
              </div>
              <span style={{ fontSize: 20, color: "#7DDBB0" }}>✉️</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── bottom fade ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
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