import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Stats from "./Stats";
import SchoolVision from "./SchoolVision";
import WhyPoultrySchool from "./WhyPoultrySchool";

const AboutSchool = () => {
    const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
     <p>Chi Farms Training Centre aims to create, share and provide
            knowledge and experience to customers and clients. We execute
            capacity building and skill acquisition initiatives to strengthen
            the skills of people in the poultry industry. As a resource centre,
            we collaborate with other institution initiatives and engagements in
            both the public and private sectors, to empower people across the
            animal protein value chains.</p>
      <Stats />
      <SchoolVision />
      <WhyPoultrySchool />
    </div>
  );
};

export default AboutSchool;
