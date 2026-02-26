// products.js — Chi Farms product catalogue

export const CONTACTS = {
  doc: { label: "DOC Sales", phone: "08127138650" },
  frozen: { label: "Frozen Foods", phone: "09070269373" },
  vet: { label: "Veterinary", phone: "08022078446" },
  support: { label: "Advisory Team", phone: "08132592782" },
  equip: { label: "Equipment Sales", phone: "08022078446" },
};

export const LOCATIONS = {
  hq: "Cormart House, Plot A Block 2, Ilupeju Industrial Estate, Lagos",
  processing: "KM 51, off Lagos-Ibadan Expressway, Ogun State",
  farm: "Ajanla Village, KM 20 off Ibadan–Lagos Expressway, Ibadan",
  diagnostic: "16, Alaafin Avenue, Oluyole Estate, Ibadan",
};

// Flat product list — each has a unique id and belongs to a path
export const products = [
  /* ── BREEDER CHICKS ── */
  {
    id: "ps-doc",
    path: ["Breeder Chicks", "Parent Stock Day Old Chicks"],
    icon: "🐣",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    summary:
      "High-performance parent birds for hatcheries and large integrators — Arbor Acres (broiler) and ISA Brown (layer) lines with full technical support.",
    page: {
      badge: "GPS-Derived",
      description:
        "Our Parent Stock originates directly from Grand Parent Stock housed at our biosecure GPS facility — the only one in West Africa. PS birds carry the highest genetic potential for either meat production (Arbor Acres) or egg laying (ISA Brown).",
      longDesc:
        "Every consignment ships with a full health certificate, vaccination record and post-delivery technical advisory. Replacement guarantees apply for dead-on-arrival and early chick mortality under defined conditions.",
      highlights: [
        {
          icon: "🏆",
          label: "GPS-Derived",
          desc: "Sourced from our own West Africa–exclusive Grand Parent Stock.",
        },
        {
          icon: "🔬",
          label: "Dual Lines",
          desc: "Arbor Acres broiler & ISA Brown layer genetics.",
        },
        {
          icon: "🛡️",
          label: "Biosecurity",
          desc: "Controlled-access GPS facility with strict protocols.",
        },
        {
          icon: "📋",
          label: "Documentation",
          desc: "Health cert, vax record & performance data included.",
        },
      ],
      variants: [
        {
          name: "PS Arbor Acres (Broiler)",
          desc: "For meat production hatcheries. Minimum order: 500 birds.",
          badge: "Broiler",
        },
        {
          name: "PS ISA Brown (Layer)",
          desc: "For egg production hatcheries. Minimum order: 500 birds.",
          badge: "Layer",
        },
      ],
      contact: CONTACTS.doc,
      location: LOCATIONS.farm,
    },
  },
  {
    id: "commercial-doc",
    path: ["Breeder Chicks", "Commercial Day Old Chicks"],
    icon: "🥚",
    accent: "#187553",
    tint: "rgba(24,117,83,0.08)",
    border: "rgba(24,117,83,0.18)",
    summary:
      "Broiler (Arbor Acres) and layer (ISA Brown) commercial DOCs for grow-out farms, with a performance guarantee and post-placement advisory.",
    page: {
      badge: "Performance Guaranteed",
      description:
        "Chi Farms commercial Day Old Chicks are hatched from our own Parent Stock, ensuring consistent genetic quality. Each batch is vaccinated in-hatch (Marek's) and ships with health documentation.",
      longDesc:
        "We supply DOCs to commercial farms of all sizes across Nigeria. Our technical team provides free post-placement visits within the first week and is available on our 24/7 advisory hotline for the duration of the flock.",
      highlights: [
        {
          icon: "✅",
          label: "In-House Hatched",
          desc: "Our own PS — no third-party supply risk.",
        },
        {
          icon: "💉",
          label: "Vaccinated",
          desc: "Marek's administered in-hatch as standard.",
        },
        {
          icon: "📞",
          label: "Post-Placement Visit",
          desc: "Free first-week farm visit included.",
        },
        {
          icon: "📊",
          label: "Performance Targets",
          desc: "Published FCR and bodyweight benchmarks.",
        },
      ],
      variants: [
        {
          name: "Commercial Broiler DOC",
          desc: "Arbor Acres — for meat production. Weekly availability.",
          badge: "Broiler",
        },
        {
          name: "Commercial Layer DOC",
          desc: "ISA Brown — for egg production. Weekly availability.",
          badge: "Layer",
        },
      ],
      contact: CONTACTS.doc,
      location: LOCATIONS.farm,
    },
  },

  /* ── FROZEN — POULTRY ── */
  {
    id: "dressed-poultry",
    path: ["Frozen Meat Products", "Poultry", "Dressed"],
    icon: "🐓",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    summary:
      "NAFDAC-compliant whole dressed broilers, chilled and frozen, supplied via refrigerated fleet from our Ogun State plant.",
    page: {
      badge: "Cold-Chain Certified",
      description:
        "Whole birds processed and graded at our KM 51 plant, immediately chilled post-slaughter, and dispatched via our dedicated refrigerated fleet. Weight-graded for retail and food-service consistency.",
      longDesc:
        "All dressed birds are processed under NAFDAC-registered GMP standards with full traceability from live-bird intake to dispatch. Available as chilled (≤4°C) and deep-frozen (−18°C).",
      highlights: [
        {
          icon: "❄️",
          label: "Unbroken Cold Chain",
          desc: "Plant to delivery, no temperature excursion.",
        },
        {
          icon: "✅",
          label: "NAFDAC Compliant",
          desc: "Inspected, registered processing facility.",
        },
        {
          icon: "⚖️",
          label: "Weight-Graded",
          desc: "1.2 kg – 2.0 kg bands available.",
        },
        {
          icon: "🚚",
          label: "Nationwide",
          desc: "Refrigerated fleet — Lagos and beyond.",
        },
      ],
      variants: [
        {
          name: "Chilled Whole Bird",
          desc: "≤4°C. 1.2–2.0 kg bands. Retail and food-service.",
          badge: "Chilled",
        },
        {
          name: "Frozen Whole Bird",
          desc: "−18°C. Long-shelf-life option for bulk buyers.",
          badge: "Frozen",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.processing,
    },
  },
  {
    id: "cut-up",
    path: ["Frozen Meat Products", "Poultry", "Cut Up"],
    icon: "🍗",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    summary:
      "Portioned thighs, drumsticks, breast and wings — cut to retail or food-service spec, IQF or bulk-frozen.",
    page: {
      badge: "IQF Portions",
      description:
        "Cut-up parts portioned directly at our processing plant, IQF-frozen for texture and yield integrity, packed to retail or bulk food-service specifications.",
      longDesc:
        "All cuts are deboned and portioned by trained operatives on HACCP-compliant lines. Custom cutting specs can be accommodated for large-volume food-service accounts.",
      highlights: [
        {
          icon: "🔪",
          label: "Custom Cuts",
          desc: "Retail or food-service portioning on request.",
        },
        {
          icon: "❄️",
          label: "IQF",
          desc: "Individually Quick Frozen — no clumping.",
        },
        {
          icon: "⚖️",
          label: "Yield Controlled",
          desc: "Consistent trim levels batch to batch.",
        },
        {
          icon: "📦",
          label: "Retail & Bulk",
          desc: "Consumer packs and catering cartons.",
        },
      ],
      variants: [
        {
          name: "Thighs & Drumsticks",
          desc: "IQF, 1 kg retail or 10 kg bulk.",
          badge: "Dark Meat",
        },
        {
          name: "Breast Portions",
          desc: "Boneless or bone-in. Retail and bulk.",
          badge: "White Meat",
        },
        {
          name: "Wings",
          desc: "Full wing and wingette. Food-service packs.",
          badge: "Wings",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.processing,
    },
  },
  {
    id: "smoked-chicken",
    path: ["Frozen Meat Products", "Poultry", "Smoked"],
    icon: "💨",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.08)",
    border: "rgba(13,67,49,0.18)",
    summary:
      "Cold-smoked whole chicken and portions from our own broiler stock — vacuum-packed with no artificial preservatives.",
    page: {
      badge: "Vacuum Packed",
      description:
        "Crafted from Chi Farms–reared broilers, cold-smoked at controlled temperature and vacuum-sealed for a rich, consistent flavour with 90-day frozen shelf-life.",
      longDesc:
        "No artificial preservatives. Natural wood-smoke process only. Available as whole smoked bird and smoked portions for retail and food-service channels.",
      highlights: [
        {
          icon: "🌿",
          label: "No Additives",
          desc: "Natural smoke only — no artificial preservatives.",
        },
        {
          icon: "🏭",
          label: "Own-Farm Input",
          desc: "Made from Chi Farms–reared broilers.",
        },
        {
          icon: "📦",
          label: "Vacuum Sealed",
          desc: "90-day frozen shelf-life.",
        },
        {
          icon: "🛒",
          label: "Retail & Bulk",
          desc: "500 g retail and food-service catering packs.",
        },
      ],
      variants: [
        {
          name: "Smoked Whole Bird",
          desc: "500 g–1.2 kg vacuum retail pack.",
          badge: "Retail",
        },
        {
          name: "Smoked Portions",
          desc: "Thighs, drumstick, breast. 500 g retail.",
          badge: "Portions",
        },
        {
          name: "Catering Bulk",
          desc: "5 kg bulk food-service pack.",
          badge: "HoReCa",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.hq,
    },
  },
  {
    id: "chicken-sausages",
    path: ["Frozen Meat Products", "Poultry", "Sausages"],
    icon: "🌭",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.08)",
    border: "rgba(13,67,49,0.18)",
    summary:
      "Premium smoked chicken sausages, vacuum-packed in 500 g retail and 5 kg catering sizes from our ISO-standard facility.",
    page: {
      badge: "Vacuum Packed",
      description:
        "Made from our own broiler stock, seasoned with selected spices, cold-smoked and vacuum-sealed for consistent flavour and nutrition.",
      longDesc:
        "Using birds reared in our own farms, we control quality from farm to pack. Our smoking process follows a controlled-temperature protocol — no MSG, no artificial flavours.",
      highlights: [
        {
          icon: "🌿",
          label: "No Artificial Preservatives",
          desc: "Natural smoke preservation only.",
        },
        {
          icon: "🏭",
          label: "Own-Farm Input",
          desc: "Made from Chi Farms–reared broilers.",
        },
        {
          icon: "📦",
          label: "Vacuum Sealed",
          desc: "90-day frozen shelf-life.",
        },
        {
          icon: "🛒",
          label: "Dual SKU",
          desc: "500 g retail and 5 kg HoReCa packs.",
        },
      ],
      variants: [
        {
          name: "Chicken Sausage — 500 g",
          desc: "Classic smoky flavour, retail vacuum pack, 6-pack carton.",
          badge: "Retail",
        },
        {
          name: "Food Service Bulk — 5 kg",
          desc: "Catering pack for hotels, restaurants and institutions.",
          badge: "HoReCa",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.hq,
    },
  },

  /* ── FROZEN — BEEF ── */
  {
    id: "beef-sausages",
    path: ["Frozen Meat Products", "Beef", "Sausages"],
    icon: "🥩",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    summary:
      "Rich beef sausages blended with natural herbs, NAFDAC-compliant, deep-frozen at −18°C with full traceability.",
    page: {
      badge: "NAFDAC Certified",
      description:
        "Sourced from vetted abattoirs, blended with a natural herb and spice mix, and produced under NAFDAC-registered GMP conditions. No MSG, no artificial flavours.",
      longDesc:
        "Each batch carries full traceability from raw beef intake to finished pack. Deep-frozen at −18°C post-production for maximum shelf life.",
      highlights: [
        {
          icon: "🐄",
          label: "Quality Beef",
          desc: "Sourced from vetted, inspected abattoirs.",
        },
        {
          icon: "🌿",
          label: "Natural Blend",
          desc: "No MSG, no artificial flavours.",
        },
        {
          icon: "🏭",
          label: "GMP Facility",
          desc: "NAFDAC-registered production.",
        },
        { icon: "🧊", label: "Deep Frozen", desc: "−18°C post-production." },
      ],
      variants: [
        {
          name: "Beef Sausage — 500 g",
          desc: "Retail vacuum pack, 6-count carton.",
          badge: "Retail",
        },
        {
          name: "Beef Sausage — 5 kg",
          desc: "Catering bulk pack for HoReCa channels.",
          badge: "HoReCa",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.hq,
    },
  },
  {
    id: "hamburger",
    path: ["Frozen Meat Products", "Beef", "Hamburger"],
    icon: "🍔",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.08)",
    border: "rgba(13,67,49,0.18)",
    summary:
      "IQF beef burger patties — portion-controlled, grill-ready from frozen, available in retail 4-pack and 20-pack food-service box.",
    page: {
      badge: "IQF — Ready to Grill",
      description:
        "Consistent 100–120 g patties, individually quick-frozen, par-seasoned and packaged for zero-prep food-service or retail.",
      longDesc:
        "Cook straight from frozen — no thaw required. Our IQF process preserves texture and juiciness across the full frozen shelf-life. Available for retail and bulk food-service.",
      highlights: [
        {
          icon: "❄️",
          label: "IQF Process",
          desc: "Individually Quick Frozen for texture retention.",
        },
        {
          icon: "⚖️",
          label: "Portion Controlled",
          desc: "Consistent 100–120 g weights per patty.",
        },
        {
          icon: "🔥",
          label: "Grill-Ready",
          desc: "Cook from frozen — no thaw required.",
        },
        {
          icon: "🛒",
          label: "Dual Channel",
          desc: "Retail 4-pack and 20-pack food-service box.",
        },
      ],
      variants: [
        {
          name: "Beef Patty — 4-Pack",
          desc: "Bold flavour, 120 g each, retail pack.",
          badge: "Retail",
        },
        {
          name: "Catering Bulk — 20-Pack",
          desc: "2 kg catering box for food-service operators.",
          badge: "Food Service",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.hq,
    },
  },

  /* ── HEALTH — VETERINARY ── */
  {
    id: "vaccines",
    path: ["Health", "Veterinary", "Vaccine"],
    icon: "💉",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    summary:
      "Cold-chain–maintained biologics for Newcastle, Gumboro, Marek's and more — dispensed by VCMN-registered veterinarians.",
    page: {
      badge: "Cold-Chain Certified",
      description:
        "A full portfolio of core and supplementary poultry biologics, stored at 2°C–8°C in our certified cold room at the Ibadan Diagnostic Centre.",
      longDesc:
        "Sourced from WHO-prequalified manufacturers. Dispensing supervised by registered veterinary staff. On-farm vaccination support available for large flocks.",
      highlights: [
        {
          icon: "🏥",
          label: "Licensed Dispensary",
          desc: "VCMN-registered veterinary staff on-site.",
        },
        {
          icon: "🌡️",
          label: "Cold-Chain Certified",
          desc: "2°C–8°C storage guaranteed.",
        },
        {
          icon: "🔬",
          label: "WHO-Approved Sources",
          desc: "Vaccines from prequalified manufacturers.",
        },
        {
          icon: "🚜",
          label: "On-Farm Support",
          desc: "Vaccination teams for large flocks.",
        },
      ],
      variants: [
        {
          name: "Newcastle Disease (ND)",
          desc: "La Sota, Clone 30 & Komarov strains.",
          badge: "Core",
        },
        {
          name: "Gumboro (IBD)",
          desc: "Intermediate & intermediate-plus strains.",
          badge: "Core",
        },
        {
          name: "Marek's Disease",
          desc: "Cell-associated HVT vaccine.",
          badge: "Core",
        },
        {
          name: "Fowl Pox & IB",
          desc: "Supplementary vaccines on prescription.",
          badge: "Rx",
        },
      ],
      contact: CONTACTS.vet,
      location: LOCATIONS.diagnostic,
    },
  },
  {
    id: "vet-services",
    path: ["Health", "Veterinary", "Vet Services"],
    icon: "🩺",
    accent: "#187553",
    tint: "rgba(24,117,83,0.08)",
    border: "rgba(24,117,83,0.18)",
    summary:
      "On-call veterinary consultation, flock health monitoring, treatment protocols and emergency farm visits by our registered vets.",
    page: {
      badge: "Registered Vets",
      description:
        "Our veterinary team provides scheduled and emergency farm visits, flock health assessments and written treatment plans through our Ibadan Diagnostic Centre.",
      longDesc:
        "Services are available on subscription (monthly flock health rounds) or per-visit basis. All vets are VCMN-registered and experienced in commercial poultry production.",
      highlights: [
        {
          icon: "🚜",
          label: "Farm Visits",
          desc: "Scheduled and emergency site visits.",
        },
        {
          icon: "📋",
          label: "Treatment Plans",
          desc: "Written protocols with follow-up.",
        },
        {
          icon: "📞",
          label: "24/7 Hotline",
          desc: "Emergency vet consultation anytime.",
        },
        {
          icon: "🏥",
          label: "VCMN Registered",
          desc: "Fully licensed veterinary professionals.",
        },
      ],
      variants: [
        {
          name: "Monthly Health Rounds",
          desc: "Subscription-based scheduled visits with written reports.",
          badge: "Subscription",
        },
        {
          name: "Emergency Farm Visit",
          desc: "Within 24 hrs for acute flock health issues.",
          badge: "Emergency",
        },
        {
          name: "Flock Audit",
          desc: "Full health and management assessment.",
          badge: "Advisory",
        },
      ],
      contact: CONTACTS.vet,
      location: LOCATIONS.diagnostic,
    },
  },
  {
    id: "lab-services",
    path: ["Health", "Veterinary", "Lab Services"],
    icon: "🧬",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    summary:
      "On-site serology, post-mortem analysis, bacteriology and rapid field diagnostics with faster turnaround than external labs.",
    page: {
      badge: "On-Site Lab",
      description:
        "Rapid field diagnostics, serology testing, post-mortem examinations processed in-house at our Ibadan lab for faster turnaround.",
      longDesc:
        "Staffed by veterinary pathologists and laboratory scientists. In-house processing means results in hours, not days. Our biosecurity audit programme has helped farms reduce mortality by up to 30%.",
      highlights: [
        {
          icon: "🔬",
          label: "Serology",
          desc: "HI titration and ELISA testing.",
        },
        {
          icon: "🏥",
          label: "Post-Mortem",
          desc: "Expert PM examination and reporting.",
        },
        {
          icon: "🦠",
          label: "Bacteriology",
          desc: "Culture and sensitivity testing.",
        },
        {
          icon: "⚡",
          label: "Fast Turnaround",
          desc: "In-house processing — results same/next day.",
        },
      ],
      variants: [
        {
          name: "Routine Diagnostics",
          desc: "Serology, bacteriology and parasitology panels.",
          badge: "Lab",
        },
        {
          name: "Post-Mortem Examination",
          desc: "Gross PM with histopathology referral if required.",
          badge: "Pathology",
        },
        {
          name: "Full Diagnostic Panel",
          desc: "Combined serology + bacteriology + PM for complex cases.",
          badge: "Full Panel",
        },
      ],
      contact: CONTACTS.vet,
      location: LOCATIONS.diagnostic,
    },
  },
  {
    id: "biosecurity",
    path: ["Health", "Bio-Security"],
    icon: "🛡️",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.08)",
    border: "rgba(13,67,49,0.18)",
    summary:
      "Full biosecurity audit, protocol design and staff training to reduce disease ingress and protect your flock investment.",
    page: {
      badge: "Audit & Protocol",
      description:
        "On-farm biosecurity assessments conducted by our veterinary team, resulting in a written protocol tailored to your farm's layout, scale and disease risk.",
      longDesc:
        "Our biosecurity audit programme covers access control, disinfection protocols, pest management, water and feed hygiene, and staff training. Farms that have implemented our recommendations have seen up to 30% reduction in flock mortality.",
      highlights: [
        {
          icon: "🔍",
          label: "Full Audit",
          desc: "Comprehensive on-farm assessment.",
        },
        {
          icon: "📝",
          label: "Written Protocol",
          desc: "Tailored recommendations for your farm.",
        },
        {
          icon: "👩‍🏫",
          label: "Staff Training",
          desc: "Practical workshop for farm workers.",
        },
        {
          icon: "📊",
          label: "Mortality Reduction",
          desc: "Up to 30% reduction on participating farms.",
        },
      ],
      variants: [
        {
          name: "Biosecurity Audit",
          desc: "Full farm inspection with written protocol report.",
          badge: "Audit",
        },
        {
          name: "Staff Training Workshop",
          desc: "Half-day practical training session on your farm.",
          badge: "Training",
        },
        {
          name: "Annual Programme",
          desc: "Quarterly audit + training subscription.",
          badge: "Subscription",
        },
      ],
      contact: CONTACTS.vet,
      location: LOCATIONS.diagnostic,
    },
  },

  /* ── AQUACULTURE ── */
  {
    id: "fingerlings",
    path: ["Aquaculture", "Catfish", "Finger Ling"],
    icon: "🐠",
    accent: "#187553",
    tint: "rgba(24,117,83,0.08)",
    border: "rgba(24,117,83,0.18)",
    summary:
      "High-yielding Clarias catfish fingerlings from our controlled hatchery — uniform size, disease-screened and ready for grow-out.",
    page: {
      badge: "Hatchery Grade",
      description:
        "Clarias catfish fingerlings produced in our biosecure hatchery using best-practice protocols — uniform size, disease-screened and ready for stocking.",
      longDesc:
        "Each batch is produced under controlled conditions with full feeding and health records. Delivery available in oxygenated transport bags for up to 6 hours transit.",
      highlights: [
        {
          icon: "🔬",
          label: "Disease Screened",
          desc: "Batch health testing before dispatch.",
        },
        {
          icon: "⚖️",
          label: "Size Graded",
          desc: "Uniform fingerlings for consistent grow-out.",
        },
        {
          icon: "🧊",
          label: "Safe Transport",
          desc: "Oxygenated bags for up to 6 hr transit.",
        },
        {
          icon: "📋",
          label: "Health Records",
          desc: "Full batch documentation provided.",
        },
      ],
      variants: [
        {
          name: "2–3 cm Fingerlings",
          desc: "Starter size. Minimum 1,000 pieces per order.",
          badge: "Starter",
        },
        {
          name: "5–7 cm Juveniles",
          desc: "Advanced juveniles for faster grow-out.",
          badge: "Juvenile",
        },
      ],
      contact: CONTACTS.support,
      location: LOCATIONS.farm,
    },
  },
  {
    id: "table-fish",
    path: ["Aquaculture", "Catfish", "Table Fish"],
    icon: "🐟",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    summary:
      "Live and fresh-harvested Clarias catfish at market-ready 800 g–1.5 kg, supplied to markets, restaurants and processors.",
    page: {
      badge: "Market Ready",
      description:
        "Market-ready Clarias catfish from our grow-out ponds, harvested fresh and available live or gutted for direct supply to market traders, restaurants and processors.",
      longDesc:
        "Our grow-out programme targets 800 g–1.5 kg market-ready weight. Fish are fed on quality pellets with strict FCR monitoring throughout the cycle.",
      highlights: [
        {
          icon: "⚖️",
          label: "800 g–1.5 kg",
          desc: "Market-standard weight band.",
        },
        {
          icon: "🏞️",
          label: "Pond Grown",
          desc: "Earth pond grow-out with quality feed.",
        },
        {
          icon: "🚚",
          label: "Live or Gutted",
          desc: "Supplied live or freshly gutted.",
        },
        {
          icon: "📦",
          label: "Flexible Volume",
          desc: "Small restaurant and bulk market orders.",
        },
      ],
      variants: [
        {
          name: "Live Table Fish",
          desc: "800 g–1.5 kg. Available live for market delivery.",
          badge: "Live",
        },
        {
          name: "Freshly Gutted",
          desc: "Gutted and rinsed. Chilled delivery.",
          badge: "Processed",
        },
      ],
      contact: CONTACTS.support,
      location: LOCATIONS.farm,
    },
  },
  {
    id: "fish-fillet",
    path: ["Aquaculture", "Catfish", "Fish Fillet"],
    icon: "🍽️",
    accent: "#125C42",
    tint: "rgba(18,92,66,0.08)",
    border: "rgba(18,92,66,0.18)",
    summary:
      "Value-added IQF catfish fillet — deboned, vacuum-packed for retail and food-service with 6-month frozen shelf-life.",
    page: {
      badge: "IQF Value-Added",
      description:
        "IQF-frozen deboned catfish fillet, vacuum-packed for retail and food-service. 6-month frozen shelf-life with no preservatives.",
      longDesc:
        "Our fillet line provides a premium, convenient catfish format for modern retail and restaurant use. Each fillet is skinned, deboned and IQF-frozen within hours of harvest.",
      highlights: [
        {
          icon: "✂️",
          label: "Deboned",
          desc: "Pin-bone free for consumer convenience.",
        },
        {
          icon: "❄️",
          label: "IQF Frozen",
          desc: "Individually frozen within hours of harvest.",
        },
        {
          icon: "📦",
          label: "Vacuum Packed",
          desc: "6-month frozen shelf-life, no preservatives.",
        },
        {
          icon: "🛒",
          label: "Retail-Ready",
          desc: "Consumer and food-service pack sizes.",
        },
      ],
      variants: [
        {
          name: "IQF Fillet — 500 g",
          desc: "Retail vacuum pack. Approx. 2–3 portions.",
          badge: "Retail",
        },
        {
          name: "Bulk Fillet — 5 kg",
          desc: "Food-service carton. Restaurant and hotel supply.",
          badge: "Food Service",
        },
      ],
      contact: CONTACTS.frozen,
      location: LOCATIONS.hq,
    },
  },

  /* ── TECHNICAL SUPPORT ── */
  {
    id: "vet-customer-support",
    path: ["Technical Support", "Veterinary Services and Customer Support"],
    icon: "📋",
    accent: "#1F8F63",
    tint: "rgba(31,143,99,0.08)",
    border: "rgba(31,143,99,0.18)",
    summary:
      "Structured farm management training at our Poultry School plus on-farm advisory for nutrition, biosecurity and flock performance.",
    page: {
      badge: "Poultry School",
      description:
        "Our Poultry School and field advisory team have trained over 3,000 farmers across Nigeria. Courses cover day-old chick management, brooding, nutrition, disease prevention and record-keeping.",
      longDesc:
        "Both classroom and practical field components. Certificate awarded on completion of the Poultry School programme. On-farm advisory visits are available on a scheduled and emergency basis.",
      highlights: [
        {
          icon: "🎓",
          label: "Poultry School",
          desc: "Classroom and field training — certificate awarded.",
        },
        {
          icon: "🚜",
          label: "On-Farm Visits",
          desc: "Scheduled and emergency site visits.",
        },
        {
          icon: "📊",
          label: "Benchmarking",
          desc: "Performance data analysis and targets.",
        },
        {
          icon: "📞",
          label: "24/7 Hotline",
          desc: "Emergency advisory anytime.",
        },
      ],
      variants: [
        {
          name: "Poultry School Programme",
          desc: "3-day to 2-week intensive. Certificate on completion.",
          badge: "Open Enrollment",
        },
        {
          name: "On-Farm Advisory Visit",
          desc: "Scheduled visit by qualified technician with written report.",
          badge: "Site Visit",
        },
        {
          name: "Nutrition & Feed Audit",
          desc: "FCR analysis and feed programme review.",
          badge: "Advisory",
        },
      ],
      contact: CONTACTS.support,
      location: LOCATIONS.farm,
    },
  },
  {
    id: "lab-support",
    path: ["Technical Support", "Laboratory Services Support"],
    icon: "🔬",
    accent: "#187553",
    tint: "rgba(24,117,83,0.08)",
    border: "rgba(24,117,83,0.18)",
    summary:
      "Ongoing laboratory advisory — sample submission guidance, results interpretation and follow-up treatment recommendations.",
    page: {
      badge: "Lab Advisory",
      description:
        "Our lab support service helps farmers and integrators get the most from diagnostic testing — from correct sample submission to interpreting results and acting on findings.",
      longDesc:
        "We provide sample submission kits, courier coordination, written results with interpretation notes and a follow-up call with one of our veterinary scientists.",
      highlights: [
        {
          icon: "📦",
          label: "Sample Kits",
          desc: "Correct submission materials provided.",
        },
        {
          icon: "🚚",
          label: "Courier Coordination",
          desc: "We arrange sample transport to the lab.",
        },
        {
          icon: "📝",
          label: "Interpreted Results",
          desc: "Plain-language report, not raw data.",
        },
        {
          icon: "📞",
          label: "Follow-Up Call",
          desc: "Vet scientist reviews findings with you.",
        },
      ],
      variants: [
        {
          name: "Standard Lab Support",
          desc: "Sample kit + courier + interpreted report.",
          badge: "Standard",
        },
        {
          name: "Priority Turnaround",
          desc: "Same-day processing for urgent cases.",
          badge: "Priority",
        },
        {
          name: "Monthly Monitoring Plan",
          desc: "Regular sampling schedule with trend reporting.",
          badge: "Subscription",
        },
      ],
      contact: CONTACTS.vet,
      location: LOCATIONS.diagnostic,
    },
  },

  /* ── EQUIPMENT ── */
  {
    id: "equipment",
    path: ["Equipment"],
    icon: "⚙️",
    accent: "#0D4331",
    tint: "rgba(13,67,49,0.08)",
    border: "rgba(13,67,49,0.18)",
    summary:
      "Poultry farm machinery, drinkers, feeders, ventilation and complete turn-key housing from global manufacturers, installed by our engineers.",
    page: {
      badge: "Turn-Key Available",
      description:
        "We supply and install a full range of poultry farm equipment — from brooders to complete turn-key housing — backed by our in-house engineering team.",
      longDesc:
        "Sourced from reputable European and Asian manufacturers and adapted to the Nigerian climate. Installation, commissioning and after-sales service by our own engineers.",
      highlights: [
        {
          icon: "🔧",
          label: "Full Portfolio",
          desc: "Brooders to complete house systems.",
        },
        {
          icon: "🌍",
          label: "Global Brands",
          desc: "European and Asian OEM equipment.",
        },
        {
          icon: "🏗️",
          label: "Turn-Key Projects",
          desc: "Design, build and commission.",
        },
        {
          icon: "🛠️",
          label: "After-Sales",
          desc: "In-house engineering support.",
        },
      ],
      variants: [
        {
          name: "Starter Equipment Kit",
          desc: "Brooder, nipple drinkers and pan feeders for up to 5,000 birds.",
          badge: "Entry Level",
        },
        {
          name: "Ventilation System",
          desc: "Tunnel ventilation and evaporative cooling for climate control.",
          badge: "Environment",
        },
        {
          name: "Layer Cage System",
          desc: "A-frame and H-frame cage systems.",
          badge: "Layers",
        },
        {
          name: "Turn-Key Poultry House",
          desc: "Complete design, construction and equipment installation.",
          badge: "Project",
        },
      ],
      contact: CONTACTS.equip,
      location: LOCATIONS.farm,
    },
  },
];

// Build the hierarchical tree from flat product list

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
