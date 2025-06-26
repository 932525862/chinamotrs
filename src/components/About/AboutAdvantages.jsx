import { useTranslation } from "react-i18next";
import line from '../../assets/decor-right-black.svg';
import { FaGlobeAmericas, FaTruck, FaUserShield } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { Helmet } from "react-helmet";

function AboutAdvantages() {
  const { t } = useTranslation();

  const icons = [
    <FaUserShield />,
    <FaTruck />,
    <GiAutoRepair />,
    <FaGlobeAmericas />
  ];

  const cardData = t("advantages.cards", { returnObjects: true });

  return (
    
    <div className='bg-gray-100'>
     <Helmet>
        <title>Chinamotors</title>
        <meta name="description" content="Zamonaviy trenajorlar, sport anjomlari va massaj qurilmalari" />
      </Helmet>
      <section className="max-w-7xl mx-auto pt-10 pb-15 px-[1rem]">
        <div className="">
          <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3">
            <span>{t("advantages.title")}</span>
            <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
          </h3>
          <p className="font-medium text-gray-500">{t("advantages.subtitle")}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5 md:gap-7">
            {cardData.map((item, index) => (
              <li
                key={index}
                className="bg-white lg:even:mt-10 lg:odd:mb-10 flex flex-col items-center gap-5 text-center px-5 py-10 rounded-2xl shadow-[3px_3px_15px]/20"
              >
                <div className="text-4xl md:text-5xl text-red-500">{icons[index]}</div>
                <h4 className="text-md font-one text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutAdvantages;
