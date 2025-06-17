import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Susan",
        location: "United Kingdom",
        review:
            "Very convenient for Colombo airport\n" +
            "Had a pool and beautiful garden\n" +
            "Food good\n" +
            "Staff very friendly and helpful",
    },
    {
        name: "Joe",
        location: "United Kingdom",
        review:
            "Staff - manager really helpful when uber let us down. 4 big beds. Pool clean . Hot showers!",
    },
    {
        name: "Klaus",
        location: "Germany",
        review:
            "Nice Resort close to the Beach within a lush green garden and pool. Staff was very welcoming and helpful. We got a Sri Lankan breakfast which was fantastic and certainly the best breakfast we had in Sri Lanka",
    },
    {
        name: "Gursel",
        location: "Netherlands",
        review:
            "The hotel is situated away from the busy street and is very quiet. The manager speaks proper English and was very kind, as was his wife and staff. They adjusted breakfast to our kid's wishes. Room was spacious with all we needed. We were picked up at the Airport by Ivan, a helpfull and nice guy and all according to plan. The swimmingpool was ideal to cool down while adjusting to the climate.",
    },
    {
        name: "Joe",
        location: "Belgium",
        review:
            "Friendly and clean Hotel, garden make you feel like you are in tropical garden. Staff and manager always helped us when we need. We checked in early morning, and manager did not ask additional price. Thank you for everything.",
    },
];

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true, // Adding fade transition for smoother animations
    };

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

    const sliderVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    // Custom animation for quote marks
    const quoteVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 0.2,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.section
            className="py-16 px-4 md:px-12 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/rback.webp')" }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Semi-transparent overlay with animated blur */}
            <motion.div
                className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                initial={{ backdropFilter: "blur(0px)" }}
                whileInView={{ backdropFilter: "blur(4px)" }}
                transition={{ duration: 1.2 }}
            ></motion.div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#0c1f4f] mb-10"
                    variants={headingVariants}
                >
                    What Our Guests Say
                </motion.h2>

                <motion.div
                    variants={sliderVariants}
                    className="relative"
                >
                    {/* Large quote mark - top left */}
                    <motion.div
                        className="absolute -left-4 -top-10 text-[120px] text-[#009ee2] opacity-20 font-serif leading-none pointer-events-none"
                        variants={quoteVariants}
                        aria-hidden="true"
                    >
                        "
                    </motion.div>

                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div key={index}>
                                <motion.div
                                    className="rounded-xl bg-teal-50 px-6 py-8 md:px-10 md:py-10 mx-2"
                                    whileHover={{
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                        y: -5
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.p
                                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        "{review.review}"
                                    </motion.p>

                                    <motion.div
                                        className="mt-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <p className="font-semibold text-gray-900 text-base md:text-lg">
                                            {review.name}
                                        </p>
                                        <p className="text-sm text-gray-500">{review.location}</p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>

                    {/* Large quote mark - bottom right */}
                    <motion.div
                        className="absolute -right-4 -bottom-16 text-[120px] text-[#009ee2] opacity-20 font-serif leading-none rotate-180 pointer-events-none"
                        variants={quoteVariants}
                        aria-hidden="true"
                    >
                        "
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ReviewSlider;