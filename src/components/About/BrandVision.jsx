import { useTranslation } from 'react-i18next'
import brandImg from '../../assets/brandImg.jpg'
function BrandVision() {
  const { t } = useTranslation()
  return (
    <>
      <section className="max-w-7xl mx-auto pt-15 pb-10 md:pt-35 px-[1rem]">
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-10 md:items-center">
          <div className="overflow-hidden z-10 rounded-2xl md:w-6/10 group md:h-80">
            <img
              src={brandImg}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />
          </div>
          <div className="md:w-4/10 ">
            <h4 className="lg:text-2xl uppercase text-md sm:text-xl md:text-md  mb-1 md:mb-2 lg:mb-5 font-one text-blue-950 font-bold">
              {t('aboutTop.title2')}
            </h4>
            <p className="text-md sm:text-xl font-medium text-gray-700">{t('aboutTop.text')}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandVision
