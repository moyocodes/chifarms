"use client";

import { useState } from "react";

import Products from "@/components/Products";
import ProductsSection from "@/components/ProductListing";
import FooterCTA from "@/components/FooterCTA";

export default function ProductsPage() {
  const [division, setDivision] = useState(null);

  return (
       <div className="pt-5">
      <Products onSelectDivision={setDivision} />
      <div className="pt-10">
  <FooterCTA />
      </div>
    
    </div>
  );
}
