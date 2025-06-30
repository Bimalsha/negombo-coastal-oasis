import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {FaTripadvisor} from "react-icons/fa";
import {TbBrandBooking} from "react-icons/tb";
import {motion} from 'framer-motion';

const About = () => {
    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.8}
        }
    };

    const heroTextVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const ratingCardVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen ">
            <Navbar/>

            {/* Hero Section */}
            <motion.div
                className="relative h-screen w-full overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/coverpage.jpg')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
                </div>

                {/* Glass Effect Layer */}
                <motion.div
                    className="absolute inset-0 backdrop-blur-[5%] bg-white/10 z-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                />

                {/* Content */}
                <motion.div
                    className="relative z-20 flex items-center justify-center h-full text-center text-white px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-7xl mx-auto pt-16">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4 font-title text-teal-400"
                            variants={heroTextVariants}
                        >
                            Our Story
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl mb-8"
                            variants={heroTextVariants}
                        >
                            This is where our story begins..
                        </motion.p>
                        <motion.p
                            className="text-white mb-6 font-script text-2xl"
                            variants={textVariants}
                        >
                            What began as a humble family guesthouse has blossomed into Morning Star Resort Negombo,
                            a beautifully renovated eco-resort that embodies the spirit of Sri Lankan hospitality.
                            With over 20 years of experience in welcoming guests from around the world, we have grown
                            while maintaining our commitment to personalized service and environmental responsibility.
                        </motion.p>

                        <motion.p
                            className="text-white mb-8 font-script text-2xl"
                            variants={textVariants}
                        >
                            Our peaceful garden views and friendly staff create an atmosphere where guests can truly
                            unwind and connect with nature. Every corner of our resort reflects our dedication to
                            sustainable tourism and authentic Sri Lankan culture.
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>


            <div className={'w-full py-16'}>
                <div className={'w-[90%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row'}>

                    <div className={'lg:w-2/5'}>
                        <img src="/a2.jpg" alt="" className={'w-full h-96 object-cover rounded-lg'}/>

                    </div>
                    <div className={'md:w-1/5 flex justify-center items-center'}>

                    <span className={'text-7xl font-script text-center text-teal-400'}><span className={'text-2xl text-gray-400'}>Restuarant</span><br/>2000's</span>
                    </div>
                    <div className={'lg:w-2/5 mt-8 md:mt-0'}>
                        <img src="/a1.jpg" alt="" className={'w-full h-96 object-cover rounded-lg'}/>

                    </div>

                </div>
            </div>
            <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                 style={{backgroundImage: `url(/coverstory.jpg)`}}>
                {/* Full image overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>


            </div>
            <Footer/>
        </div>
    );
};

export default About;