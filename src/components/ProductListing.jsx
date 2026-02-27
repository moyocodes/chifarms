"use client";

/**
 * ProductListing.jsx
 *
 * Route structure:
 *   /products/poultry           → Division landing: shows all categories as cards
 *   /products/poultry/breeder   → Category detail: products within Breeder Chicks
 *   /products/poultry/doc       → Category detail: products within Day Old Chicks
 *   /products/frozen/chicken    → etc.
 *
 * Router setup (routes.jsx):
 *   <Route path="/products/:slug"             element={<ProductListing />} />
 *   <Route path="/products/:slug/:categoryId" element={<ProductListing />} />
 *
 * Component tree:
 *   ProductListing
 *   ├── HeroBanner
 *   ├── CategoryCard   (division landing)
 *   ├── ProductCard    (category detail)
 *   └── DetailPanel    (slide-in overlay)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { getDivision } from "@/lib/product";

import HeroBanner from "./HeroBanner";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

import DetailPanel from "./DetailPanel";
import ContactSidebar from "./ContactSidebar";
import { F } from "@/lib/constants";

export default function ProductListing() {
  const { slug, categoryId } = useParams();
  const d = getDivision(slug);
  const [selected, setSelected] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);

  const activeCat = categoryId
    ? (d?.categories?.find((c) => c.id === categoryId) ?? null)
    : null;

  useEffect(() => {
    setSelected(null);
    setSelectedCat(null);
  }, [slug, categoryId]);

  if (!d) return null;

  return (
    <>
      <style>{`
        .pl-grid  { display: grid; gap: 1rem;   grid-template-columns: repeat(4,1fr); align-items: stretch; }
        .cat-grid { display: grid; gap: 1.2rem; grid-template-columns: repeat(3,1fr); align-items: start; }
        .landing-layout { display: grid; grid-template-columns: 1fr 260px; gap: 2rem; align-items: start; }
        @media (max-width:1100px) { .pl-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width:900px)  { .landing-layout { grid-template-columns: 1fr; } }
        @media (max-width:760px)  { .pl-grid { grid-template-columns: repeat(2,1fr); } .cat-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:480px)  { .pl-grid { grid-template-columns: 1fr; }          .cat-grid { grid-template-columns: 1fr; } }
        .sib-link:hover { background: rgba(0,0,0,0.08) !important; color: #444 !important; }
      `}</style>

      {/* Pass logoSrc="/your-logo.svg" (or .png) once you have the asset */}
      <HeroBanner d={d} activeCat={activeCat} logoSrc="/chilogo.svg" />

      <section
        style={{
          backgroundColor: "#F5F7F5",
          position: "relative",
          overflow: "hidden",
          padding: "3.5rem 0 5rem",
        }}
      >
        {/* Dot grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.22,
            backgroundImage:
              "radial-gradient(circle, rgba(31,143,99,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            {/* ── DIVISION LANDING: all categories ── */}
            {!categoryId && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* ── Back to all products ── */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <Link
                    to="/products"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: F.sans,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#888",
                      textDecoration: "none",
                      padding: "5px 13px",
                      borderRadius: 99,
                      background: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.color = "#444";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                      e.currentTarget.style.color = "#888";
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 12H5M12 5l-7 7 7 7"
                      />
                    </svg>
                    All Products
                  </Link>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <p
                    style={{
                      fontFamily: F.sans,
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#c8c8c8",
                      margin: "0 0 8px",
                    }}
                  >
                    Browse by Category
                  </p>
                  <div
                    style={{
                      height: 1,
                      background: `linear-gradient(to right, ${d.accent}, transparent)`,
                    }}
                  />
                </div>
                <div className="landing-layout">
                  <div>
                    <div className="cat-grid">
                      {d.categories.map((cat, i) => (
                        <CategoryCard
                          key={cat.id}
                          cat={cat}
                          d={d}
                          index={i}
                          slug={slug}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: sticky contact sidebar */}
                  <ContactSidebar d={d} />
                </div>
              </motion.div>
            )}

            {/* ── CATEGORY DETAIL: products in this category ── */}
            {categoryId && activeCat && (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Top nav bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: "1.5rem",
                  }}
                >
                  <Link
                    to={`/products/${slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: F.sans,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: d.accent,
                      textDecoration: "none",
                      padding: "5px 13px",
                      borderRadius: 99,
                      background: d.accentLight,
                      border: `1px solid ${d.accentBorder}`,
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 12H5M12 5l-7 7 7 7"
                      />
                    </svg>
                    All {d.title} Categories
                  </Link>

                  {/* Sibling category pills */}
                  {d.categories.length > 1 && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {d.categories
                        .filter((c) => c.id !== categoryId)
                        .map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/products/${slug}/${cat.id}`}
                            className="sib-link"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              padding: "5px 12px",
                              borderRadius: 99,
                              background: "rgba(0,0,0,0.04)",
                              border: "1px solid rgba(0,0,0,0.08)",
                              fontFamily: F.sans,
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              color: "#888",
                              textDecoration: "none",
                              transition: "all 0.2s",
                            }}
                          >
                            <span style={{ fontSize: 13 }}>{cat.icon}</span>
                            {cat.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>

                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: "0.9rem",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: d.accentLight,
                      border: `1px solid ${d.accentBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 17,
                      flexShrink: 0,
                    }}
                  >
                    {activeCat.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: F.sans,
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        color: "#1A1A1A",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {activeCat.label}
                    </p>
                    <p
                      style={{
                        fontFamily: F.serif,
                        fontSize: "0.73rem",
                        color: "#888",
                        margin: 0,
                      }}
                    >
                      {activeCat.summary}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    height: 1,
                    marginBottom: "1.35rem",
                    background: `linear-gradient(to right, ${d.accent}, transparent)`,
                  }}
                />
                <div className="landing-layout">
                  <div>
                    <div className="cat-grid">
                      {activeCat.items.map((item, i) => (
                        <ProductCard
                          key={item.name}
                          item={item}
                          cat={activeCat}
                          d={d}
                          index={i}
                          onSelect={(itm) => {
                            setSelected(itm);
                            setSelectedCat(activeCat);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <ContactSidebar d={d} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <DetailPanel
        item={selected}
        cat={selectedCat}
        div={d}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
