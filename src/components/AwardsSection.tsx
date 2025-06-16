import React from "react";
import { motion } from "framer-motion";

const awards = [
    {
        title: "Booking.com",
        year: "2025",
        image: "/DigitalAwardTRA.png",
    },
    {
        title: "Best Luxury Resort",
        year: "2023",
        image: "/awards/luxury-award.png",
    },
    {
        title: "Sustainability Excellence",
        year: "2022",
        image: "/awards/sustainability-award.png",
    },
];

const AwardsSection = () => {
    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren"
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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

    return (
        <motion.section
            className="bg-white px-6 md:px-20 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Section Heading */}
            <motion.div
                className="text-center mb-12"
                variants={headingVariants}
            >
                <motion.p
                    className="text-sm text-[#009ee2] font-semibold uppercase tracking-wide"
                    variants={headingVariants}
                >
                    Recognitions & Accolades
                </motion.p>
                <motion.h2
                    className="text-4xl font-light mt-2 text-[#0c1f4f]"
                    variants={headingVariants}
                >
                    Honoured by the World
                </motion.h2>
            </motion.div>

            {/* Awards Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
                variants={gridVariants}
            >
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                        >
                            <motion.img
                                src={award.image}
                                alt={award.title}
                                className="h-24 w-auto mb-4 object-contain"
                                initial={{ filter: "grayscale(20%)" }}
                                whileHover={{
                                    filter: "grayscale(0%)",
                                    scale: 1.05
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <motion.h3
                            className="text-lg font-semibold text-gray-800"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            {award.title}
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            {award.year}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default AwardsSection;