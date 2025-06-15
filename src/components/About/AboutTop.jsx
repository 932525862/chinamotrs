import aboutBg from '../../assets/decor-line-bg.svg'
import aboutImg from '../../assets/about-img.jpg'
import decorLeft from '../../assets/about-image-line.svg'

function AboutTop() {
  return (
    <>
      <div className="">
        <img src={aboutBg} alt="" className="hidden lg:block absolute left-0" />
        <section className="max-w-7xl mx-auto px-[1rem]">
          <div className="flex flex-col md:grid md:grid-cols-11 ">
            <div className="col-span-5 z-0 md:pr-4 lg:pr-10 flex flex-col justify-center gap-5 md:gap-10 relative">
              <img
                src={decorLeft}
                alt=""
                className="hidden md:block absolute md:w-40 lg:w-60 -bottom-10 -right-30 lg:-bottom-9 lg:right-10 lg:rotate-180"
              />
              <h2 className="font-one text-xl sm:text-2xl lg:text-4xl font-bold text-green-500">
                GRANT FITNES - FAQAT ONLINE DOKON EMAS
              </h2>
              <p className="font-medium text-gray-700 z-0 text-sm md:text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque commodi
                voluptatibus porro, accusantium optio consectetur consequatur explicabo
                exercitationem quo ipsa, temporibus similique accusamus impedit omnis tempora, earum
                laboriosam eius?
              </p>
            </div>
            <div className="col-span-6 pt-5 md:pt-15">
              <img src={aboutImg} alt="" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutTop
