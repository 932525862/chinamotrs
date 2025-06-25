import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const CategoryCard = ({ product }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";

  const uploadUrl = import.meta.env.VITE_API_UPLOAD_BASE;

  const handleCardClick = () => {
    navigate(`/category/${product?.name?.uz}`, { replace: true });
    scrollTo({ top: 0 });
  };

  console.log(product, "category card product");

  const imagePath = product?.image;

  return (
    <div
      className="bg-white shadow-lg cursor-pointer hover:shadow-neutral-400 duration-300 rounded-2xl p-5 max-md:p-3 relative flex flex-col justify-between"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="w-full p-3 rounded-xl flex items-center justify-center">
        {imagePath ? (
          <img
            src={`${uploadUrl}${imagePath}`}
            alt={product?.name?.[lang]}
            style={{ mixBlendMode: "multiply" }}
            className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 text-md text-gray-400 flex items-center justify-center">
            Rasm yo‘q
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <p className="hover:text-green-500 lg:text-[18px] sm:text-[16px] font-one max-[550px]:text-[12px]">
          {product?.name?.[lang] || "Kategoriya nomi"}
        </p>
      </div>

      {product?.product !== null && (
        <div className="mt-4">
          <div className="space-y-2 list-disc list-inside text-sm text-gray-600">
            {product?.product?.details?.map((detail, idx) => (
              <div key={idx} className="text-center">{detail?.[lang]}</div>
            ))}
          </div>
        </div>
      )}



    </div>
  );
};
