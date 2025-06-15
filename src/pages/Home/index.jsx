import Calatog_cards from "../../components/Catalog/Calatog_cards"
import Catalog from "../../components/Catalog/Catalog"
import SwiperSlides from "../../components/Swipers/Swipers"

const HomePage = () => {
    return (
        <div>
            <SwiperSlides/>
            <Catalog/>
            <Calatog_cards/>
        </div>
    )
}

export default HomePage