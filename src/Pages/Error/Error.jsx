// NotFound.jsx
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-300 text-center px-6">
      <h1 className="text-8xl font-extrabold text-white">404</h1>
      <p className="text-2xl mt-4 font-semibold">Page Not Found</p>
      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Decorative glow animation */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
    </div>
  );
}
