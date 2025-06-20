import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { SkeletonTheme } from "react-loading-skeleton";

export default function SwiperSlides() {
  const { t, i18n } = useTranslation();
  const lang = ["uz", "ru"].includes(i18n.language) ? i18n.language : "uz";
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/category");
    scrollTo({ top: 0 });
  };
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const uploadUrl = import.meta.env.VITE_API_UPLOAD_BASE;
  const [baner, setBaner] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/api/banners`)
      .then((res) => res.json())
      .then((data) => {
        setBaner(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      });
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={2000}
        slidesPerView={1}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-10 h-3 inline-block mx-1 rounded-xl border-1 border-green-500 transition-all duration-300"></span>`,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full"
      >
        {Array.isArray(baner) &&
          baner.map((car) => (
            <SwiperSlide key={car?.id}>
              {loading ? (
                <SkeletonTheme className=" absolute top-0 left-0 w-full md:h-[90dvh] h-[80dvh] -z-10" />
              ) : (
                <div
                  style={{
                    backgroundImage: `url(${uploadUrl}${car?.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="md:h-[90dvh] h-[80dvh] w-full px-10 py-20 text-white relative"
                >
                  <div className="max-w-7xl h-full mx-auto flex flex-col max-sm:items-center text-shadow-2xs gap-6">
                    {/* <img src={`url(${ImgUrl}upload/${car?.image_url})`} alt="" /> */}
                    <span className="w-full h-full min-md:hidden bg-black/40 absolute top-0 left-0"></span>

                    <div className="w-[250px] z-10 max-sm:hidden mt-3 border-b-2 border-r-2 border-green-500 rounded-[50%] px-7 py-4">
                      <p className="text-xl text-right ">
                        {t("aboutHome.xizmat")}
                      </p>
                    </div>
                    <h1 className="min-md:w-[600px] z-10 max-md:text-2xl max-sm:text-xl max-sm:text-center text-4xl font-one mt-5">
                      {car?.text[lang]}
                    </h1>
                    <p className="text-2xl z-10 max-md:text-xl max-sm:text-xl max-sm:text-center font-one text-[#595757]">
                      {car?.title[lang]}
                    </p>
                    <button
                      onClick={handleCardClick}
                      className="mt-5 bg-[#000000a6] sm:w-[300px] w-[270px] h-[55px] font-one text-white relative overflow-hidden group cursor-pointer border-2 border-green-500 max-sm:py-2 transform duration-500 rounded-full flex items-center justify-center gap-3"
                    >
                      <span className="z-20 sm:text-xl text-sm">
                         {t("aboutHome.next")}
                      </span>{" "}
                      <span className=" z-20 text-2xl ">
                        <RiArrowRightUpLine />
                      </span>
                      <span className="w-full h-full z-10 absolute -left-100 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        {/* Custom Arrow Buttons */}
        <div className="custom-prev absolute max-lg:hidden right-35 bottom-16 w-[60px] h-[60px] rounded-[50%] -translate-y-1/2 z-10 cursor-pointer border text-xl font-bold bg-black/70 text-white hover:bg-[#323131d3] hover:text-green-500 transition flex items-center justify-center">
          <FaArrowLeft />
        </div>
        <div className="custom-next absolute max-lg:hidden right-15 bottom-16 w-[60px] h-[60px] -translate-y-1/2 z-10 cursor-pointer border text-xl font-bold bg-black/70 text-white p-3 rounded-full hover:bg-[#323131d3] hover:text-green-500 transition flex items-center justify-center">
          <FaArrowRight />
        </div>

        {/* Custom Pagination */}
        <div className="custom-pagination max-md:hidden absolute bottom-22 left-10 z-10 max-lg:left-1/2 max-lg:bottom-16"></div>
      </Swiper>
    </div>
  );
}
