// lib/productData.js  — single source of truth
// Import this in both Products.jsx and ProductListing.jsx

export const DIVISIONS = [
  {
    slug: "poultry",
    href: "/products/poultry",
    number: "01",
    icon: "🐓",
    group: "Poultry Division",
    title: "Poultry",
    sub: "Parent Stock · Day-Old Chicks · Broilers",
    desc: "Chi Farms produces Parent Stock birds covering both broiler and layer lines — Arbor Acres Plus PS and ISA Brown Layer PS — with industry-leading hatchery biosecurity.",
    accent: "#1F8F63",
    accentLight: "rgba(31,143,99,0.08)",
    accentBorder: "rgba(31,143,99,0.18)",
    dark: "#061A0D",
    stat: { value: "500K+", label: "eggs / cycle" },
    pills: ["Breeder Chicks", "Day Old Chicks"],
    // Full category tabs shown on /poultry page
    categories: [
      {
        id: "breeder",
        label: "Breeder Chicks",
        icon: "🥚",
        summary:
          "GP & PS parent stock — Arbor Acres Plus broiler and ISA Brown layer lines.",

        items: [
          {
            name: "Arbor Acres Plus Parent Stock",
            image:
              "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80",
            badge: "Broiler Line",
            desc: "The globally proven Arbor Acres Plus PS delivers exceptional FCR, fast growth rate and robust livability. Ideal for large-scale commercial broiler production.",
            specs: [
              "High breast meat yield",
              "Superior FCR",
              "Proven global genetics",
              "5–6 week grow-out",
            ],
          },
          {
            name: "ISA Brown Parent Stock",
            image:
              "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
            badge: "Layer Line",
            desc: "ISA Brown PS birds are world-renowned for their docile temperament, early sexual maturity and consistently high egg output over a long production cycle.",
            specs: [
              "300+ eggs/hen/year",
              "Early sexual maturity",
              "Docile flock",
              "Long cycle",
            ],
          },
        ],
      },
      {
        id: "doc",
        label: "Day Old Chicks",
        icon: "🐣",
        summary: "Commercial broiler and pullet DOCs — three proven breeds.",

        items: [
          {
            name: "Arbor Acres Plus Broiler DOC",
            image: "/images/broilers.jpg",
            badge: "Broiler",
            desc: "The #1 commercial broiler strain in Nigeria. Outstanding uniformity, superior meat yield and excellent feed conversion.",
            specs: [
              "2.5kg at 35 days",
              "Best-in-class FCR",
              "High breast yield",
              "Low mortality",
            ],
          },
          {
            name: "ISA Brown Commercial Pullet",
            image: "/images/isabrown.jpg",
            badge: "Layer",
            desc: "Nigeria's most popular commercial brown layer. Reaches peak production early and sustains high lay rates across a 72-week cycle.",
            specs: [
              "72-week cycle",
              "First egg at 18wks",
              "Excellent shell",
              "High persistency",
            ],
          },
          {
            name: "Amberlink Commercial Layers",
            image: "/images/pullet.jpeg",
            badge: "Layer",
            desc: "A robust, heat-tolerant layer strain well-suited to the Nigerian climate, prized for feed efficiency and adaptability.",
            specs: [
              "Heat-tolerant",
              "Strong shell",
              "Low feed consumption",
              "All systems",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "frozen",
    href: "/products/frozen",
    number: "02",
    icon: "❄️",
    group: "Processing",
    title: "Frozen Meat Products",
    sub: "Chicken · Beef · Sausages · Fries · Pizza",
    desc: "NAFDAC-certified processing delivering premium frozen protein — whole birds, cuts, sausages, Belgian fries and pizza toppings distributed nationwide.",
    accent: "#187553",
    accentLight: "rgba(24,117,83,0.08)",
    accentBorder: "rgba(24,117,83,0.18)",
    dark: "#04140B",
    stat: { value: "10K+", label: "birds / day" },
    pills: ["Chicken", "Beef", "French Fries", "Pizza Toppings"],
    categories: [
      {
        id: "chicken",
        label: "Chicken",
        icon: "🍗",
        summary:
          "Frozen dressed chicken and premium cuts — whole birds, wings, fillets and more.",

        items: [
          {
            name: "Frozen Dressed Chicken",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture24.png",
            badge: "Whole Bird",
            desc: "Whole eviscerated birds, blast-frozen and vacuum-sealed. Available in 1.2–1.8kg weight bands.",
            specs: [
              "1.2–1.8kg bands",
              "NAFDAC certified",
              "Vacuum sealed",
              "Blast frozen",
            ],
          },
          {
            name: "Chicken Wings",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture22.png",
            badge: "Cut",
            desc: "Full wing portions, individually quick-frozen. Popular with QSRs, restaurants and retail chains.",
            specs: [
              "IQF frozen",
              "Retail & foodservice",
              "Consistent sizing",
              "No added water",
            ],
          },
          {
            name: "Premium Chicken Sausage",
            image: "https://chi-farms.com/wp-content/uploads/2021/05/new-2.jpg",
            badge: "Processed",
            desc: "Seasoned chicken sausages made from 100% whole-muscle chicken. Available smoked and unsmoked.",
            specs: [
              "100% chicken",
              "Smoked & unsmoked",
              "Retail & catering",
              "No fillers",
            ],
          },
          {
            name: "Chicken Fillet",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture19.png",
            badge: "Cut",
            desc: "Skinless boneless breast fillets, individually portioned and frozen. Preferred for hotels and QSRs.",
            specs: [
              "Skinless boneless",
              "Individually portioned",
              "IQF frozen",
              "Hotel grade",
            ],
          },
          {
            name: "Chicken Drumsticks",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/IMG_1469.jpeg",
            badge: "Cut",
            desc: "Meaty drumsticks and lap cuts, frozen in bulk and retail packs. The top-selling retail SKU.",
            specs: [
              "Bulk & retail",
              "Consistent sizing",
              "Clean cut",
              "High meat yield",
            ],
          },
          {
            name: "Smoked Frozen Chicken",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture15.png",
            badge: "Smoked",
            desc: "Whole birds and portions slow-smoked then blast-frozen. Ready to reheat and serve.",
            specs: [
              "Slow smoked",
              "Blast-frozen",
              "Whole & portions",
              "Premium retail",
            ],
          },
          {
            name: "Chicken Laps",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture23.png",
            badge: "Cut",
            desc: "Meaty lap cuts, frozen in bulk and retail packs. The top-selling retail SKU.",
            specs: [
              "Bulk & retail",
              "Consistent sizing",
              "Clean cut",
              "High meat yield",
            ],
          },
          {
            name: "Chicken Thighs",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture21.png",
            badge: "Cut",
            desc: "Meaty thigh cuts, individually quick-frozen. Popular with QSRs and restaurants.",
            specs: [
              "IQF frozen",
              "Retail & foodservice",
              "Consistent sizing",
              "High meat yield",
            ],
          },
          {
            name: "Chicken Gizzard",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture14.png",
            badge: "Cut",
            desc: "Meaty thigh cuts, individually quick-frozen. Popular with QSRs and restaurants.",
            specs: [
              "IQF frozen",
              "Retail & foodservice",
              "Consistent sizing",
              "High meat yield",
            ],
          },
        ],
      },
      {
        id: "beef",
        label: "Beef Products",
        icon: "🥩",
        summary:
          "Beef and blended sausages — pepperoni, breakfast, smoked and minced lines.",

        items: [
          {
            name: "Pepperoni Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture18.png",
            badge: "Cured",
            desc: "Classic Italian-style pepperoni from select beef and pork blends. Preferred by commercial pizzerias and QSR chains.",
            specs: [
              "Beef & pork blend",
              "QSR grade",
              "Consistent slice",
              "Vacuum sealed",
            ],
          },
          {
            name: "Breakfast Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/16218640717440544-11.jpg",
            badge: "Fresh",
            desc: "Mild-seasoned breakfast links and patties for hotels, café chains and food courts.",
            specs: [
              "Links & patties",
              "Mild seasoning",
              "Hotel grade",
              "Fresh & frozen",
            ],
          },
          {
            name: "Smoked Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture27.png",
            badge: "Smoked",
            desc: "Slow-smoked beef sausages with rich flavour. Ready-to-eat or grilled.",
            specs: [
              "Wood-smoked",
              "Ready-to-eat",
              "Retail & vendor",
              "Rich flavour",
            ],
          },
          {
            name: "Minced Meat",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture20.png",
            badge: "Fresh",
            desc: "Fresh-chilled and frozen minced beef from select cuts for restaurants and retail.",
            specs: [
              "Select cuts",
              "Fresh & frozen",
              "Retail & bulk",
              "Consistent fat ratio",
            ],
          },
          {
            name: "Value Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture26.png",
            badge: "Economy",
            desc: "An affordable everyday sausage for mass-market retail and school feeding programmes.",
            specs: [
              "Mass-market",
              "Affordable",
              "School feeding",
              "NAFDAC certified",
            ],
          },
          {
            name: "Onion Beef Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/20210607_1514240.7242757448638938-1.png",
            badge: "Economy",
            desc: "An affordable everyday sausage for mass-market retail and school feeding programmes.",
            specs: [
              "Mass-market",
              "Affordable",
              "School feeding",
              "NAFDAC certified",
            ],
          },
          {
            name: " Beef Sausage Meat",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture25.png",
            badge: "Economy",
            desc: "An affordable everyday sausage for mass-market retail and school feeding programmes.",
            specs: [
              "Mass-market",
              "Affordable",
              "School feeding",
              "NAFDAC certified",
            ],
          },
          {
            name: "Chicadella Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/Picture16.png",
            badge: "Economy",
            desc: "An affordable everyday sausage for mass-market retail and school feeding programmes.",
            specs: [
              "Mass-market",
              "Affordable",
              "School feeding",
              "NAFDAC certified",
            ],
          },
        ],
      },
      {
        id: "fries",
        label: "French Fries",
        icon: "🍟",
        summary:
          "Lutosa frozen fries in four professional cuts — straight, crinkle, shoestring.",

        items: [
          {
            name: "Straight Cut Fries",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/1010_2.5-2-1-768x1024.jpg",
            badge: "Classic",
            desc: "The universal QSR standard. Pre-fried, frozen, ready in under 4 minutes.",
            specs: [
              "Pre-fried frozen",
              "4 min cook",
              "Golden crisp",
              "2.5kg pack",
            ],
          },
          {
            name: "Crinkle Cut Fries",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/lutosa-crinklecutfries02.jpg-1-768x1024.png",
            badge: "Specialty",
            desc: "Ridged fries with extra crunch and sauce retention. Popular with casual dining.",
            specs: [
              "Extra crunch",
              "Sauce retention",
              "Casual dining",
              "Uniform sizing",
            ],
          },
          {
            name: "Shoestring Fries",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/farm-frites-shoestring-fries-2kg-2-768x1024.jpg",
            badge: "Thin Cut",
            desc: "Ultra-thin fries for upscale burger restaurants and hotel all-day dining.",
            specs: ["Ultra-thin", "Fast cook", "Hotel grade", "Premium pack"],
          },
          {
            name: "Food Services Pack",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/1010_1k-2-768x1024.jpg",
            badge: "Bulk",
            desc: "Large-format packs for high-volume kitchens, catering companies and canteen operators.",
            specs: [
              "High volume",
              "Catering grade",
              "Cost efficient",
              "Multiple cuts",
            ],
          },
        ],
      },
      {
        id: "pizza",
        label: "Pizza Toppings",
        icon: "🍕",
        summary:
          "Pepperoni and blended beef & chicken toppings for QSR kitchens.",

        items: [
          {
            name: "Pepperoni Toppings",
            image: "/images/pizza.jpg",
            badge: "Cured Meat",
            desc: "Pre-sliced pepperoni rounds portioned per pizza — eliminates waste and guarantees chain-wide consistency.",
            specs: [
              "Pre-sliced",
              "Per-pizza portions",
              "Eliminates waste",
              "Chain consistent",
            ],
          },
          {
            name: "Beef & Chicken Toppings",
            image:
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
            badge: "Blended",
            desc: "Seasoned beef and chicken topping blend, pre-cooked and portioned for local-flavour pizza chains.",
            specs: [
              "Pre-cooked",
              "Nigerian seasoning",
              "Custom portions",
              "IQF frozen",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "aquaculture",
    href: "/products/aquaculture",
    number: "03",
    icon: "🐟",
    group: "Aqua Division",
    title: "Aquaculture",
    sub: "Fish Seed · Live · Frozen · Fillets",
    desc: "Chi Farms' Aquaculture Division leads Nigeria's fish farming industry, offering premium Clarias catfish from fingerling to table size.",
    accent: "#0D7A56",
    accentLight: "rgba(13,122,86,0.08)",
    accentBorder: "rgba(13,122,86,0.18)",
    dark: "#03100A",
    stat: { value: "4–5 mo", label: "grow-out" },
    pills: ["Live Catfish", "Frozen", "Fillets", "Juveniles"],
    categories: [
      {
        id: "catfish",
        label: "Catfish",
        icon: "🐟",
        summary:
          "Farm-raised catfish — live, frozen, filleted — plus hybrid juveniles.",

        items: [
          {
            name: "Live Table Size Catfish",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/1625560232843-scaled-e1687443968774-768x576.jpeg",
            badge: "Live Fish",
            desc: "Farm-raised live catfish at 600g–1.2kg table size, available for collection or bulk delivery.",
            specs: [
              "600g–1.2kg",
              "Farm or delivery",
              "Live transport",
              "Lagos & Ibadan",
            ],
          },
          {
            name: "Frozen Table Size Catfish",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/1620312147875-removebg-preview.png",
            badge: "Frozen",
            desc: "Gutted and blast-frozen whole catfish for supermarkets, food distributors and processing companies.",
            specs: [
              "Gutted & frozen",
              "Whole fish",
              "Supermarket grade",
              "Consistent sizing",
            ],
          },
          {
            name: "Catfish Fillet",
            image:
              "/images/catfillet.jpeg",
            badge: "Processed",
            desc: "Skinless boneless catfish fillets, individually frozen. In demand from hotels, restaurants and health-conscious retail.",
            specs: [
              "Skinless boneless",
              "IQF frozen",
              "Hotel grade",
              "High protein",
            ],
          },
          {
            name: "Pure Line & Hybrid Juveniles",
            image:
              "/images/hybridcatfish.jpg",
            badge: "Juveniles",
            desc: "Genetically superior fingerlings for farm stocking — 30–40% faster growth than conventional strains.",
            specs: [
              "30–40% faster growth",
              "Disease-resistant",
              "Post-fingerling",
              "Genetic selection",
            ],
          },
        ],
      },
    ],
  },

{
  slug: "veterinary",
  href: "/products/veterinary",
  number: "04",
  icon: "🧬",
  group: "Veterinary",
  title: "Veterinary & Bio-security",
  sub: "Vaccines · Vet Services · Lab Diagnostics · Biosecurity",
  desc: "Chi Farms' Veterinary Unit specialises in comprehensive poultry health management, offering tailored support to maximise flock performance, strengthen immunity and prevent disease outbreaks.",
  accent: "#14664A",
  accentLight: "rgba(20,102,74,0.08)",
  accentBorder: "rgba(20,102,74,0.18)",
  dark: "#030E07",
  stat: { value: "A+", label: "biosecurity rating" },
  pills: ["Vaccines", "Vet Services", "Lab Diagnostics", "Biosecurity"],
  categories: [
    {
      id: "veterinary",
      label: "Veterinary Services",
      icon: "🩺",
      summary:
        "Complete poultry health support — vaccination programs, farm visits and laboratory diagnostics.",
      items: [
        {
          name: "Vaccines",
          image: "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/Veterinary-Services.jpg",
          badge: "Prevention",
          desc: "Structured vaccination programs for broilers and layers covering hatchery and field schedules to ensure optimal immunity and flock protection.",
          specs: [
            "Broiler & Layer programs",
            "Hatchery vaccination",
            "Field vaccination schedules",
            "Cold chain management",
            "Disease prevention protocols"
          ]
        },
        {
          name: "Vet Services",
          image: "/images/vett.jpg",
          badge: "Field Support",
          desc: "On-field veterinary visits and emergency response services focused on disease diagnosis, flock performance audits and farmer advisory support.",
          specs: [
            "Scheduled farm visits",
            "Emergency response",
            "Disease diagnosis",
            "Flock performance audits",
            "Farmer advisory"
          ]
        },
        {
          name: "Lab Services",
          image: "/images/lab.jpg",
          badge: "Diagnostics",
          desc: "Advanced laboratory diagnostics including serology, bacteriology, post-mortem examination, and feed/water analysis with fast turnaround time.",
          specs: [
            "Serology testing",
            "Post-mortem analysis",
            "Bacteriology",
            "Feed & water testing",
            "24–48hr results"
          ]
        }
      ]
    },
    {
      id: "biosecurity",
      label: "Bio-Security",
      icon: "🛡️",
      summary:
        "Farm-level biosecurity planning and implementation to reduce disease risks and protect flock investments.",
      items: [
        {
          name: "Biosecurity Planning",
          image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
          badge: "Prevention",
          desc: "Design and implementation of strict farm biosecurity protocols to minimise contamination and disease transmission.",
          specs: [
            "Farm access control",
            "Disinfection protocols",
            "Visitor management systems",
            "Sanitation programs",
            "Risk assessment audits"
          ]
        }
      ]
    }
  ]
},
  {
    slug: "support",
    href: "/products/support",
    number: "05",
    icon: "📋",
    group: "Advisory",
    title: "Technical Support",
    sub: "Training · Farm Visits · Diagnostics",
    desc: "Our vets, poultry scientists and aquaculture specialists deliver structured farm training, emergency field visits and full laboratory diagnostics from our Ibadan facility.",
    accent: "#1A7A55",
    accentLight: "rgba(26,122,85,0.08)",
    accentBorder: "rgba(26,122,85,0.18)",
    dark: "#04130A",
    stat: { value: "3,000+", label: "farmers trained" },
    pills: ["Customer Training", "On-Field Visits", "Lab Services"],
    categories: [
      {
        id: "advisory",
        label: "Advisory Services",
        icon: "📋",
        summary:
          "Technical advisory, diagnostics and structured training for livestock producers.",

       items: [
          {
            name: "Customer Training",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/1customers-forum-1-2.jpg",
            badge: "Training",
            desc: "Structured poultry school covering biosecurity, feed management, vaccination and record-keeping. Certificate issued on completion.",
            specs: [
              "Biosecurity",
              "Feed & vaccines",
              "Record keeping",
              "Certificate issued",
            ],
          },
          {
            name: "On-Field Farm Support",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/pic9-2.png",
            badge: "Field",
            desc: "Scheduled and emergency farm visits by our vet and production team — disease diagnosis to flock performance audits.",
            specs: [
              "Scheduled visits",
              "Emergency response",
              "Disease diagnosis",
              "Production audits",
            ],
          },
          {
            name: "Laboratory Services",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/IMG_3769-2048x1365.jpg",
            badge: "Diagnostic",
            desc: "Full diagnostics at our Oluyole lab — serology, post-mortem, bacteriology, water and feed analysis. 24–48hr results.",
            specs: [
              "Serology",
              "Post-mortem",
              "Feed & water testing",
              "24–48hr results",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "equipment",
    href: "/products/equipment",
    number: "06",
    icon: "⚙️",
    group: "Infrastructure",
    title: "Equipment",
    sub: "Housing Systems · Machinery · Feeders",
    desc: "Farm machinery, poultry housing systems and feeding equipment from trusted global manufacturers — sourced, supplied and installed for Nigerian conditions.",
    accent: "#125C42",
    accentLight: "rgba(18,92,66,0.08)",
    accentBorder: "rgba(18,92,66,0.18)",
    dark: "#020D07",
    stat: { value: "Global", label: "manufacturers" },
    pills: ["Housing", "Machinery", "Feeding Systems"],
    categories: [
      {
        id: "equipment",
        label: "Farm Equipment",
        icon: "⚙️",
        summary:
          "Housing systems, poultry machinery and feeding equipment from global manufacturers.",

        items: [
          {
            name: "Poultry Housing Systems",
            image:
              "/images/equipment.jpg",
            badge: "Housing",
            desc: "Complete housing systems — ventilation, heating, cooling and automated lighting for optimal flock performance.",
            specs: [
              "Climate control",
              "Automated lighting",
              "Ventilation",
              "Turn-key install",
            ],
          },
       
        ],
      },
    ],
  },
];

// Helper: find a division by its slug
export function getDivision(slug) {
  return DIVISIONS.find((d) => d.slug === slug) ?? null;
}
