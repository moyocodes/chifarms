/**
 * ProductsSection.jsx
 * - Fixed-height cards (uniform grid)
 * - Filter tabs by category group
 * - Slide-in detail panel
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── DATA ────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "breeder",
    group: "Poultry",
    label: "Breeder Chicks",
    icon: "🥚",
    color: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    summary: "GP & PS parent stock — Arbor Acres Plus broiler and ISA Brown layer lines.",
    description: "Chi Farms Ltd. produces Parent Stock (PS) birds at its state-of-the-art hatchery. Our parent stock programme covers both the broiler and layer line, sourced from globally certified genetic suppliers. Every flock undergoes rigorous biosecurity protocols, vaccination schedules and performance monitoring before delivery.",
    stats: [
      { label: "Hatchery Capacity", value: "500K+", unit: "eggs/cycle" },
      { label: "Biosecurity Level", value: "A+", unit: "certified" },
      { label: "Breeds Available", value: "2", unit: "lines" },
    ],
    items: [
      {
        name: "Arbor Acres Plus Parent Stock",
        image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80",
        badge: "Broiler Line",
        desc: "The globally proven Arbor Acres Plus PS delivers exceptional FCR, fast growth rate and robust livability. Ideal for large-scale commercial broiler production.",
        specs: ["High breast meat yield", "Superior FCR", "Proven global genetics", "5–6 week grow-out"],
      },
      {
        name: "ISA Brown Parent Stock",
        image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
        badge: "Layer Line",
        desc: "ISA Brown PS birds are world-renowned for their docile temperament, early sexual maturity and consistently high egg output over a long production cycle.",
        specs: ["300+ eggs/hen/year", "Early sexual maturity", "Docile flock", "Long cycle"],
      },
    ],
  },
  {
    id: "doc",
    group: "Poultry",
    label: "Day Old Chicks",
    icon: "🐣",
    color: "#187553",
    tint: "rgba(24,117,83,0.08)",
    border: "rgba(24,117,83,0.18)",
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800&q=80",
    summary: "Commercial broiler and pullet DOCs — three proven breeds.",
    description: "Chi Farms produces commercial day-old chicks (DOCs) from our certified parent flocks. All chicks are Marek's vaccinated in-ovo, graded, sexed where required, and delivered in temperature-controlled conditions.",
    stats: [
      { label: "Weekly Output", value: "250K+", unit: "chicks" },
      { label: "Hatch Rate", value: "95%+", unit: "average" },
      { label: "Breeds", value: "3", unit: "commercial" },
    ],
    items: [
      {
        name: "Arbor Acres Plus Broiler",
        image: "https://images.unsplash.com/photo-1621688822569-1f0649cf1989?w=600&q=80",
        badge: "Broiler",
        desc: "The #1 commercial broiler strain in Nigeria. Outstanding uniformity, superior meat yield and excellent feed conversion.",
        specs: ["2.5kg at 35 days", "Best-in-class FCR", "High breast yield", "Low mortality"],
      },
      {
        name: "ISA Brown Commercial Pullet",
        image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
        badge: "Layer",
        desc: "Nigeria's most popular commercial brown layer. Reaches peak production early and sustains high lay rates across a 72-week cycle.",
        specs: ["72-week cycle", "First egg at 18wks", "Excellent shell", "High persistency"],
      },
      {
        name: "Amberlink Commercial Layers",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80",
        badge: "Layer",
        desc: "A robust, heat-tolerant layer strain well-suited to the Nigerian climate, prized for feed efficiency and adaptability.",
        specs: ["Heat-tolerant", "Strong shell", "Low feed consumption", "All systems"],
      },
    ],
  },
  {
    id: "chicken",
    group: "Frozen Foods",
    label: "Chicken Products",
    icon: "🍗",
    color: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80",
    summary: "Frozen dressed chicken and premium cuts — whole birds, wings, fillets and more.",
    description: "Processed at our NAFDAC-certified plant on the Lagos-Ibadan Expressway, our chicken products are slaughtered, cleaned, portioned and blast-frozen to -18°C within hours. Cold chain integrity is maintained from plant to point of sale.",
    stats: [
      { label: "Processing", value: "10K+", unit: "birds/day" },
      { label: "Cold Chain", value: "-18°C", unit: "maintained" },
      { label: "SKUs", value: "9", unit: "cuts" },
    ],
    items: [
      { name: "Frozen Dressed Chicken", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&q=80", badge: "Whole Bird", desc: "Whole eviscerated birds, blast-frozen and vacuum-sealed. Available in 1.2–1.8kg weight bands for retail and food service.", specs: ["1.2–1.8kg bands", "NAFDAC certified", "Vacuum sealed", "Blast frozen"] },
      { name: "Chicken Wings", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", badge: "Cut", desc: "Full wing portions, individually quick-frozen. Popular with QSRs, restaurants and retail chains.", specs: ["IQF frozen", "Retail & foodservice", "Consistent sizing", "No added water"] },
      { name: "Premium Chicken Sausage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Processed", desc: "Seasoned chicken sausages made from 100% whole-muscle chicken. Available smoked and unsmoked.", specs: ["100% chicken", "Smoked & unsmoked", "Retail & catering", "No fillers"] },
      { name: "Chicken Fillet", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&q=80", badge: "Cut", desc: "Skinless boneless breast fillets, individually portioned and frozen. Preferred for hotels and QSRs.", specs: ["Skinless boneless", "Individually portioned", "IQF frozen", "Hotel grade"] },
      { name: "Drumsticks & Lap", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", badge: "Cut", desc: "Meaty drumsticks and lap cuts, frozen in bulk and retail packs. The top-selling retail SKU.", specs: ["Bulk & retail", "Consistent sizing", "Clean cut", "High meat yield"] },
      { name: "Smoked Frozen Chicken", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80", badge: "Smoked", desc: "Whole birds and portions slow-smoked then blast-frozen. Ready to reheat and serve.", specs: ["Slow smoked", "Blast-frozen", "Whole & portions", "Premium retail"] },
    ],
  },
  {
    id: "beef",
    group: "Frozen Foods",
    label: "Beef Products",
    icon: "🥩",
    color: "#0D6B47",
    tint: "rgba(13,107,71,0.08)",
    border: "rgba(13,107,71,0.18)",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
    summary: "Beef and blended sausages — pepperoni, breakfast, smoked and minced lines.",
    description: "Our beef division produces a diverse range of sausages and processed beef products from select beef and blended formulations. All products are made in our NAFDAC-approved facility.",
    stats: [
      { label: "SKUs", value: "7+", unit: "beef lines" },
      { label: "Standard", value: "NAFDAC", unit: "approved" },
      { label: "Distribution", value: "Nationwide", unit: "reach" },
    ],
    items: [
      { name: "Pepperoni Sausage", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", badge: "Cured", desc: "Classic Italian-style pepperoni from select beef and pork blends. Preferred by commercial pizzerias and QSR chains.", specs: ["Beef & pork blend", "QSR grade", "Consistent slice", "Vacuum sealed"] },
      { name: "Breakfast Sausage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Fresh", desc: "Mild-seasoned breakfast links and patties for hotels, café chains and food courts. Fresh-chilled and frozen.", specs: ["Links & patties", "Mild seasoning", "Hotel grade", "Fresh & frozen"] },
      { name: "Smoked Sausage", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80", badge: "Smoked", desc: "Slow-smoked beef sausages with rich flavour. Ready-to-eat or grilled — popular with retail and suya vendors.", specs: ["Wood-smoked", "Ready-to-eat", "Retail & vendor", "Rich flavour"] },
      { name: "Minced Meat", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", badge: "Fresh", desc: "Fresh-chilled and frozen minced beef from select cuts for restaurants, fast food and household retail.", specs: ["Select cuts", "Fresh & frozen", "Retail & bulk", "Consistent fat ratio"] },
      { name: "Value Sausage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Economy", desc: "An affordable everyday sausage for mass-market retail and school feeding programmes. NAFDAC certified.", specs: ["Mass-market", "Affordable", "School feeding", "NAFDAC certified"] },
    ],
  },
  {
    id: "fries",
    group: "Frozen Foods",
    label: "French Fries",
    icon: "🍟",
    color: "#1A7A55",
    tint: "rgba(26,122,85,0.08)",
    border: "rgba(26,122,85,0.18)",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
    summary: "Lutosa frozen fries in four professional cuts — straight, crinkle, shoestring.",
    description: "Chi Farms is the exclusive distributor of Lutosa frozen potato products in Nigeria. A leading Belgian brand trusted by global QSR chains, delivered cold-chain direct.",
    stats: [
      { label: "Origin", value: "Belgian", unit: "imported" },
      { label: "Cuts", value: "4", unit: "styles" },
      { label: "Pack", value: "2.5kg", unit: "foodservice" },
    ],
    items: [
      { name: "Straight Cut Fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", badge: "Classic", desc: "The universal QSR standard. Pre-fried, frozen, ready in under 4 minutes. Consistent golden colour.", specs: ["Pre-fried frozen", "4 min cook", "Golden crisp", "2.5kg pack"] },
      { name: "Crinkle Cut Fries", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", badge: "Specialty", desc: "Ridged fries with extra crunch and sauce retention. Popular with casual dining and delivery kitchens.", specs: ["Extra crunch", "Sauce retention", "Casual dining", "Uniform sizing"] },
      { name: "Shoestring Fries", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80", badge: "Thin Cut", desc: "Ultra-thin fries for upscale burger restaurants and hotel all-day dining. Fast cook, great plate presentation.", specs: ["Ultra-thin", "Fast cook", "Hotel grade", "Premium pack"] },
      { name: "Food Services Pack", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", badge: "Bulk", desc: "Large-format packs for high-volume kitchens, catering companies and canteen operators.", specs: ["High volume", "Catering grade", "Cost efficient", "Multiple cuts"] },
    ],
  },
  {
    id: "pizza",
    group: "Frozen Foods",
    label: "Pizza Toppings",
    icon: "🍕",
    color: "#0F7049",
    tint: "rgba(15,112,73,0.08)",
    border: "rgba(15,112,73,0.18)",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    summary: "Pepperoni and blended beef & chicken toppings for QSR kitchens.",
    description: "Our customised pizza topping range is developed for Nigerian QSR chains and commercial pizzerias. Precision-sliced, pre-portioned by pizza size and frozen for chain-wide consistency.",
    stats: [
      { label: "Client Type", value: "QSR", unit: "& pizzerias" },
      { label: "Portioning", value: "Custom", unit: "by pizza size" },
      { label: "SKUs", value: "2", unit: "toppings" },
    ],
    items: [
      { name: "Pepperoni Toppings", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", badge: "Cured Meat", desc: "Pre-sliced pepperoni rounds portioned per pizza — eliminates waste and guarantees chain-wide consistency.", specs: ["Pre-sliced", "Per-pizza portions", "Eliminates waste", "Chain consistent"] },
      { name: "Beef & Chicken Toppings", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", badge: "Blended", desc: "Seasoned beef and chicken topping blend, pre-cooked and portioned for local-flavour pizza chains.", specs: ["Pre-cooked", "Nigerian seasoning", "Custom portions", "IQF frozen"] },
    ],
  },
  {
    id: "catfish",
    group: "Aquaculture",
    label: "Catfish Products",
    icon: "🐟",
    color: "#0D7A56",
    tint: "rgba(13,122,86,0.08)",
    border: "rgba(13,122,86,0.18)",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
    summary: "Farm-raised catfish — live, frozen, filleted — plus hybrid juveniles.",
    description: "Chi Farms' aquaculture division operates from our Ibadan facility, producing African catfish (Clarias gariepinus) from fingerling to table size. Our hybrid juveniles show 30–40% faster growth than conventional strains.",
    stats: [
      { label: "Species", value: "Clarias", unit: "gariepinus" },
      { label: "Grow-out", value: "4–5", unit: "months" },
      { label: "Facility", value: "Ibadan", unit: "farm" },
    ],
    items: [
      { name: "Live Table Size Catfish", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=80", badge: "Live Fish", desc: "Farm-raised live catfish at 600g–1.2kg table size, available for collection or bulk delivery across Lagos and Ibadan.", specs: ["600g–1.2kg", "Farm or delivery", "Live transport", "Lagos & Ibadan"] },
      { name: "Frozen Table Size Catfish", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80", badge: "Frozen", desc: "Gutted and blast-frozen whole catfish for supermarkets, food distributors and processing companies.", specs: ["Gutted & frozen", "Whole fish", "Supermarket grade", "Consistent sizing"] },
      { name: "Catfish Fillet", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80", badge: "Processed", desc: "Skinless boneless catfish fillets, individually frozen. In demand from hotels, restaurants and health-conscious retail.", specs: ["Skinless boneless", "IQF frozen", "Hotel grade", "High protein"] },
      { name: "Pure Line & Hybrid Juveniles", image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=600&q=80", badge: "Juveniles", desc: "Genetically superior fingerlings for farm stocking — 30–40% faster growth than conventional strains.", specs: ["30–40% faster growth", "Disease-resistant", "Post-fingerling", "Genetic selection"] },
    ],
  },
  {
    id: "support",
    group: "Support",
    label: "Technical Support",
    icon: "📋",
    color: "#14664A",
    tint: "rgba(20,102,74,0.08)",
    border: "rgba(20,102,74,0.18)",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    summary: "Farmer training, on-field visits and diagnostic lab services.",
    description: "Chi Farms' technical services division supports customers long after the sale. Our vets, poultry scientists and aquaculture specialists provide in-person training, farm visits and laboratory diagnostics to keep your operation at peak performance.",
    stats: [
      { label: "Farmers Trained", value: "3,000+", unit: "to date" },
      { label: "Field Vets", value: "10+", unit: "on staff" },
      { label: "Lab", value: "Ibadan", unit: "Oluyole" },
    ],
    items: [
      { name: "Customer Training", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80", badge: "Training", desc: "Structured poultry school covering biosecurity, feed management, vaccination and record-keeping. Certificate issued on completion.", specs: ["Biosecurity", "Feed & vaccines", "Record keeping", "Certificate issued"] },
      { name: "On-Field Farm Support", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80", badge: "Field", desc: "Scheduled and emergency farm visits by our vet and production team — disease diagnosis to flock performance audits.", specs: ["Scheduled visits", "Emergency response", "Disease diagnosis", "Production audits"] },
      { name: "Laboratory Services", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80", badge: "Diagnostic", desc: "Full diagnostics at our Oluyole lab — serology, post-mortem, bacteriology, water and feed analysis. 24–48hr results.", specs: ["Serology", "Post-mortem", "Feed & water testing", "24–48hr results"] },
    ],
  },
];

const GROUPS = ["All", "Poultry", "Frozen Foods", "Aquaculture", "Support"];

// ─── DETAIL PANEL ─────────────────────────────────────────────────

function ProductDetail({ cat, onClose }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <AnimatePresence>
      {cat && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed", top: 84, left: 0, right: 0, bottom: 0, zIndex: 80,
              background: "rgba(5,20,13,0.62)", backdropFilter: "blur(6px)",
            }}
          />
          <motion.div
            key={`panel-${cat.id}`}
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            onAnimationStart={() => setActiveItem(0)}
            style={{
              position: "fixed", top: 84, right: 0, bottom: 0,
              width: "min(580px, 100vw)", zIndex: 90, background: "#fff",
              display: "flex", flexDirection: "column", overflowY: "auto",
              borderRadius: "16px 0 0 0",
            }}
          >
            {/* Hero */}
            <div style={{ position: "relative", height: 200, flexShrink: 0, overflow: "hidden" }}>
              <img src={cat.image} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${cat.color}F0 0%, ${cat.color}55 40%, transparent 100%)` }} />
              <button onClick={onClose} style={{
                position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: "50%",
                background: "rgba(0,0,0,0.38)", border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer", color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
              }}>×</button>
              <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.22)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase", color: "#fff", marginBottom: 6 }}>{cat.icon} {cat.label}</div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>{cat.label}</h2>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", borderBottom: "1px solid rgba(31,143,99,0.1)", flexShrink: 0 }}>
              {cat.stats.map((s, i) => (
                <div key={i} style={{ flex: 1, padding: "12px 0", textAlign: "center", borderRight: i < cat.stats.length - 1 ? "1px solid rgba(31,143,99,0.1)" : "none" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 800, color: cat.color, lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.54rem", fontWeight: 600, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: 3 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ padding: "1.2rem 1.5rem 0", flexShrink: 0 }}>
              <p style={{ fontFamily: "'Lora',serif", fontSize: "0.85rem", color: "#555", lineHeight: 1.82 }}>{cat.description}</p>
            </div>

            {/* Tabs */}
            <div style={{ padding: "1.2rem 1.5rem 0", flexShrink: 0 }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 800, letterSpacing: "0.13em", textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Products in this category</p>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 }}>
                {cat.items.map((item, i) => (
                  <button key={i} onClick={() => setActiveItem(i)} style={{
                    all: "unset", padding: "5px 13px", borderRadius: 99, cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.67rem", fontWeight: 700,
                    background: activeItem === i ? cat.color : cat.tint,
                    border: `1px solid ${activeItem === i ? cat.color : cat.border}`,
                    color: activeItem === i ? "#fff" : cat.color, transition: "all 0.18s",
                  }}>{item.name.split(" ").slice(0, 3).join(" ")}</button>
                ))}
              </div>
            </div>

            {/* Active product */}
            <div style={{ padding: "0 1.5rem", flex: 1 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${cat.border}`, marginBottom: "1.25rem" }}
                >
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <img src={cat.items[activeItem].image} alt={cat.items[activeItem].name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 12, right: 12, padding: "3px 10px", borderRadius: 99, background: cat.color, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>{cat.items[activeItem].badge}</div>
                    <h3 style={{ position: "absolute", bottom: 14, left: 14, right: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{cat.items[activeItem].name}</h3>
                  </div>
                  <div style={{ padding: "1rem 1.2rem", background: "#FAFAF8" }}>
                    <p style={{ fontFamily: "'Lora',serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.78, marginBottom: "0.9rem" }}>{cat.items[activeItem].desc}</p>
                    {cat.items[activeItem].specs && (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                        {cat.items[activeItem].specs.map((s, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 10px", borderRadius: 8, background: cat.tint, border: `1px solid ${cat.border}` }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.67rem", fontWeight: 600, color: "#444" }}>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div style={{ padding: "0 1.5rem 2rem", display: "flex", flexDirection: "column", gap: 9, flexShrink: 0 }}>
              <a href="#contact" onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 20px", borderRadius: 12, background: `linear-gradient(135deg, ${cat.color}, #0D4331)`, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff", boxShadow: `0 8px 24px ${cat.color}33` }}>
                Enquire About {cat.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <div style={{ display: "flex", gap: 9 }}>
                {[{ label: "Frozen Foods", num: "09070 269 373", tel: "09070269373" }, { label: "DOC Sales", num: "08127 138 650", tel: "08127138650" }].map(c => (
                  <a key={c.tel} href={`tel:${c.tel}`} style={{ flex: 1, padding: "11px 14px", borderRadius: 12, border: `1px solid ${cat.border}`, textDecoration: "none", textAlign: "center" }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.53rem", fontWeight: 700, color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.82rem", fontWeight: 800, color: cat.color }}>{c.num}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── PRODUCT CARD — fixed height ──────────────────────────────────

function ProductCard({ cat, index, onSelect }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 8) * 0.06 }}
      style={{ height: "100%" }}
    >
      <motion.button
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        onClick={() => onSelect(cat)}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{
          all: "unset", display: "flex", flexDirection: "column",
          width: "100%", height: "100%",
          borderRadius: 16, overflow: "hidden", cursor: "pointer",
          border: `1px solid ${hov ? cat.border.replace("0.18", "0.42") : cat.border}`,
          boxShadow: hov ? `0 14px 36px ${cat.color}1A` : "0 2px 8px rgba(0,0,0,0.05)",
          transition: "border-color 0.25s, box-shadow 0.25s",
          background: "#fff",
        }}
      >
        {/* Fixed-height image area */}
        <div style={{ position: "relative", height: 150, flexShrink: 0, overflow: "hidden" }}>
          <motion.img
            src={cat.image} alt={cat.label}
            animate={{ scale: hov ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${cat.color}CC 0%, transparent 55%)` }} />
          <div style={{ position: "absolute", top: 9, right: 9, padding: "2px 8px", borderRadius: 99, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.28)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 700, color: "#fff" }}>{cat.items.length} products</div>
          <p style={{ position: "absolute", bottom: 11, left: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.92rem", fontWeight: 800, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.2)", margin: 0 }}>{cat.icon} {cat.label}</p>
        </div>

        {/* Fixed-height body — flex fills remaining space */}
        <div style={{ flex: 1, padding: "12px 13px 14px", display: "flex", flexDirection: "column" }}>
          {/* Summary — clamped to 2 lines, fixed height */}
          <p style={{
            fontFamily: "'Lora',serif", fontSize: "0.76rem", color: "#777",
            lineHeight: 1.6, margin: "0 0 10px",
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden",
            height: "calc(0.76rem * 1.6 * 2)", // exactly 2 lines
            flexShrink: 0,
          }}>{cat.summary}</p>

          {/* Chips — fixed 1-line row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12, flexShrink: 0 }}>
            {cat.items.slice(0, 2).map((item, i) => (
              <span key={i} style={{ padding: "2px 7px", borderRadius: 99, background: cat.tint, border: `1px solid ${cat.border}`, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 600, color: cat.color, whiteSpace: "nowrap" }}>
                {item.name.split(" ").slice(0, 2).join(" ")}
              </span>
            ))}
            {cat.items.length > 2 && (
              <span style={{ padding: "2px 7px", borderRadius: 99, background: "rgba(0,0,0,0.04)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 600, color: "#aaa", whiteSpace: "nowrap" }}>+{cat.items.length - 2} more</span>
            )}
          </div>

          {/* CTA pushed to bottom */}
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.69rem", fontWeight: 700, color: cat.color }}>
            View products
            <motion.span animate={{ x: hov ? 3 : 0 }} transition={{ type: "spring", stiffness: 400 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState(null);
  const [activeGroup, setActiveGroup] = useState("All");

  const filtered = activeGroup === "All"
    ? CATEGORIES
    : CATEGORIES.filter(c => c.group === activeGroup);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Lora:ital,wght@0,400;1,400&display=swap');
        .pgrid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(4, 1fr);
          align-items: stretch;
        }
        @media (max-width: 1099px) { .pgrid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 759px)  { .pgrid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 479px)  { .pgrid { grid-template-columns: 1fr; } }
      `}</style>

      <section ref={ref} style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #F2F2EE 60%, #E7E7E1 100%)", padding: "5rem 0 5.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.28, backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.22) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: -80, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <div>
              <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp}
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 99, background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.18)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#125C42", marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1F8F63", display: "inline-block" }} />
                Our Products
              </motion.div>
              <motion.h2 initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={1}
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 800, lineHeight: 1.1, color: "#1A1A1A" }}>
                Everything from<br />
                <span style={{ backgroundImage: "linear-gradient(135deg,#1F8F63 0%,#41AA80 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>farm to table.</span>
              </motion.h2>
            </div>
            <motion.p initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeUp} custom={2}
              style={{ fontFamily: "'Lora',serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.8, maxWidth: 320, paddingBottom: 4 }}>
              Eight product divisions spanning live birds, frozen foods, aquaculture and farm support.
            </motion.p>
          </div>

          {/* ── Filter tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.75rem" }}
          >
            {GROUPS.map(g => {
              const on = activeGroup === g;
              return (
                <motion.button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    all: "unset", cursor: "pointer",
                    padding: "7px 16px", borderRadius: 99,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "0.75rem", fontWeight: on ? 700 : 600,
                    background: on ? "#1F8F63" : "rgba(31,143,99,0.07)",
                    border: `1px solid ${on ? "#1F8F63" : "rgba(31,143,99,0.18)"}`,
                    color: on ? "#fff" : "#3a8a64",
                    transition: "all 0.18s",
                    boxShadow: on ? "0 4px 14px rgba(31,143,99,0.28)" : "none",
                  }}
                >{g}</motion.button>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.9, delay: 0.2 }}
            style={{ height: 1, transformOrigin: "left", marginBottom: "1.5rem", background: "linear-gradient(to right,#A6DDC8,transparent)" }} />

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="pgrid"
            >
              {filtered.map((cat, i) => (
                <ProductCard key={cat.id} cat={cat} index={i} onSelect={setSelected} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ marginTop: "2.5rem", padding: "1.4rem 2rem", borderRadius: 16, background: "linear-gradient(135deg,#082A20 0%,#0D4331 100%)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", boxShadow: "0 16px 48px rgba(8,42,32,0.16)" }}
          >
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: 3 }}>Ready to place an order?</p>
              <p style={{ fontFamily: "'Lora',serif", fontSize: "0.8rem", color: "rgba(166,221,200,0.65)" }}>Our sales team is available across all divisions.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[{ label: "Frozen Foods", num: "09070269373" }, { label: "DOC Sales", num: "08127138650" }].map(c => (
                <a key={c.num} href={`tel:${c.num}`} style={{ padding: "10px 16px", borderRadius: 10, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", textDecoration: "none" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A6DDC8", marginBottom: 3 }}>{c.label}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#fff" }}>{c.num}</p>
                </a>
              ))}
              <a href="#contact" style={{ padding: "10px 20px", borderRadius: 10, background: "linear-gradient(135deg,#1F8F63,#125C42)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#fff", boxShadow: "0 6px 18px rgba(31,143,99,0.35)" }}>
                Get Started
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductDetail cat={selected} onClose={() => setSelected(null)} />
    </>
  );
}