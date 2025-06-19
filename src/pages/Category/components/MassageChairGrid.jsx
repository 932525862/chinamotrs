import { useEffect, useState } from "react";
import MassageCategoryCard from "./MassageCategoryCard";

const MassageChairGrid = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/categories/with-one-product`)
      .then((res) => res.json())
      .then((data) => {
        const searchKeywords = [
          "massaj",
          "kursi",
          "kreslo",
          "massage",
          "chair",
        ];

        const filtered = (data?.data || []).filter((item) =>
          Object.values(item?.product?.name || {}).some((val) =>
            searchKeywords.some((keyword) =>
              val?.toLowerCase().includes(keyword)
            )
          )
        );

        setCategories(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : categories.length > 0 ? (
        categories.map((item) => (
          <MassageCategoryCard key={item.id} product={item} />
        ))
      ) : (
        <p>Massaj kursilari topilmadi.</p>
      )}
    </div>
  );
};

export default MassageChairGrid;
