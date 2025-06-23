import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const MassageCategoryCard = ({ product }) => {
  const navigate = useNavigate();
  const { t , i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";

  const uploadUrl = import.meta.env.VITE_API_UPLOAD_BASE;

  const imagePath = product?.product?.images?.[0]?.path;
  const productName = product?.product?.name?.[lang];
  const productPrice = product?.product?.price;

  const handleCardClick = () => {
    navigate(`/category/massage/${product?.product?.id}`);
    scrollTo({ top: 0 });
  };

  return (
    <div
      className="bg-white shadow-lg cursor-pointer hover:shadow-neutral-400 duration-300 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between"
      onClick={handleCardClick}
    >
      {/* Rasm */}
      <div className="w-full aspect-[4/3] rounded-xl flex items-center justify-center">
        {imagePath ? (
          <img
            src={`${uploadUrl}${imagePath}`}
            alt={productName}
            style={{ mixBlendMode: "multiply" }}
            className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 text-sm text-gray-400 flex items-center justify-center">
            Rasm yo‘q
          </div>
        )}
      </div>

      {/* Product nomi va narxi */}
      <div className="mt-4">
        <p className="hover:text-green-500 lg:text-[18px] sm:text-[16px] font-one max-[550px]:text-[12px]">{productName || "Nomi yo‘q"}</p>

        {productPrice ? (
          <p className="text-neutral-500 lg:text-[15px] font-one text-[12px]">
            <span>{productPrice.toLocaleString("uz-UZ")}</span> {t("categories.so'm")}
          </p>
        ) : (
          <p className="text-neutral-400 text-md">Narx ko‘rsatilmagan</p>
        )}
      </div>

      {/* Tugma */}
      <button
        onClick={(e) => e.stopPropagation()}
        className="w-[45px] h-[45px] max-md:w-[35px] max-md:h-[35px] rounded-full cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition duration-500"
      >
        <IoMdArrowForward className="rotate-[315deg] text-3xl max-md:text-2xl" />
      </button>
    </div>
  );
};

export default MassageCategoryCard;
