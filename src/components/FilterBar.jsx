export default function FilterBar({
  selectedPrice,
  setSelectedPrice,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <aside className="text-sm text-[#2b2b2b] space-y-10">
      <h2 className="text-base font-semibold">Filters</h2>

      {/* SIZE */}
      <div className="space-y-3">
        <p className="font-medium">Size</p>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-9 w-9 border text-xs ${
                selectedSize === size
                  ? "border-black"
                  : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* COLORS */}
      <div className="space-y-3">
        <p className="font-medium">Colors</p>
        <div className="grid grid-cols-5 gap-3">
          {[
            "bg-red-400",
            "bg-orange-400",
            "bg-yellow-400",
            "bg-green-400",
            "bg-emerald-400",
            "bg-cyan-400",
            "bg-blue-400",
            "bg-indigo-400",
            "bg-purple-400",
            "bg-pink-400",
          ].map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(color)}
              className={`h-5 w-5 rounded-full border ${
                selectedColor === color
                  ? "border-black"
                  : "border-transparent"
              } ${color}`}
            />
          ))}
        </div>
      </div>

      {/* PRICES */}
      <div className="space-y-2 text-gray-500">
        <p className="font-medium text-[#2b2b2b]">Prices</p>
        {[50, 100, 150, 200, 400].map((price) => (
          <label key={price} className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === price}
              onChange={() => setSelectedPrice(price)}
            />
            ${price === 50 ? "0–50" : `${price - 50}–${price}`}
          </label>
        ))}
      </div>
    </aside>
  );
}
