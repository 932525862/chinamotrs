import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import { useEffect, useState } from 'react'
import { IoArrowUndoCircleOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { Loader } from 'lucide-react'

const News = () => {
  const navigate = useNavigate()
  const pathName = useLocation()
  const baseUrl = import.meta.env.VITE_BASE_URL
  const uploadBase = import.meta.env.VITE_UPLOAD_BASE
  const { i18n } = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'

  const [data, setData] = useState([])
  const getApi = () => {
    fetch(`${baseUrl}/api/news`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data?.data)
      })
      .catch((err) => {
        console.error('Xatolik:', err)
      })
  }
  useEffect(() => {
    getApi()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  const { id } = useParams()
  const item = data.find((element) => element.id === parseInt(id))
  const randomItem = data.length > 0 ? data[Math.floor(Math.random() * data.length)] : null

  if (!data) {
    return (
      <div className="w-full justify-center">
        <p className="">Yuklanmoqda</p>
      </div>
    )
  }

  return (
    <div className="">
      <section className="max-w-7xl mx-auto px-[1rem] pt-5">
        {item ? (
          <main className="">
            <div className="">
              <div>
                <p className="text-xl md:text-2xl font-medium mb-5">{item.text[lang]}</p>
              </div>
              <img
                src={`${uploadBase}${item.image_url}`}
                alt=""
                className="w-full h-60 sm:h-70 md:h-90 lg:h-120 rounded-2xl object-cover"
              />
            </div>
            <div className=" mt-10">
              <button
                onClick={() => navigate(-1)}
                className=" relative group cursor-pointer border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 flex items-center gap-2"
              >
                <span className="font-one text-green-500 group-hover:text-white relative duration-300 z-1">
                  Orqaga qaytish
                </span>
                <IoArrowUndoCircleOutline className="text-green-500 text-2xl group-hover:text-white relative duration-300 z-1" />
                <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
              </button>
            </div>
          </main>
        ) : (
          <main className="">
            <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-5">
              <span className="">Tafsiya Etilgan Yangiliklar</span>
              <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
            </h3>
            {randomItem && (
              <div className="">
                <div>
                  <p className="text-xl md:text-2xl font-medium mb-5">{randomItem.text[lang]}</p>
                </div>
                <img
                  src={`${uploadBase}${randomItem.image_url}`}
                  alt=""
                  className="w-full h-60 sm:h-70 md:h-90 lg:h-120 rounded-2xl object-cover"
                />
              </div>
            )}
          </main>
        )}

        <div className="mt-15">
          <h3 className="text-xl pb-7 md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3">
            <span className="">Barcha Yangiliklar</span>
            <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {data.map((item) => (
              <li key={item.id} className="group">
                <Link to={`/news/${item.id}`} className="">
                  <div className="overflow-hidden rounded-2xl bg-white p-3   shadow-xl">
                    <div className="overflow-hidden rounded-t-xl rounded-b-sm h-70">
                      <img
                        src={`${uploadBase}${item.image_url}`}
                        alt={item.text[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 duration-300"
                      />
                    </div>
                    <p className="font-medium text-[17px]  text-gray-900 line-clamp-2 group-hover:text-green-500  pt-2">
                      {item.text[lang]}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default News
