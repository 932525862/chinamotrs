import brandImg from '../../assets/brandImg.jpg'
function BrandVision() {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-15 md:pt-35 px-[1rem]">
        
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-10 md:items-center">
          <div className="overflow-hidden rounded-2xl md:w-6/10 group md:h-80">
            <img
              src={brandImg}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />
          </div>
          <div className="md:w-4/10 ">
            <h4 className="lg:text-2xl uppercase text-md sm:text-xl md:text-md  mb-1 md:mb-2 lg:mb-5 font-one text-blue-950 font-bold">
              "GRANT FITNES" sport buyumlari sotadigan O'zbekistondagi eng katta do'konlardan biri
              hisoblanadi.
            </h4>
            <p className="text-md sm:text-xl font-medium text-gray-700">
              Do'kon bundan keyin ham o'z tovarlari bilan xaridorlarini xayron qilish va
              quvontirishda davom etadi.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandVision
