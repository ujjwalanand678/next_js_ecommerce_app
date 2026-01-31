import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <p className="text-sm text-gray-500 text-center mt-10">
        No products found
      </p>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        mx-3
      gap-4 lg:gap-6
        mt-8 sm:mt-10 lg:mt-12
        pb-14
         lg:mr-12 
      "
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
