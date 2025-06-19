import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../assets/gran.png";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { CategoryCard } from "../../pages/Category/components/category-card";

// ✅ .env fayldan URL larni olish
const baseUrl = import.meta.env.VITE_BASE_URL;
const uploadBase = import.meta.env.VITE_UPLOAD_BASE;

const Navbar = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("uz");
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const currentLang = i18n.language || "uz";
    setLanguage(currentLang);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const handleSearch = async () => {
    if (searchText.trim() === "") return;
    try {
      const response = await axios.get(`${baseUrl}/products`, {
        params: { name: searchText },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Qidirishda xatolik:", error);
    }
  };

  const categories = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/about" },
    { name: t("navbar.category"), path: "/category" },
    { name: t("navbar.news"), path: "/news" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 text-base font-semibold text-gray-700">
            {categories.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => scrollTo({ top: 0 })}
                className="hover:text-green-500 relative group transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Search & Language */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder={t("navbar.searchPlaceholder")}
                className="w-full pl-4 pr-10 py-2 border border-green-500 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Search
                className="absolute right-3 top-2.5 text-green-500 w-5 h-5 cursor-pointer"
                onClick={handleSearch}
              />
            </div>

            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-green-500 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>

          {/* Mobile: Search then Menu */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setShowMobileSearch((prev) => !prev)}
              className="focus:outline-none"
            >
              <Search className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-4">
            <div className="flex flex-col gap-2 text-gray-700 font-medium">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    scrollTo({ top: 0 });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <select
              value={language}
              onChange={handleLanguageChange}
              className="mt-2 w-full border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>
        )}
      </nav>

      {/* Mobile Sliding Search Field */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          showMobileSearch ? "max-h-32 py-3" : "max-h-0"
        } bg-white px-4 shadow-sm border-b`}
      >
        <input
          type="text"
          placeholder={t("navbar.searchPlaceholder")}
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>

      {/* 🔽 Mahsulotlar ro'yxati */}
      {searchText.trim() !== "" && (
        <>
          {products.length > 0 ? (
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <CategoryCard key={product.id} product={product} uploadBase={uploadBase} />
              ))}
            </div>
          ) : (
            <p className="text-center text-red-600 text-lg py-8 font-semibold">
              Bunday mahsulot mavjud emas
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
