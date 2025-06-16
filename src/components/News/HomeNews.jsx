import { Link, NavLink } from 'react-router-dom'
import line from '../../assets/decor-right-black.svg'
import image from '../../assets/news-img.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export const base = [
  {
    id: 1,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 1',
  },
  {
    id: 2,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 2',
  },
  {
    id: 3,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 3',
  },
  {
    id: 4,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 4',
  },
  {
    id: 5,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 5',
  },
  {
    id: 6,
    img: image,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi voluptatibus 6',
  },
]

function HomeNews() {
  const items = base.slice(0, 4)
  return (
    <div className="bg-gray-100">
      <section className="mx-auto max-w-7xl mt-15 flex flex-col items-start py-10">
        <h3 className="text-xl md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3 pb-10">
          <span className="">YANGILIKLAR</span>
          <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {items.map((item) => (
            <li key={item.id} className="group">
              <Link to={`/news/${item.id}`} className="">
                <div className="overflow-hidden rounded-2xl bg-white p-3   shadow-xl">
                  <div className="overflow-hidden rounded-t-xl rounded-b-sm">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full group-hover:scale-105 duration-300"
                    />
                  </div>
                  <p className="font-medium text-[17px]  text-gray-900 line-clamp-2 group-hover:text-blue-500  pt-2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <NavLink
          to="/news"
          className="mx-auto relative group border-[3px] border-blue-500 overflow-hidden rounded-full px-10 py-2 flex items-center gap-2"
        >
          <span className="font-one text-blue-500 group-hover:text-white relative duration-300 z-1">
            Barcha Yangiliklar
          </span>
          <FaArrowAltCircleRight className="text-blue-500 group-hover:text-white relative duration-300 z-1" />
          <span className="bg-blue-500 absolute w-full h-full left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
        </NavLink>
      </section>
    </div>
  )
}

export default HomeNews
