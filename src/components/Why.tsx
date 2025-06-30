import React from 'react';
import { motion } from "framer-motion";

function Why() {
    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section className={'w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12'}>
            <motion.h2
                className="text-4xl text-center font-title mb-6"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Why Choose Us
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div
                    className="bg-teal-50 p-6 rounded-lg border-2 border-transparent cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: 1,
                        borderColor: "rgba(13, 148, 136, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(0, 170, 170, 0.4)"
                    }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h3
                        className="text-xl font-semibold text-teal-800 mb-3"
                        variants={contentVariants}
                    >
                        Strategic Location
                    </motion.h3>
                    <motion.p
                        className="text-gray-700"
                        variants={contentVariants}
                    >
                        Conveniently located close to Bandaranaike International Airport and just minutes from Negombo
                        Beach.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-teal-50 p-6 rounded-lg border-2 border-transparent cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: -1,
                        borderColor: "rgba(13, 148, 136, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(0, 170, 170, 0.4)"
                    }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h3
                        className="text-xl font-semibold text-teal-800 mb-3"
                        variants={contentVariants}
                    >
                        Peaceful Setting
                    </motion.h3>
                    <motion.p
                        className="text-gray-700"
                        variants={contentVariants}
                    >
                        Escape the hustle and bustle in our calm, garden-surrounded environment perfect for relaxation.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-teal-50 p-6 rounded-lg border-2 border-transparent cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: 1,
                        borderColor: "rgba(13, 148, 136, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(0, 170, 170, 0.4)"
                    }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h3
                        className="text-xl font-semibold text-teal-800 mb-3"
                        variants={contentVariants}
                    >
                        Tour Options
                    </motion.h3>
                    <motion.p
                        className="text-gray-700"
                        variants={contentVariants}
                    >
                        Explore Sri Lanka's wonders with our carefully curated tour packages and local expertise.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-teal-50 p-6 rounded-lg border-2 border-transparent cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: -1,
                        borderColor: "rgba(13, 148, 136, 0.3)",
                        boxShadow: "0 10px 25px -5px rgba(0, 170, 170, 0.4)"
                    }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h3
                        className="text-xl font-semibold text-teal-800 mb-3"
                        variants={contentVariants}
                    >
                        Eco-Friendly
                    </motion.h3>
                    <motion.p
                        className="text-gray-700"
                        variants={contentVariants}
                    >
                        Experience sustainable tourism with our environmentally conscious practices and natural
                        surroundings.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Why;