import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="space-y-4">
      <div className="relative w-full h-[420px] bg-[#f2f2f2]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-[13px]">
        <p className="font-medium leading-snug">
          {product.name}
        </p>

        <div className="mt-1 text-[#2b2b2b]">
          <span className="font-semibold">
            ${product.price}
          </span>

          {product.oldPrice && (
            <span className="ml-2 line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
