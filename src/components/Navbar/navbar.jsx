import { useState, useRef, useEffect } from 'react';
import logo from "../../assets/logo.jpg";
import {
    Search,
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const categories = [
        {
            name: 'Protein',
            subcategories: ['Whey Protein', 'Casein Protein', 'Plant Protein', 'Protein Blends']
        },
        {
            name: 'Amino Acids',
            subcategories: ['BCAA', 'EAA', 'Glutamine', 'Arginine']
        },
        {
            name: 'Pre-Workout',
            subcategories: ['Stimulant', 'Non-Stimulant', 'Pump Formula', 'Energy Drinks']
        },
        {
            name: 'Creatine',
            subcategories: ['Monohydrate', 'HCL', 'Buffered', 'Blends']
        },
        {
            name: 'Vitamins',
            subcategories: ['Multivitamins', 'Vitamin D', 'Vitamin C', 'B-Complex']
        },
        {
            name: 'Fat Burners',
            subcategories: ['Thermogenic', 'Non-Stimulant', 'CLA', 'L-Carnitine']
        }
    ];

    return (
        <div className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-center py-2 gap-5 text-sm">
                        <div className="flex items-center justify-center space-x-10">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span className='md:block hidden'>+998 (71) 123-45-67</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span className='md:block hidden'>info@sports.uz</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span className='md:block hidden'>Tashkent, Uzbekistan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="rounded-lg">
                            <img src={logo} className="w-12 h-12 text-white" alt="Logo" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Sports</h1>
                            <p className="text-xs text-gray-500">Premium Nutrition</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none"
                                />
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden pb-4 overflow-hidden"
                        >
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none"
                                />
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Menu */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="hidden lg:flex items-center justify-center space-x-14 py-4">
                        <a href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
                        <a href="/about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About</a>
                        <div className="relative group" ref={dropdownRef}>
                            <button
                                onClick={() =>
                                    setActiveDropdown(activeDropdown === "Category" ? null : "Category")
                                }
                                className="nav-link flex items-center gap-1 text-gray-800 font-medium transition-colors"
                            >
                                <span>Category</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${activeDropdown === "Category" ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "Category" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
                                    >
                                        <ul className="py-2">
                                            {categories.map((category) => (
                                                <li key={category.name} onClick={() => {
                                                    navigate(`/category/${category?.name}`);
                                                    setActiveDropdown(null);
                                                }}>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                                    >
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="/news" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">News</a>
                        <a href="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
                    </nav>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <div className="lg:hidden py-4 border-t border-gray-200">
                                <div className="space-y-4">
                                    <a href="/" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
                                    <a href="/about" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">About</a>

                                    <div className="relative group" ref={dropdownRef}>
                                        <button
                                            onClick={() =>
                                                setActiveDropdown(activeDropdown === "Category" ? null : "Category")
                                            }
                                            className="nav-link flex items-center gap-1 text-gray-800 font-medium transition-colors"
                                        >
                                            <span>Category</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${activeDropdown === "Category" ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === "Category" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
                                                >
                                                    <ul className="py-2">
                                                        {categories.map((category) => (
                                                            <li key={category.name} onClick={() => {
                                                                navigate(`/category/${category?.name}`);
                                                                setActiveDropdown(null);
                                                            }}>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                                                >
                                                                    {category.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <a href="/news" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">News</a>
                                    <a href="/contact" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
