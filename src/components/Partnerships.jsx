import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const row1 = [
  {
    name: "AgriFeed Co",
    logo: "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/1618912419023-150x150-1.jpg",
    accent: "#1F8F63",
  },

  {
    name: "NutriBlend",
    logo: "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/1618912419023-150x150-1.jpg",
    accent: "#41AA80",
  },
  {
    name: "ColdChain Ltd",
    logo: "https://chi-farms2.desvit.com.ua/wp-content/uploads/2025/11/Adobe_Post_20210420_1050530.8675694096404841-150x150-1.png",
    accent: "#A61D2A",
  },
];

function LogoItem({ p }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 440, damping: 28 }}
      style={{
        flexShrink: 0,
        width: 56,
        height: 56,
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        /* no border, no card bg — just the logo */
        background: "transparent",
      }}
    >
      {/* glow halo on hover */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0, scale: hov ? 1.6 : 1 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.accent}38 0%, transparent 65%)`,
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <img
        src={p.logo}
        alt={p.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          padding: 6,
          filter: hov ? "none" : "grayscale(55%) opacity(0.65)",
          transition: "filter 0.3s ease",
          position: "relative",
        }}
      />
    </motion.div>
  );
}

function MarqueeRow({ items, reverse = false, duration = 40 }) {
  const quad = [...items, ...items, ...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        style={{
          display: "flex",
          gap: 28,
          width: "max-content",
          alignItems: "center",
        }}
      >
        {quad.map((p, i) => (
          <LogoItem key={i} p={p} />
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnerBridge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-60px",
        marginBottom: "-48px",
        padding: "0 16px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          borderRadius: 22,
          overflow: "hidden",
          position: "relative",
          /* very soft shadow — just enough to float, not hard-edged */
          boxShadow:
            "0 0 0 1px rgba(31,143,99,0.08), 0 8px 40px rgba(8,42,32,0.1), 0 32px 64px rgba(31,143,99,0.08)",
        }}
      >
        {/* BG layer 1: color gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(118deg, #082A20 0%, #125C42 22%, #1F8F63 45%, #79CCAC 63%, #E96673 83%, #C92534 100%)",
          }}
        />

        {/* BG layer 2: heavy frosted wash — nearly white, just a tint shows through */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(158deg, rgba(250,250,248,0.97) 0%, rgba(234,247,242,0.96) 50%, rgba(253,237,238,0.95) 100%)",
          }}
        />

        {/* BG layer 3: top-edge gradient bleeds in stronger, bottom bleeds in for the blur transition */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to bottom, rgba(8,42,32,0.04) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to top, rgba(234,247,242,0.08) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ambient blobs */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(31,143,99,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            right: -30,
            width: 260,
            height: 260,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(201,37,52,0.08) 0%, transparent 65%)",
            filter: "blur(55px)",
          }}
        />

        {/* ── CONTENT ── */}
        <div style={{ position: "relative", padding: "22px 0 20px" }}>
          {/* tiny label — just the animated dot + text, nothing else */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 32px 16px",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#1F8F63",
                display: "inline-block",
                boxShadow: "0 0 0 3px rgba(31,143,99,0.18)",
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#5C5C5C",
              }}
            >
              Our Partners
            </span>
          </motion.div>

          {/* ROW 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.32, duration: 0.6 }}
            style={{ marginBottom: 14 }}
          >
            <MarqueeRow items={row1} reverse={false} duration={42} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/*
  USAGE:
    <Hero />
    <PartnerBridge />
    <About />

  Hero & About outermost wrappers: no overflow:hidden
*/
