import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Layouts
import MainLayout from '@/layouts/MainLayout'
import Layout from '../layouts/Layout'

import News from '../components/News/news'
import CategoryOnePage from '../pages/Category/components/category'
import MassageOnePage from '../pages/Category/components/Massage'

// Pages
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Category = lazy(() => import('@/pages/Category'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const RouteProvider = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/id/:id" element={<CategoryOnePage />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="category/massage/:id" element={<MassageOnePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/news" element={<News />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RouteProvider
