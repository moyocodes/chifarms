import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500K+", label: "Chicks Distributed Annually" },
  { value: "12", label: "Regional Partners" },
  { value: "98%", label: "Client Satisfaction" },
];

const pillars = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M1 12h1m18 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Integrated Poultry",
    desc: "Breeding, processing and distribution of commercial broilers with full supply-chain visibility.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 18.75 19.5 21l3-3.75"
        />
      </svg>
    ),
    title: "Aquaculture",
    desc: "Premium catfish breeding and raising operations, delivering consistent quality to market.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
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
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function About() {
  const [sectionRef, inView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="relative py-10 overflow-hidden"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #A6DDC8 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #1F8F63 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top label */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: "#D2EEE3",
            color: "#125C42",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: "#1F8F63" }}
          />
          Who We Are
        </div>

        {/* Headline + image grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: text */}
          <div>
            <h2
              className="text-5xl font-bold leading-tight mb-6"
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
              className="text-lg leading-relaxed mb-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5C5C5C",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              Chi Farms Ltd. is an integrated poultry farm with breeding
              operations and processing of commercial broilers. We provide
              parent stock to hatcheries, distribute commercial chicks, and
              support customers with post-sales technical services.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#888888",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              }}
            >
              Our aquaculture division breeds and raises premium catfish, while
              our veterinary division supplies vaccines backed by modern
              laboratory infrastructure.
            </p>

            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
                style={{
                  backgroundColor: "#1F8F63",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 6px 20px rgba(31,143,99,0.35)",
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
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: image with overlaid badge */}
          <div
            className="relative"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <img
              src="https://chi-farms.com/wp-content/uploads/2021/07/cropped-IMG_4965-1536x708.jpg"
              alt="Chi Farms team"
              className="w-full object-cover rounded-2xl"
              style={{
                height: "420px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl flex items-center gap-3"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#EAF7F2" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1F8F63"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-bold"
                  style={{
                    color: "#1A1A1A",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Certified Operations
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#888", fontFamily: "'Inter', sans-serif" }}
                >
                  NAFDAC & SON Compliant
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p
                className="text-4xl font-bold mb-1"
                style={{
                  color: "#1F8F63",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {s.value}
              </p>
              <p
                className="text-sm"
                style={{ color: "#888888", fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
