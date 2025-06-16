import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {FaTripadvisor} from "react-icons/fa";
import {TbBrandBooking} from "react-icons/tb";
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const ratingCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <motion.div
            className="pt-16 bg-[#e3f2f8]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
                className="text-center"
                variants={containerVariants}
            >
              <motion.h1
                  className="text-4xl md:text-5xl font-bold text-[#0c1f4f] mb-4"
                  variants={heroTextVariants}
              >
                About Morning Star Resort
              </motion.h1>
              <motion.p
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                  variants={heroTextVariants}
              >
                Over 20 years of hospitality excellence in the heart of Negombo
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <motion.h2
                  className="text-3xl font-bold text-[#0c1f4f] mb-6"
                  variants={textVariants}
              >
                Our Story
              </motion.h2>
              <motion.p
                  className="text-gray-700 mb-6"
                  variants={textVariants}
              >
                What began as a humble family guesthouse has blossomed into Morning Star Resort Negombo,
                a beautifully renovated eco-resort that embodies the spirit of Sri Lankan hospitality.
                With over 20 years of experience in welcoming guests from around the world, we have grown
                while maintaining our commitment to personalized service and environmental responsibility.
              </motion.p>

              <motion.p
                  className="text-gray-700 mb-8"
                  variants={textVariants}
              >
                Our peaceful garden views and friendly staff create an atmosphere where guests can truly
                unwind and connect with nature. Every corner of our resort reflects our dedication to
                sustainable tourism and authentic Sri Lankan culture.
              </motion.p>

              <motion.h2
                  className="text-3xl font-bold text-[#0c1f4f] mb-6"
                  variants={textVariants}
              >
                Why Choose Us
              </motion.h2>
              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                    className="bg-red-50 p-6 rounded-lg"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-xl font-semibold text-red-800 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Strategic Location
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Conveniently located close to Bandaranaike International Airport and just minutes from Negombo Beach.
                  </motion.p>
                </motion.div>

                <motion.div
                    className="bg-blue-50 p-6 rounded-lg"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-xl font-semibold text-blue-800 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Peaceful Setting
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Escape the hustle and bustle in our calm, garden-surrounded environment perfect for relaxation.
                  </motion.p>
                </motion.div>

                <motion.div
                    className="bg-purple-50 p-6 rounded-lg"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-xl font-semibold text-purple-800 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Tour Options
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Explore Sri Lanka's wonders with our carefully curated tour packages and local expertise.
                  </motion.p>
                </motion.div>

                <motion.div
                    className="bg-amber-50 p-6 rounded-lg"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(217, 119, 6, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-xl font-semibold text-amber-800 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Eco-Friendly
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Experience sustainable tourism with our environmentally conscious practices and natural surroundings.
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.h2
                  className="text-3xl font-bold text-[#0c1f4f] mb-6"
                  variants={textVariants}
              >
                About Negombo
              </motion.h2>
              <motion.p
                  className="text-gray-700 mb-6"
                  variants={textVariants}
              >
                Negombo is a vibrant coastal city that perfectly captures Sri Lanka's rich cultural heritage.
                This unique destination showcases a beautiful blend of cultures, with influences from its colonial
                history and the Arabic-descendant locals who have called this area home for generations.
              </motion.p>

              <motion.p
                  className="text-gray-700 mb-8"
                  variants={textVariants}
              >
                The city's famous fish market, pristine beaches, and historic Dutch canal system make it an
                ideal base for exploring both the cultural and natural wonders of Sri Lanka.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
                className="text-3xl font-bold text-[#0c1f4f] mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              Guest Reviews
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center"
                  variants={ratingCardVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
              >
                <motion.div
                    className="text-4xl font-bold text-emerald-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.2
                    }}
                >
                  4.7
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                >
                  <FaTripadvisor size={48} className={'text-emerald-600'}/>
                </motion.div>
                <motion.div
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                  TripAdvisor Rating
                </motion.div>
                <motion.div
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                  846 Reviews
                </motion.div>
              </motion.div>

              <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center"
                  variants={ratingCardVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
              >
                <motion.div
                    className="text-4xl font-bold text-blue-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.3
                    }}
                >
                  8.5
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                >
                  <TbBrandBooking size={48} className={'text-blue-600'}/>
                </motion.div>
                <motion.div
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Booking.com Rating
                </motion.div>
                <motion.div
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                  145 Reviews
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <Footer/>
      </div>
  );
};

export default About;