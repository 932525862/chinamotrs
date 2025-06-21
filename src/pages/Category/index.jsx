import { useState } from 'react';
import {
    Search, 
    Filter,
    ChevronDown
} from 'lucide-react';
import { categories, products } from './fake-data/data';
import { useParams } from 'react-router-dom';
import ProductsGrid from './components/products-grid';
import PaginationComponent from './components/pagination';

const CategoryPage = () => {
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const { slug: sub } = useParams();

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
                        <>
                            {/* Sidebar Filters */}
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
                                            {categories.map((category) => (
                                                <label key={category.name} className="flex items-center justify-between cursor-pointer group">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setSelectedCategories([...selectedCategories, category.name]);
                                                                } else {
                                                                    setSelectedCategories(selectedCategories.filter(c => c !== category.name));
                                                                }
                                                            }}
                                                        />
                                                        <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
                                                            {category.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm text-gray-500">({category.count})</span>
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
                                                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                                />
                                                <span className="text-gray-500">-</span>
                                                <input
                                                    type="number"
                                                    placeholder="Max"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    value={priceRange[1]}
                                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                                                />
                                            </div>
                                            <button
                                                className="relative w-full group border-[3px] border-green-500 overflow-hidden rounded-full p-2 flex items-center justify-center gap-2"
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
                        </>
                    )}

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <span className="text-gray-600">
                                    Showing <span className="font-semibold">1-{products.length}</span> of <span className="font-semibold">176</span> results
                                </span>

                                <div className="flex flex-wrap items-center gap-4">
                                    {/* Sort Dropdown */}
                                    <div className="relative">
                                        <select
                                            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                        >
                                            <option value="popular">Most Popular</option>
                                            <option value="price-low">Price: Low to High</option>
                                            <option value="price-high">Price: High to Low</option>
                                            <option value="rating">Highest Rated</option>
                                            <option value="newest">Newest First</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <ProductsGrid />

                        {/* Pagination */}
                        <PaginationComponent totalPages={10} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
