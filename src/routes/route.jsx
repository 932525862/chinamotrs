import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home"
import AboutPage from "../pages/About"
import CategoryPage from '../pages/Category';
import ContactPage from '../pages/Contact';
import NotFoundPage from "../pages/NotFound";
import Navbar from "../components/Navbar/navbar";

export const RouteProvider = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>

    )
}