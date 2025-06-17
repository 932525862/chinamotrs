import { Toaster } from 'sonner';
import RouteProvider from './routes/route';
const App = () => {
  return (
    <>
      <RouteProvider />
      <Toaster richColors position="top-center" />
    </>
  )
}

export default App