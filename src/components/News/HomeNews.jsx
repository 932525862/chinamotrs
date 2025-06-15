import { Link, NavLink } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import image from '../../assets/news-img.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export const base = [
  {
    id: 1,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus ',
  },
  {
    id: 2,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus ',
  },
  {
    id: 3,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus ',
  },
  {
    id: 4,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus ',
  },
]

function HomeNews() {
  return (
    <div>
      <section className="mx-auto max-w-7xl mt-15 flex flex-col items-start">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-10">
          <span className="">YANGILIKLAR</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {base.map((item) => (
            <li key={item.id} className="group">
              <Link to={`/news/${item.id}`} className="">
                <div className="overflow-hidden rounded-2xl">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full group-hover:scale-105 duration-300"
                    />
                  </div>
                  <p className="font-medium text-gray-900 group-hover:text-green-500 pt-2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <NavLink
          to="/news"
          className="mx-auto relative group border-[3px] border-green-500 overflow-hidden rounded-full px-10 py-2 flex items-center gap-2"
        >
          <span className="font-one text-green-500 group-hover:text-white relative duration-300">
           Barcha Yangiliklar
          </span>
          <FaArrowAltCircleRight className="text-green-500 group-hover:text-white relative duration-300" />
          <span className="bg-green-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-1" />
        </NavLink>
      </section>
    </div>
  )
}

export default HomeNews
