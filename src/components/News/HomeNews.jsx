import { Link, NavLink } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import { FaArrowAltCircleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HomeNews() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const uploadBase = import.meta.env.VITE_API_UPLOAD_BASE
  const { i18n ,t} = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`${baseUrl}/api/news`)
      .then((res) => res.json())
      .then((resData) => {
        if (Array.isArray(resData?.data)) {
          setData(resData.data)
        } else {
          setData([])
        }
      })
      .catch((err) => {
        console.error('Xatolik:', err)
        setData([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return (
    <div className="bg-gray-100">
      <section className="mx-auto max-w-7xl mt-15 flex flex-col items-start py-10 px-[1rem]">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 ">
          <span className="">{t('news.homeTitle')}</span>
          <img
            src={line}
            alt="Line Decoration"
            className="hidden sm:block sm:max-w-40 md:max-w-70"
          />
        </h3>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1500}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          loop={true}
          breakpoints={{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full lg:h-110"
        >
          <div>
            {loading
              ? Array.from({ length: 4 }).map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-md my-10">
                      <Skeleton height={200} className="rounded-t-xl rounded-b-sm" />
                      <Skeleton height={20} style={{ marginTop: 10 }} count={2} />
                    </div>
                  </SwiperSlide>
                ))
              : data.filter(Boolean).map((item) => (
                  <SwiperSlide key={item?.id}>
                    <Link to={`/news/${item?.id}`} className="block group">
                      <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-md my-10">
                        <div className="overflow-hidden rounded-t-xl rounded-b-sm h-70">
                          <img
                            src={
                              item?.image_url
                                ? `${uploadBase}${encodeURI(item?.image_url)}`
                                : '/default-news.jpg'
                            }
                            alt={item?.text?.[lang] || 'Yangilik rasmi'}
                            className="w-full h-full object-cover group-hover:scale-105 duration-300"
                          />
                        </div>
                        <p className="font-medium text-[17px] text-gray-900 line-clamp-2 group-hover:text-green-500 pt-2">
                          {item?.title?.[lang] || 'Sarlavha mavjud emas'}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
          </div>

          {/* Custom Arrows */}
          <div className="custom-prev absolute left-0 bottom-1/2 w-[40px] h-[40px] rounded-full -translate-y-1/2 z-20 cursor-pointer border text-lg font-bold bg-black/30 backdrop-blur-sm text-green-500 hover:bg-[#323131d3] transition flex items-center justify-center">
            <FaArrowLeft />
          </div>
          <div className="custom-next absolute right-0 bottom-1/2 w-[40px] h-[40px] rounded-full -translate-y-1/2 z-20 cursor-pointer border text-xl font-bold bg-black/30 backdrop-blur-sm text-green-500 p-3 hover:bg-[#323131d3] transition flex items-center justify-center">
            <FaArrowRight />
          </div>
        </Swiper>

        <NavLink
          to="/news"
          className="mx-auto relative group border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 mt-5 flex items-center gap-2"
        >
          <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-1">
            {t('news.allNews')}
          </span>
          <FaArrowAltCircleRight className="text-green-500 group-hover:text-white relative duration-300 z-1" />
          <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
        </NavLink>
      </section>
    </div>
  )
}

export default HomeNews
