import {  useState } from 'react'
import aboutBg from '../../assets/decor-line-bg.svg'
import decorLeft from '../../assets/about-image-line.svg'
import aboutvideo from '../../assets/about.webm'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AboutTop() {
  const { t } = useTranslation()
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Yuklanish tugagach Skeletonni yo'qotish
  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  return (
    <div className="relative">
      <img src={aboutBg} alt="" className="hidden lg:block absolute left-0" />
      <section className="max-w-7xl mx-auto px-[1rem]">
        <div className="flex flex-col md:grid md:grid-cols-11">
          {/* Matn tomoni */}
          <div className="col-span-5 z-0 md:pr-4 lg:pr-10 flex flex-col justify-center gap-5 md:gap-10 relative">
            <img
              src={decorLeft}
              alt=""
              className="hidden md:block absolute md:w-40 lg:w-60 -bottom-10 -right-30 lg:-bottom-9 lg:right-10 lg:rotate-180"
            />
            <h2 className="font-one text-xl sm:text-2xl lg:text-4xl font-bold text-blue-950">
              {t('aboutTop.title')}
            </h2>
            <p className="font-medium text-gray-700 z-0 text-sm md:text-md">
              {t('aboutTop.description')}
            </p>
          </div>

          {/* Video tomoni */}
          <div className="col-span-6 pt-5 md:pt-15">
            {!videoLoaded && (
              <Skeleton height={350} className="rounded-2xl shadow-xl" />
            )}
            <video
              src={aboutvideo}
              controls
              autoPlay
              muted
              playsInline
              onLoadedData={handleVideoLoaded}
              className={`rounded-2xl shadow-xl w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutTop
