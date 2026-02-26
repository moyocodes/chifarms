import Hero from "@/components/Hero";
import Header from "@/layout/Header";
import { ArrowRight } from "lucide-react";
import About from "./About";
import Products from "@/components/Products";
import Why from "@/components/Why";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/layout/Footer";
import ProductsSection from "@/components/ProductListing";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />

      <Hero />

      <About />
<ProductsSection/>
      <Why />
      <Contact />
      <FooterCTA/>
      <Footer />
    </div>
  );
}
