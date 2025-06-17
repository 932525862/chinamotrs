import AboutHome from '../../components/About/AboutHome'
import Catalog from '../../components/Catalog/Catalog'
import Coments from '../../components/Coments/Coments'
import HomeNews from '../../components/News/HomeNews'
import Swiper_Catalog from '../../components/Swipers/Swiper_Catalog'
import SwiperSlides from '../../components/Swipers/Swipers'

const HomePage = () => {
  return (
    <div>
      <SwiperSlides />
      <Swiper_Catalog/>
      <Catalog/>
      <AboutHome/>
      <HomeNews />
      <Coments/>
    </div>
  )
}

export default HomePage
