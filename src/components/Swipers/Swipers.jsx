import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import hero1 from "../../assets/hero.1.jpg";
import hero2 from "../../assets/hero.4.jpg";
import hero3 from "../../assets/hero.2.png";
import hero4 from "../../assets/hero.3.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";


export default function SwiperSlides() {
  // const swiperRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();
  
  const handleCardClick = () => {
      navigate("/category");
      scrollTo({ top: 0 });
  };
  
  const cards = [
    {
      id: "01",
      img: hero1,
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "02",
      img: hero2,
      title: "YUGURISH YO‘LAKCHALARINI SOTIB OLING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "03",
      img: hero3,
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "YUGURISH YO‘LAKCHALARI KATALOGI",
    },
    {
      id: "04",
      img: hero4,
      title: "TANANGIZNI O‘ZINGIZ XOHLAGAN TARZDA QILING",
      text: "KUCH ISHLATILADIGAN TRENAJYORLAR KATALOGI",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
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
        {cards.map((car, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${car.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="md:h-[100dvh] h-[80dvh] w-full px-10 py-20 text-white relative"
            >
              <div className="max-w-7xl h-full mx-auto flex flex-col max-sm:items-center gap-6">

                <span className="w-full h-full min-md:hidden bg-black/40 absolute top-0 left-0"></span>

                <div className="w-[250px] z-10 max-sm:hidden mt-3 border-b-2 border-r-2 border-green-500 rounded-[50%] px-7 py-4">
                  <p className="text-xl text-right ">
                    O'zbekiston bo'ylab yetkazib berish!
                  </p>
                </div>
                <h1 className="min-md:w-[600px] z-10 max-md:text-2xl max-sm:text-xl max-sm:text-center text-4xl font-one mt-5">
                  {car?.title}
                </h1>
                <p className="text-2xl z-10 max-md:text-xl max-sm:text-xl max-sm:text-center font-one text-[#595757]">
                  {car?.text}
                </p>
                <div>
                  <button
                  onClick={handleCardClick}
                  className="mt-5 bg-[#000000a6] font-one text-white relative overflow-hidden group cursor-pointer border-2 border-green-500 px-7 py-4 max-sm:py-2 transform duration-500 rounded-full flex items-center gap-3">
                    <span className="z-20 text-xl max-sm:text-sm">KATALOGGA O‘TISH</span>{" "}
                    <span className=" z-20 text-2xl "><RiArrowRightUpLine /></span>
                    <span className="w-full h-full z-10 absolute -left-100 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
                  </button>
                </div>
              </div>
            </div>
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
        <div className="custom-pagination max-md:hidden absolute bottom-20 left-10 z-10 max-lg:left-1/2 max-lg:bottom-16"></div>
      </Swiper>
    </div>
  );
}
