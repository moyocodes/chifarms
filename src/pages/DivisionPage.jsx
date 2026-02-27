import ProductListing from "@/components/ProductListing";
export default function DivisionPage({ params }) {
  return <ProductListing slug={params.division} />;
}
