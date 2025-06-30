import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
    {
        name: "Susan",
        location: "United Kingdom",
        rating: 5,
        review: "Very convenient for Colombo airport. Had a pool and beautiful garden. Food good. Staff very friendly and helpful.",
        avatar: "/avatars/avatar-1.jpg" // Add placeholder images or use initials as fallback
    },
    {
        name: "Joe",
        location: "United Kingdom",
        rating: 5,
        review: "Staff - manager really helpful when uber let us down. 4 big beds. Pool clean. Hot showers!",
        avatar: "/avatars/avatar-2.jpg"
    },
    {
        name: "Klaus",
        location: "Germany",
        rating: 5,
        review: "Nice Resort close to the Beach within a lush green garden and pool. Staff was very welcoming and helpful. We got a Sri Lankan breakfast which was fantastic and certainly the best breakfast we had in Sri Lanka",
        avatar: "/avatars/avatar-3.jpg"
    },
    {
        name: "Gursel",
        location: "Netherlands",
        rating: 4,
        review: "The hotel is situated away from the busy street and is very quiet. The manager speaks proper English and was very kind, as was his wife and staff. They adjusted breakfast to our kid's wishes. Room was spacious with all we needed.",
        avatar: "/avatars/avatar-4.jpg"
    },
    {
        name: "Joe",
        location: "Belgium",
        rating: 5,
        review: "Friendly and clean Hotel, garden make you feel like you are in tropical garden. Staff and manager always helped us when we need. We checked in early morning, and manager did not ask additional price. Thank you for everything.",
        avatar: "/avatars/avatar-5.jpg"
    },
];

const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        dotsClass: "slick-dots custom-dots",
        customPaging: () => (
            <div className="w-3 h-3 mx-1 rounded-full bg-teal-200 opacity-50 transition-all duration-300 hover:bg-teal-400" />
        )
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <FaStar
                key={index}
                className={`${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
        ));
    };

    const getInitials = (name) => {
        return name.charAt(0);
    };

    return (
        <motion.section
            className="py-20 px-4 md:px-12 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.p
                    className="text-teal-400 uppercase tracking-wider font-medium mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Guest Experiences
                </motion.p>

                <motion.h2
                    className="text-3xl md:text-4xl font-title mb-12 relative inline-block"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    What Our Guests Say
                    <motion.span
                        className="absolute bottom-0 left-1/2 w-24 h-1 bg-teal-400 -translate-x-1/2 translate-y-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />
                </motion.h2>

                <motion.div
                    className="relative px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index} className="outline-none px-4 py-2">
                                <motion.div
                                    className="rounded-2xl bg-white p-8 md:p-10 shadow-lg border border-teal-100"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <FaQuoteLeft className="text-5xl text-teal-100" />
                                    </div>

                                    <motion.p
                                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {review.review}
                                    </motion.p>

                                    <div className="flex justify-center mb-6">
                                        <div className="flex space-x-1">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>

                                    <motion.div
                                        className="flex flex-col items-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {review.avatar ? (
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-teal-300 mb-3"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    document.getElementById(`initials-${index}`).style.display = 'flex';
                                                }}
                                            />
                                        ) : (
                                            <div
                                                id={`initials-${index}`}
                                                className="w-16 h-16 rounded-full bg-teal-400 text-white flex items-center justify-center text-xl font-semibold mb-3"
                                            >
                                                {getInitials(review.name)}
                                            </div>
                                        )}
                                        <p className="font-title text-xl text-gray-900 mb-1">
                                            {review.name}
                                        </p>
                                        <p className="text-sm text-teal-500 font-medium">
                                            {review.location}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ReviewSlider;