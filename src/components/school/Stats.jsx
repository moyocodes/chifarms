import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { raw: 20,  suffix: "+", label: "Years Operating",  icon: "🏆" },
  { raw: 300, suffix: "+", label: "Happy Students",    icon: "🎓" },
  { raw: 300, suffix: "+", label: "Alumni",            icon: "👥" },
  { raw: 98,  suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
];

function AnimatedCounter({ target, suffix = "", compact = false, inView }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    // Reset so it re-animates if target changes
    hasRun.current = false;
    setCount(0);
  }, [target]);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const duration = 2000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target]);

  const display =
    compact && count >= 1000
      ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K`
      : count.toLocaleString();

  return <span>{display}{suffix}</span>;
}

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-12">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-primary-500/10 rounded-xl overflow-hidden bg-gradient-to-br from-white to-[#d2eee3]/30"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="text-center py-6 px-3 relative group border-b md:border-b-0 md:border-r border-primary-500/10 last:border-r-0"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-b bg-gradient-to-r from-[primary-500 to-primary-600 opacity-60" />

            {/* Icon */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: 10, marginBottom: "0.6rem",
                background: "rgba(31,143,99,0.08)", border: "1px solid rgba(31,143,99,0.12)",
                fontSize: 16,
              }}
            >
              {s.icon}
            </div>

            {/* Number */}
            <p className="font-extrabold text-[1.6rem] leading-none bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              <AnimatedCounter target={s.raw} suffix={s.suffix} compact={s.compact} inView={inView} />
            </p>

            {/* Label */}
            <p className="text-[11px] mt-2 text-dark-400 font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;