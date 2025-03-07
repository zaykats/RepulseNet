
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-800 text-dark-900 dark:text-white">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="mb-8">
            <span className="inline-block relative">
              <span className="text-8xl font-bold text-repulse-500">404</span>
              <span className="absolute w-full h-4 bg-repulse-200/50 bottom-4 left-0 -z-10"></span>
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page not found
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
          
          <Link to="/">
            <button className="px-6 py-3 rounded-full bg-repulse-500 text-white font-medium hover:bg-repulse-600 transition-colors flex items-center gap-2 mx-auto">
              <HomeIcon className="w-4 h-4" />
              Return to Home
            </button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
