import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import { useEffect, useState } from 'react'
import { IoArrowUndoCircleOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const News = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const baseUrl = import.meta.env.VITE_BASE_URL
  const uploadBase = import.meta.env.VITE_UPLOAD_BASE
  const { i18n } = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { id } = useParams()
  const parsedId = parseInt(id)

  const getApi = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${baseUrl}/api/news`)
      if (!res.ok) throw new Error('Maʼlumot yuklanmadi')

      const json = await res.json()
      setData(json?.data || [])
    } catch (err) {
      console.error('Xatolik:', err)
      setError('Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const item = parsedId ? data.find((el) => el.id === parsedId) : null
  const randomItem = data.length > 0 ? data[Math.floor(Math.random() * data.length)] : null

  return (
    <div>
      <section className="max-w-7xl mx-auto px-[1rem] pt-5">
        {/* Katta rasm bo‘limi */}
        {loading ? (
          <div className="mb-10">
            <Skeleton height={30} width="60%" style={{ marginBottom: 20 }} />
            <Skeleton height={400} className="rounded-2xl" />
          </div>
        ) : error ? (
          <p className="text-red-600 text-lg font-medium py-5">{error}</p>
        ) : item ? (
          <main>
            <p className="text-xl md:text-2xl font-medium mb-5">
              {item.text?.[lang] || 'Matn mavjud emas'}
            </p>
            <img
              src={`${uploadBase}${item.image_url}`}
              alt={item.text?.[lang] || 'Yangilik rasmi'}
              className="w-full h-60 sm:h-70 md:h-90 lg:h-120 rounded-2xl object-cover"
            />
            <div className="mt-10">
              <button
                onClick={() => navigate(-1)}
                className="relative group cursor-pointer border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 flex items-center gap-2"
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
          <main>
            <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-5">
              <span>Tavsiya Etilgan Yangiliklar</span>
              <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
            </h3>
            {randomItem && (
              <>
                <p className="text-xl md:text-2xl font-medium mb-5">
                  {randomItem.text?.[lang] || 'Matn mavjud emas'}
                </p>
                <img
                  src={`${uploadBase}${randomItem.image_url}`}
                  alt={randomItem.text?.[lang] || 'Yangilik rasmi'}
                  className="w-full h-60 sm:h-70 md:h-90 lg:h-120 rounded-2xl object-cover"
                />
              </>
            )}
          </main>
        )}

        {/* Barcha yangiliklar */}
        <div className="mt-15">
          <h3 className="text-xl pb-7 md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3">
            <span>Barcha Yangiliklar</span>
            <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <li key={idx}>
                      <Skeleton height={200} className="rounded-xl" />
                      <Skeleton height={20} count={2} style={{ marginTop: 10 }} />
                    </li>
                  ))
              : data.map((item, idx) => (
                  <li key={item?.id || idx} className="group">
                    <Link to={`/news/${item.id}`}>
                      <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
                        <div className="overflow-hidden rounded-t-xl rounded-b-sm h-70">
                          <img
                            src={`${uploadBase}${item.image_url}`}
                            alt={item.text?.[lang] || 'Yangilik rasmi'}
                            className="w-full h-full object-cover group-hover:scale-105 duration-300"
                          />
                        </div>
                        <p className="font-medium text-[17px] text-gray-900 line-clamp-2 group-hover:text-green-500 pt-2">
                          {item.text?.[lang] || 'Sarlavha yo‘q'}
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
