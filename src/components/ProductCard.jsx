import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Image */}
      <div
        className="
          relative
          w-full
          h-[280px] sm:h-[340px] lg:h-[420px]
         
          overflow-hidden
        "
      >
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="
            object-contain
            md:object-fill
            lg:object-cover
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Text */}
      <div className="text-center lg:text-left text-sm sm:text-base">
        <p className="font-medium leading-snug line-clamp-2">
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
