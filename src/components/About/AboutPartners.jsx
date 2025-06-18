import Marquee from 'react-fast-marquee'
import line from '../../assets/decor-right-black.svg'
import Volt from '../../assets/about-marque-volt.png'
import zoodmall from '../../assets/about-marque-zoodmall.png'
import shua from '../../assets/about-marque-shua.png'
import lifegym from '../../assets/about-marque-lifegym.png'
import fitland from '../../assets/about-marque-fitland.png'
import express from '../../assets/about-marque-express.png'
import abad from '../../assets/about-marque-abad.png'
// import { useEffect, useState } from 'react'

const base = [
  {
    img: Volt,
  },
  {
    img: zoodmall,
  },
  {
    img: shua,
  },
  {
    img: lifegym,
  },
  {
    img: fitland,
  },
  {
    img: express,
  },
  {
    img: abad,
  },
]
function AboutPartners() {
  // const [data, setData] = useState([])
  // const getApi = () => {
  //   fetch(`${urlApi}/partners`)
  //     .then((data) => {
  //       setData(data)
  //     })
  //     .catch((err) => {
  //       console.error('Xatolik:', err)
  //     })
  // }

  // useEffect(() => {
  //   getApi()
  // }, [])

  // console.log(data)

  return (
    <div>
      <section className="max-w-7xl mx-auto py-15 px-[1rem]">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-5">
          <span className="">HAMKORLARIMIZ</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>
        <Marquee>
          {base.map((item, index) => (
            <div
              key={index}
              className="p-5 mx-3 md:mx-5 rounded-2xl shadow-[5px_5px_20px]/15 my-5 w-auto"
            >
              <img src={item.img} alt="" className="w-20 h-18 md:w-35 md:h-30 object-contain" />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  )
}

export default AboutPartners
