import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════
   SHARED ANIMATION VARIANTS
══════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const dropIn = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.14 } },
};

/* ══════════════════════════════════════════════
   NAV DATA
══════════════════════════════════════════════ */
const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about", drop: "about" },
  { label: "Products", id: "products", drop: "products" },
  { label: "Why Chi", id: "why" },
  { label: "Poultry School", id: "school" },
  { label: "Careers", id: "careers" },
];

const aboutLinks = [
  { label: "Company Profile", icon: "🏢" },
  { label: "Vision & Mission", icon: "🎯" },
  { label: "Culture & Values", icon: "🌱" },
  { label: "CSR", icon: "🤝" },
];

const productCols = [
  {
    heading: "Poultry",
    icon: "🐓",
    items: ["Breeder Chicks", "Parent Stock DOC", "Commercial DOC"],
  },
  {
    heading: "Frozen Meat",
    icon: "❄️",
    items: [
      "Dressed Chicken",
      "Cut Up",
      "Smoked",
      "Sausages",
      "Beef",
      "Hamburger",
    ],
  },
  {
    heading: "Aquaculture",
    icon: "🐟",
    items: ["Catfish", "Fingerlings", "Table Fish", "Fish Fillet"],
  },
];

/* ══════════════════════════════════════════════
   SLIDING UNDERLINE — follows active/hovered tab
══════════════════════════════════════════════ */
function SlidingUnderline({ itemRefs, activeId, navRef }) {
  const [style, setStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = itemRefs.current[activeId];
    const nav = navRef.current;
    if (!el || !nav) return;
    const eR = el.getBoundingClientRect();
    const nR = nav.getBoundingClientRect();
    setStyle({ left: eR.left - nR.left, width: eR.width });
  }, [activeId]);

  return (
    <motion.div
      className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-300"
      animate={{ left: style.left, width: style.width }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      style={{ pointerEvents: "none" }}
    />
  );
}

/* ══════════════════════════════════════════════
   MOBILE ACCORDION
══════════════════════════════════════════════ */
function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border-none cursor-pointer font-heading text-[15px] font-semibold transition-colors duration-200 ${open ? "bg-primary-50 text-primary" : "bg-transparent text-dark"}`}
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex"
        >
          <ChevronDown
            size={16}
            className={open ? "text-primary" : "text-dark-400"}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════
   HEADER
══════════════════════════════════════════════ */
function Header() {
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [hoverId, setHoverId] = useState(null);

  const navRef = useRef(null);
  const itemRefs = useRef({});
  const leaveTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* active section tracker */
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024) setMobile(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const displayId = hoverId ?? activeId;

  const onEnter = (id, drop) => {
    clearTimeout(leaveTimer.current);
    setHoverId(id);
    if (drop) setDropdown(drop);
  };
  const onLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setHoverId(null);
      setDropdown(null);
    }, 80);
  };

  return (
    <>
      <style>{`
        .chi-nav   { display: flex !important; }
        .chi-burger { display: none !important; }
        @media (max-width: 1023px) {
          .chi-nav   { display: none !important; }
          .chi-burger { display: flex !important; }
        }
      `}</style>

      <header className="fixed top-5 left-0 right-0 z-[100]">
        <div className="max-w-[1152px] mx-auto px-5">
          <motion.div
            animate={{
              paddingTop: scrolled ? 8 : 12,
              paddingBottom: scrolled ? 8 : 12,
              boxShadow: scrolled
                ? "0 12px 48px rgba(0,0,0,0.13)"
                : "0 4px 20px rgba(0,0,0,0.07)",
            }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-between px-6 rounded-2xl border border-secondary-300"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* watermark */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <motion.img
                src="/chilogo.svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.06 }}
                transition={{ duration: 3 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-20 select-none"
              />
            </div>

            {/* logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center relative z-10 no-underline"
            >
              <img src="/chilogo.svg" className="h-9" alt="Chi Farms" />
            </motion.a>

            {/* ── DESKTOP NAV ── */}
            <nav
              ref={navRef}
              className="chi-nav items-center gap-1 relative z-10"
            >
              <SlidingUnderline
                itemRefs={itemRefs}
                activeId={displayId}
                navRef={navRef}
              />

              {NAV.map(({ label, id, drop }) => (
                <div
                  key={id}
                  ref={(el) => {
                    itemRefs.current[id] = el;
                  }}
                  onMouseEnter={() => onEnter(id, drop)}
                  onMouseLeave={onLeave}
                  className="relative"
                >
                  <motion.a
                    href={`#${id}`}
                    animate={{
                      color: displayId === id ? "#1F8F63" : "#5C5C5C",
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg no-underline font-heading text-sm relative z-[1]"
                    style={{ fontWeight: displayId === id ? 700 : 600 }}
                  >
                    {label}
                    {drop && (
                      <motion.span
                        animate={{ rotate: dropdown === drop ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex opacity-60"
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    )}
                  </motion.a>

                  {/* hover bg pill */}
                  <AnimatePresence>
                    {hoverId === id && (
                      <motion.div
                        key="hbg"
                        layoutId="nav-pill"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-lg bg-primary-50 pointer-events-none z-0"
                      />
                    )}
                  </AnimatePresence>

                  {/* dropdown */}
                  <AnimatePresence>
                    {dropdown === drop && drop && (
                      <motion.div
                        variants={dropIn}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onMouseEnter={() => {
                          clearTimeout(leaveTimer.current);
                        }}
                        onMouseLeave={onLeave}
                        className="absolute top-[calc(100%+14px)] bg-white rounded-2xl border border-secondary-300"
                        style={{
                          left: drop === "products" ? "50%" : 0,
                          transform:
                            drop === "products" ? "translateX(-50%)" : "none",
                          width: drop === "products" ? 580 : 226,
                          boxShadow: "0 24px 64px rgba(0,0,0,0.13)",
                          zIndex: 200,
                        }}
                      >
                        {drop === "about" ? (
                          <div className="p-3">
                            {aboutLinks.map((l, i) => (
                              <motion.a
                                key={i}
                                href="#"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                whileHover={{
                                  backgroundColor: "#EAF7F2",
                                  x: 3,
                                }}
                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl no-underline font-body text-[13.5px] text-dark"
                              >
                                <span className="text-[17px]">{l.icon}</span>
                                {l.label}
                              </motion.a>
                            ))}
                          </div>
                        ) : (
                          <div className="p-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 font-heading text-[10px] font-bold uppercase tracking-widest text-primary-700 mb-5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                              Our Range
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                              {productCols.map((col, ci) => (
                                <motion.div
                                  key={ci}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: ci * 0.07 }}
                                >
                                  <div className="flex items-center gap-1.5 mb-2.5">
                                    <span className="text-[15px]">
                                      {col.icon}
                                    </span>
                                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-primary-700">
                                      {col.heading}
                                    </span>
                                  </div>
                                  <div className="flex flex-col gap-1.5">
                                    {col.items.map((item, ii) => (
                                      <motion.a
                                        key={ii}
                                        href="#"
                                        whileHover={{ color: "#1F8F63", x: 4 }}
                                        className="font-body text-[13px] text-dark-500 no-underline inline-block"
                                      >
                                        {item}
                                      </motion.a>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-5 pt-5 border-t border-secondary-300 flex gap-2 flex-wrap">
                              {[
                                "🌾 Concentrate Feed",
                                "🧬 Biosecurity",
                                "⚙️ Equipment",
                              ].map((t) => (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 font-heading text-[10px] font-bold uppercase tracking-wider text-primary-700 whitespace-nowrap"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <motion.a
                href="contact"
                whileHover={{
                  y: -1,
                  boxShadow: "0 8px 24px rgba(31,143,99,0.38)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-accent gap-1.5 px-5 py-2 rounded-xl no-underline font-heading text-[13px] font-bold  ml-2"
                style={{
                  // background: "linear-gradient(135deg,#1F8F63,#125C42)",
                  boxShadow: "0 4px 14px rgba(31,143,99,0.28)",
                }}
              >
                <Phone size={13} /> Contact Sales
              </motion.a>
            </nav>

            {/* hamburger */}
            <motion.button
              className="chi-burger items-center bg-transparent border-none cursor-pointer p-1 relative z-10 text-dark"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobile((m) => !m)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobile ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-4 right-4 bg-white rounded-2xl border border-secondary-300 p-4 pb-5 overflow-y-auto"
              style={{
                top: "calc(100% + 10px)",
                zIndex: 90,
                maxHeight: "80vh",
                boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
              }}
            >
              <motion.nav
                className="flex flex-col gap-0.5"
                variants={{
                  show: { transition: { staggerChildren: 0.045 } },
                  hidden: {},
                }}
                initial="hidden"
                animate="show"
              >
                {["Home", "Poultry School", "Careers", "Why Chi"].map(
                  (item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.28 },
                        },
                      }}
                      whileHover={{
                        x: 4,
                        backgroundColor: "#EAF7F2",
                        color: "#1F8F63",
                      }}
                      className="block px-3.5 py-3 rounded-xl font-heading text-[15px] font-semibold text-dark no-underline"
                    >
                      {item}
                    </motion.a>
                  ),
                )}

                <Accordion label="About">
                  <div className="flex flex-col gap-0.5">
                    {aboutLinks.map((l, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{
                          x: 3,
                          color: "#1F8F63",
                          backgroundColor: "#EAF7F2",
                        }}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-body text-sm text-dark-500 no-underline"
                      >
                        <span>{l.icon}</span>
                        {l.label}
                      </motion.a>
                    ))}
                  </div>
                </Accordion>

                <Accordion label="Products">
                  <div className="flex flex-col gap-4 px-1.5">
                    {productCols.map((col, ci) => (
                      <div key={ci}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-sm">{col.icon}</span>
                          <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-primary-700">
                            {col.heading}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 pl-5">
                          {col.items.map((item, ii) => (
                            <motion.a
                              key={ii}
                              href="#"
                              whileHover={{ x: 3, color: "#1F8F63" }}
                              className="font-body text-[13.5px] text-dark-500 no-underline py-1 block"
                            >
                              {item}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <div className="h-px bg-secondary-300 my-3" />

                <motion.a
                  href="#contact"
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl no-underline font-heading font-bold text-sm text-white"
                  style={{
                    background: "linear-gradient(135deg,#1F8F63,#125C42)",
                    boxShadow: "0 6px 20px rgba(31,143,99,0.28)",
                  }}
                >
                  <Phone size={14} /> Contact Sales
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* backdrop */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobile(false)}
            className="fixed inset-0 z-[80]"
            style={{
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(2px)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
  export default Header;