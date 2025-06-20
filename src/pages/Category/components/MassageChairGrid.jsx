import { useEffect, useState } from "react";
import MassageCategoryCard from "./MassageCategoryCard";

const MassageChairGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const searchKeywords = [
          "massaj",
          "kursi",
          "kreslo",
          "massage",
          "chair",
          "moslama",
          "uskunasi",
          "ustgich",
        ];

        const filtered = (data?.data || []).filter((product) =>
          Object.values(product?.name || {}).some((val) =>
            searchKeywords.some((keyword) =>
              val?.toLowerCase()?.includes(keyword)
            )
          )
        );

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 grid-cols-2 sm:gap-4 gap-3">
      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <MassageCategoryCard key={product.id} product={{ product }} />
        ))
      ) : (
        <p>Massaj uskunalari topilmadi.</p>
      )}
    </div>
  );
};

export default MassageChairGrid;
