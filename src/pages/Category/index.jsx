import { useState } from 'react';
import {
    Search,
    Filter,
    Grid3X3,
    List,
    ChevronDown
} from 'lucide-react';
import { categories, products } from './fake-data/data';
import { ProductCard } from './components/product-card';

const CategoryPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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
                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

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

                                    {/* View Mode Toggle */}
                                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                        <button
                                            className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                                            onClick={() => setViewMode('grid')}
                                        >
                                            <Grid3X3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                                            onClick={() => setViewMode('list')}
                                        >
                                            <List className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex items-center justify-center">
                            <div className="flex flex-wrap items-center gap-2">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                    Previous
                                </button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-4 py-2 rounded-lg transition-colors ${page === 1
                                            ? 'bg-blue-600 text-white'
                                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
