import AboutHome from '../../components/About/AboutHome'
import Catalog from '../../components/Catalog/Catalog'
import Coments from '../../components/Coments/Coments'
import HomeNews from '../../components/News/HomeNews'
import Swiper_Catalog from '../../components/Swipers/Swiper_Catalog'
import SwiperSlides from '../../components/Swipers/Swipers'
import AboutPartners from '../../components/About/AboutPartners'
import HomeShowCase from '../../components/Swipers/Swiper_Home'

const HomePage = () => {
  return (
    <div>
      <HomeShowCase />
      <SwiperSlides />
      <Swiper_Catalog />
      <Catalog />
      <AboutHome />
      <Coments />
      <AboutPartners />
      <HomeNews />
    </div>
  )
}

export default HomePage
