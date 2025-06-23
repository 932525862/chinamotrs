import { useEffect, useState } from "react";
import MassageCategoryCard from "./MassageCategoryCard";
import { useTranslation } from "react-i18next";

const MassageChairGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryName = product?.category?.name?.[lang]?.toLowerCase();
    return categoryName === "uqalash uskunalari" || categoryName === "массажное оборудование";
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 grid-cols-2 sm:gap-4 gap-3">
      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <MassageCategoryCard key={product.id} product={product} />
        ))
      ) : (
        <p>Massaj uskunalari topilmadi.</p>
      )}
    </div>
  );
};

export default MassageChairGrid;
