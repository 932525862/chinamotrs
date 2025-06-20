import { FaHome, FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { TiArrowDownOutline } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const nav = [
  {
    textKey: 'footer.nav.home',
    to: '/',
  },
  {
    textKey: 'footer.nav.about',
    to: '/about',
  },
  {
    textKey: 'footer.nav.category',
    to: '/category',
  },
  {
    textKey: 'footer.nav.news',
    to: '/news',
  },
  {
    textKey: 'footer.nav.contact',
    to: '/contact',
  },
]

function Footer() {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { i18n } = useTranslation()
  const lang = ['uz', 'ru'].includes(i18n.language) ? i18n.language : 'uz'

  const [data, setData] = useState([])
  const getCategory = () => {
    fetch(`${baseUrl}/api/categories`)
      .then((res) => res.json())
      .then((result) => {
        setData(result?.data || [])
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {/* Contact section */}
          <li className="border-r border-gray-600 px-5 text-center py-10">
            <ul className="flex flex-col items-center gap-5">
              <li className="flex flex-col items-center gap-1">
                <FaHome className="text-4xl text-green-500" />
                <div className="text-xl font-bold text-blue-950/80">{t('footer.addressTitle')}</div>
                <p className="font-medium text-gray-900">{t('footer.address')}</p>
              </li>
              <li className="flex flex-col items-center gap-1">
                <IoIosMail className="text-4xl text-green-500" />
                <div className="text-xl font-bold text-blue-950/80">{t('footer.emailTitle')}</div>
                <a href="mailto:info@example.com" className="font-medium text-gray-900">
                  info@example.com
                </a>
              </li>
              <li className="flex flex-col items-center gap-1">
                <FaPhone className="text-4xl text-green-500" />
                <div className="text-xl font-bold text-blue-950/80">{t('footer.phoneTitle')}</div>
                <a href="tel:+998977052027" className="font-medium text-gray-900">
                  +998 97 705 20 27
                </a>
              </li>
            </ul>
          </li>

          <li className="border-r border-gray-600 py-10">
            <nav className="text-center flex flex-col items-center">
              <div className="text-xl font-bold text-black">{t('footer.menuTitle')}</div>
              <ul className="flex flex-col gap-2 mt-3">
                {nav.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className="text-xl tracking-wider font-medium text-blue-950/90 hover:text-green-500"
                    >
                      {t(item.textKey)}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button className="cursor-pointer flex flex-col items-center mt-6">
                <TiArrowDownOutline className="rotate-180 text-5xl text-green-500 animate-bounce" />
                <span className="text-xl font-medium mt-3 text-green-500 border-3 rounded-full py-1 px-3 border-green-500">
                  {t('footer.scrollTop')}
                </span>
              </button>
            </nav>
          </li>

          <li className="py-10 flex flex-col items-center text-center">
            <div className="text-xl font-bold mb-4">{t('footer.categoriesTitle')}</div>
            <div className="flex flex-col gap-2">
              {data.slice(0, 9).map((item) => (
                <Link
                  key={item?.id}
                  to={`/category/${item?.id}`}
                  className="text-gray-800 font-medium hover:text-green-500 cursor-pointer"
                >
                  {item?.name?.[lang] || 'No name'}
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
