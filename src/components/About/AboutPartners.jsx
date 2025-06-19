import Marquee from 'react-fast-marquee'
import line from '../../assets/decor-right-black.svg'
import { useEffect, useState } from 'react'
function AboutPartners() {
  const [data, setData] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL
  const uploadBase = import.meta.env.VITE_UPLOAD_BASE
  const getApi = () => {
    fetch(`${baseUrl}/api/partners`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log('hatolik', err)
      })
  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <div>
      <section className="max-w-7xl mx-auto py-15 px-[1rem]">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-5">
          <span className="">HAMKORLARIMIZ</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>
        <Marquee>
          {data?.map((item) => (
            <div
              key={item.id}
              className="p-5 mx-3 md:mx-5 rounded-2xl shadow-[5px_5px_20px]/15 my-5 w-auto"
            >
              <img
                src={`${uploadBase}${item.logo}`}
                className="w-20 h-18 md:w-35 md:h-30 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  )
}

export default AboutPartners
