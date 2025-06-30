import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Star } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

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

    const socialVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1.2 + (i * 0.1),
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        })
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
                <div className="w-full mx-auto">
                    <p className="font-script text-xl md:text-3xl text-white/90">
                        Your Haven of Serenity and Comfort
                    </p>
                    <motion.h1
                        className="text-4xl md:text-7xl mb-6 font-title"
                        variants={itemVariants}
                    >
                        Morning Star Resorts
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-6xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Nestled in nature's embrace and designed with luxury in mind, Morning Star Resorts offers a perfect blend of tranquility, comfort, and exceptional service. Whether you're here for a relaxing getaway, a romantic retreat, or a family vacation, we are committed to making your stay unforgettable.
                    </motion.p>

                    {/* Review Stats */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 mb-8"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="flex items-center bg-white/20 backdrop-blur-md px-5 py-3 rounded-full"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                        >
                            <img src="/trip-ico.png" alt="TripAdvisor" className="w-8 h-8 mr-2" />
                            <div className="text-left">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} fill="#FFC107" color="#FFC107" size={14} />
                                    ))}
                                </div>
                                <p className="text-sm"><span className="font-bold">4.7</span> from <span className="font-bold">846</span> reviews</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center bg-white/20 backdrop-blur-md px-5 py-3 rounded-full"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                        >
                            <img src="/booking-ico.png" alt="Booking.com" className="w-8 h-8 mr-2 rounded-lg" />
                            <div className="text-left">
                                <div className="bg-[#003580] text-white text-xs px-2 py-1 rounded inline-block">8.5</div>
                                <p className="text-sm ml-1 inline-block">Exceptional • <span className="font-bold">145</span> reviews</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-6"
                        variants={itemVariants}
                    >
                        <a href="/accommodation" className="w-full sm:w-auto bg-teal-400 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                            Explore Rooms
                        </a>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        className="flex justify-center space-x-4 mt-8"
                        variants={itemVariants}
                    >
                        {[
                            {
                                icon: <Facebook size={20} />,
                                color: "bg-[#4267B2]",
                                custom: 0,
                                url: "https://www.facebook.com/morningstarresortslk"
                            },
                            {
                                icon: <Instagram size={20} />,
                                color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
                                custom: 1,
                                url: "https://www.instagram.com/morningstarresorts/"
                            },
                            {
                                icon: <FaTiktok size={20} />,
                                color: "bg-black",
                                custom: 2,
                                url: "https://www.tiktok.com/@morningstarresorts"
                            }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${social.color} p-3 rounded-full flex items-center justify-center text-white shadow-lg`}
                                custom={social.custom}
                                variants={socialVariants}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
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