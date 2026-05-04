import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Biosecurity Solutions",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/download-1-150x150.png",
  },
  {
    name: "ISA Brown GPS & Amberlink PS",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/hendrix-genetics-1-150x150.jpg",
  },
  {
    name: "Incubators & Hatcheries",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/1618912419023-150x150.jpg",
  },
  {
    name: "Arbor Acres & GPS Broilers",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/aviagen-1-150x150.png",
  },
  {
    name: "Vink + Co GmbH",
    logo: "/vink.png",
  },
  {
    name: "VET Products & Services",
    logo: "https://chi-farms.com/wp-content/uploads/2021/04/zoetis-150x150.png",
  },
  {
    name: "Big Dutchman",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Big_Dutchman_Logo.svg",
  },
  {
    name: "Aquaculture",
    logo: "/ls.png",
  },
];

const partnerDescription =
  "Rely on seasoned professionals for tailored financial advice and strategic planning aligned with your unique goals";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div className="max-w-xl">
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
            className="text-sm text-dark-300 max-w-md md:max-w-xs italic"
          >
            We collaborate with leading organizations across agriculture,
            pharmaceuticals, and food production to deliver excellence.
          </motion.p>
        </div>

        {/* LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 1 }}
          className="h-[1px] bg-gradient-to-r from-primary-400 to-transparent mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-sm text-dark-300 leading-relaxed max-w-2xl mb-12"
        >
          {partnerDescription}
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="group bg-white rounded-2xl p-6 sm:p-8 flex items-center justify-center
                         shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                title={partner.name}
                className="h-20 w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
