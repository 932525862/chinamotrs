import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import video from "../../assets/video.mp4";

const videos = [
  {
    video: video,
  },
  {
    video: video,
  },
  {
    video: video,
  },
  {
    video: video,
  },
  {
    video: video,
  },
  {
    video: video,
  },
  {
    video: video,
  },
];

export default function Coments() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative w-full mx-auto p-5 my-7">
      <h2 className="lg:text-4xl md:3xl font-semibold text-center">Mijozlarimiz fikirlari</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={15}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
        className="max-w-7xl"
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index} className="flex items-start justify-center">
            <div className="w-[230px] max-[550px]:w-full relative group my-10 max-[270px]:w-full h-[250px]  shadow-md rounded-xl">
              <video
                controls
                autoPlay
                loop
                muted
                className={`w-full h-full rounded-md transition-all object-cover duration-1000 ease-in-out transform ${
                  index === activeIndex ? "scale-100" : "scale-100"
                }`}
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" absolute top-0 left-0 w-full h-full rounded-lg bg-black/40 group-hover:hidden flex items-center justify-center text-white">text kerak bolsa</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
