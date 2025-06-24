import { useEffect, useState, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../assets/logo_280.webp";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Navbar = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("uz");
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchBoxRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentLang = i18n.language || "uz";
    setLanguage(currentLang);
  }, []);

  const base_url = import.meta.env.VITE_API_BASE_URL;

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const handleSearch = async () => {
    const trimmed = searchText.trim();
    if (trimmed === "") {
      setProducts([]);
      setShowDropdown(false);
      return;
    }
    try {
      const response = await axios.get(`${base_url}/api/products?name=${trimmed}`);
      setProducts(response.data?.data || []);
      setShowDropdown(true);
    } catch (error) {
      console.error("Qidirishda xatolik:", error);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (
        (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) &&
        (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target))
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex gap-6 text-base font-semibold text-gray-700">
            {categories.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => scrollTo({ top: 0 })}
                className="hover:text-[#E83630] relative group transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E83630] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 relative" ref={searchBoxRef}>
            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder={t("navbar.searchPlaceholder")}
                className="w-full pl-4 pr-10 py-2 border border-[#E83630] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  if (e.target.value.trim() === "") {
                    setProducts([]);
                    setShowDropdown(false);
                  } else {
                    handleSearch();
                  }
                }}
              />
              <Search
                className="absolute right-3 top-2.5 text-[#E83630] w-5 h-5 cursor-pointer"
                onClick={handleSearch}
              />

              {showDropdown && products.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl border shadow-xl z-50 max-h-[400px] overflow-y-auto">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        navigate(`/category/id/${product.id}`);
                        setShowDropdown(false);
                        setSearchText("");
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={`${import.meta.env.VITE_API_UPLOAD_BASE}${product.images?.[0]?.path}`}
                        alt={product.name?.uz}
                        className="w-14 h-14 object-contain rounded-md"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">
                          {product.name?.uz}
                        </p>
                        <p className="text-xs text-gray-500">
                          {Number(product.price).toLocaleString()} so'm
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-[#E83630] rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>

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

      <div
        ref={mobileSearchRef}
        className={`lg:hidden transition-all duration-300 ${showMobileSearch ? "max-h-[420px] py-3 opacity-100 visible" : "max-h-0 py-0 opacity-0 invisible"
          } bg-white px-4 shadow-sm border-b relative overflow-visible`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder={t("navbar.searchPlaceholder")}
            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value.trim() === "") {
                setProducts([]);
                setShowDropdown(false);
              } else {
                handleSearch();
              }
            }}
          />

          {showDropdown && products.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border shadow-xl z-50 max-h-[300px] overflow-y-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/category/id/${product.id}`);
                    setShowDropdown(false);
                    setSearchText("");
                    setShowMobileSearch(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={`${import.meta.env.VITE_API_UPLOAD_BASE}${product.images?.[0]?.path}`}
                    alt={product.name?.uz}
                    className="w-12 h-12 object-contain rounded-md"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {product.name?.uz}
                    </p>
                    <p className="text-xs text-gray-500">
                      {Number(product.price).toLocaleString()} so'm
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


    </>
  );
};

export default Navbar;