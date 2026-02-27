import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 9,  suffix: "",  label: "Strategic Partnerships", icon: "🤝" },
  { value: 28, suffix: "+", label: "Products",                icon: "🐣" },
  { value: 36, suffix: "",  label: "States Across Nigeria",   icon: "📍" },
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M1 12h1m18 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Integrated Poultry",
    desc: "Breeding, processing and distribution of commercial broilers with full supply-chain visibility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 18.75 19.5 21l3-3.75" />
      </svg>
    ),
    title: "Aquaculture",
    desc: "Premium catfish breeding and raising operations, delivering consistent quality to market.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Veterinary Division",
    desc: "Modern lab-supported vaccine supply and post-sales technical services for our clients.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedCounter({ target, suffix = "", duration = 1800, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const [sectionRef, inView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #A6DDC8 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #1F8F63 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top label */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: "#D2EEE3",
            color: "#125C42",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#1F8F63" }} />
          Who We Are
        </div>

        {/* ── Headline + image grid ── */}
        {/*
          KEY FIX: removed `items-center` → use `items-start` so the left column
          stacks naturally and the badge (now in-flow) doesn't force misalignment.
          The right image stretches to match the left column height via `self-stretch`.
        */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-24">

          {/* ── Left: text + badge ── */}
          <div className="flex flex-col">
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#1A1A1A",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              Rooted in nature,
              <br />
              <span style={{ color: "#1F8F63" }}>driven by science.</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed mb-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5C5C5C",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              Chi Farms Ltd. is an integrated poultry farm with breeding operations and
              processing of commercial broilers. We provide parent stock to hatcheries,
              distribute commercial chicks, and support customers with post-sales
              technical services.
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#888888",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              }}
            >
              Our aquaculture division breeds and raises premium catfish, while our
              veterinary division supplies vaccines backed by modern laboratory
              infrastructure.
            </p>

            {/* CTA + badge sit side-by-side, both flush left, perfectly aligned */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
              }}
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                style={{
                  backgroundColor: "#1F8F63",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 6px 20px rgba(31,143,99,0.35)",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#125C42";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1F8F63";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Partner With Us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* ── Badge: now in normal flow, vertically centred with CTA ── */}
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #E8F5EF",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EAF7F2" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#1F8F63" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-bold leading-tight"
                    style={{ color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Certified Operations
                  </p>
                  <p
                    className="text-xs leading-tight mt-0.5"
                    style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}
                  >
                    NAFDAC & SON Compliant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: image only, no floating badge ── */}
          <div
            className="relative mt-4 md:mt-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <img
              src="https://chi-farms.com/wp-content/uploads/2021/07/cropped-IMG_4965-1536x708.jpg"
              alt="Chi Farms team"
              className="w-full rounded-2xl"
              style={{
                height: "380px",
                objectFit: "cover",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                display: "block",
              }}
            />

            {/* Subtle top-right identity pill — keeps the image branded */}
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 99,
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#1F8F63",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(31,143,99,0.18)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                Chi Farms Limited
              </span>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          ref={statsRef}
          className="mb-16 md:mb-24"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          {/* Divider label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #D2EEE3, transparent)" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#1F8F63", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Reach
            </span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, #D2EEE3, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 sm:p-8 overflow-hidden text-center"
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  border: "1px solid #E8F5EF",
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, box-shadow 0.3s ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(31,143,99,0.15)";
                  e.currentTarget.style.borderColor = "#A6DDC8";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "#E8F5EF";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Hover wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at 50% 0%, #EAF7F2 0%, transparent 70%)" }}
                />

                {/* Icon pill */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-2xl"
                  style={{ backgroundColor: "#EAF7F2" }}
                >
                  {s.icon}
                </div>

                {/* Animated number */}
                <p
                  className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-1 tabular-nums"
                  style={{
                    color: "#1F8F63",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  <AnimatedCounter
                    target={s.value}
                    suffix={s.suffix}
                    inView={statsInView}
                    duration={1600 + i * 200}
                  />
                </p>

                {/* Label */}
                <p
                  className="text-sm font-medium"
                  style={{ color: "#7A7A7A", fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{ backgroundColor: "#1F8F63", transition: "width 0.6s ease" }}
                  ref={(el) => {
                    if (el) {
                      el.style.width = "0%";
                      setTimeout(() => { el.style.width = statsInView ? "40%" : "0%"; }, i * 150 + 400);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}