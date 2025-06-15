import { useState } from 'react';
import {
    Search,
    Filter,
    Grid3X3,
    List,
    ChevronDown,
    Star,
    Heart,
    ShoppingCart,
    Eye
} from 'lucide-react';

const CategoryPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Mock data for products
    const products = [
        {
            id: 1,
            name: "Premium Whey Protein",
            brand: "SportMix Pro",
            price: 89.99,
            originalPrice: 109.99,
            rating: 4.8,
            reviews: 234,
            image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Protein",
            inStock: true,
            isNew: true,
            discount: 18
        },
        {
            id: 2,
            name: "BCAA Energy Boost",
            brand: "FitMax",
            price: 45.99,
            originalPrice: null,
            rating: 4.6,
            reviews: 156,
            image: "https://images.pexels.com/photos/4162588/pexels-photo-4162588.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Amino Acids",
            inStock: true,
            isNew: false,
            discount: 0
        },
        {
            id: 3,
            name: "Creatine Monohydrate",
            brand: "PowerLift",
            price: 29.99,
            originalPrice: 39.99,
            rating: 4.9,
            reviews: 89,
            image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Creatine",
            inStock: false,
            isNew: false,
            discount: 25
        },
        {
            id: 4,
            name: "Pre-Workout Extreme",
            brand: "EnergyMax",
            price: 54.99,
            originalPrice: null,
            rating: 4.7,
            reviews: 312,
            image: "https://images.pexels.com/photos/4162590/pexels-photo-4162590.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Pre-Workout",
            inStock: true,
            isNew: true,
            discount: 0
        },
        {
            id: 5,
            name: "Mass Gainer 5000",
            brand: "BulkUp",
            price: 79.99,
            originalPrice: 99.99,
            rating: 4.5,
            reviews: 178,
            image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Mass Gainers",
            inStock: true,
            isNew: false,
            discount: 20
        },
        {
            id: 6,
            name: "Multivitamin Complex",
            brand: "VitalHealth",
            price: 34.99,
            originalPrice: null,
            rating: 4.4,
            reviews: 267,
            image: "https://images.pexels.com/photos/4162453/pexels-photo-4162453.jpeg?auto=compress&cs=tinysrgb&w=400",
            category: "Vitamins",
            inStock: true,
            isNew: false,
            discount: 0
        }
    ];

    const categories = [
        { name: "Protein", count: 45 },
        { name: "Amino Acids", count: 23 },
        { name: "Creatine", count: 18 },
        { name: "Pre-Workout", count: 31 },
        { name: "Mass Gainers", count: 12 },
        { name: "Vitamins", count: 28 },
        { name: "Fat Burners", count: 19 },
        { name: "Post-Workout", count: 15 }
    ];

    const brands = [
        { name: "SportMix Pro", count: 34 },
        { name: "FitMax", count: 28 },
        { name: "PowerLift", count: 22 },
        { name: "EnergyMax", count: 19 },
        { name: "BulkUp", count: 16 },
        { name: "VitalHealth", count: 25 }
    ];

    const ProductCard = ({ product }) => (
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
                    {product.discount > 0 && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            -{product.discount}%
                        </span>
                    )}
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors">
                            <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-800">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <button
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${product.inStock
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        disabled={!product.inStock}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Sports Nutrition</h1>
                            <p className="text-gray-600 mt-1">Premium supplements for peak performance</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500">
                        <span>Home</span> <span className="mx-2">/</span>
                        <span>Catalog</span> <span className="mx-2">/</span>
                        <span className="text-gray-800 font-medium">Sports Nutrition</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-80 flex-shrink-0">
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

                            {/* Brands */}
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-800 mb-3">Brands</h3>
                                <div className="space-y-2">
                                    {brands.map((brand) => (
                                        <label key={brand.name} className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedBrands([...selectedBrands, brand.name]);
                                                        } else {
                                                            setSelectedBrands(selectedBrands.filter(b => b !== brand.name));
                                                        }
                                                    }}
                                                />
                                                <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
                                                    {brand.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500">({brand.count})</span>
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

                            {/* Rating Filter */}
                            <div>
                                <h3 className="font-medium text-gray-800 mb-3">Rating</h3>
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <label key={rating} className="flex items-center cursor-pointer group">
                                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <div className="ml-2 flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                                <span className="ml-1 text-sm text-gray-600">& up</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600">
                                        Showing <span className="font-semibold">1-{products.length}</span> of <span className="font-semibold">176</span> results
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
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
                        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex items-center justify-center">
                            <div className="flex items-center gap-2">
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