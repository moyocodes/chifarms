"use client";

import { useState } from "react";

import Products from "@/components/Products";
import ProductsSection from "@/components/ProductListing";

export default function ProductsPage() {
  const [division, setDivision] = useState(null);

  return (
    <div>
      <Products onSelectDivision={setDivision} />
    </div>
  );
}
