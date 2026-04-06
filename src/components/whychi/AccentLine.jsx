import React from "react";
import { motion } from "framer-motion";

export default function AccentLine({ inView }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.18 }}
      className="h-px origin-left mb-10 bg-[linear-gradient(to_right,#A6DDC8,transparent)]"
    />
  );
}