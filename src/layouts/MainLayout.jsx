import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
