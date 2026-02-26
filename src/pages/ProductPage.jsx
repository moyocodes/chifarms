// App.jsx — root component
// Manages routing between listing and detail pages.
// Uses AnimatePresence for page transitions.

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductDetail from "@/components/ProductDetail";
import ProductListing from "@/components/ProductListing";
import { getProductById } from "@/lib/product";
import FooterCTA from "@/components/FooterCTA";

export default function ProductPage() {
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSelect = (id) => {
    const product = getProductById(id);
    if (product) setCurrentProduct(product);
  };

  const handleBack = () => setCurrentProduct(null);

  return (
    <AnimatePresence mode="wait">
      {currentProduct ? (
        <ProductDetail
          key={currentProduct.id}
          product={currentProduct}
          onBack={handleBack}
        />
      ) : (
        <>
          <main className="pt-20  bg-gradient-to-r from-accent-100/30 to-primary-50/40">
            <ProductListing key="listing" onSelect={handleSelect} />
          </main>
          <FooterCTA />
        </>
      )}
    </AnimatePresence>
  );
}
