import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const CategoryCard = ({ product }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";

  const uploadUrl = import.meta.env.VITE_API_UPLOAD_BASE;

  const handleCardClick = () => {
    navigate(`/category/id/${product?.product?.id}`);
    scrollTo({ top: 0 });
  };

  const imagePath = product?.product?.images?.[0]?.path;
  const price = product?.product?.price;

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
            className="transition-transform duration-300 hover:scale-105 object-contain w-full h-full"
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

        {price ? (
          <p className="text-neutral-500 lg:text-[15px] font-one text-[12px]">
            <span>{price.toLocaleString("uz-UZ")}</span> {t("categories.so'm")}
          </p>
        ) : (
          <p className="text-neutral-400 text-sm">Narx mavjud emas</p>
        )}
      </div>

      {/* Arrow Button */}
      <button
        onClick={(e) => e.stopPropagation()}
        className="w-[45px] h-[45px] max-md:w-[35px] max-md:h-[35px] rounded-full cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition duration-500"
      >
        <IoMdArrowForward className="rotate-[315deg] text-3xl max-md:text-2xl" />
      </button>
    </div>
  );
};
