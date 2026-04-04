import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Upload, ChevronRight, CheckCircle2 } from "lucide-react";

/* ══════════════════════════════════════════════
   APPLICATION SIDEBAR
══════════════════════════════════════════════ */
function ApplicationSidebar({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    degree: "", institution: "", graduationYear: "",
    location: "", whyUs: "",
  });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleFile = (file) => {
    if (file) setFileName(file.name);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setSubmitted(false);
    setFileName(null);
    setForm({
      firstName: "", lastName: "", email: "", phone: "",
      degree: "", institution: "", graduationYear: "",
      location: "", whyUs: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[110]"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(3px)" }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="fixed top-0 right-0 h-full z-[120] flex flex-col"
            style={{
              width: "min(520px, 100vw)",
              background: "#fff",
              boxShadow: "-16px 0 64px rgba(0,0,0,0.14)",
            }}
          >
            {/* Header */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-b border-[#1F8F63]/10"
              style={{ background: "linear-gradient(135deg, #1F8F63 0%, #125C42 100%)" }}
            >
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-[0.16em] uppercase mb-0.5">
                  2024 Graduate Trainee Program
                </p>
                <h2
                  className="text-white font-extrabold text-lg leading-tight m-0"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Apply Now
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Step indicator */}
            {!submitted && (
              <div className="flex-shrink-0 flex items-center gap-3 px-7 py-4 border-b border-[#1F8F63]/08 bg-[#f5f9f7]">
                {[
                  { n: 1, label: "Personal" },
                  { n: 2, label: "Academic" },
                  { n: 3, label: "Documents" },
                ].map((s, i) => (
                  <div key={s.n} className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-black transition-all duration-300"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        background: step >= s.n ? "#1F8F63" : "rgba(31,143,99,0.1)",
                        color: step >= s.n ? "#fff" : "#aaa",
                      }}
                    >
                      {step > s.n ? <CheckCircle2 size={13} /> : s.n}
                    </div>
                    <span
                      className="text-[11px] font-semibold hidden sm:inline"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: step >= s.n ? "#1F8F63" : "#bbb",
                      }}
                    >
                      {s.label}
                    </span>
                    {i < 2 && (
                      <div
                        className="w-8 h-px mx-1 transition-all duration-500"
                        style={{ background: step > s.n ? "#1F8F63" : "rgba(31,143,99,0.15)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-7 py-6">
              <style>{`
                .app-input {
                  width: 100%;
                  padding: 10px 14px;
                  border: 1px solid rgba(31,143,99,0.18);
                  border-radius: 10px;
                  font-size: 13px;
                  font-family: 'Plus Jakarta Sans', sans-serif;
                  color: #1A1A1A;
                  background: #fff;
                  outline: none;
                  transition: border-color 0.2s, box-shadow 0.2s;
                  box-sizing: border-box;
                }
                .app-input:focus {
                  border-color: #1F8F63;
                  box-shadow: 0 0 0 3px rgba(31,143,99,0.1);
                }
                .app-input::placeholder { color: #bbb; }
                .app-label {
                  display: block;
                  font-size: 11px;
                  font-weight: 700;
                  font-family: 'Plus Jakarta Sans', sans-serif;
                  color: #555;
                  margin-bottom: 5px;
                  letter-spacing: 0.04em;
                  text-transform: uppercase;
                }
                select.app-input { cursor: pointer; }
              `}</style>

              {/* ── SUCCESS STATE ── */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center h-full py-16"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(31,143,99,0.1)", border: "2px solid rgba(31,143,99,0.2)" }}
                  >
                    <CheckCircle2 size={36} className="text-[#1F8F63]" strokeWidth={1.8} />
                  </div>
                  <h3
                    className="font-extrabold text-xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Application Submitted!
                  </h3>
                  <p
                    className="text-sm text-[#888] leading-relaxed max-w-[300px] mb-8"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                  >
                    Thank you for applying to the Chi Farms Graduate Trainee Program. We'll review your application and get back to you within 2–3 weeks.
                  </p>
                  <button
                    onClick={reset}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white cursor-pointer border-none"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "linear-gradient(135deg, #1F8F63, #125C42)",
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              )}

              {/* ── STEP 1: Personal ── */}
              {!submitted && step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p
                    className="text-xs text-[#888] mb-5"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                  >
                    Tell us a bit about yourself to get started.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="app-label">First Name</label>
                      <input
                        name="firstName" value={form.firstName} onChange={handleChange}
                        className="app-input" placeholder="Adebayo"
                      />
                    </div>
                    <div>
                      <label className="app-label">Last Name</label>
                      <input
                        name="lastName" value={form.lastName} onChange={handleChange}
                        className="app-input" placeholder="Okonkwo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="app-label">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      className="app-input" placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="app-label">Phone Number</label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="app-input" placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label className="app-label">Preferred Location</label>
                    <select name="location" value={form.location} onChange={handleChange} className="app-input">
                      <option value="">Select a location</option>
                      <option>Lagos</option>
                      <option>Ibadan</option>
                      <option>Ogun State</option>
                      <option>Open to any location</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 2: Academic ── */}
              {!submitted && step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p
                    className="text-xs text-[#888] mb-5"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                  >
                    Share your academic background and qualifications.
                  </p>

                  <div>
                    <label className="app-label">Degree / Qualification</label>
                    <select name="degree" value={form.degree} onChange={handleChange} className="app-input">
                      <option value="">Select your degree</option>
                      <option>B.Sc</option>
                      <option>B.Eng</option>
                      <option>B.Tech</option>
                      <option>B.A</option>
                      <option>HND</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="app-label">Field of Study</label>
                    <select name="fieldOfStudy" onChange={handleChange} className="app-input">
                      <option value="">Select your field</option>
                      <option>Food Science / Agriculture</option>
                      <option>Microbiology</option>
                      <option>Marketing / Business Administration</option>
                      <option>Finance / Accounting</option>
                      <option>Computer Science / IT</option>
                      <option>Engineering (Mechanical/Civil/Electrical)</option>
                      <option>Other related field</option>
                    </select>
                  </div>

                  <div>
                    <label className="app-label">Institution</label>
                    <input
                      name="institution" value={form.institution} onChange={handleChange}
                      className="app-input" placeholder="University of Ibadan"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="app-label">Graduation Year</label>
                      <select name="graduationYear" value={form.graduationYear} onChange={handleChange} className="app-input">
                        <option value="">Year</option>
                        {[2024,2023,2022,2021,2020].map(y => (
                          <option key={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="app-label">Class of Degree</label>
                      <select onChange={handleChange} className="app-input">
                        <option value="">Select</option>
                        <option>First Class</option>
                        <option>Second Class Upper</option>
                        <option>Second Class Lower</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="app-label">Why Chi Farms?</label>
                    <textarea
                      name="whyUs" value={form.whyUs} onChange={handleChange}
                      className="app-input"
                      style={{ minHeight: 100, resize: "vertical" }}
                      placeholder="Tell us why you want to join Chi Farms and what you'll bring to the team..."
                    />
                  </div>
                </motion.div>
              )}

              {/* ── STEP 3: Documents ── */}
              {!submitted && step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <p
                    className="text-xs text-[#888] mb-5"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                  >
                    Upload your CV/résumé to complete your application.
                  </p>

                  {/* Drop zone */}
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                    onClick={() => document.getElementById('cv-upload').click()}
                    className="relative rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200"
                    style={{
                      borderColor: dragOver ? "#1F8F63" : "rgba(31,143,99,0.25)",
                      background: dragOver ? "rgba(31,143,99,0.05)" : "rgba(31,143,99,0.02)",
                    }}
                  >
                    <input
                      id="cv-upload" type="file" accept=".pdf,.doc,.docx" className="hidden"
                      onChange={(e) => handleFile(e.target.files[0])}
                    />
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: "rgba(31,143,99,0.1)" }}
                    >
                      <Upload size={20} className="text-[#1F8F63]" strokeWidth={1.8} />
                    </div>
                    {fileName ? (
                      <p className="text-sm font-bold text-[#1F8F63]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {fileName}
                      </p>
                    ) : (
                      <>
                        <p className="text-sm font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          Drop your CV here
                        </p>
                        <p className="text-xs text-[#aaa]">or click to browse — PDF, DOC, DOCX (max 5MB)</p>
                      </>
                    )}
                  </div>

                  {/* Summary card */}
                  <div
                    className="rounded-xl p-4 border border-[#1F8F63]/12"
                    style={{ background: "rgba(31,143,99,0.04)" }}
                  >
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#1F8F63] mb-3"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Application Summary
                    </p>
                    {[
                      { label: "Name", value: `${form.firstName} ${form.lastName}`.trim() || "—" },
                      { label: "Email", value: form.email || "—" },
                      { label: "Location", value: form.location || "—" },
                      { label: "Institution", value: form.institution || "—" },
                      { label: "CV", value: fileName || "Not uploaded" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-[#1F8F63]/08 last:border-0">
                        <span className="text-xs text-[#aaa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{row.label}</span>
                        <span className="text-xs font-semibold text-[#444] text-right max-w-[200px] truncate"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer nav */}
            {!submitted && (
              <div
                className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-t border-[#1F8F63]/10"
                style={{ background: "#f5f9f7" }}
              >
                <button
                  onClick={() => step > 1 ? setStep(s => s - 1) : onClose()}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer border transition-colors duration-200"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: "transparent",
                    color: "#888",
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                >
                  {step === 1 ? "Cancel" : "← Back"}
                </button>

                <div className="flex items-center gap-2">
                  {[1,2,3].map(n => (
                    <div
                      key={n}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: step === n ? 20 : 6,
                        height: 6,
                        background: step >= n ? "#1F8F63" : "rgba(31,143,99,0.2)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => step < 3 ? setStep(s => s + 1) : handleSubmit()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white cursor-pointer border-none transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: "linear-gradient(135deg, #1F8F63, #125C42)",
                    boxShadow: "0 4px 16px rgba(31,143,99,0.3)",
                  }}
                >
                  {step === 3 ? "Submit Application" : "Continue"}
                  {step < 3 && <ChevronRight size={15} />}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ApplicationSidebar;
