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
          {["S", "M", "L", "XL", "XXL"].map((size) => (
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

      {/* COLORS (LOGICAL VALUES ONLY) */}
      <div className="space-y-3">
        <p className="font-medium">Colors</p>
        <div className="grid grid-cols-5 gap-3">
          {[
            { name: "red", class: "bg-red-400" },
            { name: "blue", class: "bg-blue-400" },
            { name: "green", class: "bg-green-400" },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`h-5 w-5 rounded-full border ${
                selectedColor === color.name
                  ? "border-black"
                  : "border-transparent"
              } ${color.class}`}
            />
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="space-y-2 text-gray-500">
        <p className="font-medium text-[#2b2b2b]">Prices</p>
        {[499, 599, 999, 1599, 2599].map((price) => (
          <label key={price} className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === price}
              onChange={() => setSelectedPrice(price)}
            />
            Under ₹{price}
          </label>
        ))}
      </div>

      {/* CLEAR */}
      <button
        onClick={() => {
          setSelectedPrice(null);
          setSelectedSize(null);
          setSelectedColor(null);
        }}
        className="text-xs underline"
      >
        Clear filters
      </button>
     {/* BRANDS */}
      <div className="space-y-3">
        <p className="font-medium">Brands</p>
        <ul className="space-y-2 text-gray-500">
          <li>Minimog</li>
          <li>Retrole</li>
          <li>Brook</li>
          <li>Learts</li>
          <li>Vagabond</li>
          <li>Abby</li>
        </ul>
      </div>

      {/* COLLECTIONS */}
      <div className="space-y-3">
        <p className="font-medium">Collections</p>
        <ul className="space-y-2 text-gray-500">
          <li>All products</li>
          <li>Best sellers</li>
          <li>New arrivals</li>
          <li>Accessories</li>
        </ul>
      </div>

      {/* TAGS */}
      <div className="space-y-3">
        <p className="font-medium">Tags</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-gray-500">
          {[
            "Fashion",
            "Hats",
            "Sandal",
            "Belt",
            "Bags",
            "Snacker",
            "Denim",
            "Minimog",
            "Vagabond",
            "Sunglasses",
            "Beachwear",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
