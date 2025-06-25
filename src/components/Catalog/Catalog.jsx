import decor from "../../assets/decor-right-black.svg";
import CategoryGrid from "../../pages/Category/components/category-grid";
import { useTranslation } from "react-i18next"; // ✅ tarjima uchun
import { Helmet } from "react-helmet";

function Catalog() {
  const { t } = useTranslation();

  return (
    <section className="bg-neutral-50 py-16">
       <Helmet>
        <title>Chinamotors</title>
        <meta name="description" content="Zamonaviy trenajorlar, sport anjomlari va massaj qurilmalari" />
      </Helmet>
      <div className="max-w-7xl px-5 mx-auto max-md:px-3">
        <div className="flex flex-col items-center relative">
          <h1 className="w-[450px] text-4xl max-md:text-2xl max-md:w-full font-one text-center">
            {t("catalog.title")}
          </h1>
          <p className="text-xl text-center font-one py-5">
            {t("catalog.subtitle")}
          </p>
          <img
            src={decor}
            alt=""
            className="inline-block max-md:hidden rotate-[180deg] absolute top-1/2 left-16 max-lg:left-0"
          />
          <img
            src={decor}
            alt=""
            className="inline-block max-md:hidden absolute top-1/2 right-16 max-lg:right-0"
          />
        </div>
        <CategoryGrid />
      </div>
    </section>
  );
}

export default Catalog;
