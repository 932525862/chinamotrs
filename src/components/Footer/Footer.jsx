import { FaHome, FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { TiArrowDownOutline } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'

const nav = [
  {
    text: 'Bosh Sahifa',
    to: '/',
  },
  {
    text: 'Biz Haqimizda',
    to: '/about',
  },
  {
    text: 'Kategoriyalar',
    to: '/category',
  },
  {
    text: 'Yangiliklar',
    to: '/news',
  },
  {
    text: "Bog'lanish",
    to: '/contact',
  },
]
export const categoryBase = [
  { id: 'gantellar', name: 'Gantellar' },
  { id: 'massaj-kreslolari', name: 'Massaj kreslolari' },
  { id: 'yugurish-yolakchalari', name: 'Yugurish yo‘lakchalari' },
  { id: 'velotrenajyorlar', name: 'Velotrenajyorlar' },
  { id: 'fitnes-toplari', name: 'Fitnes to‘plari' },
  { id: 'qorish-mashinalari', name: 'Qorish mashinalari' },
  { id: 'trenajorlar', name: 'Trenajorlar' },
]

function Footer() {
  const navigateTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <li className="border-r border-gray-600 px-5 text-center py-10">
            <ul className="flex flex-col items-center gap-5">
              <li className="flex flex-col items-center gap-1">
                <FaHome className="text-4xl text-green-700" />
                <div className="text-xl font-bold text-blue-950/80">Manzil:</div>
                <p className="font-medium text-gray-900">
                  Toshkent shahri, chilonzor tumani, naqqoshlik ko'chasi
                </p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <IoIosMail className="text-4xl text-green-700" />
                <div className="text-xl font-bold text-blue-950/80">Email:</div>
                <a href="mailto:info@example.com" className="font-medium text-gray-900">
                  info@example.com
                </a>
              </li>
              <li className="flex flex-col items-center gap-1">
                <FaPhone className="text-4xl text-green-700" />
                <div className="text-xl font-bold text-blue-950/80">Yagona bog'lanish markazi:</div>
                <a href="tel:+998999999999" className="font-medium text-gray-900">
                  +998999999999
                </a>
              </li>
            </ul>
          </li>
          <li className="border-r border-gray-600 py-10">
            <nav className="text-center flex flex-col items-center">
              <div className="text-xl font-bold text-black">Menu:</div>
              <ul className="flex flex-col gap-2 mt-3">
                {nav.map((item, index) => (
                  <li key={index} className="">
                    <NavLink
                      to={item.to}
                      className="text-xl tracking-wider font-medium text-blue-950/90 hover:text-green-700"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                onClick={navigateTop}
                className="cursor-pointer flex flex-col items-center mt-6"
              >
                <TiArrowDownOutline className="rotate-180 text-5xl text-green-700/74 animate-bounce" />
                <span className="text-xl font-medium mt-3 text-green-700/74 border-3 rounded-full py-1 px-3 border-green-700/74">
                  Yuqoriga chiqish
                </span>
              </button>
            </nav>
          </li>
          <li className="py-10 flex flex-col items-center text-center">
            <div className="text-xl  font-bold mb-4">Kategoriyalar</div>
            <div className="flex flex-col gap-2">
              {categoryBase.map((item) => (
                <Link
                  key={item.id}
                  to={`/category/${item.id}`}
                  className="text-gray-800 font-medium hover:text-green-700 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
