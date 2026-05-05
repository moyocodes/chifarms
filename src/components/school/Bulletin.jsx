import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Download, FileText, X, ExternalLink } from "lucide-react";

const delegationImage =
  "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/%D0%97%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F8.jpg";

const recentVisitImages = [
  {
    src: delegationImage,
    alt: "German Delegation to Chi Farms Training School",
  },
  {
    src: "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777939523/WhatsApp_Image_2026-04-29_at_16.50.58_1_xxoh9a.jpg",
    alt: "Recent visit to Chi Farms Training School",
  },
  {
    src: "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777934008/training-9_prrkp4.jpg",
    alt: "Chi Farms Training School",
  },
];

const bulletins = [
  {
    title: "Chi Farms Technical Service Bulletin",
    issue: "Issue: November 2025",
    topic: "Poultry Access to Appropriate Healthcare Matters",
    cover:
      "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/CHI-FARMS-NOVEMBER-BULLETIN-25-1.png",
    pdf: "/CHI-FARMS-NOVEMBER-BULLETIN-25.pdf",
  },
];

function PDFModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(8, 20, 12, 0.85)",
            backdropFilter: "blur(12px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl overflow-hidden w-full max-w-4xl flex flex-col"
            style={{
              height: "90vh",
              boxShadow: "0 48px 120px rgba(0,0,0,0.45)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-primary-500/10 bg-primary-50/60 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <FileText
                    size={14}
                    className="text-primary-500"
                    strokeWidth={2.2}
                  />
                </div>
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-primary-500">
                    {item.issue}
                  </p>
                  <p className="m-0 font-heading text-sm font-bold text-dark-900 leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white no-underline bg-primary-500 hover:bg-primary-600 transition-colors"
                >
                  <Download size={12} strokeWidth={2.2} />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl bg-white border border-primary-500/15 flex items-center justify-center cursor-pointer hover:bg-primary-50 transition-colors"
                  aria-label="Close"
                >
                  <X size={13} className="text-dark-500" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* PDF iframe — desktop only, modal is never shown on mobile */}
            <iframe
              src={item.pdf}
              title={item.title}
              className="w-full flex-1 border-none"
              style={{ minHeight: 0 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Bulletin = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <PDFModal item={activeItem} onClose={() => setActiveItem(null)} />

      <section
        ref={ref}
        className="bg-primary-50/30 py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-[1150px] mx-auto px-6 relative">
          {/* ── Header ── */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
                Technical Bulletin
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-heading font-extrabold text-[#111] leading-tight text-[clamp(1.7rem,2.8vw,2.35rem)]"
            >
              Industry insights &
              <br />
              <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
                technical guidance.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px mb-10 origin-left bg-gradient-to-r from-primary-200 to-transparent"
          />

          {/* ── 2-col: delegation | bulletin card ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Delegation photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-600">
                Recent Visit
              </p>
              <h3 className="m-0 font-heading font-bold text-dark-900 text-base leading-snug">
                German Delegation to Chi Farms Training School
              </h3>
              <div className="space-y-3">
                {recentVisitImages.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-primary-500/10 shadow-sm bg-white"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block w-full aspect-[4/3] object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bulletin card */}
            {bulletins.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="rounded-2xl border  border-primary-500/10 bg-white shadow-sm overflow-hidden"
              >
                {/* Cover */}
                {isMobile ? (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full block group"
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="block w-full h-auto"
                    />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveItem(item)}
                    className="relative w-full block cursor-pointer group border-none p-0 bg-transparent"
                    aria-label={`Preview ${item.title}`}
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(13,67,49,0.55)" }}
                    >
                      <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-primary-600 shadow-lg">
                        <ExternalLink size={14} strokeWidth={2.2} />
                        Preview PDF
                      </div>
                    </div>
                  </button>
                )}

                {/* Card footer */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-500 mb-1">
                        {item.issue}
                      </p>
                      <p className="m-0 font-heading font-bold text-dark-900 text-sm leading-snug">
                        {item.title}
                      </p>
                      <p className="m-0 mt-1 font-serif italic text-xs text-dark-400 leading-relaxed">
                        {item.topic}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-primary-500/[0.08]">
                    {isMobile ? (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-primary-500/20 bg-primary-500/[0.06] py-2.5 text-sm font-semibold text-primary-600 no-underline"
                      >
                        <ExternalLink size={14} strokeWidth={2.2} />
                        Open PDF
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveItem(item)}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-primary-500/20 bg-primary-500/[0.06] py-2.5 text-sm font-semibold text-primary-600 cursor-pointer hover:bg-primary-500/[0.12] transition-colors"
                      >
                        <ExternalLink size={14} strokeWidth={2.2} />
                        Preview
                      </button>
                    )}
                    <a
                      href={item.pdf}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 py-2.5 text-sm font-semibold text-white no-underline hover:bg-primary-600 transition-colors"
                    >
                      <Download size={14} strokeWidth={2.2} />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bulletin;
