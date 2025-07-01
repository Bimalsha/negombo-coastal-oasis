import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const lineVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: {
            opacity: 1,
            width: "100%",
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section
            className="flex justify-center pt-16 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex justify-between flex-col md:flex-row items-center w-full lg:w-[90%] px-4 sm:px-2 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Content */}
                <motion.div
                    className="text-left max-w-md mb-12 md:mb-0"
                    variants={containerVariants}
                >
                    <motion.p
                        className="text-sm text-teal-400 font-medium uppercase tracking-widest mb-4"
                        variants={textVariants}
                    >
                        Discover Morning Star Experiences
                    </motion.p>

                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-4xl md:text-5xl font-light leading-snug text-black"
                            variants={containerVariants}
                        >
                            <motion.span
                                variants={textVariants}
                                className="block "
                            >
                                Relaxation
                            </motion.span>
                            <motion.span
                                variants={textVariants}
                                className="block"
                            >
                                Adventure
                            </motion.span>
                            <motion.span
                                variants={textVariants}
                                className="block"
                            >
                                Celebration
                            </motion.span>
                        </motion.h1>
                    </div>

                    <motion.div
                        className="h-1 bg-teal-400 mt-6 w-20"
                        variants={lineVariants}
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="max-w-xl text-center md:text-left"
                    variants={textVariants}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.p
                        className="text-gray-700 text-base leading-relaxed mb-6"
                        variants={textVariants}
                    >
                        From beach vibes to thrilling watersports
                        to mouthwatering flavors, uncover unforgettable
                        adventures at Morning Star Resort Negombo.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default ExperienceSection;