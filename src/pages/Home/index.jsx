import AboutHome from '../../components/About/AboutHome'
import Catalog from '../../components/Catalog/Catalog'
import Coments from '../../components/Coments/Coments'
import HomeNews from '../../components/News/HomeNews'
import Swiper_Catalog from '../../components/Swipers/Swiper_Catalog'
import SwiperSlides from '../../components/Swipers/Swipers'
// import CatalogMs from '../../components/CotalogMs/CatalogMs'
import AboutPartners from '../../components/About/AboutPartners'

const HomePage = () => {
  return (
    <div>
      <SwiperSlides />
      <Swiper_Catalog/>
      <Catalog/>
      {/* <CatalogMs/> */}
      <AboutHome/>
      <Coments/>
      <AboutPartners/>
      <HomeNews />
    </div>
  )
}

export default HomePage
