import { useEffect, useState } from "react";
import MassageCategoryCard from "./MassageCategoryCard";
import { useTranslation } from "react-i18next";

const MassageChairGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/products?category=${`Uqalash uskunalari`}`)
      .then((res) => res.json())
      .then((data) => {
        // const searchKeywords = [
        //   "uqalash uskunalari",
        //   "массажное оборудование",
        // ];

        console.log(data?.data, "MassageChairGrid data");

        setProducts(data?.data || [])
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, [lang]);

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
