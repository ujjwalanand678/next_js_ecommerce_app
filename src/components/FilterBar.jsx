export default function FilterBar({
  selectedPrice,
  setSelectedPrice,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <aside className="bg-[#F8F8F8] space-y-10 ps-14 pr-5 pt-10 pb-14">
      <h2 className="text-[30px] font-[400]">Filters</h2>

      {/* SIZE */}
      <div className="space-y-3">
        <p className="text-[18px] font-[400]">Size</p>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-10 w-10 border text-[#8A8A8A] rounded-[5px] cursor-pointer ${
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
        <p className="text-[18px] font-[400]">Colors</p>
        <div className="grid grid-cols-5 gap-6">
          {[
            { name: "red", class: "bg-red-400" },
            { name: "blue", class: "bg-blue-400" },
            { name: "green", class: "bg-green-400" },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`h-7 w-7 rounded-full border cursor-pointer ${
                selectedColor === color.name
                  ? "border-black/20"
                  : "border-transparent"
              } ${color.class}`}
            />
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="space-y-2 ">
        <p className="text-[18px] font-[400]">Prices</p>
        {[499, 599, 999, 1599, 2599].map((price) => (
          <label key={price} className="flex items-center gap-2 text-[#8A8A8A] text-[16px]">
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
        className="text-[16px] border px-4 py-2 rounded-[5px] border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
      >
        Clear filters
      </button>
     {/* BRANDS */}
      <div className="space-y-3">
        <p className="text-[18px] font-[400]">Brands</p>
        <div className="space-y-2 text-[#8A8A8A] text-[16px]">
          <p>Minimog  Retrolie  Brook</p>
          <p>Learts Vagabond  Abby</p>
        </div>
      </div>

      {/* COLLECTIONS */}
      <div className="space-y-3">
        <p className="text-[18px] ">Collections</p>
        <ul className="space-y-2 text-[#8A8A8A] text-[16px]">
          <li>All products</li>
          <li>Best sellers</li>
          <li>New arrivals</li>
          <li>Accessories</li>
        </ul>
      </div>

      {/* TAGS */}
      <div className="space-y-3">
        <p className="text-[18px] font-[400]">Tags</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[16px] text-[#8A8A8A]">
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
