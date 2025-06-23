import { useState, useEffect, useRef } from 'react'
import { Share2, Copy, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { UserInfoDialog } from '../modals/user-info'
// import { toast } from 'sonner'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { ProductCard } from './product-card'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { toast } from 'sonner'

const MassageOnePage = () => {
    const [showImageModal, setShowImageModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [showShareOptions, setShowShareOptions] = useState(false)
    const { i18n } = useTranslation()
    const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'
    const navigate = useNavigate()

    const [data, setData] = useState()
    const shareRef = useRef(null)

    const { id } = useParams()

    const base_url = import.meta.env.VITE_API_BASE_URL
    const upload_base = import.meta.env.VITE_API_UPLOAD_BASE

    const getOneById = async (id) => {
        try {
            const data = await axios.get(`${base_url}/api/products/${id}`)
            setData(data.data.data);
        } catch (error) {
            console.error('Xatolik:', error)
        }
    }
    useEffect(() => {
        if (id) getOneById(id)
    }, [id])

    const handleCopyLink = async () => {
        try {
            const shareData = {
                title: data?.name?.uz || "Mahsulot",
                text: `Mahsulotni ko'ring: ${data?.name?.uz}`,
                url: window.location.href,
            }

            if (navigator.share) {
                await navigator.share(shareData)
                toast.success("Ulashildi!") // if you want to show this
            } else {
                await navigator.clipboard.writeText(window.location.href)
                toast.success("Havola nusxalandi!")
            }
        } catch (err) {
            console.error("Ulashishda xatolik yuz berdi", err)
            toast.error("Nusxalashda xatolik yuz berdi")
        }

        setShowShareOptions(false)
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shareRef.current && !shareRef.current.contains(event.target)) {
                setShowShareOptions(false)
            }
        }
        if (showShareOptions) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showShareOptions])

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? data.images.length - 1 : prevIndex - 1))
    }
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === data.images.length - 1 ? 0 : prevIndex + 1))
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        try {
            const response = await fetch(`${base_url}/api/products?category=${"Uqalash"}`)
            if (!response.ok) throw new Error(`Ma'lumot yuklanmadi: ${response.statusText}`)
            const data = await response.json()
            setProducts(data?.data)
        } catch (err) {
            console.error('Maʼlumot yuklanmadi', err)
            setError(err.message || 'Maʼlumot yuklanmadi')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    if (loading || !data) {
        return (
            <div className="container mx-auto px-4 py-4 sm:py-8">
                <Skeleton height={40} width={200} />
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mt-6">
                    <Skeleton height={400} />
                    <div>
                        <Skeleton count={5} height={30} style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <h3 className="font-bold text-2xl mt-10 uppercase">Sizga yoqishi mumkin</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
                    {[...Array(4)].map((_, idx) => (
                        <Skeleton key={idx} height={250} />
                    ))}
                </div>
            </div>
        )
    }

    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div className="min-h-auto flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 py-4 sm:py-8">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                        <div className="flex items-start justify-between gap-4 lg:hidden">
                            <div className="w-full">
                                <Badge
                                    variant="secondary"
                                    className="bg-green-500 text-white border-none mb-2 sm:mb-3 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                                >
                                    {data?.category?.name?.[lang]}
                                </Badge>
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-gray-900">
                                    {data?.name?.[lang]}
                                </h1>
                            </div>
                            <div className="relative flex-shrink-0" ref={shareRef}>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-green-500 hover:text-green-500 transition-all duration-300 shadow-sm text-xs sm:text-sm"
                                    onClick={() => setShowShareOptions((prev) => !prev)}
                                >
                                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                    <span className="hidden sm:inline">Поделиться</span>
                                </Button>
                                {showShareOptions && (
                                    <Card className="absolute top-10 sm:top-12 right-0 z-20 bg-white border-gray-200 shadow-xl p-3 sm:p-1 w-52 sm:w-52 rounded-lg">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full justify-start text-gray-600 hover:text-purple-600 hover:bg-purple-50 text-xs sm:text-sm"
                                            onClick={handleCopyLink}
                                        >
                                            <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                            Скопировать ссылку
                                        </Button>
                                    </Card>
                                )}
                            </div>
                        </div>
                        {/* Product Image */}
                        <div className="space-y-4 lg:space-y-6">
                            <Card className="bg-white border-gray-200 shadow-md p-4 sm:p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                                <div className="relative flex items-center justify-center h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden group">
                                    {data?.images?.length > 1 && (
                                        <button
                                            className="absolute z-10 -left-0 top-1/2 transform -translate-y-1/2 bg-black/90 hover:bg-black/50 text-gray-100 p-1 rounded-full shadow transition"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handlePrevImage()
                                            }}
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                    )}
                                    <div
                                        className="w-full h-full flex items-center justify-center cursor-pointer"
                                        onClick={() => setShowImageModal(true)}
                                    >
                                        <img
                                            src={`${upload_base}${data?.images?.[currentImageIndex]?.path}`}
                                            alt={`Product ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {data?.images?.length > 1 && (
                                        <button
                                            className="absolute z-10 -right-0 top-1/2 transform -translate-y-1/2 bg-black/90 hover:bg-black/50 text-gray-100 p-1 rounded-full shadow transition"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleNextImage()
                                            }}
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-2 lg:space-y-0">
                            <div className=" items-start justify-between gap-4 hidden lg:flex">
                                <div className="w-full">
                                    <Badge
                                        variant="secondary"
                                        className="bg-green-500 text-white border-none mb-2 sm:mb-3 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                                    >
                                        {data?.category?.name?.[lang]}
                                    </Badge>
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-gray-900">
                                        {data?.name?.[lang]}
                                    </h1>
                                </div>
                                <div className="relative flex-shrink-0" ref={shareRef}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-white border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-green-500 hover:text-green-500 transition-all duration-300 shadow-sm text-xs sm:text-sm"
                                        onClick={() => setShowShareOptions((prev) => !prev)}
                                    >
                                        <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                        <span className="hidden sm:inline">Поделиться</span>
                                    </Button>
                                    {showShareOptions && (
                                        <Card className="absolute top-10 sm:top-12 right-0 z-20 bg-white border-gray-200 shadow-xl p-3 sm:p-1 w-52 sm:w-52 rounded-lg">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="w-full justify-start text-gray-600 hover:text-purple-600 hover:bg-purple-50 text-xs sm:text-sm"
                                                onClick={handleCopyLink}
                                            >
                                                <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                                Скопировать ссылку
                                            </Button>
                                        </Card>
                                    )}
                                </div>
                            </div>
                            <div className="">
                                <div className=" line-through text-gray-700">
                                    {Number(data?.price * 1.5).toLocaleString('ru-RU')} <span className="">so'm</span>
                                </div>
                                <p className="font-one text-sm">Chegirmadagi narx</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600">
                                        {Number(data?.price)?.toLocaleString('ru-RU')}
                                    </span>
                                    <span className="text-lg sm:text-xl font-sans text-amber-600">so'm</span>
                                </div>
                            </div>
                            <div className="my-5 flex gap-5 md:gap-10">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="px-5 cursor-pointer py-3 flex bg-orange-500 hover:bg-orange-600 text-sm md:text-md rounded-md text-white font-medium"
                                >
                                    So'rov Yuborish
                                </button>
                                <a
                                    href="http://t.me/Grandfitnessuz "
                                    target="_blank"
                                    className="px-5 py-3 flex bg-green-500 hover:bg-green-600 text-sm md:text-md rounded-md text-white font-medium"
                                >
                                    Telegramdan yozish
                                </a>
                            </div>
                            <div className="space-y-1 bg-gray-100 p-5 rounded-2xl">
                                {Array.isArray(data?.details) &&
                                    data.details.map((item, index) => (
                                        <div key={index} className="text-sm text-gray-800">
                                            {item?.[lang]}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-2xl mt-10 uppercase">Sizga yoqishi mumkin</h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
                        {products && Array.from(products)?.map((product) => (
                            <div key={product.id} onClick={() => navigate(`/category/massage/${product.id}`)}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>

                {showImageModal && (
                    <>
                        <div
                            onClick={() => setShowImageModal(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                        >
                            <div className="relative max-w-4xl max-h-[90vh] w-full">
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white border-0 z-10"
                                    onClick={() => setShowImageModal(false)}
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                    {data?.images?.length > 1 && (
                                        <button
                                            className="absolute z-10 -left-3 md:-left-5 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-black/50 text-gray-100 p-1 rounded-full shadow transition"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handlePrevImage()
                                            }}
                                        >
                                            <ChevronLeft className="w-7 h-7" />
                                        </button>
                                    )}
                                    <img
                                        src={`${upload_base}${data?.images?.[currentImageIndex]?.path}`}
                                        alt="Enlarged Product"
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />
                                    {data?.images?.length > 1 && (
                                        <button
                                            className="absolute z-10 -right-3 md:-right-5 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-black/50 text-gray-100 p-1 rounded-full shadow transition"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleNextImage()
                                            }}
                                        >
                                            <ChevronRight className="w-7 h-7" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="fixed inset-0 z-40" onClick={() => setShowImageModal(false)} />
                    </>
                )}
            </div>

            {open && <UserInfoDialog open={open} close={() => setOpen(false)} />}
        </>
    )
}

export default MassageOnePage
