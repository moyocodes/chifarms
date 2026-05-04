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
    summary:
      "At Chi Farms Limited, our poultry value chain begins with the 21st century superior poultry genetics, namely Arbor Acres and ISA Brown for meat and egg production, respectively since 2005. We are proud to be the only producer of Grand Parent Stock (GPS) in West Africa, positioning us as a foundational player in the region’s poultry industry. Our Grand Parent Stock (GPS) originates directly from two of the world’s leading breeding companies – Aviagen for broilers (Arbor Acre) and Hendrix Genetics for layers (ISA Brown). These birds are raised under strict biosecurity and specialized care at our state-of-the-art GPS facility in Nigeria.",
    sub: "Breeder Chicks · Parent Stock Day Old Chicks · Commercial Day Old Chicks",
    desc: "Chi Farms Ltd. produces Parent Stock (PS) birds at its hatchery. The Parent Stock covers both the broiler and layer line. Chi Farms produces the Arbor Acres Plus PS for the broiler line and the ISA Brown Layer PS for the layer line.",
    accent: "#1F8F63",
    accentLight: "rgba(31,143,99,0.08)",
    accentBorder: "rgba(31,143,99,0.18)",
    dark: "#061A0D",
    pills: [
      "Breeder Chicks",
      "Parent Stock Day Old Chicks",
      "Commercial Day Old Chicks",
    ],
    // Full category tabs shown on /poultry page
    categories: [
      {
        id: "parent-stock",
        label: "Parent Stock Day Old Chicks",
        icon: "🥚",

        summary:
          "Our high-quality Parent Stock birds are available for purchase and come with technical support to ensure optimal performance at your farm or hatchery. They are bred from our Grand Parent Stock, ensuring strong genetic performance, disease resistance, and adaptability to local farming conditions. These birds are ideal for poultry farmers and hatcheries looking to produce their own day-old chicks.",

        items: [
          {
            name: "Arbor Acres (Aviagen)",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936346/WhatsApp_Image_2026-05-05_at_00.09.24_8_domznl.jpg",
            badge: "Broiler",
            desc: "Known for excellent growth rates, feed efficiency, and robust health, our Arbor Acres PS broilers provide exceptional meat yield potential.",
          },
          {
            name: "ISA Brown (Hendrix)",
            image:
              "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
            badge: "Layer",
            desc: "Our ISA Brown PS layers are renowned for their consistent egg production, calm temperament, and adaptability, making them a top choice for egg producers , Chi farms controls over 95% of the market share for the Parent Stock Layer DOCs in Nigeria",
          },
        ],
      },
      {
        id: "doc",
        label: "Commercial Day Old Chicks",
        icon: "🐣",
        summary:
          "Our high-quality Commercial Day-Old Chicks (DOCs) are available for purchase and come with technical support to ensure optimal performance at your farm. They are produced from our Parent Stock and are also raised under strict hygiene, biosecurity, and optimal hatchery conditions These DOCs are ideal for farmers focused on meat or egg production.",

        items: [
          {
            name: "Arbor Acres Plus Broiler DOC",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933933/day_vossyq.jpg",
            badge: "Broiler",
            desc: "The #1 commercial broiler strain in Nigeria. Outstanding uniformity, superior meat yield and excellent feed conversion.",
          },
          {
            name: "ISA Brown Commercial Pullet",
            image: "/images/isabrown.jpg",
            badge: "Layer",
            desc: "Nigeria's most popular commercial brown layer. Reaches peak production early and sustains high lay rates across a 72-week cycle.",
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
    summary:
      "At Chi Farms Limited, our poultry value chain begins with the 21st century superior poultry genetics, namely Arbor Acres and ISA Brown for meat and egg production, respectively since 2005. We are proud to be the only producer of Grand Parent Stock (GPS) in West Africa, positioning us as a foundational player in the region’s poultry industry. Our Grand Parent Stock (GPS) originates directly from two of the world’s leading breeding companies – Aviagen for broilers (Arbor Acre) and Hendrix Genetics for layers (ISA Brown). These birds are raised under strict biosecurity and specialized care at our state-of-the-art GPS facility in Nigeria.",
    sub: "Chicken · Beef · Customised Products",
    desc: "Biological risk management recognizes that animal diseases cannot be eliminated and livestock producers can manage disease risk through effective control measures.",
    accent: "#187553",
    accentLight: "rgba(24,117,83,0.08)",
    accentBorder: "rgba(24,117,83,0.18)",
    dark: "#04140B",
    pills: ["Chicken", "Beef", "Customised Products"],
    categories: [
      {
        id: "chicken",
        label: "Chicken",
        icon: "🍗",
        summary:
          "Welcome to the Frozen Meat section of Chi Farms, your trusted source for high-quality, hygienically processed, and professionally packaged meat products. We offer a wide selection of frozen options – from chicken and beef to sausages and more – all made from carefully selected meat processed under strict quality standards. Chi Farms is proudly NAFDAC-approved and Halal certified, ensuring our products meet the highest regulatory and ethical standards. We also offer customized product solutions to meet specific client needs upon request.",
        items: [
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
            name: "Smoked Frozen Chicken",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936341/WhatsApp_Image_2026-05-05_at_00.09.25_1_e10ytu.jpg",
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
            name: "Premium Chicken Sausage",
            image:
              "https://chi-farms.com/wp-content/uploads/2021/05/images/new-2.jpg",
            badge: "Processed",
            desc: "Seasoned chicken sausages made from 100% whole-muscle chicken. Available smoked and unsmoked.",
            specs: [
              "100% chicken",
              "Smoked & unsmoked",
              "Retail & catering",
              "No fillers",
            ],
          },
        ],
      },
      {
        id: "beef",
        label: "Beef Products",
        icon: "🥩",
        summary:
          "Welcome to the Frozen Meat section of Chi Farms, your trusted source for high-quality, hygienically processed, and professionally packaged meat products. We offer a wide selection of frozen options – from chicken and beef to sausages and more – all made from carefully selected meat processed under strict quality standards. Chi Farms is proudly NAFDAC-approved and Halal certified, ensuring our products meet the highest regulatory and ethical standards. We also offer customized product solutions to meet specific client needs upon request.",
        items: [
          {
            name: "Pepperoni Sausage",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936341/WhatsApp_Image_2026-05-05_at_00.09.24_9_paxwul.jpg",
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
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936342/WhatsApp_Image_2026-05-05_at_00.09.24_7_qhradp.jpg",
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
        id: "pizza",
        label: "Customised Products",
        icon: "🍕",
        summary:
          "Welcome to the Frozen Meat section of Chi Farms, your trusted source for high-quality, hygienically processed, and professionally packaged meat products. We offer a wide selection of frozen options – from chicken and beef to sausages and more – all made from carefully selected meat processed under strict quality standards. Chi Farms is proudly NAFDAC-approved and Halal certified, ensuring our products meet the highest regulatory and ethical standards. We also offer customized product solutions to meet specific client needs upon request.",

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
          {
            name: "Meat Balls",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933969/meat_pbrzir.jpg",
            badge: "Blended",
            desc: "Juicy, pre-cooked meat balls seasoned for QSR kitchens — ready to top or serve as a standalone protein.",
            specs: [
              "Pre-cooked",
              "Uniform sizing",
              "Custom seasoning",
              "IQF frozen",
            ],
          },
          {
            name: "Manihoft Shredded Chicken",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxeNAK7myj9iIJ7NvSjc-fMT7lvUaOocwdg&s",
            badge: "Shredded",
            desc: "Tender shredded chicken with Manihoft seasoning, pre-cooked and portioned for fast, consistent QSR assembly.",
            specs: [
              "Pre-cooked",
              "Shredded format",
              "Manihoft seasoned",
              "IQF frozen",
            ],
          },
          {
            name: "Nasi Dish",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933969/meat_pbrzir.jpg",
            badge: "Rice Dish",
            desc: "Flavourful Nasi-style rice dish, pre-portioned and ready to reheat — ideal for QSR combo meal offerings.",
            specs: [
              "Pre-portioned",
              "Reheat ready",
              "Consistent flavour",
              "Frozen format",
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
    sub: "Live Catfish · Frozen · Fillets · Juveniles",
    desc: "Chi Farms’ Aquaculture Division is a leader in Nigeria’s fish farming industry, offering both premium fish seed and table-size catfish at various preferred sizes.",
    summary:
      "Chi Farms’ Aquaculture Division is a leader in Nigeria’s fish farming industry, offering both premium fish seed and table-size catfish at various preferred sizes. Our state-of-the-art hatcheries, equipped with Recirculating Aquaculture Systems (RAS), ensure the production of healthy, fast-growing fish under strict biosecurity and sustainable practices. Through innovation, farmer training, and consistent quality, we support the growth and success of aquaculture across the country. We sell both table-size catfish and juveniles to farmers, retailers, and institutions across Nigeria.",
    accent: "#0D7A56",
    accentLight: "rgba(13,122,86,0.08)",
    accentBorder: "rgba(13,122,86,0.18)",
    dark: "#03100A",
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
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933966/tab_i1lcpd.jpg",
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
            name: "Premium Floating Catfish Feed",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936347/WhatsApp_Image_2026-05-05_at_00.09.24_2_rpb7yc.jpg",
            badge: "Fish Feed",
            desc: "High-protein floating pellets formulated for fast growth, strong immunity, and efficient feed conversion in catfish farming.",
            specs: [
              "28–40% crude protein",
              "Floating pellets",
              "Multiple pellet sizes (2mm–9mm)",
              "High digestibility",
            ],
          },

          {
            name: "Pure Line & Hybrid Juveniles",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933950/juv_d47iae.jpg",
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
    group: "Health",
    title: "Veterinary & Bio-security",
    summary:
      "At Chi Farms, we are committed to supporting poultry farmers beyond product sales. Our comprehensive technical support includes laboratory diagnostics, veterinary services, and a dedicated customer-focused team. Whether you’re facing health challenges, need performance insights, or are looking for expert advice, we offer a complete package of poultry support to help you achieve optimal results across every stage of production.",
    sub: "Vaccines · Vet Services · Lab Diagnostics · Biosecurity",
    desc: "Chi Farms’ Veterinary Unit specializes in comprehensive poultry health management, offering tailored support to maximize flock performance and prevent disease outbreaks.",
    accent: "#14664A",
    accentLight: "rgba(20,102,74,0.08)",
    accentBorder: "rgba(20,102,74,0.18)",
    dark: "#030E07",
    pills: ["Vaccines", "Vet Services", "Lab Diagnostics", "Biosecurity"],
    categories: [
      {
        id: "veterinary",
        label: "Veterinary Services",
        icon: "🩺",
        summary:
          "Chi Farms’ Veterinary Unit specializes in comprehensive poultry health management, offering tailored support to maximize flock performance and prevent disease outbreaks. Our team works closely with farmers to develop and implement effective health strategies that ensure long-term productivity and biosecurity across poultry operations.",
        services: [
          "Planning and coordinating farm vaccination and medication programs",
          "Routine health monitoring and biosecurity planning",
          "On-site disease prevention and outbreak response",
          "Expert consultations and farm visits",
          "Reconciliation of farm’s veterinary drugs, vaccines, and lab kits",
          "Placing and coordinating import orders for veterinary supplies",
        ],
        items: [
          {
            name: "Vaccines",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777937743/Vaccine_ezwb84.jpg",
            badge: "Prevention",
            services: [
              "Planning and coordinating farm vaccination and medication programs",
              "Routine health monitoring and biosecurity planning",
              "On-site disease prevention and outbreak response",
              "Expert consultations and farm visits",
              "Reconciliation of farm’s veterinary drugs, vaccines, and lab kits",
              "Placing and coordinating import orders for veterinary supplies",
            ],
            desc: "Chi Farms’ Veterinary Unit specializes in comprehensive poultry health management, offering tailored support to maximize flock performance and prevent disease outbreaks. Our team works closely with farmers to develop and implement effective health strategies that ensure long-term productivity and biosecurity across poultry operations.",
          },
          {
            name: "Vet Services",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933988/vet_v90crq.jpg",
            badge: "Field Support",
            desc: "Chi Farms’ Veterinary Unit specializes in comprehensive poultry health management, offering tailored support to maximize flock performance and prevent disease outbreaks. Our team works closely with farmers to develop and implement effective health strategies that ensure long-term productivity and biosecurity across poultry operations.",
            services: [
              "Planning and coordinating farm vaccination and medication programs",
              "Routine health monitoring and biosecurity planning",
              "On-site disease prevention and outbreak response",
              "Expert consultations and farm visits",
              "Reconciliation of farm’s veterinary drugs, vaccines, and lab kits",
              "Placing and coordinating import orders for veterinary supplies",
            ],
          },
          {
            name: "Lab Services",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933964/lab2_frlet9.jpg",
            badge: "Field Support",
            services: [
              "Planning and coordinating farm vaccination and medication programs",
              "Routine health monitoring and biosecurity planning",
              "On-site disease prevention and outbreak response",
              "Expert consultations and farm visits",
              "Reconciliation of farm’s veterinary drugs, vaccines, and lab kits",
              "Placing and coordinating import orders for veterinary supplies",
            ],
            desc: "On-field veterinary visits and emergency response services focused on disease diagnosis, flock performance audits and farmer advisory support.",
          },
        ],
      },
      {
        id: "biosecurity",
        label: "Bio-Security",
        icon: "🛡️",
        summary:
          "The Chi Farms Laboratory, in collaboration with the ZOETIS Alpha Initiative, serves as a frontline defense against poultry diseases. Equipped with modern tools, the lab supports both Chi Farms and external farms with disease detection, vaccine monitoring, and hygiene control.",
        items: [
          {
            name: "Laboratory Services",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777933942/lab_xqj3ng.jpg",
            badge: "Diagnostics",
            desc: "The Chi Farms Laboratory, in collaboration with the ZOETIS Alpha Initiative, serves as a frontline defense against poultry diseases. Equipped with modern tools, the lab supports both Chi Farms and external farms with disease detection, vaccine monitoring, and hygiene control.",
            services: [
              {
                title: "Poultry Necropsy & Clinical Diagnosis",
                items: [],
              },
              {
                title: "Bacteriology",
                items: [
                  "Antibiotic sensitivity testing",
                  "Microbial analysis of water and feed",
                  "Hatchery and pen house sanitation audits",
                ],
              },
              {
                title: "Serology (ELISA-based)",
                items: [
                  "Antibody detection",
                  "Vaccine potency evaluation",
                  "Field disease exposure monitoring",
                ],
              },
              {
                title: "Biosecurity",
                items: ["Biosecurity planning and hygiene control"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "support",
    href: "/products/support",
    number: "05",
    summary:
      "Chi Farms’ Customer Focus Team is dedicated to providing a full package of poultry support services that meet the diverse needs of our clients across the value chain. Our goal is to deliver hands-on, responsive, and expert guidance that enhances farm productivity, builds customer satisfaction, and strengthens long-term partnerships.",
    icon: "📋",
    group: "Advisory",
    title: "Technical Support",
    sub: "Customer Support · Lab Services · On-Field Visits",
    desc: "Chi Farms’ Customer Focus Team is dedicated to providing a full package of poultry support services that meet the diverse needs of our clients across the value chain.",
    accent: "#1A7A55",
    accentLight: "rgba(26,122,85,0.08)",
    accentBorder: "rgba(26,122,85,0.18)",
    dark: "#04130A",
    pills: [
      "Farm Management",
      "Nutritional Support",
      "Vet & Health",
      "Lab Diagnostics",
      "Site Audits",
      "Farmer Training",
    ],
    categories: [
      {
        id: "customer-support",
        label: "Veterinary Services and Customer Support",
        // icon: "🤝",
        desc: "Chi Farms’ Customer Focus Team is dedicated to providing a full package of poultry support services that meet the diverse needs of our clients across the value chain. Our goal is to deliver hands-on, responsive, and expert guidance that enhances farm productivity, builds customer satisfaction, and strengthens long-term partnerships.",
        image:
          "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777937424/WhatsApp_Image_2026-05-05_at_00.29.04_bws4cb.jpg",

        summary:
          "At Chi Farms, we are committed to supporting poultry farmers beyond product sales. Our comprehensive technical support includes laboratory diagnostics, veterinary services, and a dedicated customer-focused team. Whether you’re facing health challenges, need performance insights, or are looking for expert advice, we offer a complete package of poultry support to help you achieve optimal results across every stage of production.",
        services: [
          "Farm Management Support – practical advice on daily operations and production optimization",
          "Nutritional Support – guidance on feed selection and feeding programs tailored to each growth stage",
          "Veterinary & Health Support – coordination with vet and lab teams for flock health solutions",
          "Lab & Diagnostics Assistance – helping customers access and interpret test results",
          "Facility and Site Audits – evaluating farm infrastructure and recommending improvements",
          "Farmer Training – education on best practices, biosecurity, and management",
        ],
      },
      {
        id: "lab-support",
        label: "Laboratory Services Support",
        // icon: "🔬",
        desc: "Chi Farms’ Customer Focus Team is dedicated to providing a full package of poultry support services that meet the diverse needs of our clients across the value chain. Our goal is to deliver hands-on, responsive, and expert guidance that enhances farm productivity, builds customer satisfaction, and strengthens long-term partnerships.",

        image:
          "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936342/WhatsApp_Image_2026-05-05_at_00.09.24_6_xuvgk2.jpg",

        summary:
          "At Chi Farms, we are committed to supporting poultry farmers beyond product sales. Our comprehensive technical support includes laboratory diagnostics, veterinary services, and a dedicated customer-focused team. Whether you’re facing health challenges, need performance insights, or are looking for expert advice, we offer a complete package of poultry support to help you achieve optimal results across every stage of production.",
        services: [
          "Farm Management Support – practical advice on daily operations and production optimization",
          "Nutritional Support – guidance on feed selection and feeding programs tailored to each growth stage",
          "Veterinary & Health Support – coordination with vet and lab teams for flock health solutions",
          "Lab & Diagnostics Assistance – helping customers access and interpret test results",
          "Facility and Site Audits – evaluating farm infrastructure and recommending improvements",
          "Farmer Training – education on best practices, biosecurity, and management",
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
    sub: "Housing · Machinery · Feeding Systems",
    summary:
      "Chi Farms offers high-quality poultry and hatchery equipment from trusted global brands Big Dutchman and Petersime. From feeding and climate systems to advanced incubators and hatchery solutions, we provide reliable and efficient tools to support your poultry farming set up. Our team is available to provide guidance on new purchases, support for existing equipment, and answers to any related questions.",
    desc: "Farm machinery, poultry housing systems and feeding equipment from trusted global manufacturers — sourced, supplied and installed for Nigerian conditions.",
    accent: "#125C42",
    accentLight: "rgba(18,92,66,0.08)",
    accentBorder: "rgba(18,92,66,0.18)",
    dark: "#020D07",
    pills: ["Housing", "Machinery", "Feeding Systems"],
    categories: [
      {
        id: "equipment",
        label: "Poultry Equipment",
        icon: "⚙️",
        summary:
          "Farm machinery, poultry housing systems and feeding equipment from trusted global manufacturers — sourced, supplied and installed for Nigerian conditions.",
        items: [
          {
            name: "Petersime",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777936350/WhatsApp_Image_2026-05-05_at_00.09.24_4_mtt1tb.jpg",
            badge: "Hatchery",
            desc: "Petersime specializes in advanced incubators and hatchery automation, offering state-of-the-art solutions for optimal hatchability and chick quality.",
          },
          {
            name: "Big Dutchman",
            image:
              "https://res.cloudinary.com/drxxei318/image/upload/q_auto/f_auto/v1777934100/equipment_llojy1.jpg",
            badge: "Housing & Feeding",
            desc: "Big Dutchman is a global leader in innovative poultry housing and feeding systems, known for reliability, efficiency, and long-term performance.",
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
