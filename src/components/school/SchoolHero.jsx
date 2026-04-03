import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AboutSchool from "./AboutSchool";
import Courses from "./Courses";
import Bulletin from "./Bulletin";

const tabs = [
  { id: "about", label: "About Institution" },
  { id: "bulletin", label: "Technical Bulletin" },
  { id: "courses", label: "Courses Offered" },
];

export default function SchoolHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      className="relative overflow-hidden bg-primary-50/30 pb-[4rem] pt-[9rem] md:pt-[10rem]"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.25)_1px,transparent_1px)] bg-[length:32px_32px]" />

      <div className="relative max-w-[1150px] mx-auto px-6">
       <div className="grid grid-cols1 md:grid-cols-2 gap-8">
         {/* HEADER */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6 text-[10px] font-extrabold tracking-[0.14em] uppercase border border-[#1F8F63]/20 bg-[#1F8F63]/10 text-[#1F8F63]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F8F63]" />
            Poultry School
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-extrabold text-[#111]"
            style={{
              fontSize: "clamp(1.7rem, 2.8vw, 2.35rem)",
              lineHeight: 1.12,
            }}
          >
            Training excellence for <br />
            <span className="bg-gradient-to-br from-[#1F8F63] to-[#41AA80] bg-clip-text text-transparent">
              modern poultry growth.
            </span>
          </motion.h2>
        </div>
         

         {/* ── HEADER RIGHT: sub-copy — left edge = "From hatchery" card left edge ── */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginBottom: "40px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        margin: 0,
                        color: "#5a7065",
                      }}
                    >
                        Chi Farms Training Centre aims to create, share and provide knowledge and experience to customers and clients. We execute capacity building and skill acquisition initiatives to strengthen the skills of people in the poultry industry.

As a resource centre, we collaborate with other institution initiatives and engagements in both the public and private sectors, to empower people across the animal protein value chains.
                    </p>
                  </motion.div> */}

       </div>

       

        {/* TABS */}
<div className="flex flex-wrap gap-6 mb-8 border-b border-[#1F8F63]/20">
  {tabs.map((tab) => {
    const isActive = activeTab === tab.id;

    return (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className="relative pb-3 text-sm font-semibold text-[#1F8F63]/70 hover:text-[#1F8F63] transition"
      >
        {/* Label */}
        <span
          className={`transition ${
            isActive ? "text-[#1F8F63]" : ""
          }`}
        >
          {tab.label}
        </span>

        {/* Active underline */}
        {isActive && (
          <motion.div
            layoutId="tabUnderline"
            className="absolute left-0 bottom-0 h-[2px] w-full bg-[#1F8F63]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>
    );
  })}
</div>
         
      
        

        {/* CONTENT */}
        <div className="relative min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="text-[#555] text-sm leading-relaxed font-serif"
            >
              {activeTab === "about" && (
               <AboutSchool />
              )}

              {activeTab === "bulletin" && (
                <Bulletin />
              )}

              {activeTab === "courses" && (
               <Courses />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ACCENT LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-[1px] mt-10 origin-left bg-gradient-to-r from-[#A6DDC8] to-transparent"
        />
      </div>
    </section>
  );
}