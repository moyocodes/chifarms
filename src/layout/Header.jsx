import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

/* ══════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════ */
const dropIn = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.14 } },
};

/* ══════════════════════════════════════════════
   NAV DATA
══════════════════════════════════════════════ */
const NAV = [
  { label: "Home",          id: "home",     to: "/" },
  { label: "About",         id: "about",    to: "/about",    drop: "about" },
  { label: "Products",      id: "products", to: "/products", drop: "products" },
  { label: "Why Chi",       id: "why",      to: "/why" },
  { label: "Poultry School",id: "school",   to: "/school" },
  { label: "Careers",       id: "careers",  to: "/careers" },
];

const aboutLinks = [
  { label: "Company Profile", icon: "🏢", to: "/about/company-profile" },
  { label: "Vision & Mission", icon: "🎯", to: "/about/vision" },
  { label: "Culture & Values", icon: "🌱", to: "/about/culture" },
  { label: "CSR",              icon: "🤝", to: "/about/csr" },
];

/* Product dropdown — columns map to /products/:slug/:categoryId */
const productCols = [
  {
    heading: "Poultry",
    icon: "🐓",
    slug: "poultry",
    items: [
      { label: "Breeder Chicks",   to: "/products/poultry/breeder" },
      { label: "Day Old Chicks",   to: "/products/poultry/doc" },
    ],
  },
  {
    heading: "Frozen Meat",
    icon: "❄️",
    slug: "frozen",
    items: [
      { label: "Chicken",        to: "/products/frozen/chicken" },
      { label: "Beef Products",  to: "/products/frozen/beef" },
      { label: "French Fries",   to: "/products/frozen/fries" },
      { label: "Pizza Toppings", to: "/products/frozen/pizza" },
    ],
  },
  {
    heading: "Aquaculture",
    icon: "🐟",
    slug: "aquaculture",
    items: [
      { label: "Catfish",     to: "/products/aquaculture/catfish" },
    ],
  },
];

const productFooterLinks = [
  { label: "🧬 Veterinary",     to: "/products/veterinary/support" },
  { label: "📋 Tech Support",   to: "/products/support/advisory" },
  { label: "⚙️ Equipment",      to: "/products/equipment/equipment" },
];

/* ══════════════════════════════════════════════
   LOGO BACKGROUND
══════════════════════════════════════════════ */
function LogoBg() {
  return (
    <div aria-hidden className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <motion.div
        className="absolute"
        style={{ left: -24, top: "50%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(31,143,99,0.13) 0%, rgba(31,143,99,0.04) 55%, transparent 75%)", transform: "translateY(-50%)", filter: "blur(12px)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{ left: -4, top: "50%", width: 72, height: 72, borderRadius: "50%", border: "1px solid rgba(31,143,99,0.12)", transform: "translateY(-50%)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <img src="/chilogo.svg" alt="" className="absolute select-none"
        style={{ right: 10, top: "50%", transform: "translateY(-50%)", height: 52, opacity: 0.04, filter: "grayscale(1)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   SLIDING UNDERLINE
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
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex">
          <ChevronDown size={16} className={open ? "text-primary" : "text-dark-400"} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
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
  const [hoverId, setHoverId] = useState(null);

  const location = useLocation();
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const leaveTimer = useRef(null);

  /* Derive active nav item from current path */
  const getActiveId = (pathname) => {
    if (pathname === "/") return "home";
    const seg = pathname.split("/").filter(Boolean)[0]; // first segment
    // "products" matches /products, /products/poultry, /products/frozen, etc.
    return seg ?? "home";
  };
  const activeId = getActiveId(location.pathname);
  const displayId = hoverId ?? activeId;

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close mobile on resize */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMobile(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  /* close mobile drawer on route change */
  useEffect(() => {
    setMobile(false);
    setDropdown(null);
  }, [location.pathname]);

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
        .chi-nav    { display: flex !important; }
        .chi-burger { display: none !important; }
        @media (max-width: 1023px) {
          .chi-nav    { display: none !important; }
          .chi-burger { display: flex !important; }
        }
      `}</style>

      <header className="fixed top-5 left-0 right-0 z-[100]">
        <div className="max-w-[1152px] mx-auto px-5">
          <motion.div
            animate={{
              paddingTop: scrolled ? 8 : 12,
              paddingBottom: scrolled ? 8 : 12,
              boxShadow: scrolled ? "0 12px 48px rgba(0,0,0,0.13)" : "0 4px 20px rgba(0,0,0,0.07)",
            }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-between px-6 rounded-2xl border border-secondary-300"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)" }}
          >
            <LogoBg />

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative z-10">
              <Link to="/" className="flex items-center no-underline">
                <img src="/chilogo.svg" className="h-12" alt="Chi Farms" />
              </Link>
            </motion.div>

            {/* ── DESKTOP NAV ── */}
            <nav ref={navRef} className="chi-nav items-center gap-1 relative z-10">
              <SlidingUnderline itemRefs={itemRefs} activeId={displayId} navRef={navRef} />

              {NAV.map(({ label, id, to, drop }) => (
                <div
                  key={id}
                  ref={(el) => { itemRefs.current[id] = el; }}
                  onMouseEnter={() => onEnter(id, drop)}
                  onMouseLeave={onLeave}
                  className="relative"
                >
                  <Link
                    to={to}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg no-underline font-heading text-sm relative z-[1]"
                    style={{
                      color: displayId === id ? "#1F8F63" : "#5C5C5C",
                      fontWeight: displayId === id ? 700 : 600,
                      textDecoration: "none",
                    }}
                  >
                    {label}
                    {drop && (
                      <motion.span animate={{ rotate: dropdown === drop ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex opacity-60">
                        <ChevronDown size={13} />
                      </motion.span>
                    )}
                  </Link>

                  {/* hover bg pill */}
                  <AnimatePresence>
                    {hoverId === id && (
                      <motion.div key="hbg" layoutId="nav-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-lg bg-primary-50 pointer-events-none z-0" />
                    )}
                  </AnimatePresence>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdown === drop && drop && (
                      <motion.div
                        variants={dropIn} initial="hidden" animate="show" exit="exit"
                        onMouseEnter={() => clearTimeout(leaveTimer.current)}
                        onMouseLeave={onLeave}
                        className="absolute top-[calc(100%+14px)] bg-white rounded-2xl border border-secondary-300"
                        style={{
                          left: drop === "products" ? "50%" : 0,
                          transform: drop === "products" ? "translateX(-50%)" : "none",
                          width: drop === "products" ? 580 : 226,
                          boxShadow: "0 24px 64px rgba(0,0,0,0.13)",
                          zIndex: 200,
                        }}
                      >
                        {/* ── About dropdown ── */}
                        {drop === "about" && (
                          <div className="p-3">
                            {aboutLinks.map((l, i) => (
                              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                                <Link
                                  to={l.to}
                                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl no-underline font-body text-[13.5px] text-dark"
                                  style={{ textDecoration: "none" }}
                                  onClick={() => setDropdown(null)}
                                >
                                  <span className="text-[17px]">{l.icon}</span>
                                  {l.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* ── Products dropdown ── */}
                        {drop === "products" && (
                          <div className="p-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 font-heading text-[10px] font-bold uppercase tracking-widest text-primary-700 mb-5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                              Our Range
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                              {productCols.map((col, ci) => (
                                <motion.div key={ci} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.07 }}>
                                  {/* Column heading — links to division landing */}
                                  <Link
                                    to={`/products/${col.slug}`}
                                    className="flex items-center gap-1.5 mb-2.5 no-underline group"
                                    style={{ textDecoration: "none" }}
                                    onClick={() => setDropdown(null)}
                                  >
                                    <span className="text-[15px]">{col.icon}</span>
                                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-primary-700 group-hover:text-primary transition-colors">
                                      {col.heading}
                                    </span>
                                  </Link>

                                  {/* Category links → /products/:slug/:categoryId */}
                                  <div className="flex flex-col gap-1.5">
                                    {col.items.map((item, ii) => (
                                      <motion.div key={ii} whileHover={{ x: 4 }}>
                                        <Link
                                          to={item.to}
                                          className="font-body text-[13px] text-dark-500 no-underline inline-block hover:text-primary transition-colors"
                                          style={{ textDecoration: "none" }}
                                          onClick={() => setDropdown(null)}
                                        >
                                          {item.label}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Footer pills — vet, support, equipment */}
                            <div className="mt-5 pt-5 border-t border-secondary-300 flex gap-2 flex-wrap">
                              {productFooterLinks.map((t) => (
                                <Link
                                  key={t.label}
                                  to={t.to}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 font-heading text-[10px] font-bold uppercase tracking-wider text-primary-700 whitespace-nowrap no-underline hover:bg-primary-100 transition-colors"
                                  style={{ textDecoration: "none" }}
                                  onClick={() => setDropdown(null)}
                                >
                                  {t.label}
                                </Link>
                              ))}
                              {/* See all products link */}
                              <Link
                                to="/products"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary border-primary font-heading text-[10px] font-bold uppercase tracking-wider text-white whitespace-nowrap no-underline hover:opacity-90 transition-opacity ml-auto"
                                style={{ textDecoration: "none", background: "linear-gradient(135deg,#1F8F63,#125C42)" }}
                                onClick={() => setDropdown(null)}
                              >
                                All Products →
                              </Link>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTA */}
              <motion.div whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(31,143,99,0.38)" }} whileTap={{ scale: 0.97 }} className="ml-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-accent gap-1.5 px-5 py-2 rounded-xl no-underline font-heading text-[13px] font-bold"
                  style={{ textDecoration: "none", color: "#1F8F63", border: "1.5px solid rgba(31,143,99,0.25)", background: "rgba(31,143,99,0.06)" }}
                >
                  <Phone size={13} /> Contact Sales
                </Link>
              </motion.div>
            </nav>

            {/* Hamburger */}
            <motion.button
              className="chi-burger items-center bg-transparent border-none cursor-pointer p-1 relative z-10 text-dark"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobile((m) => !m)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobile ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
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
              style={{ top: "calc(100% + 10px)", zIndex: 90, maxHeight: "80vh", boxShadow: "0 20px 60px rgba(0,0,0,0.14)" }}
            >
              <motion.nav
                className="flex flex-col gap-0.5"
                variants={{ show: { transition: { staggerChildren: 0.045 } }, hidden: {} }}
                initial="hidden" animate="show"
              >
                {/* Simple links */}
                {[
                  { label: "Home",          to: "/" },
                  { label: "Why Chi",       to: "/why" },
                  { label: "Poultry School",to: "/school" },
                  { label: "Careers",       to: "/careers" },
                ].map((item, i) => (
                  <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}>
                    <Link
                      to={item.to}
                      className={`block px-3.5 py-3 rounded-xl font-heading text-[15px] font-semibold no-underline ${
                        (item.to === "/" && activeId === "home") || activeId === item.to.replace("/", "")
                          ? "text-primary bg-primary-50"
                          : "text-dark"
                      }`}
                      style={{ textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <Accordion label="About">
                  <div className="flex flex-col gap-0.5">
                    {aboutLinks.map((l, i) => (
                      <Link key={i} to={l.to} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-body text-sm text-dark-500 no-underline" style={{ textDecoration: "none" }}>
                        <span>{l.icon}</span>{l.label}
                      </Link>
                    ))}
                  </div>
                </Accordion>

                <Accordion label="Products">
                  <div className="flex flex-col gap-4 px-1.5">
                    {productCols.map((col, ci) => (
                      <div key={ci}>
                        <Link to={`/products/${col.slug}`} className="flex items-center gap-2 mb-1.5 no-underline" style={{ textDecoration: "none" }}>
                          <span className="text-sm">{col.icon}</span>
                          <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-primary-700">{col.heading}</span>
                        </Link>
                        <div className="flex flex-col gap-0.5 pl-5">
                          {col.items.map((item, ii) => (
                            <Link key={ii} to={item.to} className="font-body text-[13.5px] text-dark-500 no-underline py-1 block" style={{ textDecoration: "none" }}>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Footer links in mobile */}
                    <div className="flex flex-col gap-0.5 pt-2 border-t border-secondary-300">
                      {productFooterLinks.map((t) => (
                        <Link key={t.label} to={t.to} className="font-body text-[13.5px] text-dark-500 no-underline py-1 block" style={{ textDecoration: "none" }}>
                          {t.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Accordion>

                <div className="h-px bg-secondary-300 my-3" />

                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl no-underline font-heading font-bold text-sm text-white"
                    style={{ background: "linear-gradient(135deg,#1F8F63,#125C42)", boxShadow: "0 6px 20px rgba(31,143,99,0.28)", textDecoration: "none" }}
                  >
                    <Phone size={14} /> Contact Sales
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            onClick={() => setMobile(false)}
            className="fixed inset-0 z-[80]"
            style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;