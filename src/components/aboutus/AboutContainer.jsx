import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import FooterCTA from "../FooterCTA";
import CompanyProfile from "./CompanyProfile";
import HeroSection from "./HeroSection";
import VisionMission from "./VisionMission";
import CultureValues from "./CultureValues";
import CSR from "./CSR";
import FAQ from "./FAQ";
import HeroBanner from "../HeroBanner";

// 🔥 HERO DATA
const ABOUT_BANNER_DATA = {
  title: "About Us",
  sub: "Who we are and what we stand for",
  accent: "#1F8F63",
  group: "Company",
  categories: [{ label: "About", summary: "Learn more", stats: [] }],
};

const SECTIONS = [
  { id: "company-profile", label: "Company Profile", icon: "🏢", component: CompanyProfile },
  { id: "partners", label: "Our Partners", icon: "🤝", component: HeroSection },
  { id: "vision", label: "Vision & Mission", icon: "🎯", component: VisionMission },
  { id: "culture", label: "Culture & Values", icon: "🌱", component: CultureValues },
  { id: "csr", label: "CSR", icon: "💚", component: CSR },
  { id: "faq", label: "FAQ", icon: "❓", component: FAQ },
];

const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const AboutContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hashId = location.hash.replace("#", "");
  const [activeId, setActiveId] = useState(
    SECTIONS.some((s) => s.id === hashId) ? hashId : SECTIONS[0].id
  );

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (SECTIONS.some((s) => s.id === id)) {
      setActiveId(id);
    }
  }, [location.hash]);

  const handleSelect = (id) => {
    setActiveId(id);
    navigate(`/about#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeSection = SECTIONS.find((s) => s.id === activeId);
  const ActiveComponent = activeSection.component;

  return (
    <div className="bg-secondary min-h-screen">

      {/* ✅ HERO */}
      <HeroBanner
        d={ABOUT_BANNER_DATA}
        activeCat={{
          label: activeSection.label,
          summary: `Explore our ${activeSection.label.toLowerCase()}`,
        }}
        logoSrc="/chilogo.svg"
        breadcrumbs={[
          { to: "/", label: "Home", icon: true },
          { to: "/about", label: "About Us" }, // ✅ FIXED NAV
          { label: activeSection.label },
        ]}
      />

      {/* CONTENT */}
      <section className="relative bg-secondary-100 pb-20">
        
        <div className="absolute inset-0 opacity-20 pointer-events-none 
          [background-image:radial-gradient(circle,rgba(31,143,99,0.2)_1px,transparent_1px)]
          [background-size:28px_28px]" 
        />

        <div className="relative max-w-6xl mx-auto px-6 mt-10">

          {/* TABS */}
          <div className="flex border-b border-black/10 mb-8 overflow-x-auto">
            {SECTIONS.map((sec) => {
              const isActive = sec.id === activeId;

              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelect(sec.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 text-sm whitespace-nowrap
                    ${isActive ? "text-primary-500 font-bold" : "text-dark-300"}
                  `}
                >
                  {sec.icon}
                  {sec.label}

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* PAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              variants={pageVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default AboutContainer;
