import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Grant1 from "../../assets/videos/gr1.mp4"; 
import Grant2 from "../../assets/videos/gr2.mp4"; 
import Grant3 from "../../assets/videos/gr3.mp4";  
import Grant4 from "../../assets/videos/gr4.mp4"; 
import Grant5 from "../../assets/videos/gr5.mp4"; 
import Grant6 from "../../assets/videos/gr6.mp4"; 
import { useTranslation } from "react-i18next";

const videos = [
  { video: Grant1, title: "1-video" },
  { video: Grant2, title: "2-video" },
  { video: Grant3, title: "3-video" },
  { video: Grant4, title: "4-video" },
  { video: Grant5, title: "5-video" },
  { video: Grant6, title: "6-video" },
];

export default function Coments() {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full mx-auto p-5 my-7 bg-neutral-50">
      <h2 className="lg:text-4xl md:3xl mb-14 font-one text-center">
        {t("coments.title")}
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          1050: { slidesPerView: 5 },
          990: { slidesPerView: 4 },
          770: { slidesPerView: 3 },
          550: { slidesPerView: 2 },
          100: { slidesPerView: 1 },
        }}
        className="max-w-7xl"
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-[230px] max-[550px]:w-full aspect-[9/16] relative group shadow-md rounded-xl overflow-hidden">
              <video
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
              >
                <source src={item.video} type="video/mp4" />
                Sizning brauzeringiz video formatini qo‘llab-quvvatlamaydi.
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
