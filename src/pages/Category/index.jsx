import { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ProductsGrid from './components/products-grid';
import PaginationComponent from './components/pagination';
import axios from 'axios';
import Loading from "../../components/Loading/loading";

const CategoryPage = () => {
    const [priceRange, setPriceRange] = useState(["", ""]);
    const [selectedCategories, setSelectedCategories] = useState("");
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { slug: sub } = useParams();
    const base_url = import.meta.env.VITE_API_BASE_URL;
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        setLoading(true);
        try {
            const data = await axios.get(`${base_url}/api/categories`);
            setCategories(data?.data?.data);
        } catch (error) {
            console.error(`Error while getting categories: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const handleProductFiler = async (page = 1) => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            if (selectedCategories) queryParams.append("category", selectedCategories);
            if (priceRange[0]) queryParams.append("minPrice", priceRange[0]);
            if (priceRange[1]) queryParams.append("maxPrice", priceRange[1]);

            const res = await axios.get(`${base_url}/api/products?${queryParams.toString()}&page=${page}&limit=10`);
            setProducts(res?.data?.data);
            console.log(res?.data, "pages")
            console.log(totalPages, res?.data?.meta?.totalPages || 1, "total pages")
            setTotalPages(res?.data?.meta?.totalPages || 1);
            setCurrentPage(page);
        } catch (error) {
            console.error(`Error while filtering products: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const getProducts = async () => {
        try {
            const res = await axios.get(`${base_url}/api/products?page=1&limit=10`);
            setProducts(res?.data?.data);
            setTotalPages(res?.data?.meta?.totalPages || 1);
            console.log(res?.data, "pages")
        } catch (error) {
            console.error(`Error while getting products: ${error}`);
        }
    };

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Sports Nutrition</h1>
                            <p className="text-gray-600 mt-1">Premium supplements for peak performance</p>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {!sub && (
                        <div className="w-full lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <Filter className="w-5 h-5 text-gray-600" />
                                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                                </div>

                                {/* Categories */}
                                <div className="mb-6">
                                    <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
                                    <div className="space-y-2">
                                        {categories && categories.map((category) => (
                                            <label key={category?.id} className="flex items-center justify-between cursor-pointer group">
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="categories"
                                                        value={category.name?.uz}
                                                        checked={selectedCategories === category.name?.uz}
                                                        onChange={(e) => setSelectedCategories(e.target.value)}
                                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
                                                        {category.name?.uz}
                                                    </span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6">
                                    <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                placeholder="Min"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                value={priceRange[0]}
                                                onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
                                            />
                                            <span className="text-gray-500">-</span>
                                            <input
                                                type="number"
                                                placeholder="Max"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                                            />
                                        </div>
                                        <button
                                            className="relative w-full group border-[3px] border-green-500 overflow-hidden rounded-full p-2 flex items-center justify-center gap-2"
                                            onClick={() => handleProductFiler(1)}
                                        >
                                            <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-10">
                                                Apply
                                            </span>
                                            <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="flex-1">
                        {loading ? <Loading /> : <ProductsGrid products={products} />}
                        <PaginationComponent
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={(page) => handleProductFiler(page)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
