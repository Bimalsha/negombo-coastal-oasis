// src/components/PageLoader.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loader on route change
        setIsLoading(true);

        // Hide loader after delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeOut" }
                    }}
                >
                    <motion.div
                        className="w-24 h-24 relative flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute h-16 w-16 rounded-full border-4 border-t-transparent border-[#009ee2]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.img
                            src="/logo.png"
                            alt="Logo"
                            className="w-12 h-12 object-contain z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.p
                        className="mt-4 text-[#0c1f4f] font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;