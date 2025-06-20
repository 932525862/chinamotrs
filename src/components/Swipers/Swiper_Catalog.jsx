import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Swiper_Catalog() {
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";
  const [categories, setCategories] = useState([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination-catalog",
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
          ? Array(5).fill(0).map((_, idx) => (
              <SwiperSlide key={idx}>
                <Skeleton height={180} width={"100%"} />
              </SwiperSlide>
            ))
          : categories.map((card) => (
              <SwiperSlide key={card?.id}>
                <div className="max-[400px]:w-[150px] w-[180px] h-[180px] sm:h-[200px] mx-auto group relative sm:my-14 my-12 shadow-md hover:shadow-lg p-3 rounded-xl bg-white hover:bg-[#cecece2d] hover:backdrop-blur-xs flex items-center justify-center transition-transform duration-300 hover:scale-[1.03] border border-[#54ed21]">
                  <h2 className="text-center text-base sm:text-lg font-one group-hover:text-[#17f80b] transition-all duration-300 text-shadow-2xs">
                    {card?.name?.[lang] || "NOMI YO‘Q"}
                  </h2>
                </div>
              </SwiperSlide>
            ))}

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
  );
}
