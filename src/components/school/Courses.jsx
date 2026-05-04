import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const courseGroups = [
  {
    title: "Technical Training Modules",
    items: [
      { title: "Biosecurity & Poultry Health", desc: "Preventive health practices and protocols." },
      { title: "Farm Planning & Waste Management", desc: "Location mapping and infrastructure setting." },
      { title: "Hatchery Management", desc: "Best practices for quality chick production." },
      { title: "Breeder Farm Management", desc: "Brooding, egg production, feeding, and hygiene." },
      { title: "(Commercial) Broiler Management", desc: "Daily care and stockmanship for broiler flocks." },
      { title: "Feed Milling & Poultry Nutrition", desc: "Feed types, formulation, and manufacturing standards." },
      { title: "Poultry Housing & Equipment Management", desc: "Climate control, equipment setup, and facility planning including electrical and plumbing planning." },
      { title: "Data Management in Poultry", desc: "Inventory and production tracking." },
      { title: "Sales & Marketing", desc: "Strategies for poultry products and services." },
    ],
  },
  {
    title: "Manpower Training Modules",
    items: [
      { title: "Business / Entrepreneurial Module", desc: "For SMEs and investors starting or growing poultry businesses." },
      { title: "Junior / Beginners Module", desc: "For entry-level workers handling routine stockmanship tasks." },
      { title: "Intermediate / Supervisory Module", desc: "Facility planning, climate control, equipment setup, and quality poultry stockmanship practices." },
      { title: "Senior / Managerial Module", desc: "For farm leaders who want to make strategic, sustainable, and profitable decisions." },
    ],
  },
];

const Courses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,rgba(31,143,99,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1150px] mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
              Courses Offered
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-heading font-extrabold text-[#111] leading-tight text-[clamp(1.7rem,2.8vw,2.35rem)]"
          >
            Practical training for
            <br />
            <span className="bg-gradient-to-br from-primary-500 to-primary-600 bg-clip-text text-transparent">
              every level of expertise.
            </span>
          </motion.h2>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-px mb-10 origin-left bg-gradient-to-r from-primary-200 to-transparent"
        />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="space-y-3 text-sm leading-7 text-dark-500 font-serif max-w-3xl mb-10"
        >
          <p>
            Chi Farms&apos; Poultry School offers practical training for all levels,
            from beginners to farm managers.
          </p>
          <p>
            Each module emphasizes practical skills, technical knowledge, and
            leadership in line with modern poultry farming standards. Farms benefit
            from improved productivity through a more skilled workforce capable of
            making informed decisions and reducing operational losses.
          </p>
        </motion.div>

        {/* Course groups */}
        <div className="grid gap-6 lg:grid-cols-2">
          {courseGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + gi * 0.1 }}
              className="rounded-2xl border border-primary-500/10 bg-white/80 p-5"
            >
              <h3 className="mb-4 text-base font-bold text-dark-900 font-heading">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-primary-500/10 bg-primary-500/[0.03] px-3 py-3"
                  >
                    <div className="mt-0.5 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-primary-500/10">
                      <CheckCircle2 size={15} className="text-primary-500" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="m-0 text-sm font-semibold text-dark-900">{item.title}</p>
                      <p className="m-0 text-sm leading-6 text-dark-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
