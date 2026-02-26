// App.jsx — root component
// Manages routing between listing and detail pages.
// Uses AnimatePresence for page transitions.

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductDetail from "@/components/ProductDetail";
import ProductListing from "@/components/ProductListing";
import { getProductById } from "@/lib/product";

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
        <main className="min-h-screen bg-secondary p-8">
        <ProductListing
          key="listing"
          onSelect={handleSelect}
        />
      </main>
      )}
    </AnimatePresence>
  );
}