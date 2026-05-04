import FooterCTA from "@/components/FooterCTA";
import CertSection from "@/components/whychi/CertSection";
import ReasonsSection from "@/components/whychi/ReasonsSection";
import TestimonialsSection from "@/components/whychi/TestimonialsSection";
import TimelineSection from "@/components/whychi/TimelineSection";

export default function WhyChi() {
  return (
    <div className="bg-white min-h-screen pt-12">
      <ReasonsSection />
      <TimelineSection />
      <CertSection />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
}