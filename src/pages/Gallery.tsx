import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {motion, AnimatePresence} from 'framer-motion';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        {id: 'all', name: 'All'},
        {id: 'rooms', name: 'Rooms'},
        {id: 'restaurant', name: 'Restaurant'},
        {id: 'pool', name: 'Pool'},
        {id: 'gardens', name: 'Gardens'},
        {id: 'attractions', name: 'Attractions'}
    ];

    const images = [
        {
            id: 1,
            src: '/doubledeluxe.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 2,
            src: '/family1.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 4,
            src: '/triple1.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },

        {
            id: 6,
            src: '/room6.webp',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 7,
            src: '/res1.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 8,
            src: '/res2.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 9,
            src: '/res3.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 10,
            src: '/pool1.jpg',
            category: 'pool',
            title: 'Swimming Pool'
        },
        {
            id: 11,
            src: '/pool2.jpg',
            category: 'pool',
            title: 'Swimming Pool'
        },
        {
            id: 12,
            src: '/pool3.jpg',
            category: 'pool',
            title: 'Swimming Pool'
        },
        {
            id: 13,
            src: '/pool4.jpg',
            category: 'pool',
            title: 'Swimming Pool'
        },
        {
            id: 14,
            src: '/gar7.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 15,
            src: '/gar8.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 16,
            src: '/gar9.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 17,
            src: '/gar4.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 18,
            src: '/gar5.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 19,
            src: '/gar5.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 20,
            src: '/gar6.jpg',
            category: 'gardens',
            title: 'Garden'
        },

        {
            id: 21,
            src: '/att6.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 22,
            src: '/att7.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 23,
            src: '/att8.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 24,
            src: '/att9.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 25,
            src: '/att5.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 26,
            src: '/double2.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 27,
            src: '/double7.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 28,
            src: '/double6.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 29,
            src: '/family5.jpg',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 30,
            src: '/room1.webp',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 31,
            src: '/room2.webp',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 32,
            src: '/room4.webp',
            category: 'rooms',
            title: 'Deluxe Room'
        },
        {
            id: 33,
            src: '/pool5.jpg',
            category: 'pool',
            title: 'Pool'
        },
        {
            id: 34,
            src: '/gar4.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 35,
            src: '/gar5.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 36,
            src: '/gar6.jpg',
            category: 'gardens',
            title: 'Garden'
        },
        {
            id: 37,
            src: '/att1.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 38,
            src: '/att2.jpg',
            category: 'attractions',
            title: ''
        }, {
            id: 39,
            src: '/att3.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 40,
            src: '/att4.jpg',
            category: 'attractions',
            title: ''
        },
        {
            id: 41,
            src: '/res4.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 42,
            src: '/res5.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 43,
            src: '/res6.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
        {
            id: 44,
            src: '/res7.jpg',
            category: 'restaurant',
            title: 'Restaurant'
        },
    ];

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(image => image.category === selectedCategory);

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.8}
        }
    };

    const heroVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const filterContainerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const filterButtonVariants = {
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

    const galleryGridVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const galleryItemVariants = {
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
        <div className="min-h-screen bg-background">
            <Navbar/>

            {/* Hero Section */}
            <motion.div
                className="pt-8 bg-teal-100"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <motion.div
                        className="text-center"
                        variants={heroVariants}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold font-title mb-4"
                            variants={heroVariants}
                        >
                            Gallery
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                            variants={heroVariants}
                        >
                            Discover the beauty of Morning Star Resort through our photo gallery
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Filter Buttons */}
            <motion.section
                className="py-8 bg-white shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        variants={filterContainerVariants}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                                    selectedCategory === category.id
                                        ? 'bg-teal-400 '
                                        : 'bg-gray-200 text-gray-700 hover:bg-teal-400 hover:text-black'
                                }`}
                                variants={filterButtonVariants}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Image Grid */}
            <motion.section
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={galleryGridVariants}
                    >
                        <AnimatePresence mode="wait">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                    variants={galleryItemVariants}
                                    layout
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.8}}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                                    }}
                                >
                                    <motion.img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-64 object-cover"
                                        initial={{scale: 1}}
                                        whileHover={{
                                            scale: 1.15,
                                            transition: {duration: 0.4}
                                        }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-black/40"
                                        initial={{opacity: 0}}
                                        whileHover={{opacity: 1}}
                                        transition={{duration: 0.3}}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-4 text-white"
                                        initial={{y: 100, opacity: 0}}
                                        whileHover={{y: 0, opacity: 1}}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 12
                                        }}
                                    >
                                        <h3 className="text-lg font-semibold">{image.title}</h3>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.section>

            {/* Empty State */}
            {filteredImages.length === 0 && (
                <motion.div
                    className="text-center py-12"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{y: 20}}
                        animate={{y: 0}}
                        transition={{duration: 0.5}}
                    >
                        No images found in this category
                    </motion.p>
                </motion.div>
            )}

            <Footer/>
        </div>
    );
};

export default Gallery;