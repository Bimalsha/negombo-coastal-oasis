import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GiVikingLonghouse } from 'react-icons/gi';
import roomsData from '../json/rooms.json';
import { GrLinkNext } from 'react-icons/gr';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../slick-custom.css';

function Accommodationhero() {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow next-arrow bg-teal-400"
                style={{
                    position: "absolute",

                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    zIndex: 10,
                    right: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onClick={onClick}
            >
                <FaChevronRight size={20} className="text-white" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow prev-arrow bg-teal-400"
                style={{
                    position: "absolute",

                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    zIndex: 10,
                    left: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onClick={onClick}
            >
                <FaChevronLeft size={20} className="text-white" />
            </div>
        );
    };

    const cards = roomsData.rooms.map(room => ({
        id: room.type,
        title: room.type,
        description: room.description,
        image: room.img,
        price: room.displayp,
        room: room.room,
        view: room.typeroom,
    }));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const totalRooms = roomsData.rooms.reduce((sum, room) => sum + parseInt(room.room), 0);

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const countVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const sliderVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.4 }
        }
    };

    return (
        <motion.section
            className="pt-16 pb-8 bg-teal-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="mx-auto ">
                <motion.div
                    className="text-center mb-12"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="text-teal-400 uppercase font-medium"
                        variants={headerVariants}
                    >
                        Accommodation!
                    </motion.p>

                    <motion.h2
                        className="text-3xl md:text-4xl font-title mb-4 mt-2"
                        variants={headerVariants}
                    >
                        Comfort Meets Elegance
                    </motion.h2>

                    <motion.div
                        className='flex justify-center mb-4'
                        variants={itemVariants}
                    >
                        <p className={'max-w-5xl text-gray-400'}>
                            Unwind in our thoughtfully designed comfortable bedrooms with spacious bathrooms and a private
                            patio where you can relax and soak in the view of the garden, landscaped with a variety of flora and fauna.
                        </p>
                    </motion.div>

                    <motion.div
                        className={'flex justify-center items-center mb-4 gap-4'}
                        variants={countVariants}
                    >
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GiVikingLonghouse size={36} className={'text-[#0c1f4f]'}/>
                        </motion.div>
                        <motion.span
                            className={'font-medium'}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {totalRooms} Rooms
                        </motion.span>
                    </motion.div>

                    <motion.div
                        className="px-4 relative slider-container mx-14"
                        variants={sliderVariants}
                    >
                        <Slider {...settings}>
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="px-3"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <motion.div
                                        className="rounded-2xl overflow-hidden transition-shadow duration-300"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="overflow-hidden">
                                            <motion.img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full lg:h-96 h-48 object-cover"
                                                whileHover={{ scale: 1.15 }}
                                                transition={{ duration: 0.9, ease: 'easeInOut' }}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-3xl font-medium font-title mb-2">{card.title}</h3>
                                            <p className=" text-sm text-gray-600">{card.description}</p>
                                            <p className={'mt-2 text-lg text-teal-500 font-medium'}>{card.room} Rooms | {card.view}</p>
                                            <div className={'flex flex-col items-center justify-between gap-2 pt-4'}>
                                                <div className={'flex gap-2'}>
                                                    <motion.a href={'/accommodation'}
                                                              className={'bg-gray-400 px-5 py-2 text-white rounded-sm hover:bg-gray-600 flex items-center gap-4'}
                                                              whileHover={{ scale: 1.05 }}
                                                              whileTap={{ scale: 0.95 }}
                                                    >
                                                        See More <GrLinkNext/>
                                                    </motion.a>
                                                    <motion.a
                                                        href={'https://www.booking.com/hotel/lk/morning-star-guest-house.en-gb.html'}
                                                        className={'bg-teal-400 px-5 py-2 text-white rounded-sm hover:bg-teal-600  flex items-center gap-4'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Book Now
                                                    </motion.a>
                                                </div>
                                                <p className="font-medium mt-2 text-white">{card.price}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </Slider>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Accommodationhero;