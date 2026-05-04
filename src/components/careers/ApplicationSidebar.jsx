import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Upload, ChevronRight, CheckCircle2 } from "lucide-react";
import StepDocuments from "./StepDocuments";
import StepAcademic from "./StepAcademic";
import StepPersonal from "./StepPersonal";
import SuccessState from "./SuccessState";

function ApplicationSidebar({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    degree: "",
    institution: "",
    graduationYear: "",
    location: "",
    whyUs: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      degree: "",
      institution: "",
      graduationYear: "",
      location: "",
      whyUs: "",
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
            className="fixed inset-0 z-[110] bg-black/35 backdrop-blur-[3px]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
            className="fixed top-0 right-0 h-full z-[120] flex flex-col w-full max-w-[520px] bg-white shadow-[-16px_0_64px_rgba(0,0,0,0.14)]"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-b border-primary-500/10 bg-gradient-to-br from-primary-500 to-primary-400">
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-[0.16em] uppercase mb-0.5">
                  2024 Graduate Trainee Program
                </p>
                <h2 className="text-white font-extrabold text-lg leading-tight m-0 font-heading">
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
              <div className="flex-shrink-0 flex items-center gap-3 px-7 py-4 border-b border-primary-500/10 bg-[#f5f9f7]">
                {[
                  { n: 1, label: "Personal" },
                  { n: 2, label: "Academic" },
                  { n: 3, label: "Documents" },
                ].map((s, i) => (
                  <div key={s.n} className="flex items-center gap-2">
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-black transition-all duration-300 font-heading ${
                        step >= s.n
                          ? "bg-primary-500 text-white"
                          : "bg-[rgba(31,143,99,0.1)] text-[#aaa]"
                      }`}
                    >
                      {step > s.n ? <CheckCircle2 size={13} /> : s.n}
                    </div>

                    <span
                      className={`text-[11px] font-semibold hidden sm:inline font-heading ${
                        step >= s.n ? "text-primary-500" : "text-dark-500"
                      }`}
                    >
                      {s.label}
                    </span>

                    {i < 2 && (
                      <div
                        className={`w-8 h-px mx-1 transition-all duration-500 ${
                          step > s.n
                            ? "bg-primary-500"
                            : "bg-[rgba(31,143,99,0.15)]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-7 py-6">
              {submitted && <SuccessState reset={reset} />}

              {!submitted && step === 1 && (
                <StepPersonal form={form} handleChange={handleChange} />
              )}

              {!submitted && step === 2 && (
                <StepAcademic form={form} handleChange={handleChange} />
              )}

              {!submitted && step === 3 && (
                <StepDocuments
                  fileName={fileName}
                  dragOver={dragOver}
                  handleFile={handleFile}
                  form={form}
                  setDragOver={setDragOver}
                />
              )}
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-t border-primary-500/10 bg-[#f5f9f7]">
                <button
                  onClick={() => (step > 1 ? setStep((s) => s - 1) : onClose())}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer border transition-colors duration-200 font-heading text-dark-800 border-black/10 bg-transparent"
                >
                  {step === 1 ? "Cancel" : "← Back"}
                </button>

                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className={`rounded-full transition-all duration-300 ${
                        step === n ? "w-5" : "w-[6px]"
                      } h-[6px] ${
                        step >= n
                          ? "bg-primary-500"
                          : "bg-[rgba(31,143,99,0.2)]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    step < 3 ? setStep((s) => s + 1) : handleSubmit()
                  }
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white cursor-pointer border-none transition-all duration-200 hover:-translate-y-0.5 font-['Plus_Jakarta_Sans'] bg-gradient-to-br from-primary-500 to-primary-400 shadow-[0_4px_16px_rgba(31,143,99,0.3)]"
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