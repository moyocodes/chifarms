"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { F, hex2rgb } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease, delay },
});

export default function HeroBanner({ d, activeCat, logoSrc, breadcrumbs }) {
  const stats = activeCat?.stats ?? d.categories?.[0]?.stats ?? [];
  const rgb = hex2rgb(d.accent);

  // ✅ DEFAULT (fallback)
  const defaultBreadcrumbs = [
    { to: "/", label: "Home", icon: true },
    { label: d.title },
  ];

  // ✅ USE CUSTOM IF PROVIDED
  const crumbs = breadcrumbs ?? [
    ...defaultBreadcrumbs,
    ...(activeCat ? [{ label: activeCat.label }] : []),
  ];

  return (
    <section
      className="pt-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #f4f9f6 55%, #eef5f1 100%)",
      }}
    >
      {/* WATERMARK */}
      <motion.div
        {...fadeIn(0)}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[
          { size: 340, top: "-60px", right: "-60px", opacity: 0.03 },
          { size: 200, bottom: "-30px", left: "-40px", opacity: 0.03 },
          { size: 130, top: "30%", right: "28%", opacity: 0.1 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...pos,
              width: pos.size,
              height: pos.size,
            }}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt=""
                className="w-full h-full object-contain"
              />
            ) : (
              <svg viewBox="0 0 200 200" fill="none">
                <path
                  d="M100 180 C100 180 20 130 20 70 C20 30 60 10 100 10 C140 10 180 30 180 70 C180 130 100 180 100 180Z"
                  stroke={d.accent}
                  strokeWidth="6"
                />
              </svg>
            )}
          </div>
        ))}
      </motion.div>

      {/* TOP BORDER */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: `linear-gradient(to right, ${d.accent}, ${d.accent}55 60%, transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ✅ BREADCRUMBS */}
        <motion.nav
          {...fadeIn(0.05)}
          className="flex items-center gap-1 mb-3 flex-wrap text-xs font-semibold"
        >
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="flex items-center gap-1 text-dark-300 hover:text-primary-500 transition"
                >
                  {crumb.icon && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                    </svg>
                  )}
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-dark-900 font-bold">
                  {crumb.label}
                </span>
              )}

              {i < crumbs.length - 1 && (
                <span className="opacity-40">/</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* TITLE */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-heading font-extrabold text-dark-900 text-[clamp(2rem,4vw,3rem)] leading-tight"
        >
          {activeCat ? activeCat.label : d.title}
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-primary-500 text-xs font-bold uppercase tracking-wider mt-2"
        >
          {activeCat ? activeCat.summary : d.sub}
        </motion.p>

        <div className="h-[2px] w-10 mt-3 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
      </div>
    </section>
  );
}