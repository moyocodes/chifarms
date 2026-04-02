import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* DATA */
const stats = [
  { raw: 20, suffix: "+", label: "Years Operating", icon: "🌱" },
  { raw: 18, suffix: "", label: "Product Lines", icon: "📦" },
  {
    raw: 3000,
    suffix: "+",
    label: "Farmers Trained",
    icon: "🤝",
    compact: true,
  },
  { raw: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
];

/* COUNTER */
function AnimatedCounter({ target, suffix = "", compact = false, inView }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;

    hasRun.current = true;

    const duration = 2000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3); // smoother easing
      const value = Math.floor(eased * target);

      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target]);

  const display =
    compact && count >= 1000
      ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K`
      : count.toLocaleString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

/* COMPONENT */
const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-12">
      <div
        ref={ref}
        className="
          grid grid-cols-2 
          md:grid-cols-4 
          gap-4
          border border-[#1F8F63]/10 
          rounded-xl 
          overflow-hidden
          bg-gradient-to-br from-white to-[#d2eee3]/30
        "
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="
              text-center 
              py-6 px-3 
              relative 
              group
              border-b md:border-b-0 
              md:border-r 
              border-[#1F8F63]/10
              last:border-r-0
            "
          >
            {/* top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-b bg-gradient-to-r from-[#1F8F63] to-[#41AA80] opacity-60" />

            {/* number */}
            <p className="font-extrabold text-[1.6rem] leading-none bg-gradient-to-br from-[#1F8F63] to-[#41AA80] bg-clip-text text-transparent">
              <AnimatedCounter
                target={s.raw}
                suffix={s.suffix}
                compact={s.compact}
                inView={inView}
              />
            </p>

            {/* label */}
            <p className="text-[11px] mt-2 text-[#7a9a8a] font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;