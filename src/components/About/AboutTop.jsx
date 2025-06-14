import aboutBg from '../../assets/decor-line-bg.svg'

function AboutTop() {
  return (
    <>
      <div className="">
        <img src={aboutBg} alt="" className="hidden lg:block absolute left-0" />
        <section className="max-w-7xl">
          <div className="grid grid-cols-2">
            <div className="">left</div>
            <div className="">right</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutTop
