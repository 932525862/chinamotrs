import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SwiperSlides() {
  const { t, i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/category");
    scrollTo({ top: 0 });
  };

  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const uploadUrl = import.meta.env.VITE_API_UPLOAD_BASE;
  const [baner, setBaner] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/banners`)
      .then((res) => res.json())
      .then((data) => {
        setBaner(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={1}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-10 h-3 inline-block mx-1 rounded-xl border border-[#E83630] transition-all duration-300"></span>`,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full"
      >
        {loading ? (
          <SwiperSlide>
            <div className="h-[92dvh] w-full">
              <Skeleton height="100%" />
            </div>
          </SwiperSlide>
        ) : (
          baner.map((car) => (
            <SwiperSlide key={car?.id}>
              <div
                style={{
                  backgroundImage: `url(${uploadUrl}${car?.image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[93dvh] lg:h-[93dvh] md:h-[96dvh] w-full px-10 py-20 text-white relative"
              >
                <div className="max-w-7xl h-full mx-auto flex flex-col max-sm:items-center text-shadow-2xs gap-6">
                  <span className="w-full h-full min-md:hidden bg-black/40 absolute top-0 left-0" />
                  <div className="w-[250px] z-10 max-sm:hidden mt-3 border-b-2 border-r-2 border-[#E83630] rounded-[50%] px-7 py-4">
                    <p className="text-xl text-right ">
                      {t("aboutHome.xizmat")}
                    </p>
                  </div>
                  <h1 className="min-md:w-[600px] z-10 max-md:text-2xl max-sm:text-xl max-sm:text-center text-4xl font-one mt-5">
                    {car?.text[lang]}
                  </h1>
                  <p className="text-2xl z-10 max-md:text-xl max-sm:text-xl max-sm:text-center font-one text-[#e3e3e3]">
                    {car?.title[lang]}
                  </p>
                  <button
                    onClick={handleCardClick}
                    className="mt-5 bg-[#000000a6] sm:w-[300px] w-[270px] h-[55px] font-one text-white relative overflow-hidden group cursor-pointer border-2 border-green-500 max-sm:py-2 transform duration-500 rounded-full flex items-center justify-center gap-3"
                  >
                    <span className="z-20 sm:text-xl text-sm">
                      {t("aboutHome.next")}
                    </span>
                    <span className=" z-20 text-2xl ">
                      <RiArrowRightUpLine />
                    </span>
                    <span className="w-full h-full z-10 absolute -left-100 bg-green-500 group-hover:left-0 transform duration-500 transition-all"></span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}

        {/* Custom Arrow Buttons */}
        <div className="custom-prev absolute right-35 max-[500px]:left-3 bottom-16 w-[50px] h-[50px] rounded-full -translate-y-1/2 z-10 cursor-pointer border text-xl font-bold bg-black/70 text-white hover:bg-[#323131d3] hover:text-green-500 transition flex items-center justify-center">
          <FaArrowLeft />
        </div>
        <div className="custom-next absolute right-15 max-[500px]:right-5 bottom-16 w-[50px] h-[50px] -translate-y-1/2 z-10 cursor-pointer border text-xl font-bold bg-black/70 text-white p-3 rounded-full hover:bg-[#323131d3] hover:text-green-500 transition flex items-center justify-center">
          <FaArrowRight />
        </div>

        {/* Custom Pagination */}
        <div className="custom-pagination absolute z-10 left-1/4 sm:left-1/13 bottom-[150px] sm:bottom-14"></div>
      </Swiper>
    </div>
  );
}
