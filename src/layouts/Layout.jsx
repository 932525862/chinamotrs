import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className='p-4'>
            <Outlet />
        </main>
    )
}

export default Layout