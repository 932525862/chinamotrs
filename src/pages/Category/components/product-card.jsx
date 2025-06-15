import { Eye } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoDialog } from "../modals/user-info";

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                        </span>
                    )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors" onClick={() => navigate(`/product/1`)}>
                            <Eye className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-800">${product.price}</span>
                    </div>
                    <button
                        className={`px-4 py-2 rounded-lg font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700`}
                        onClick={() => setOpen(true)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {open && <UserInfoDialog open={open} close={() => setOpen(false)} />}

        </div>
    )
}