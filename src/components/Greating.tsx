import React from 'react';
import { motion } from 'framer-motion';

function Greating() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="text-[#009ee2] uppercase font-semibold"
                        variants={itemVariants}
                    >
                        Welcome to Morning Star Resort Negombo!
                    </motion.p>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-[#0c1f4f] mb-4 mt-2"
                        variants={itemVariants}
                    >
                        Your Perfect Family Getaway
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl mx-auto"
                    >
                        Escape to the flora and fauna of a family-friendly small resort well equipped with eco-friendly
                        surroundings, bringing you the best of Negombo to your doorstep. Just minutes from Bandaranayaka
                        International Airport, our 3-star family resort offers garden facing rooms, Large outdoor pool,
                        separate kids pool and a cozy restaurant. With a mystifying blend of nature and warm
                        hospitality, we promise you a holiday to remember.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                </div>
            </div>
        </section>
    );
}

export default Greating;