import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Oops! Page not found</p>
            <p className="text-sm text-gray-500 mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Go back home
            </Link>
        </div>
    )
}

export default NotFoundPage
