import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import line from '../../assets/decor-right-black.svg'

function AboutPartners() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BASE_URL
  const uploadBase = import.meta.env.VITE_UPLOAD_BASE

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`${baseUrl}/api/partners`)
      .then((res) => {
        if (!res.ok) throw new Error('Server bilan muammo')
        return res.json()
      })
      .then((resData) => {
        setData(Array.isArray(resData?.data) ? resData.data : [])
      })
      .catch((err) => {
        console.error('Xatolik:', err)
        setError('Maʼlumotlarni yuklashda xatolik yuz berdi.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <section className="max-w-7xl mx-auto py-15 px-[1rem]">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-5">
          <span className="">HAMKORLARIMIZ</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>

        {loading ? (
          <div className="flex gap-5 overflow-hidden">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="w-32 h-20">
                  <Skeleton height={80} width={120} />
                </div>
              ))}
          </div>
        ) : error ? (
          <p className="text-red-500 font-medium">{error}</p>
        ) : data.length === 0 ? (
          <p className="text-gray-500">Hozircha hamkorlar ro‘yxati mavjud emas</p>
        ) : (
          <Marquee pauseOnHover gradient={false}>
            {data.map((item) => (
              <div
                key={item.id}
                className="p-5 mx-3 md:mx-5 rounded-2xl shadow-[5px_5px_20px]/15 my-5 w-auto bg-white"
              >
                <img
                  src={`${uploadBase}${item.logo}`}
                  alt={item.name || 'partner logo'}
                  className="w-20 h-18 md:w-35 md:h-30 object-contain"
                />
              </div>
            ))}
          </Marquee>
        )}
      </section>
    </div>
  )
}

export default AboutPartners
