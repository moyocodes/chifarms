import React, { useEffect } from 'react'
import FooterCTA from '@/components/FooterCTA'
import Title from '@/components/aboutus/Title'
import CompanyProfile from '@/components/aboutus/CompanyProfile'
import { useLocation } from 'react-router-dom'
import VisionMission from '@/components/aboutus/VisionMission'
import CultureValues from '@/components/aboutus/CultureValues'
import HeroSection from '@/components/aboutus/HeroSection'
import CSR from '@/components/aboutus/CSR'
import FAQ from '@/components/aboutus/FAQ'


const AboutUs = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay to ensure render
      }
    }
  }, [location]);

    const bgImg = "https://chi-farms.com/wp-content/uploads/2021/07/cropped-IMG_4965-1536x708.jpg" ;

  

  return (
    <div className="bg-secondary min-h-screen"> 
        <Title
           pageTitle="About Us"
           sub=""
           bgImage={bgImg}
        />
        <CompanyProfile />
        <HeroSection />
        <VisionMission />
        <CultureValues />
        <CSR />
        <FAQ />
         <FooterCTA/>
    </div>
  )
}

export default AboutUs