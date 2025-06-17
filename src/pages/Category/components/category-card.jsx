import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
export const CategoryCard = ({ product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/category");
        scrollTo({ top: 0 });
    };

    return (
        <div
            className="bg-white shadow-lg cursor-pointer hover:shadow-neutral-400 duration-300 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between"
            onClick={handleCardClick}
        >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
                <img
                    src={product?.image}
                    alt={product?.name}
                    style={{ mixBlendMode: "multiply" }}
                    className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
                />
            </div>

            {/* Product Info */}
            <div className="mt-4 lg:text-xl md:text-lg sm:text-[18px] font-one max-[550px]:text-[12px]">
                <p className="hover:text-green-500">{product?.name}</p>
                <p className="text-neutral-500">
                    <span>7 840 000</span> so'm
                </p>
            </div>

            {/* Bottom Right Icon */}
            <button
                onClick={(e) => e.stopPropagation()}
                className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-full cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white flex items-center justify-center transition duration-500"
            >
                <IoMdArrowForward className="rotate-[315deg] text-3xl max-md:text-2xl" />
            </button>
        </div>
    );
};
