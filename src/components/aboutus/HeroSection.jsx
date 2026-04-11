import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const partners = [
  {
    name: "NAFDAC",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/download-1-150x150.png",
  },
  {
    name: "SON Nigeria",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/zoetis-150x150.png",
  },
  {
    name: "ABZ Pharma",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/aviagen-1-150x150.png",
  },
  {
    name: "AgroFeed Co.",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/hendrix-genetics-1-150x150.jpg",
  },
  {
    name: "PoultryCare",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/phosphea-1-150x150.jpg",
  },
  {
    name: "VetLine NG",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912419023-150x150.jpg",
  },
 
  {
    name: "Big Dutchman",
    logo: "/dutchman.png",
  },
  {
    name: "AgroTech Solutions",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912776218-150x150.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-secondary-100 pt-6 pb-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} // fallback so it NEVER disappears
              transition={{ duration: 0.55 }}
              className="text-[clamp(1.7rem,2.8vw,2.35rem)] font-extrabold leading-tight text-dark-900"
            >
              Trusted by industry <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                leaders
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-sm text-dark-300 max-w-xs italic"
          >
            We collaborate with leading organizations across agriculture,
            pharmaceuticals, and food production to deliver excellence.
          </motion.p>
        </div>

        {/* LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 1 }}
          className="h-[1px] bg-gradient-to-r from-primary-400 to-transparent mb-12 origin-left"
        />

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center
                         shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain mb-4 
                           grayscale group-hover:grayscale-0 
                           opacity-100 group-hover:opacity-70 
                           transition duration-300"
              />

              {/* <p className="text-sm font-semibold text-dark-400 text-center group-hover:text-dark-900 transition">
                {partner.name}
              </p> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;