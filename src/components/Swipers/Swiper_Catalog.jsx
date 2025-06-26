import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

export default function Swiper_Catalog() {
  const [loading, setLoading] = useState(false)
  const { i18n } = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'
  const [categories, setCategories] = useState([])

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const image_url = import.meta.env.VITE_API_UPLOAD_BASE

  useEffect(() => {
    setLoading(true)
    fetch(`${baseUrl}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data?.data || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="relative p-5 bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1500}
        slidesPerView={5}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination-catalog',
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-2 h-2 sm:w-5 sm:h-2 inline-block mx-1 rounded-xl border border-[#54ed21] transition-all duration-300"></span>`,
        }}
        breakpoints={{
          1200: { slidesPerView: 6 },
          992: { slidesPerView: 4.6 },
          768: { slidesPerView: 3.5 },
          480: { slidesPerView: 2.5 },
          0: { slidesPerView: 2 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {loading
          ? Array(5)
            .fill(0)
            .map((_, idx) => (
              <SwiperSlide key={idx}>
                <Skeleton height={180} width={'100%'} />
              </SwiperSlide>
            ))
          : categories.map((card) => {
            const localizedName = card?.name?.uz || 'no-name'
            return (
              <SwiperSlide key={card?.id}>
                <Link to={`/category/${localizedName}`} className="block">
                  <div className="w-[150px] h-[200px] sm:w-[180px] mx-auto flex flex-col items-center rounded-xl shadow-md hover:shadow-lg border border-[#E83630] bg-white hover:bg-[#cecece2d] hover:backdrop-blur-xs transition-transform duration-300 hover:scale-[1.03] overflow-hidden sm:my-14 my-12 group">

                    {/* Image */}
                    <img
                      src={`${image_url}${card?.image}`}
                      alt={card?.name?.[lang] || 'Nomi yo‘q'}
                      className="w-full h-[100px] sm:h-[120px] object-cover mb-3 transition-transform duration-300 group-hover:scale-105"
                      style={{ mixBlendMode: 'multiply' }}
                    />

                    {/* Name */}
                    <h2 className="text-center text-sm sm:text-base font-one text-shadow-2xs group-hover:text-[#E83630] transition-all duration-300">
                      {card?.name?.[lang] || 'NOMI YO‘Q'}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>

            )
          })}

        {/* Custom Arrow Buttons */}
        <div className="custom-prev absolute left-0 -bottom-5 -translate-y-1/2 w-[40px] h-[40px] rounded-full z-20 cursor-pointer border text-lg font-bold bg-black/30 backdrop-blur-sm text-gray-100 hover:bg-[#323131d3] transition flex items-center justify-center">
          <FaArrowLeft />
        </div>
        <div className="custom-next absolute right-0 -bottom-5 -translate-y-1/2 w-[40px] h-[40px] rounded-full z-20 cursor-pointer border text-lg font-bold bg-black/30 backdrop-blur-sm text-gray-100 hover:bg-[#323131d3] transition flex items-center justify-center">
          <FaArrowRight />
        </div>

        {/* Custom Pagination */}
        <div className="custom-pagination-catalog absolute bottom-3 left-1/2 -translate-x-1/2 z-10"></div>
      </Swiper>
    </div>
  )
}
