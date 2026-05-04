import { motion } from "framer-motion";

export function VisionMissionCard({
  number,
  icon,
  title,
  desc,
  index = 0,
  isHov,
  onHoverStart,
  onHoverEnd,
  inView,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden min-h-[240px] p-8 cursor-default
        backdrop-blur-xl bg-white/70
        border transition-all duration-300
        ${
          isHov
            ? "border-primary-500/30 shadow-[0_16px_48px_rgba(31,143,99,0.2)]"
            : "border-primary-500/10 shadow-card"
        }`}
    >
      {/* Top bar */}
      <motion.div
        animate={{ scaleX: isHov ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute top-0 left-0 h-[3px] w-full origin-left
          bg-gradient-to-r from-primary-500 to-primary-400"
      />

      {/* Glow overlay */}
      <motion.div
        animate={{ opacity: isHov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none
          bg-gradient-to-br from-primary-500/10 to-primary-400/10"
      />

      {/* Corner bloom */}
      <motion.div
        animate={{
          scale: isHov ? 1.6 : 1,
          opacity: isHov ? 1 : 0.4,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full
          bg-[radial-gradient(circle,rgba(31,143,99,0.1),transparent_70%)]"
      />

      {/* Ghost number */}
      {number && (
        <span
          className={`absolute top-6 right-6 font-heading text-[3rem] font-black leading-none select-none transition-colors duration-300
            ${
              isHov
                ? "text-primary-500/10"
                : "text-primary-500/5"
            }`}
        >
          {number}
        </span>
      )}

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            animate={{ scale: isHov ? 1.08 : 1 }}
            transition={{ duration: 0.25 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 border transition-all duration-300
              ${
                isHov
                  ? "bg-primary-500/15 border-primary-500/20"
                  : "bg-primary-500/10 border-primary-500/15"
              }`}
          >
            {icon}
          </motion.div>
        )}

        <h3
          className={`font-heading text-xl font-extrabold mb-2 transition-colors duration-200
            ${
              isHov ? "text-primary-500" : "text-dark-900"
            }`}
        >
          {title}
        </h3>

        <p className="text-sm text-dark-400 leading-[1.75]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}