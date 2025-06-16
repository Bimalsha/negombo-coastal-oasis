import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
    );
  }, [location.pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
      <div className="min-h-screen bg-[#e3f2f8]/30 flex flex-col">


        <div className="flex-grow flex items-center justify-center px-4">
          <motion.div
              className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-[#0c1f4f] text-white p-8 flex items-center justify-center">
                <motion.div
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative mx-auto mb-6 w-48 h-48"
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#009ee2]/30 rotate-45"></div>
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Compass size={80} className="text-[#009ee2]" />
                    </motion.div>
                  </motion.div>
                  <motion.h2
                      className="text-5xl font-bold mb-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                  >
                    404
                  </motion.h2>
                  <motion.p className="text-[#cc9933] font-medium text-lg">
                    Lost at sea
                  </motion.p>
                </motion.div>
              </div>

              <motion.div
                  className="md:w-1/2 p-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
              >
                <motion.h1
                    className="text-3xl font-bold text-[#0c1f4f] mb-4"
                    variants={itemVariants}
                >
                  Page Not Found
                </motion.h1>

                <motion.p
                    className="text-gray-600 mb-8"
                    variants={itemVariants}
                >
                  The shore you're looking for seems to have drifted away. Our compass can't find the page you requested.
                </motion.p>

                <motion.div className="space-y-3" variants={itemVariants}>
                  <Link to="/" className="flex items-center p-3 bg-[#009ee2] text-white rounded-lg hover:bg-[#009ee2]/80 transition-colors">
                    <Home className="mr-2" size={18} />
                    <span>Return to Home</span>
                  </Link>

                  <button
                      onClick={() => window.history.back()}
                      className="flex items-center p-3 w-full bg-[#cc9933]/10 text-[#cc9933] rounded-lg hover:bg-[#cc9933]/20 transition-colors"
                  >
                    <ArrowLeft className="mr-2" size={18} />
                    <span>Go Back</span>
                  </button>
                </motion.div>

                <motion.div
                    className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500"
                    variants={itemVariants}
                >
                  <p>If you believe this is an error, please contact our support team.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>
  );
};

export default NotFound;