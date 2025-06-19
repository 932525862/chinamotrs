import aboutBg from '../../assets/decor-line-bg.svg';
import aboutImg from '../../assets/homeAbout.png';
import decorLeft from '../../assets/about-image-line.svg';
import { useTranslation } from 'react-i18next'; // i18n chaqirildi

function AboutTop() {
  const { t } = useTranslation(); // t() funksiyasi chaqirildi

  return (
    <>
      <div className="relative">
        <img src={aboutBg} alt="" className="hidden lg:block absolute left-0" />
        <section className="max-w-7xl mx-auto px-[1rem]">
          <div className="flex flex-col md:grid md:grid-cols-11 ">
            {/* Matn tomoni */}
            <div className="col-span-5 z-0 md:pr-4 lg:pr-10 flex flex-col justify-center gap-5 md:gap-10 relative">
              <img
                src={decorLeft}
                alt=""
                className="hidden md:block absolute md:w-40 lg:w-60 -bottom-10 -right-30 lg:-bottom-9 lg:right-10 lg:rotate-180"
              />
              <h2 className="font-one text-xl sm:text-2xl lg:text-4xl font-bold text-green-500">
                {t("aboutTop.title")}
              </h2>
              <p className="font-medium text-gray-700 z-0 text-sm md:text-md">
                {t("aboutTop.description")}
              </p>
            </div>

            {/* Rasm tomoni */}
            <div className="col-span-6 pt-5 md:pt-15">
              <img src={aboutImg} alt="" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutTop;
