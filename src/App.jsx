import { Toaster } from 'sonner'
import RouteProvider from './routes/route'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const App = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <RouteProvider />
      <Toaster richColors position="top-center" />
    </>
  )
}

export default App
