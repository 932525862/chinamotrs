import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
