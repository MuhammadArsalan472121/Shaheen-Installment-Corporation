
import { motion } from "framer-motion";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shaheen-50 py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-32 w-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-shaheen-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="relative z-10 h-full w-full flex items-center justify-center text-shaheen-900 text-7xl font-bold">
              404
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-shaheen-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-shaheen-500 hover:bg-shaheen-600 text-white rounded-lg transition-all duration-300 px-6"
            >
              <NavLink to="/" className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </NavLink>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-shaheen-200 text-shaheen-800 hover:bg-shaheen-50 rounded-lg px-6"
              onClick={() => window.history.back()}
            >
              <button className="flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
