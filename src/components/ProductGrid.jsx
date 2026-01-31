import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <p className="text-sm text-gray-500">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-x-[22px] gap-y-[50px] mt-12 mr-12 pb-14">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
