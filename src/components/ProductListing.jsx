/**
 * ProductsSection.jsx
 * – Category tabs across the top (one per product type)
 * – Active tab reveals that category's products directly
 * – Slide-in detail panel on product click
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
    description: "Chi Farms Ltd. produces Parent Stock (PS) birds at its state-of-the-art hatchery. Our parent stock programme covers both the broiler and layer line, sourced from globally certified genetic suppliers.",
    stats: [
      { label: "Hatchery Capacity", value: "500K+", unit: "eggs/cycle" },
      { label: "Biosecurity Level", value: "A+", unit: "certified" },
      { label: "Breeds Available", value: "2", unit: "lines" },
    ],
    items: [
      { name: "Arbor Acres Plus Parent Stock", image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80", badge: "Broiler Line", desc: "The globally proven Arbor Acres Plus PS delivers exceptional FCR, fast growth rate and robust livability. Ideal for large-scale commercial broiler production.", specs: ["High breast meat yield", "Superior FCR", "Proven global genetics", "5–6 week grow-out"] },
      { name: "ISA Brown Parent Stock", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80", badge: "Layer Line", desc: "ISA Brown PS birds are world-renowned for their docile temperament, early sexual maturity and consistently high egg output over a long production cycle.", specs: ["300+ eggs/hen/year", "Early sexual maturity", "Docile flock", "Long cycle"] },
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
      { name: "Arbor Acres Plus Broiler", image: "https://images.unsplash.com/photo-1621688822569-1f0649cf1989?w=600&q=80", badge: "Broiler", desc: "The #1 commercial broiler strain in Nigeria. Outstanding uniformity, superior meat yield and excellent feed conversion.", specs: ["2.5kg at 35 days", "Best-in-class FCR", "High breast yield", "Low mortality"] },
      { name: "ISA Brown Commercial Pullet", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80", badge: "Layer", desc: "Nigeria's most popular commercial brown layer. Reaches peak production early and sustains high lay rates across a 72-week cycle.", specs: ["72-week cycle", "First egg at 18wks", "Excellent shell", "High persistency"] },
      { name: "Amberlink Commercial Layers", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80", badge: "Layer", desc: "A robust, heat-tolerant layer strain well-suited to the Nigerian climate, prized for feed efficiency and adaptability.", specs: ["Heat-tolerant", "Strong shell", "Low feed consumption", "All systems"] },
    ],
  },
  {
    id: "chicken",
    group: "Frozen Foods",
    label: "Chicken",
    icon: "🍗",
    color: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80",
    summary: "Frozen dressed chicken and premium cuts — whole birds, wings, fillets and more.",
    description: "Processed at our NAFDAC-certified plant on the Lagos-Ibadan Expressway, our chicken products are slaughtered, cleaned, portioned and blast-frozen to -18°C within hours.",
    stats: [
      { label: "Processing", value: "10K+", unit: "birds/day" },
      { label: "Cold Chain", value: "-18°C", unit: "maintained" },
      { label: "SKUs", value: "9", unit: "cuts" },
    ],
    items: [
      { name: "Frozen Dressed Chicken", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&q=80", badge: "Whole Bird", desc: "Whole eviscerated birds, blast-frozen and vacuum-sealed. Available in 1.2–1.8kg weight bands.", specs: ["1.2–1.8kg bands", "NAFDAC certified", "Vacuum sealed", "Blast frozen"] },
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
      { name: "Breakfast Sausage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Fresh", desc: "Mild-seasoned breakfast links and patties for hotels, café chains and food courts.", specs: ["Links & patties", "Mild seasoning", "Hotel grade", "Fresh & frozen"] },
      { name: "Smoked Sausage", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80", badge: "Smoked", desc: "Slow-smoked beef sausages with rich flavour. Ready-to-eat or grilled.", specs: ["Wood-smoked", "Ready-to-eat", "Retail & vendor", "Rich flavour"] },
      { name: "Minced Meat", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", badge: "Fresh", desc: "Fresh-chilled and frozen minced beef from select cuts for restaurants and retail.", specs: ["Select cuts", "Fresh & frozen", "Retail & bulk", "Consistent fat ratio"] },
      { name: "Value Sausage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Economy", desc: "An affordable everyday sausage for mass-market retail and school feeding programmes.", specs: ["Mass-market", "Affordable", "School feeding", "NAFDAC certified"] },
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
    description: "Chi Farms is the exclusive distributor of Lutosa frozen potato products in Nigeria — a leading Belgian brand trusted by global QSR chains.",
    stats: [
      { label: "Origin", value: "Belgian", unit: "imported" },
      { label: "Cuts", value: "4", unit: "styles" },
      { label: "Pack", value: "2.5kg", unit: "foodservice" },
    ],
    items: [
      { name: "Straight Cut Fries", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", badge: "Classic", desc: "The universal QSR standard. Pre-fried, frozen, ready in under 4 minutes. Consistent golden colour.", specs: ["Pre-fried frozen", "4 min cook", "Golden crisp", "2.5kg pack"] },
      { name: "Crinkle Cut Fries", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", badge: "Specialty", desc: "Ridged fries with extra crunch and sauce retention. Popular with casual dining and delivery kitchens.", specs: ["Extra crunch", "Sauce retention", "Casual dining", "Uniform sizing"] },
      { name: "Shoestring Fries", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80", badge: "Thin Cut", desc: "Ultra-thin fries for upscale burger restaurants and hotel all-day dining. Fast cook, great presentation.", specs: ["Ultra-thin", "Fast cook", "Hotel grade", "Premium pack"] },
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
    label: "Catfish",
    icon: "🐟",
    color: "#0D7A56",
    tint: "rgba(13,122,86,0.08)",
    border: "rgba(13,122,86,0.18)",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
    summary: "Farm-raised catfish — live, frozen, filleted — plus hybrid juveniles.",
    description: "Chi Farms' aquaculture division operates from our Ibadan facility, producing African catfish (Clarias gariepinus) from fingerling to table size.",
    stats: [
      { label: "Species", value: "Clarias", unit: "gariepinus" },
      { label: "Grow-out", value: "4–5", unit: "months" },
      { label: "Facility", value: "Ibadan", unit: "farm" },
    ],
    items: [
      { name: "Live Table Size Catfish", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=80", badge: "Live Fish", desc: "Farm-raised live catfish at 600g–1.2kg table size, available for collection or bulk delivery.", specs: ["600g–1.2kg", "Farm or delivery", "Live transport", "Lagos & Ibadan"] },
      { name: "Frozen Table Size Catfish", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80", badge: "Frozen", desc: "Gutted and blast-frozen whole catfish for supermarkets, food distributors and processing companies.", specs: ["Gutted & frozen", "Whole fish", "Supermarket grade", "Consistent sizing"] },
      { name: "Catfish Fillet", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80", badge: "Processed", desc: "Skinless boneless catfish fillets, individually frozen. In demand from hotels, restaurants and health-conscious retail.", specs: ["Skinless boneless", "IQF frozen", "Hotel grade", "High protein"] },
      { name: "Pure Line & Hybrid Juveniles", image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=600&q=80", badge: "Juveniles", desc: "Genetically superior fingerlings for farm stocking — 30–40% faster growth than conventional strains.", specs: ["30–40% faster growth", "Disease-resistant", "Post-fingerling", "Genetic selection"] },
    ],
  },
  {
    id: "support",
    group: "Support",
    label: "Farm Support",
    icon: "📋",
    color: "#14664A",
    tint: "rgba(20,102,74,0.08)",
    border: "rgba(20,102,74,0.18)",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    summary: "Farmer training, on-field visits and diagnostic lab services.",
    description: "Chi Farms' technical services division supports customers long after the sale — vets, poultry scientists and aquaculture specialists provide in-person training and laboratory diagnostics.",
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

// ─── DETAIL PANEL ─────────────────────────────────────────────────

function ProductDetail({ item, cat, onClose }) {
  if (!item || !cat) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", top: 84, left: 0, right: 0, bottom: 0, zIndex: 80, background: "rgba(5,20,13,0.62)", backdropFilter: "blur(6px)" }}
      />
      <motion.div
        key={`panel-${item.name}`}
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        style={{ position: "fixed", top: 84, right: 0, bottom: 0, width: "min(520px, 100vw)", zIndex: 90, background: "#fff", display: "flex", flexDirection: "column", overflowY: "auto", borderRadius: "16px 0 0 0" }}
      >
        {/* Hero */}
        <div style={{ position: "relative", height: 240, flexShrink: 0, overflow: "hidden" }}>
          <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${cat.color}F0 0%, ${cat.color}44 50%, transparent 100%)` }} />
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: "50%", background: "rgba(0,0,0,0.38)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          <div style={{ position: "absolute", bottom: 16, left: 20 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: cat.color, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase", color: "#fff", marginBottom: 7 }}>{item.badge}</div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.35rem", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>{item.name}</h2>
          </div>
        </div>

        {/* Category breadcrumb */}
        <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(31,143,99,0.08)", background: cat.tint, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.62rem", fontWeight: 700, color: cat.color, textTransform: "uppercase", letterSpacing: "0.1em" }}>{cat.icon} {cat.label}</span>
          <span style={{ color: "#ccc", fontSize: 10 }}>›</span>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.62rem", fontWeight: 600, color: "#888" }}>{item.name}</span>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(31,143,99,0.08)", flexShrink: 0 }}>
          {cat.stats.map((s, i) => (
            <div key={i} style={{ flex: 1, padding: "12px 0", textAlign: "center", borderRight: i < cat.stats.length - 1 ? "1px solid rgba(31,143,99,0.08)" : "none" }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 800, color: cat.color, lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.52rem", fontWeight: 600, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: 3 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{ padding: "1.4rem 1.5rem 0.8rem" }}>
          <p style={{ fontFamily: "'Lora',serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.85 }}>{item.desc}</p>
        </div>

        {/* Specs */}
        {item.specs && (
          <div style={{ padding: "0 1.5rem 1.4rem" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.57rem", fontWeight: 800, letterSpacing: "0.13em", textTransform: "uppercase", color: "#bbb", marginBottom: 10 }}>Key specifications</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
              {item.specs.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 9, background: cat.tint, border: `1px solid ${cat.border}` }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "#444" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div style={{ padding: "0 1.5rem 2rem", display: "flex", flexDirection: "column", gap: 9, flexShrink: 0, marginTop: "auto" }}>
          <a href="#contact" onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 20px", borderRadius: 12, background: `linear-gradient(135deg, ${cat.color}, #0D4331)`, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff", boxShadow: `0 8px 24px ${cat.color}33` }}>
            Enquire About {item.name.split(" ").slice(0, 3).join(" ")}
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
    </AnimatePresence>
  );
}

// ─── PRODUCT SHOWCASE CARD ────────────────────────────────────────

function ShowcaseCard({ item, cat, index, onSelect }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      style={{ height: "100%" }}
    >
      <motion.button
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        onClick={() => onSelect(item)}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{
          all: "unset", display: "flex", flexDirection: "column",
          width: "100%", height: "100%", cursor: "pointer",
          borderRadius: 16, overflow: "hidden", background: "#fff",
          border: `1px solid ${hov ? cat.border.replace("0.18", "0.45") : cat.border}`,
          boxShadow: hov ? `0 16px 40px ${cat.color}1A` : "0 2px 8px rgba(0,0,0,0.05)",
          transition: "border-color 0.25s, box-shadow 0.25s",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 170, flexShrink: 0, overflow: "hidden" }}>
          <motion.img
            src={item.image} alt={item.name}
            animate={{ scale: hov ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${cat.color}CC 0%, transparent 55%)` }} />
          {/* Badge */}
          <div style={{ position: "absolute", top: 10, right: 10, padding: "2px 9px", borderRadius: 99, background: cat.color, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#fff" }}>{item.badge}</div>
          {/* Name */}
          <p style={{ position: "absolute", bottom: 12, left: 12, right: 12, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>{item.name}</p>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: "13px 14px 14px", display: "flex", flexDirection: "column" }}>
          <p style={{
            fontFamily: "'Lora',serif", fontSize: "0.75rem", color: "#777", lineHeight: 1.65,
            margin: "0 0 11px", flexShrink: 0,
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>{item.desc}</p>

          {/* Specs chips — first 2 */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12, flexShrink: 0 }}>
            {item.specs.slice(0, 2).map((s, i) => (
              <span key={i} style={{ padding: "2px 8px", borderRadius: 99, background: cat.tint, border: `1px solid ${cat.border}`, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.55rem", fontWeight: 600, color: cat.color, whiteSpace: "nowrap" }}>{s}</span>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.68rem", fontWeight: 700, color: cat.color }}>
            View details
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
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const tabsRef = useRef(null);

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

        /* Tabs scroll */
        .cat-tabs {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          border-bottom: 1px solid rgba(31,143,99,0.12);
          margin-bottom: 1.75rem;
        }
        .cat-tabs::-webkit-scrollbar { display: none; }
        .cat-tab {
          all: unset;
          flex-shrink: 0;
          cursor: pointer;
          padding: 11px 18px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #888;
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
          transition: color 0.18s;
          white-space: nowrap;
        }
        .cat-tab:hover { color: #1F8F63; }
        .cat-tab.active { color: #1F8F63; font-weight: 800; }
        .cat-tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px;
          border-radius: 2px 2px 0 0;
          background: linear-gradient(to right, #1F8F63, #41AA80);
        }
        .tab-icon { font-size: 14px; }
      `}</style>

      <section ref={ref} className=" bg-gradient-to-r from-accent-50/20 to-primary-50/40" style={{  padding: "5rem 0 5.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.28, backgroundImage: "radial-gradient(circle, rgba(31,143,99,0.22) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: -80, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(31,143,99,0.09) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

          {/* ── Header ── */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
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

          {/* ── Category Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div ref={tabsRef} className="cat-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`cat-tab${activeCat.id === cat.id ? " active" : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Active category header ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`header-${activeCat.id}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.25rem" }}
            >
              {/* Left: category info */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: activeCat.tint, border: `1px solid ${activeCat.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                  {activeCat.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 800, color: "#1A1A1A", margin: 0, lineHeight: 1.2 }}>{activeCat.label}</p>
                  <p style={{ fontFamily: "'Lora',serif", fontSize: "0.77rem", color: "#888", margin: 0, lineHeight: 1.5 }}>{activeCat.summary}</p>
                </div>
              </div>

              {/* Right: stats chips */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {activeCat.stats.map((s, i) => (
                  <div key={i} style={{ padding: "5px 12px", borderRadius: 99, background: activeCat.tint, border: `1px solid ${activeCat.border}`, display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.82rem", fontWeight: 800, color: activeCat.color }}>{s.value}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.6rem", fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thin accent line */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`line-${activeCat.id}`}
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
              transition={{ duration: 0.55 }}
              style={{ height: 1, transformOrigin: "left", marginBottom: "1.4rem", background: `linear-gradient(to right, ${activeCat.color}, transparent)` }}
            />
          </AnimatePresence>

          {/* ── Products Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="pgrid"
            >
              {activeCat.items.map((item, i) => (
                <ShowcaseCard key={item.name} item={item} cat={activeCat} index={i} onSelect={setSelectedItem} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── CTA Bar ── */}
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

      {selectedItem && (
        <ProductDetail item={selectedItem} cat={activeCat} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}