import { Link, useNavigate, useParams } from 'react-router-dom'
import { base } from '../News/HomeNews'
import line from '../../assets/decor-right-black.svg'

const News = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = base.find((element) => element.id === parseInt(id))
  return (
    <div>
      <section className="max-w-7xl mx-auto px-[1rem]">
        {item ? (
          <main className="flex gap-10">
            <div className="">
              <img src={item.img} alt="" className="" />
            </div>
            <div className="">
              <p className="">{item.desc}</p>
            </div>
          </main>
        ) : (
          ''
        )}
        <div className="mt-15">
          <h3 className="text-xl pb-7 md:text-2xl text-black/90 lg:text-4xl flex font-bold items-center font-one gap-3">
            <span className="">YANGILIKLAR</span>
            <img src={line} alt="" className="hidden sm:block sm:max-w-40 md:max-w-70" />
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    <p className="font-medium text-gray-900 group-hover:text-blue-700 pt-2">
                      {item.desc}
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
