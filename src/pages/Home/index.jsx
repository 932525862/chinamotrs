import Catalog from '../../components/Catalog/Catalog'
import HomeNews from '../../components/News/HomeNews'
import SwiperSlides from '../../components/Swipers/Swipers'

const HomePage = () => {
  return (
    <div>
      <SwiperSlides />
      <Catalog/>
      <HomeNews />
    </div>
  )
}

export default HomePage
