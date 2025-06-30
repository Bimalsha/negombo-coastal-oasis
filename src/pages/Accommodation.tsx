import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Home, Coffee, Shield, Droplets, Wind, Wifi, Car, MapPin, Utensils, Flower, Plane, Bell, Camera } from 'lucide-react';
import roomsData from '../json/rooms.json';
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import ImageGalleryModal from '../components/ImageGalleryModal';

const Accommodation = () => {
    const [expandedRoom, setExpandedRoom] = useState<number | null>(null);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

    // Feature icons mapping
    const featureIcons = {
        "Private Terrace/Patio": <FaUmbrellaBeach className="w-4 h-4 text-teal-500 mr-1"/>,
        "Hot Water": <Droplets className="w-4 h-4 text-[#009ee2] mr-1"/>,
        "03 Twin Beds": <IoBedOutline className="w-4 h-4 text-teal-500 mr-1"/>,
        "04 twin Beds": <IoBedOutline className="w-4 h-4 text-teal-500 mr-1"/>,
        "Large King Size Bed": <IoBedOutline className="w-4 h-4 text-teal-500 mr-1"/>,
        "Air Conditioning": <Wind className="w-4 h-4 text-teal-500 mr-1"/>,
        "Tea/Coffee Makers": <Coffee className="w-4 h-4 text-teal-500 mr-1"/>,
        "In Room Safe": <Shield className="w-4 h-4 text-teal-500 mr-1"/>,
        "Wi-Fi": <Wifi className="w-4 h-4 text-teal-500 mr-1"/>
    };

    // Facility icons mapping
    const facilityIcons = {
        'Swimming Pool': <FaSwimmingPool className="w-6 h-6" />,
        'Restaurant': <Utensils className="w-6 h-6" />,
        'Tour Desk': <MapPin className="w-6 h-6" />,
        'Concierge Service': <Bell className="w-6 h-6" />,
        'Garden Areas': <Flower className="w-6 h-6" />,
        'Free Wi-Fi': <Wifi className="w-6 h-6" />,
        'Airport Shuttle': <Plane className="w-6 h-6" />,
        'Parking': <Car className="w-6 h-6" />
    };

    // Background colors for facility icons
    const bgColors = [
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
        'bg-teal-500',
    ];

    const facilities = [
        'Swimming Pool',
        'Restaurant',
        'Tour Desk',
        'Concierge Service',
        'Garden Areas',
        'Free Wi-Fi',
        'Airport Shuttle',
        'Parking'
    ];

// Update this function in Accommodation.tsx
    const getGalleryImages = (roomIndex: number) => {
        const room = roomsData.rooms[roomIndex];
        return room.gallery || [room.img]; // Fallback to single image if gallery not found
    };

    // Open gallery for a specific room
    const openGallery = (index: number) => {
        setSelectedRoom(index);
        setGalleryOpen(true);
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const heroTextVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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

    const facilityIconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar/>

            {/* Hero Section */}
            <motion.div
                className="pt-16 relative bg-fixed"
                style={{
                    backgroundImage: "url('/accomodation.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative"
                }}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                {/* Darker Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
                <div className="py-16 relative z-20">
                    <motion.div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        <div className="text-center z-50">
                            <motion.h1
                                className="text-4xl md:text-5xl font-bold text-teal-400 font-title mb-4"
                                variants={heroTextVariants}
                            >
                                Comfort Meets Elegance
                            </motion.h1>
                            <motion.p
                                className="text-lg text-white max-w-4xl mx-auto"
                                variants={heroTextVariants}
                            >
                                Unwind our thoughtfully designed comfortable bed rooms with spacious bathrooms and a
                                private patio where one can relax and soak in the view of the garden which has been
                                landscaped with variety of hues of flora and fauna.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Rooms Section */}
            <section className="py-16">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                >
                    <div className="space-y-8">
                        {roomsData.rooms.map((room, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{y: -5}}
                                transition={{duration: 0.3}}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="relative md:w-1/3 overflow-hidden">
                                        <motion.img
                                            src={room.img}
                                            alt={room.type}
                                            className="w-full h-48 md:h-full object-cover"
                                            whileHover={{scale: 1.1}}
                                            transition={{duration: 0.5}}
                                            initial={{scale: 1.05, opacity: 0.8}}
                                            whileInView={{scale: 1, opacity: 1}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.7}}
                                        />
                                        <motion.div
                                            className="absolute top-3 right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            initial={{opacity: 0, x: 20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.5, delay: 0.2}}
                                        >
                                            {room.typeroom}
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <motion.div
                                        className="p-6 md:w-2/3"
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{duration: 0.5, delay: 0.1}}
                                    >
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                            <div>
                                                <motion.h3
                                                    className="text-xl font-bold text-[#0c1f4f] mb-2"
                                                    initial={{opacity: 0, y: 10}}
                                                    whileInView={{opacity: 1, y: 0}}
                                                    viewport={{once: true}}
                                                    transition={{duration: 0.4}}
                                                >
                                                    {room.type}
                                                </motion.h3>
                                            </div>
                                            <motion.div
                                                className="md:text-right mb-4 md:mb-0"
                                                initial={{opacity: 0}}
                                                whileInView={{opacity: 1}}
                                                viewport={{once: true}}
                                                transition={{duration: 0.4, delay: 0.1}}
                                            >
                                                <span className="text-blu font-semibold">{room.room} Rooms</span>
                                            </motion.div>
                                        </div>
                                        <motion.span
                                            className="text-md font-bold text-[#006a94] block"
                                            initial={{opacity: 0}}
                                            whileInView={{opacity: 1}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.4, delay: 0.2}}
                                        >
                                            {room.displayp}
                                        </motion.span>
                                        <motion.p
                                            className="text-gray-600 text-sm mb-3"
                                            initial={{opacity: 0}}
                                            whileInView={{opacity: 1}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.4, delay: 0.3}}
                                        >
                                            {room.description}
                                        </motion.p>
                                        <motion.div
                                            className={'flex items-center space-x-2 mb-4 justify-center'}
                                            initial={{opacity: 0, y: 10}}
                                            whileInView={{opacity: 1, y: 0}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.4, delay: 0.4}}
                                        >
                                            <motion.a
                                                href={'https://www.booking.com/hotel/lk/morning-star-guest-house.en-gb.html?aid=356980&label=gog235jc-1FCAsohQFCGG1vcm5pbmctc3Rhci1ndWVzdC1ob3VzZUgJWANohQGIAQGYAQm4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvDLtMIGwAIB0gIkNjJkYmRhZGUtMGUzMS00OTlmLThmZTEtNjI0MGFmYWQxODJh2AIF4AIB&sid=820a8f567d277fb24fce1a614fae7f4f&all_sr_blocks=168488106_90948926_0_42_0&checkin=2025-06-15&checkout=2025-06-16&dest_id=-2230513&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=168488106_90948926_0_42_0&hpos=1&matching_block_id=168488106_90948926_0_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=168488106_90948926_0_42_0__5500&srepoch=1749886795&srpvid=58bf35717db103af&type=total&ucfs=1&#tab-main'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={'flex-1 bg-teal-500 hover:bg-teal-400 text-white text-center font-semibold py-2 px-2 rounded-lg transition-colors duration-200'}
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                            >
                                                Book Now
                                            </motion.a>
                                            <motion.button
                                                onClick={() => openGallery(index)}
                                                className="flex-1 bg-gray-600 hover:bg-gray-500  text-white font-semibold py-2 px-2 rounded-lg transition-colors duration-200"
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                            >
                                                <span className="flex items-center justify-center gap-1">
                                                    <Camera size={16}/> View Gallery
                                                </span>
                                            </motion.button>
                                            <motion.button
                                                onClick={() => setExpandedRoom(expandedRoom === index ? null : index)}
                                                className="flex-1 bg-[#006a94] hover:bg-[##08457e] text-white font-semibold py-2 px-2 rounded-lg transition-colors duration-200"
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                            >
                                                {expandedRoom === index ? 'Hide Details' : 'View Details'}
                                            </motion.button>
                                        </motion.div>

                                        {expandedRoom === index && (
                                            <motion.div
                                                className="border-t pt-4"
                                                initial={{opacity: 0, height: 0}}
                                                animate={{opacity: 1, height: "auto"}}
                                                exit={{opacity: 0, height: 0}}
                                                transition={{duration: 0.3}}
                                            >
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <motion.div
                                                        initial={{opacity: 0, x: -10}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{duration: 0.3, delay: 0.1}}
                                                    >
                                                        <h4 className="font-semibold text-gray-800 mb-2">Room
                                                            Features:</h4>
                                                        <motion.ul
                                                            className="text-sm text-gray-600 mb-4 space-y-1"
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="visible"
                                                        >
                                                            {room.features.map((feature, idx) => (
                                                                <motion.li
                                                                    key={idx}
                                                                    className="flex items-center"
                                                                    variants={fadeInUp}
                                                                    custom={idx}
                                                                >
                                                                    <motion.span
                                                                        whileHover={{rotate: 10, scale: 1.1}}
                                                                        transition={{duration: 0.2}}
                                                                    >
                                                                        {featureIcons[feature] ||
                                                                            <div
                                                                                className="w-1 h-1 bg-[#009ee2] rounded-full mr-2"></div>}
                                                                    </motion.span>
                                                                    {feature}
                                                                </motion.li>
                                                            ))}
                                                        </motion.ul>
                                                    </motion.div>

                                                    <motion.div
                                                        initial={{opacity: 0, x: 10}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{duration: 0.3, delay: 0.2}}
                                                    >
                                                        <h4 className="font-semibold text-gray-800 mb-2">Amenities:</h4>
                                                        <motion.ul
                                                            className="text-sm text-gray-600 mb-4 space-y-1"
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="visible"
                                                        >
                                                            {room.amenities.map((amenity, idx) => (
                                                                <motion.li
                                                                    key={idx}
                                                                    className="flex items-center"
                                                                    variants={fadeInUp}
                                                                    custom={idx}
                                                                >
                                                                    <motion.div
                                                                        className="w-1 h-1 bg-teal-500 rounded-full mr-2"
                                                                        whileHover={{scale: 2}}
                                                                        transition={{duration: 0.2}}
                                                                    ></motion.div>
                                                                    {amenity}
                                                                </motion.li>
                                                            ))}
                                                        </motion.ul>
                                                    </motion.div>
                                                </div>
                                                <motion.div
                                                    initial={{opacity: 0, y: 20}}
                                                    animate={{opacity: 1, y: 0}}
                                                    transition={{duration: 0.4, delay: 0.3}}
                                                >
                                                    <h4 className="font-semibold text-gray-800 mb-2">Other
                                                        Facilities:</h4>
                                                    <div className="text-sm text-gray-600 mb-4">
                                                        {Object.entries(room.otherFacilities).slice(0, 8).map(([category, details], idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                className="mb-2"
                                                                initial={{opacity: 0, y: 10}}
                                                                animate={{opacity: 1, y: 0}}
                                                                transition={{duration: 0.3, delay: 0.1 * idx}}
                                                            >
                                                                <div className="font-medium text-teal-500">
                                                                    {category}
                                                                </div>
                                                                <p className="ml-4 mt-1 truncate">{details}</p>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    <motion.div
                                                        className="bg-teal-100 p-3 rounded-lg mt-2"
                                                        initial={{opacity: 0, scale: 0.95}}
                                                        animate={{opacity: 1, scale: 1}}
                                                        transition={{
                                                            duration: 0.4,
                                                            delay: 0.5,
                                                            type: "spring",
                                                            stiffness: 100
                                                        }}
                                                        whileHover={{scale: 1.02}}
                                                    >
                                                        <p className="text-sm text-[#0c1f4f] font-medium">Direct
                                                            Rate: {room.rates.directRate}</p>
                                                        <p className="text-xs text-gray-500 italic mt-1">{room.rates.note}</p>
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Hotel Facilities */}
            <motion.section
                className="py-16 bg-teal-50"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-[#0c1f4f] mb-4"
                            variants={heroTextVariants}
                        >
                            Hotel Facilities
                        </motion.h2>
                        <motion.p
                            className="text-lg text-[#5f6b8c]"
                            variants={heroTextVariants}
                        >
                            Enjoy our comprehensive amenities designed for your comfort and convenience
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.1}}
                    >
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-200"
                                variants={cardVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{duration: 0.3}}
                            >
                                <motion.div
                                    className={`${bgColors[index % bgColors.length]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                                    variants={facilityIconVariants}
                                    whileHover={{
                                        rotate: [0, -5, 5, 0],
                                        scale: 1.1,
                                        transition: {duration: 0.5}
                                    }}
                                >
                                    {facilityIcons[facility] || <Home className="w-6 h-6"/>}
                                </motion.div>
                                <motion.p
                                    className="text-[#0c1f4f] font-medium"
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.3, duration: 0.4}}
                                >
                                    {facility}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Disclaimer */}
            <motion.section
                className="py-8 bg-white"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.p
                        className="text-gray-600 italic"
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.4}}
                    >
                        * Rates subject to seasonal changes. Please contact us for current pricing and availability.
                    </motion.p>
                </div>
            </motion.section>

            {/* Image Gallery Modal */}
            {selectedRoom !== null && (
                <ImageGalleryModal
                    images={getGalleryImages(selectedRoom)}
                    isOpen={galleryOpen}
                    onClose={() => setGalleryOpen(false)}
                    title={roomsData.rooms[selectedRoom].type}
                />
            )}

            <Footer/>
        </div>
    );
};

export default Accommodation;