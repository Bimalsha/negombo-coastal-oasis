import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Reference to element we want to scroll to
    const featuresRef = useRef(null);

    // Function to handle smooth scrolling
    const scrollToFeatures = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    // Animation variants
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/att1.jpg')`
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Full Glass Effect Layer */}
            <motion.div
                className="absolute inset-0 backdrop-blur-[5%] bg-white/10 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Content */}
            <motion.div
                className="relative z-20 flex items-center justify-center h-full text-center text-white px-4"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        Morning Star Resorts
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-6xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Your Haven of Serenity and Comfort
                        <br /><br />
                        Nestled in nature's embrace and designed with luxury in mind, Morning Star Resorts offers a perfect blend of tranquility, comfort, and exceptional service. Whether you're here for a relaxing getaway, a romantic retreat, or a family vacation, we are committed to making your stay unforgettable.
                    </motion.p>
                    <motion.div
                        className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
                        variants={itemVariants}
                    >
                        <a href="/accommodation" className="w-full sm:w-auto bg-teal-400 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                            Explore Rooms
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator with Animation */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFeatures}
                animate={{ y: [0, 10, 0] }}
                transition={{
                    y: {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-white rounded-full mt-2"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;