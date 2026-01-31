"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProducts, validateTokenApi } from "@/utils/api";
import { getToken, clearAuthData } from "@/utils/auth";

import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";

export default function ProductListPage() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }

    const init = async () => {
      try {
        const valid = await validateTokenApi(token);
        if (!valid.isValid) throw new Error();

        const data = await fetchProducts(token);
        setProducts(data.data);
        setReady(true);
      } catch {
        clearAuthData();
        router.push("/login");
      }
    };

    init();
  }, [router]);

  // 🔹 Concurrent filters (IMPORTANT FOR TASK)
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const priceOk = selectedPrice
        ? p.price <= selectedPrice
        : true;

      const sizeOk = selectedSize
        ? p.sizes.includes(selectedSize)
        : true;

      const colorOk = selectedColor
        ? p.color.includes(selectedColor)
        : true;

      return priceOk && sizeOk && colorOk;
    });
  }, [products, selectedPrice, selectedSize, selectedColor]);

  if (!ready) return (<div className="flex items-center justify-center min-h-[calc(100vh-132px)]">
  <p className="text-lg">Loading...</p>
</div>
)

  return (
    <div className=" 
                grid grid-cols-[280px_1fr] gap-12">

      <FilterBar
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
