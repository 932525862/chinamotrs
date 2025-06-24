import { NavLink } from "react-router-dom";
import line from "../../assets/decor-right-black.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import aboutvideo from "../../assets/about.webm";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AboutHome() {
  const { t } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-[1rem]">
        <div className="flex flex-col md:grid md:grid-cols-11">
          {/* Chap tomondagi video */}
          <div className="col-span-6 pt-5 md:pt-15 relative">
            {!videoLoaded && (
              <Skeleton
                height={350}
                borderRadius="1rem"
                className="w-full h-full"
            />
            )}
            <video
              src={aboutvideo}
              className={`rounded-2xl shadow-xl w-full transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
            />
          </div>

          {/* O'ng tomondagi matnlar */}
          <div className="mt-10 md:mt-0 col-span-5 z-0 md:pl-4 lg:pl-10 flex flex-col items-start justify-center gap-5 md:gap-10 relative">
            <h3 className="text-xl lg:text-2xl text-black/90 flex font-bold items-center font-one gap-3">
              <span>{t("aboutHome.title")}</span>
              <img
                src={line}
                alt=""
                className="hidden sm:block sm:max-w-40 md:max-w-50"
              />
            </h3>

            <h2 className="font-one text-xl lg:text-2xl font-bold text-[#E83630]">
              {t("aboutHome.subtitle")}
            </h2>

            <p className="font-medium text-gray-700 z-0 text-sm md:text-md">
              {t("aboutHome.description")}
            </p>

            <NavLink
              to="/about"
              className="relative group border-[3px] border-[#E83630] overflow-hidden rounded-full px-4 py-2 flex items-center gap-2"
            >
              <span className="font-one text-[#E83630] group-hover:text-white relative duration-300">
                {t("aboutHome.button")}
              </span>
              <FaArrowAltCircleRight className="text-[#E83630] group-hover:text-white relative duration-300" />
              <span className="bg-[#E83630] absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-1" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHome;
