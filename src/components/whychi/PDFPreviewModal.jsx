import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function PDFPreviewModal({ isOpen, onClose, pdfUrl = "/chi-farms-brochure.pdf" }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(12, 18, 14, 0.80)", backdropFilter: "blur(10px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 28 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl overflow-hidden w-full max-w-4xl flex flex-col"
            style={{ height: "88vh", boxShadow: "0 48px 120px rgba(0,0,0,0.40), 0 0 0 1px rgba(184,150,90,0.18)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE8DF] bg-[#F7F4EE] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1F8F63]/10 border border-[#1F8F63]/20 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F8F63" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B8965A]">Company Profile</p>
                  <p className="m-0 font-heading text-sm font-bold text-[#1A1A14]">Chi Farms — Official Brochure</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white no-underline transition-all"
                  style={{ background: "linear-gradient(135deg, #1F8F63, #187553)", boxShadow: "0 4px 14px rgba(31,143,99,0.28)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-white border border-[#EDE8DF] flex items-center justify-center cursor-pointer hover:bg-[#F0EDE6] transition-colors"
                  aria-label="Close"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5A5A52" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <iframe
              src={pdfUrl}
              title="Chi Farms Company Profile"
              className="w-full flex-1 border-none"
              style={{ minHeight: 0 }}
            />

            {/* Bottom hint */}
            <div className="px-6 py-2.5 bg-[#F7F4EE] border-t border-[#EDE8DF] flex items-center justify-between flex-shrink-0">
              <p className="m-0 text-[10px] text-[#9A9A8E] font-medium">
                Place your PDF at <code className="bg-[#EDE8DF] px-1.5 py-0.5 rounded text-[9px] font-mono">/public/chi-farms-brochure.pdf</code>
              </p>
              <p className="m-0 text-[10px] text-[#9A9A8E]">Press <kbd className="bg-white border border-[#EDE8DF] rounded px-1 text-[9px]">Esc</kbd> to close</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
