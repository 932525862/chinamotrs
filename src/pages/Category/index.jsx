import { useEffect, useState } from 'react'
import { Search, Filter, Menu } from 'lucide-react'
import { useParams } from 'react-router-dom'
import ProductsGrid from './components/products-grid'
import PaginationComponent from './components/pagination'
import axios from 'axios'
import Loading from '../../components/Loading/loading'

const CategoryPage = () => {
  const [selectedCategories, setSelectedCategories] = useState('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchName, setSearchName] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const { slug } = useParams()
  const base_url = import.meta.env.VITE_API_BASE_URL
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${base_url}/api/categories`)
      setCategories(res?.data?.data)

      if (slug) {
        const match = res?.data?.data?.find((cat) => cat?.name?.uz === decodeURIComponent(slug))
        if (match) {
          setSelectedCategories(match.name.uz)
        }
      }
    } catch (error) {
      console.error(`Error while getting categories: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleProductFiler = async (page = 1, searchName = "") => {
    setLoading(true)
    try {
      const queryParams = new URLSearchParams()
      if (selectedCategories) queryParams.append('category', selectedCategories)
      if (searchName) queryParams.append('name', searchName)

      const res = await axios.get(
        `${base_url}/api/products?${queryParams.toString()}&page=${page}&limit=10`
      )
      setProducts(res?.data?.data || [])
      setTotalPages(res?.data?.meta?.totalPages || 1)
      setCurrentPage(page)
    } catch (error) {
      console.error(`Error while filtering products: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const getProducts = async () => {
    try {
      const res = await axios.get(`${base_url}/api/products?page=1&limit=10`)
      let data = res?.data?.data || []
      if (slug) {
        data = data.filter((item) => item.category?.name?.uz === decodeURIComponent(slug))
      }
      setProducts(data)
      setTotalPages(res?.data?.meta?.totalPages || 1)
    } catch (error) {
      console.error(`Error while getting products: ${error}`)
    }
  }

  useEffect(() => {
    getCategories()
    if (!slug) {
      getProducts()
    }
  }, [slug])

  useEffect(() => {
    if (slug && selectedCategories) handleProductFiler()
  }, [selectedCategories])

  useEffect(() => {
    if (searchName?.trim()?.length > 2 || searchName?.trim()?.length === 0) handleProductFiler(1, searchName)
  }, [searchName])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setShowFilters((prev) => !prev)}>
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {slug ? decodeURIComponent(slug) : 'Barcha mahsulotlar'}
                </h1>
                <p className="text-gray-600 mt-1">
                  Premium products {slug ? 'in this category' : 'available'}
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setSearchName(e?.target?.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-80 flex-shrink-0">
            {/* Show filters only on mobile when toggle is true */}
            <div className={`bg-white rounded-xl shadow-sm p-6 mt-4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories &&
                    categories.map((category) => (
                      <label
                        key={category?.id}
                        className="flex items-center justify-between cursor-pointer group"
                      >
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
              <button
                className="relative w-full group border-[3px] border-[#E83630] overflow-hidden rounded-full p-2 flex items-center justify-center gap-2"
                onClick={() => handleProductFiler(1)}
              >
                <span className="font-one text-[#E83630] group-hover:text-white relative duration-300 z-10">
                  Apply
                </span>
                <span className="bg-[#E83630] absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {loading ? <Loading /> : (
              products?.length > 0 ? (
                <ProductsGrid products={products} />
              ) : (
                <div className="text-center text-gray-500 flex items-center justify-center h-64">
                  <p>No products found in this category.</p>
                </div>
              ))}
            {loading ? <Loading /> : (
              totalPages > 1 && (
                <PaginationComponent
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={(page) => handleProductFiler(page)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage