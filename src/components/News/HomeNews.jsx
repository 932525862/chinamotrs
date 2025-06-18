import { Link, NavLink } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import image from '../../assets/news-img.png'
import { FaArrowAltCircleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
export const base = [
  {
    id: 1,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 1',
  },
  {
    id: 2,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 2',
  },
  {
    id: 3,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 3',
  },
  {
    id: 4,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 4',
  },
  {
    id: 5,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 5',
  },
  {
    id: 6,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 6',
  },
]

function HomeNews() {
  // const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([])
  const url = 'http://142.93.111.17:3002/api/news'
  const getApi = () => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data.data)
      })
      .catch((err) => {
        console.error('Xatolik:', err)
      })
  }

  useEffect(() => {
    getApi()
  }, [])

  console.log(data)
  return (
    <div className="bg-gray-100">
      <section className="mx-auto max-w-7xl mt-15 flex flex-col items-start py-10 px-[1rem]">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 ">
          <span className="">YANGILIKLAR</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1500}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            el: '.custom-pagination-news',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} w-10 h-2 inline-block mx-1 rounded-xl border-1 border-[#54ed21] transition-all duration-300"></span>`,
          }}
          loop={true}
          breakpoints={{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full lg:h-110"
        >
          <div className="py-10">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/news/${item.id}`} className="block group">
                  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-md h-full my-10">
                    <div className="overflow-hidden rounded-t-xl rounded-b-sm">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 duration-300"
                      />
                    </div>
                    <p className="font-medium text-[17px] text-gray-900 line-clamp-2 group-hover:text-green-500 pt-2">
                      {item.text.ru}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
          <div className="custom-prev absolute left-0 bottom-1/2 w-[40px] h-[40px] rounded-[50%] -translate-y-1/2 z-20 cursor-pointer border text-lg font-bold bg-black/30 backdrop-blur-sm text-green-500 hover:bg-[#323131d3] transition flex items-center justify-center">
            <FaArrowLeft />
          </div>
          <div className="custom-next absolute right-0 bottom-1/2 w-[40px] h-[40px] -translate-y-1/2 z-20 cursor-pointer border text-xl font-bold bg-black/30 backdrop-blur-sm text-green-500 p-3 rounded-full hover:bg-[#323131d3] transition flex items-center justify-center">
            <FaArrowRight />
          </div>
          <div className="custom-pagination-news absolute hidden sm:block sm:-bottom-[1px] md:-bottom-1 lg:bottom-0 left-1/2 -translate-x-1/2 z-10 max-lg:left-1/2 max-lg:bottom-16"></div>
        </Swiper>

        <NavLink
          to="/news"
          className="mx-auto relative group border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 mt-5 flex items-center gap-2"
        >
          <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-1">
            Barcha Yangiliklar
          </span>
          <FaArrowAltCircleRight className="text-green-500 group-hover:text-white relative duration-300 z-1" />
          <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
        </NavLink>
      </section>
    </div>
  )
}

export default HomeNews
