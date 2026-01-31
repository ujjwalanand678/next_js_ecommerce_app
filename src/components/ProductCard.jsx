export default function ProductCard({ product }) {
  return (
    <div className="space-y-3">
      {/* Image */}
      <div className="relative">
        <div className="bg-[#eaeaea] h-[360px]" />

        {product.soldOut && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs tracking-widest">
            SOLD OUT
          </span>
        )}
      </div>

      {/* Info */}
      <div className="text-sm">
        <p className="font-medium">
          {product.name}
        </p>

        <div className="text-gray-700">
          <span className="font-semibold">
            ${product.price}
          </span>

          {product.oldPrice && (
            <span className="line-through text-gray-400 ml-2">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
