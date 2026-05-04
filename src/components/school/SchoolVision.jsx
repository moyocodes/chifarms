import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { VisionMissionCard } from "../aboutus/VisionMissionCard";

const reasons = [
  {
    icon: "🏆",
    title: "Our Vision",
    desc: "To become a global center of excellence for training and capacity development in the Animal protein value chains, fostering sustainable investment, through innovative knowledge-based solutions.",
  },
  {
    icon: "🔄",
    title: "Our Mission",
    desc: "To develop skilled manpower that meets the evolving needs of the Poultry Industry – empowering individuals and supporting global food security.",
  },
];

const SchoolVision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hov, setHov] = useState(null);

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {reasons.map((card, i) => (
          <VisionMissionCard
            key={i}
            index={i}
            inView={inView}
            isHov={hov === i}
            onHoverStart={() => setHov(i)}
            onHoverEnd={() => setHov(null)}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolVision;