import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import MainLayout from "@/layouts/MainLayout";
import Layout from "../layouts/Layout";

import Loading from "../components/Loading/loading";

// Pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Category = lazy(() => import("@/pages/Category"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const RouteProvider = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="p-4">
                <Loading />
            </div>}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>

                    <Route element={<Layout />}>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RouteProvider;
