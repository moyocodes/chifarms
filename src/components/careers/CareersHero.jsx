import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Upload, ChevronRight, CheckCircle2 } from "lucide-react";
import ApplicationSidebar from "./ApplicationSidebar";



const requirements = [
  "Minimum grade of Second-Class Upper Division from a recognized university",
  "Bachelor's degree in Food Science, Agriculture, Microbiology, Marketing, Business Administration, Finance, Accounting, Computer Science, Computer/Mechanical/Civil/Electrical Engineering, or related fields",
  "0–2 years' relevant work experience",
  "Excellent research and writing skills",
  "Strong communication and presentation skills",
  "Strong analytical, critical thinking and problem-solving skills",
  "Proficiency in Microsoft Office (Word, PowerPoint, Excel) applications",
  "Willingness to work in any of our locations within and outside Nigeria",
  "Not older than 30 years by 31st December 2023",
];

const highlights = [
  { icon: "🎓", label: "Mentorship",      desc: "Learn from multi-disciplinary professionals" },
  { icon: "🔁", label: "Rotation Scheme", desc: "Gain knowledge across all business areas" },
  { icon: "🌍", label: "Nationwide",      desc: "Multiple locations across Nigeria" },
  { icon: "🚀", label: "Career Growth",   desc: "Fast-track your early career" },
];

export default function CareersHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ApplicationSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <section
        ref={ref}
        className="relative overflow-hidden bg-primary-50/30 pt-[9rem] md:pt-[10rem] pb-20"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]
          [background-image:radial-gradient(circle,rgba(31,143,99,0.18)_1px,transparent_1px)]
          [background-size:32px_32px]"
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { className: "w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] -top-24 -right-24 opacity-[0.02]" },
            { className: "w-[13rem] h-[13rem] md:w-[18rem] md:h-[18rem] -bottom-12 -left-16 opacity-[0.02]" },
            { className: "hidden md:block w-44 h-44 top-[28%] right-[24%] opacity-[0.05]" },
          ].map((logo, i) => (
            <img
              key={i}
              src="/chilogo.svg"
              alt=""
              className={`absolute object-contain ${logo.className}`}
            />
          ))}
        </div>
        {/* Ambient blobs */}
        <div className="absolute -top-24 -right-20 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none
          bg-[radial-gradient(circle,rgba(31,143,99,0.07),transparent_70%)]"
        />
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full blur-[70px] pointer-events-none
          bg-[radial-gradient(circle,rgba(65,170,128,0.055),transparent_70%)]"
        />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6
              text-[10px] font-extrabold tracking-[0.14em] uppercase
              border border-primary-500/20 bg-primary-500/10 text-primary-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            Careers
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-[clamp(1.7rem,2.8vw,2.35rem)] font-extrabold leading-[1.12] text-dark-900 mb-2"
          >
            Grow with us — <br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              do work that matters.
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            className="h-[1px] origin-left bg-gradient-to-r from-primary-200 to-transparent mb-12"
          />

          {/* Program */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-8">
            <span className="font-heading text-[0.68rem] font-bold tracking-widest uppercase text-primary-500">
              Open Program
            </span>
            <h2 className="font-heading text-[clamp(1.2rem,2vw,1.55rem)] font-extrabold text-dark-900 mt-1">
              2024 Graduate Trainee Program
            </h2>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((h, i) => {
              const isH = hov === `pill-${i}`;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  onHoverStart={() => setHov(`pill-${i}`)} onHoverEnd={() => setHov(null)}
                  className={`relative overflow-hidden backdrop-blur-md transition-all duration-300 p-4 border
                    ${isH ? "border-primary-500/30 bg-primary-50 shadow-soft" : "border-primary-500/10 bg-white/60"}`}
                >
                  <motion.div
                    animate={{ scaleX: isH ? 1 : 0 }}
                    className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-primary-500 to-primary-400"
                  />
                  <div className="text-lg mb-1">{h.icon}</div>
                  <div className={`font-heading text-sm font-bold mb-1 transition-colors ${isH ? "text-primary-500" : "text-dark-900"}`}>
                    {h.label}
                  </div>
                  <div className="text-xs italic text-dark-400 leading-relaxed">{h.desc}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
              <h3 className="font-heading text-xs font-bold tracking-widest uppercase text-primary-500 mb-4">
                About the Program
              </h3>
              <div className="text-sm text-dark-500 leading-[1.85] space-y-4">
                <p>Our Graduate Trainee Program seeks smart, young university graduates to step into the future with us. We aim to empower people to grow their career, gain insight and do work that matters, supported by a community that values diversity and cares about the individual.</p>
                <p>The program is designed to provide you with invaluable learning and mentoring opportunities from multi-disciplinary experienced professionals to help you make the most of your early years in the workforce.</p>
                <p>Our rotation scheme ensures that trainees gather knowledge from all aspects of the business and are stationed where best suited for them. We welcome candidates with an innovative mindset, a passion for excellence, collaboration, and a commitment to outstanding solutions.</p>
              </div>

              {/* Apply button — now opens sidebar */}
              <motion.button
                onClick={() => setSidebarOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 mt-8 px-8 py-3
                  text-white font-heading text-sm font-bold tracking-wide
                  rounded-xl overflow-hidden cursor-pointer border-none
                  shadow-[0_8px_30px_rgba(31,143,99,0.3)]
                  hover:shadow-[0_10px_40px_rgba(31,143,99,0.45)]
                  transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-primary-800/80" />
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now →
                </span>
              </motion.button>
            </motion.div>

            {/* Right — requirements */}
            <motion.div
              initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              className="relative overflow-hidden p-8 border border-primary-500/10 bg-white/60 backdrop-blur-lg"
            >
              <div className="absolute -bottom-5 -right-5 w-[120px] h-[120px] rounded-full
                bg-[radial-gradient(circle,rgba(31,143,99,0.07),transparent_70%)]" />
              <h3 className="font-heading text-xs font-bold tracking-widest uppercase text-primary-500 mb-5">
                Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    className={`flex items-start gap-2 pb-3 ${i !== requirements.length - 1 && "border-b border-primary-500/10"}`}
                  >
                    <span className="mt-1 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0" />
                    <span className="text-sm text-dark-500 leading-relaxed">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
