import { useState } from 'react';
import logo from "../../assets/logo.jpg"
import {
    Search,
    User,
    ShoppingCart,
    Heart,
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ChevronDown,
    Dumbbell
} from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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
                    <div className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span className='md:block hidden'>+998 (71) 123-45-67</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>info@sports.uz</span>
                            </div>
                            <div className="hidden md:flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>Tashkent, Uzbekistan</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>Free shipping on orders over $100</span>

                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="rounded-lg">
                            {/* <Dumbbell className="w-8 h-8 text-white" /> */}
                            <img src={logo} className="w-12 h-12 text-white" alt="Logo Image" />
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
                                <select className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option>All Categories</option>
                                    <option>Protein</option>
                                    <option>Amino Acids</option>
                                    <option>Pre-Workout</option>
                                    <option>Vitamins</option>
                                </select>
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search for products, brands..."
                                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile Search Toggle */}
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* User Account */}
                        <div className="relative group">
                            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <User className="w-6 h-6 text-gray-600" />
                                <div className="hidden md:block text-left">
                                    <div className="text-xs text-gray-500">Hello, Sign in</div>
                                    <div className="text-sm font-medium text-gray-800">Account</div>
                                </div>
                            </button>

                            {/* Account Dropdown */}
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign In</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</a>
                                    <hr className="my-2" />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wishlist</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Settings</a>
                                </div>
                            </div>
                        </div>

                        {/* Wishlist */}
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Heart className="w-6 h-6 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                        </button>

                        {/* Shopping Cart */}
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <ShoppingCart className="w-6 h-6 text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Menu */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="hidden lg:flex items-center space-x-8 py-4">
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                            Home
                        </a>

                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(category.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    <span>{category.name}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border transition-all duration-200 ${activeDropdown === category.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}>
                                    <div className="py-2">
                                        {category.subcategories.map((sub) => (
                                            <a
                                                key={sub}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                            >
                                                {sub}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                            Brands
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                            Sale
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                            About
                        </a>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-gray-200">
                            <div className="space-y-4">
                                <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    Home
                                </a>

                                {categories.map((category) => (
                                    <div key={category.name}>
                                        <button
                                            className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-600 font-medium transition-colors"
                                            onClick={() => setActiveDropdown(activeDropdown === category.name ? null : category.name)}
                                        >
                                            <span>{category.name}</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === category.name ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        {activeDropdown === category.name && (
                                            <div className="mt-2 ml-4 space-y-2">
                                                {category.subcategories.map((sub) => (
                                                    <a
                                                        key={sub}
                                                        href="#"
                                                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                                    >
                                                        {sub}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    Brands
                                </a>
                                <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    Sale
                                </a>
                                <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    About
                                </a>
                                <a href="#" className="block text-gray-800 hover:text-blue-600 font-medium transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// // src/components/Navbar.tsx
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

// function Navbar() {
//     return (
//         <div className="w-full bg-gradient-to-r from-black to-zinc-900 text-white flex items-center justify-between px-4 py-2 shadow">

//             {/* Left: Menu and Language */}
//             <div className="flex items-center gap-4">
//                 <Button variant="ghost" className="text-lime-400 font-bold text-sm flex items-center gap-2">
//                     <Menu className="w-5 h-5" />
//                     МЕНЮ
//                 </Button>

//                 <DropdownMenu>
//                     <DropdownMenuTrigger className="text-white font-semibold text-sm">РУС ▾</DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem>UZB</DropdownMenuItem>
//                         <DropdownMenuItem>ENG</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>

//             {/* Center: Logo */}
//             <div className="text-white text-2xl font-bold tracking-wider">
//                 sport<span className="text-lime-400">mi<span className="border-b-4 border-lime-400">x</span></span>
//             </div>

//             {/* Right: Cart, Search, Phone */}
//             <div className="flex items-center gap-6">
//                 {/* Cart */}
//                 <div className="relative">
//                     <Button variant="ghost">
//                         <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
//                             <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </Button>
//                     <span className="absolute -top-1 -right-1 text-xs bg-lime-400 text-black rounded-full w-4 h-4 flex items-center justify-center">0</span>
//                 </div>

//                 {/* Search */}
//                 <Button variant="ghost">
//                     <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
//                         <path d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </Button>

//                 {/* Phone */}
//                 <DropdownMenu>
//                     <DropdownMenuTrigger className="text-lime-400 text-sm font-medium flex items-center gap-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path d="M22 16.92V21a2 2 0 01-2.18 2A19.87 19.87 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.81.32 1.6.58 2.36a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 007.27 7.27l1.27-1.27a2 2 0 012.11-.45c.76.26 1.55.46 2.36.58a2 2 0 011.72 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         +998 <span className="text-white font-bold ml-1">71 200 02 26 ▾</span>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem>+998 90 123 45 67</DropdownMenuItem>
//                         <DropdownMenuItem>+998 91 765 43 21</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//         </div>
//     )
// }

// export default Navbar