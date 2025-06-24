// import AboutAdvantages from '../../components/About/AboutAdvantages'
import AboutPartners from '../../components/About/AboutPartners'
import AboutTop from '../../components/About/AboutTop'
import BrandVision from '../../components/About/BrandVision'
import ContactPage from '../Contact'

const AboutPage = () => {
  return (
    <div>
      <AboutTop />
      <BrandVision />
      {/* <AboutAdvantages /> */}
      <AboutPartners />
      <ContactPage/>
    </div>
  )
}

export default AboutPage
