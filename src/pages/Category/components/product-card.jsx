import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { UserInfoDialog } from "./../modals/user-info";

export const ProductCard = ({ product }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Make this container a hover group */}
            <div className="relative overflow-hidden group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* NEW badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                        </span>
                    )}
                </div>

                {/* Overlay with Eye icon */}
                <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => {
                        scrollTo({ top: 0 });
                        navigate(`/category/id/${product?.id}`);
                    }}
                >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <button className="bg-white text-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                            <Eye className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom content */}
            <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-800">${product.price}</span>
                    </div>

                    {/* Button with isolated hover */}
                    <button
                        onClick={() => setOpen(true)}
                        className="relative cursor-pointer group border-[3px] border-green-500 overflow-hidden rounded-full p-2 flex items-center gap-2"
                    >
                        <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-10">
                            Add to cart
                        </span>
                        <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                    </button>
                </div>
            </div>

            {open && <UserInfoDialog open={open} close={() => setOpen(false)} />}
        </div>
    );
};
