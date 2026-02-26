import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ─── data ─── */
const inquiryTypes = [
  { value: "day-old-chicks", label: "Day Old Chicks Booking", icon: "🐣" },
  { value: "frozen-foods",   label: "Frozen Foods",           icon: "❄️" },
  { value: "career",         label: "Career",                 icon: "💼" },
  { value: "catfish",        label: "Catfish Products",       icon: "🐟" },
  { value: "poultry-school", label: "Poultry School",         icon: "📋" },
  { value: "technical",      label: "Technical Support",      icon: "🧬" },
];

const phones = [
  { label: "Frozen Foods",    number: "09070269373" },
  { label: "Day Old Chick Sales", number: "08127138650" },
  { label: "Booking Line A", number: "08132592782" },
  { label: "Booking Line B", number: "08022078446" },
];

const locations = [
  {
    title: "Head Office & Frozen Food Sales",
    address: "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Apapa–Oworonshoki Expressway, Lagos",
    icon: "🏢",
  },
  {
    title: "Main Farm Office",
    address: "Ajanla Village, Km 20 off Ibadan–Lagos Expressway, Ibadan",
    icon: "🌾",
  },
  {
    title: "Processing Plant",
    address: "KM 51, off Lagos–Ibadan Expressway, Ogun State",
    icon: "⚙️",
  },
  {
    title: "Booking / Diagnostic Centre",
    address: "16, Alaafin Avenue, Oluyole Estate, Ibadan",
    icon: "🧬",
  },
];

const footerLinks = {
  "Products": ["Poultry", "Aquaculture", "Frozen Food", "Equipment", "Health & Biosecurity", "Training & Support"],
  "Company":  ["About Us", "Our Partners", "Careers", "Poultry School", "News & Updates"],
  "Support":  ["Technical Support", "Booking Lines", "Diagnostic Centre", "FAQs"],
};

/* ══════════════════════
   CONTACT SECTION
══════════════════════ */
function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);

  const selectedType = inquiryTypes.find(t => t.value === form.subject);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "14px 16px", borderRadius: 12,
    fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#1A1A1A",
    background: focused === field ? "#fff" : "rgba(242,242,238,0.7)",
    border: `1.5px solid ${focused === field ? "#1F8F63" : "#E7E7E1"}`,
    outline: "none", boxSizing: "border-box",
    transition: "all 0.25s ease",
    boxShadow: focused === field ? "0 0 0 3px rgba(31,143,99,0.10)" : "none",
  });

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        position: "relative", overflow: "hidden", padding: "7rem 0",
        background: "linear-gradient(160deg, #fff 0%, #FAFAF8 50%, #F2F2EE 100%)",
      }}
    >
      {/* blobs */}
      <div style={{ position: "absolute", top: -100, right: -80, width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(166,221,200,0.25) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 380, height: 380, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(31,143,99,0.10) 0%, transparent 65%)", filter: "blur(70px)" }} />

      {/* faint grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.3, backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.18) 1px, transparent 1px)", backgroundSize: "38px 38px" }} />

      {/* watermark */}
      <div style={{ position: "absolute", left: "2%", top: "10%", fontSize: 240, opacity: 0.025, pointerEvents: "none", lineHeight: 1, userSelect: "none", transform: "rotate(-10deg)" }}>✉️</div>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

        {/* header */}
        <div style={{ marginBottom: "4rem" }}>
          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, padding: "6px 16px", borderRadius: 99, background: "rgba(31,143,99,0.07)", border: "1px solid rgba(31,143,99,0.18)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#125C42" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
            Get In Touch
          </motion.div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <motion.h2 initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={1}
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2.2rem,3.5vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, color: "#1A1A1A" }}>
              Contact <span style={{ backgroundImage: "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Us</span>
            </motion.h2>
            <motion.p initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={2}
              style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "#888888", lineHeight: 1.75, maxWidth: 340, paddingBottom: 4 }}>
              Reach out for bookings, enquiries, or partnerships — we respond within 24 hours.
            </motion.p>
          </div>

          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.35, ease: [0.22,1,0.36,1] }}
            style={{ marginTop: 28, height: 1, transformOrigin: "left", background: "linear-gradient(to right, #A6DDC8, rgba(166,221,200,0))" }} />
        </div>

        {/* two-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* ── LEFT: form ── */}
          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ padding: "3rem", borderRadius: 20, textAlign: "center", background: "linear-gradient(145deg,#EAF7F2,#D2EEE3)", border: "1px solid rgba(31,143,99,0.2)" }}
                >
                  <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#125C42", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#1F8F63" }}>We'll get back to you within 24 hours.</p>
                  <motion.button onClick={() => { setSubmitted(false); setForm({ name:"", email:"", subject:"", message:"" }); }}
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{ marginTop: 24, padding: "10px 24px", borderRadius: 10, border: "none", background: "#1F8F63", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div key="form" initial="hidden" animate="show" variants={stagger}
                  style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", border: "1px solid rgba(31,143,99,0.10)", boxShadow: "0 8px 40px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "1.2rem" }}>

                  {/* Name */}
                  <motion.div variants={fadeUp}>
                    <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: "#3A3A3A", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Full Name</label>
                    <input value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder="e.g. Adebayo Johnson"
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      style={inputStyle("name")} />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeUp}>
                    <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: "#3A3A3A", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Email Address</label>
                    <input value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} placeholder="you@example.com" type="email"
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={inputStyle("email")} />
                  </motion.div>

                  {/* Custom Select */}
                  <motion.div variants={fadeUp} style={{ position: "relative" }}>
                    <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: "#3A3A3A", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Inquiry Type</label>
                    <button onClick={() => setSelectOpen(o => !o)} onBlur={() => setTimeout(() => setSelectOpen(false), 150)}
                      style={{ ...inputStyle("subject"), display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", background: selectOpen ? "#fff" : "rgba(242,242,238,0.7)", border: `1.5px solid ${selectOpen ? "#1F8F63" : "#E7E7E1"}`, textAlign: "left" }}>
                      <span style={{ color: selectedType ? "#1A1A1A" : "#B1B1B1" }}>
                        {selectedType ? `${selectedType.icon}  ${selectedType.label}` : "Select an inquiry type…"}
                      </span>
                      <motion.svg animate={{ rotate: selectOpen ? 180 : 0 }} transition={{ duration: 0.2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {selectOpen && (
                        <motion.div initial={{ opacity: 0, y: -6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 50, background: "#fff", borderRadius: 14, border: "1.5px solid rgba(31,143,99,0.18)", boxShadow: "0 16px 40px rgba(0,0,0,0.10)", overflow: "hidden" }}>
                          {inquiryTypes.map((type, i) => (
                            <motion.button key={type.value} onClick={() => { setForm(p => ({...p, subject: type.value})); setSelectOpen(false); }}
                              whileHover={{ background: "rgba(31,143,99,0.06)" }}
                              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "12px 16px", border: "none", background: form.subject === type.value ? "rgba(31,143,99,0.08)" : "transparent", cursor: "pointer", textAlign: "left", borderBottom: i < inquiryTypes.length - 1 ? "1px solid rgba(231,231,225,0.6)" : "none" }}>
                              <span style={{ fontSize: 18 }}>{type.icon}</span>
                              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: form.subject === type.value ? "#1F8F63" : "#2A2A2A", fontWeight: form.subject === type.value ? 600 : 400 }}>{type.label}</span>
                              {form.subject === type.value && <span style={{ marginLeft: "auto", color: "#1F8F63", fontSize: 16 }}>✓</span>}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fadeUp}>
                    <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: "#3A3A3A", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} rows={4} placeholder="Tell us how we can help…"
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("message"), resize: "vertical", minHeight: 110 }} />
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp}>
                    <motion.button onClick={handleSubmit}
                      whileHover={{ y: -2, boxShadow: "0 14px 32px rgba(31,143,99,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      style={{ width: "100%", padding: "15px", borderRadius: 14, border: "none", cursor: "pointer", background: "linear-gradient(135deg,#1F8F63 0%,#125C42 100%)", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 6px 20px rgba(31,143,99,0.3)" }}>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </motion.button>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT: info ── */}
          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* phone cards */}
            <motion.div variants={fadeUp}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "1rem" }}>📞 Call Us Directly</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {phones.map((p, i) => (
                  <motion.a key={i} href={`tel:${p.number}`} whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(31,143,99,0.12)", borderColor: "rgba(31,143,99,0.3)" }}
                    style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(234,247,242,0.6)", border: "1px solid rgba(31,143,99,0.12)", textDecoration: "none", display: "block", transition: "all 0.2s ease" }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", margin: "0 0 4px" }}>{p.label}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 800, color: "#1F8F63", margin: 0 }}>{p.number}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* email */}
            <motion.div variants={fadeUp}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.75rem" }}>✉️ Email</h3>
              <motion.a href="mailto:chifarms@clicktgi.net" whileHover={{ y: -2, boxShadow: "0 10px 28px rgba(31,143,99,0.12)" }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 20px", borderRadius: 14, background: "rgba(234,247,242,0.6)", border: "1px solid rgba(31,143,99,0.12)", textDecoration: "none", color: "#1F8F63", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 700, transition: "all 0.2s ease" }}>
                chifarms@clicktgi.net
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
            </motion.div>

            {/* locations */}
            <motion.div variants={fadeUp}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.75rem" }}>📍 Our Locations</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {locations.map((loc, i) => (
                  <motion.div key={i} whileHover={{ x: 4, background: "rgba(234,247,242,0.8)" }}
                    style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(242,242,238,0.5)", border: "1px solid #E7E7E1", display: "flex", gap: 12, alignItems: "flex-start", transition: "all 0.2s ease", cursor: "default" }}>
                    <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{loc.icon}</span>
                    <div>
                      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: "#1F8F63", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{loc.title}</p>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#5C5C5C", lineHeight: 1.6, margin: 0 }}>{loc.address}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════
   FOOTER
══════════════════════ */
function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #0D4331 0%, #082A20 60%, #051a15 100%)" }}>

      {/* dot grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.08, backgroundImage: "radial-gradient(circle, #A6DDC8 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* glow orbs */}
      <div style={{ position: "absolute", top: -80, left: "20%", width: 400, height: 400, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(31,143,99,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: 0, right: "10%", width: 320, height: 320, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(65,170,128,0.10) 0%, transparent 65%)", filter: "blur(70px)" }} />

      {/* large watermark */}
      <div style={{ position: "absolute", right: "-2%", bottom: "10%", fontSize: 260, opacity: 0.03, pointerEvents: "none", lineHeight: 1, userSelect: "none" }}>🐓</div>

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

        {/* ── top strip: brand + links ── */}
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(121,204,172,0.12)" }}>

          {/* brand col */}
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#1F8F63,#125C42)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🐓</div>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Chi Farms</span>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "rgba(121,204,172,0.8)", lineHeight: 1.75, maxWidth: 280, marginBottom: "1.5rem" }}>
              Integrated poultry breeding, aquaculture and veterinary services — from farm to table across Nigeria.
            </p>

            {/* social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "in", "f"].map((s, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3, background: "rgba(31,143,99,0.35)" }}
                  style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(121,204,172,0.2)", background: "rgba(31,143,99,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#79CCAC", textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, fontWeight: 700, transition: "all 0.2s ease" }}>
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* link cols */}
          {Object.entries(footerLinks).map(([heading, links], ci) => (
            <motion.div key={ci} variants={fadeUp} custom={ci + 1}>
              <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#41AA80", marginBottom: "1.25rem" }}>{heading}</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {links.map((link, li) => (
                  <li key={li}>
                    <motion.a href="#" whileHover={{ x: 3, color: "#79CCAC" }}
                      style={{ fontFamily: "'Inter',sans-serif", fontSize: 13.5, color: "rgba(166,221,200,0.65)", textDecoration: "none", transition: "color 0.2s ease", display: "inline-block" }}>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── bottom bar ── */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }}
          style={{ padding: "1.75rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(121,204,172,0.45)", margin: 0 }}>
            © {new Date().getFullYear()} Chi Farms Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use"].map((t, i) => (
              <motion.a key={i} href="#" whileHover={{ color: "#79CCAC" }}
                style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(121,204,172,0.45)", textDecoration: "none", transition: "color 0.2s ease" }}>
                {t}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

/* ── page preview ── */
export default function Page() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <ContactSection />
      <Footer />
    </div>
  );
}