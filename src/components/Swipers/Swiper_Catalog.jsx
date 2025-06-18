import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import i18n from "../../i18n";

export default function Swiper_Catalog() {
  const cards = [
    {
      id: "01",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "02",
      title: "YUGURISH YO‘LAKCHALARINI SOTIB OLING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "03",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
    {
      id: "04",
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
  ];

  const [language, setLanguage] = useState("uz");

  useEffect(() => {
    const currentLang = i18n.language || "uz";
    setLanguage(currentLang);
  }, []);

  const getLocalizedField = (item, field) => {
    const supportedLangs = ["uz", "ru"];
    const currentLang = supportedLangs.includes(language) ? language : "uz";
    return item[`${field}_${currentLang}`];
  };

  const [name, setName] = useState();

  useEffect(() => {
    fetch("http://142.93.111.17:3002/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setName(data?.data);
        console.log(data?.data);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      });
  }, []);
  // console.log(name);

  return (
    <div className="relative p-5 bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        speed={1000}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination-catalog",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-5 h-3 inline-block mx-1 rounded-xl border-1 border-[#54ed21] transition-all duration-300"></span>`,
        }}
        breakpoints={{
          1050: {
            slidesPerView: 5,
          },
          990: {
            slidesPerView: 4,
          },
          770: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {Array.isArray(name) &&
          name.map((card) => (
            <SwiperSlide key={card?.id}>
              <NavLink>
                <div className="w-[210px] h-[240px] max-[550px]:w-full max-[550px]:px-5 relative my-16 shadow-md hover:shadow-lg group p-3 rounded-xl bg-white flex items-center justify-center transition-transform duration-400 hover:scale-103">
                  <h2 className="text-center text-lg font-one">
                     {card?.name.uz}
                  </h2>
                  <div className="bg-black/10 backdrop-blur-xs group-hover:block hidden duration-300 cursor-pointer absolute top-0 left-0 w-full h-full rounded-xl">
                    <p className="text-center pt-20 text-[#17f80b] text-shadow-2xs sm:md md:lg lg:text-xl font-bold">
                      Catigoriaga o'tish
                    </p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        {/* Custom Arrow Buttons */}
        <div className="custom-prev absolute max-lg:hidden left-5 -bottom-5 w-[40px] h-[40px] rounded-[50%] -translate-y-1/2 z-20 cursor-pointer border text-lg font-bold bg-black/30 backdrop-blur-sm text-gray-100 hover:bg-[#323131d3] transition flex items-center justify-center">
          <FaArrowLeft />
        </div>
        <div className="custom-next absolute max-lg:hidden right-5 -bottom-5 w-[40px] h-[40px] -translate-y-1/2 z-20 cursor-pointer border text-xl font-bold bg-black/30 backdrop-blur-sm text-gray-100 p-3 rounded-full hover:bg-[#323131d3] transition flex items-center justify-center">
          <FaArrowRight />
        </div>
        {/* Custom Pagination */}
        <div className="custom-pagination-catalog  hidden lg:block max-md:hidden absolute bottom-5 left-1/3 z-10 max-lg:left-1/2 max-lg:bottom-16"></div>
      </Swiper>
    </div>
  );
}
