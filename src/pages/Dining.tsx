import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Dining = () => {
  // Gallery images for dining
  const diningImages = [
    {
      id: 1,
      src: '/dinning.webp',
      alt: 'Fresh Seafood Platter',
      caption: 'Fresh Seafood Platter'
    },
    {
      id: 2,
      src: '/dinning1.webp',
      alt: 'Asian Fusion Cuisine',
      caption: 'Asian Fusion Cuisine'
    },
    {
      id: 3,
      src: '/dinning2.webp',
      alt: 'Restaurant Ambiance',
      caption: 'Restaurant Ambiance'
    },
    {
      id: 4,
      src: '/dinning3.webp',
      alt: 'Traditional Sri Lankan Dishes',
      caption: 'Traditional Sri Lankan Dishes'
    },
    {
      id: 5,
      src: '/dinning4.webp',
      alt: 'Signature Cocktails',
      caption: 'Signature Cocktails'
    },
    {
      id: 6,
      src: '/dinning5.webp',
      alt: 'Outdoor Dining Area',
      caption: 'Outdoor Dining Area'
    }
  ];

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

  const itemVariants = {
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

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
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
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <motion.div
            className="pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
        >
          <div
              className="relative h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('/dinning.webp')`
              }}
          >
            <motion.div
                className="absolute inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            ></motion.div>
            <motion.div
                className="relative z-10 flex items-center justify-center h-full text-center text-white px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    variants={heroTextVariants}
                >
                  Dining at Morning Star Restaurant
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl"
                    variants={heroTextVariants}
                >
                  Experience culinary excellence with Asian fusion cuisine and fresh seafood
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Dining Content */}
        <motion.section
            className="py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-12"
                variants={containerVariants}
            >
              <motion.p
                  className="text-lg text-gray-700 leading-relaxed mb-8"
                  variants={itemVariants}
              >
                Indulge in our exquisite fusion cuisine that perfectly blends traditional Asian flavors with contemporary culinary techniques.
                Our talented chefs create flavor-rich dishes using the freshest local ingredients, with a special emphasis on fresh seafood
                caught daily from the nearby waters of Negombo.
              </motion.p>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
                  variants={containerVariants}
              >
                <motion.div
                    className="bg-[#fff7ea] p-8 rounded-xl"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(204, 153, 51, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-2xl font-bold text-[#cc9933] mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Fresh Seafood
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Our proximity to Negombo's famous fishing harbor ensures the freshest catch of the day,
                    prepared with authentic Sri Lankan spices and cooking methods.
                  </motion.p>
                </motion.div>

                <motion.div
                    className="bg-blue-50 p-8 rounded-xl"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 158, 226, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.h3
                      className="text-2xl font-bold text-[#009ee2] mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Asian Fusion
                  </motion.h3>
                  <motion.p
                      className="text-gray-700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Experience the perfect harmony of traditional Asian cuisines with modern presentation,
                    creating unforgettable dining experiences for our guests.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Photo Gallery */}
        <motion.section
            className="pb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                className="text-3xl font-bold text-center text-[#0c1f4f] mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              Culinary Gallery
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={galleryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
              {diningImages.map((image, index) => (
                  <motion.div
                      key={image.id}
                      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      variants={imageVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      custom={index}
                  >
                    <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ y: 30, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold">{image.caption}</h3>
                    </motion.div>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>


        <Footer />
      </div>
  );
};

export default Dining;