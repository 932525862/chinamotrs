import { useState } from "react";
import { Search } from "lucide-react";
import logo from "../../assets/gran.png";
import { Link } from "react-router-dom"; // 🆕 qo‘shildi

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const categories = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Category", path: "/category" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src={logo} alt="Logo" className="w-42 h-17 object-contain" />
        </div>

        {/* Center: Menu items */}
        <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-gray-700">
          {categories.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Search & Language Selector */}
        <div className="flex items-center space-x-4 w-full lg:w-auto">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Language Select */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
