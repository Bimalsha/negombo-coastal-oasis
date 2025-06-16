import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GiVikingLonghouse} from "react-icons/gi";
import roomsData from '../json/rooms.json';
import {GrLinkNext} from "react-icons/gr";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { motion } from 'framer-motion';
import '../slick-custom.css';

function Accommodationhero() {
    // Custom arrow components with improved visibility
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow next-arrow"
                style={{
                    position: "absolute",
                    background: "rgba(12, 31, 79, 0.7)",
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
                className="custom-arrow prev-arrow"
                style={{
                    position: "absolute",
                    background: "rgba(12, 31, 79, 0.7)",
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

    // Animation variants
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
            className="pt-16 pb-8 bg-[#b4e4f8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p
                        className="text-[#009ee2] uppercase font-semibold"
                        variants={headerVariants}
                    >
                        Accommodation!
                    </motion.p>

                    <motion.h2
                        className="text-3xl md:text-4xl font-semibold text-[#0c1f4f] mb-4 mt-2"
                        variants={headerVariants}
                    >
                        Comfort Meets Elegance
                    </motion.h2>

                    <motion.div
                        className='flex justify-center mb-4'
                        variants={itemVariants}
                    >
                        <p className={'max-w-6xl'}>
                            Unwind our thoughtfully designed comfortable bed rooms with spacious bathrooms and a private
                            patio where one can relax and soak in the view of the garden which has been landscaped with
                            variety of hues of flora and fauna.
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
                                        className="rounded-2xl overflow-hidden transition-shadow duration-300 bg-[#0c1f4f]"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="overflow-hidden">
                                            <motion.img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full lg:h-64 h-48 object-cover"
                                                whileHover={{ scale: 1.15 }}
                                                transition={{ duration: 0.9, ease: 'easeInOut' }}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                                            <p className="text-[#b4e4f8] text-sm">{card.description}</p>
                                            <p className={'mt-2 text-lg text-[#c6bba9] font-medium'}>{card.room} Rooms | {card.view}</p>
                                            <div className={'flex flex-col items-center justify-between gap-2 pt-4'}>
                                                <div className={'flex gap-2'}>
                                                    <motion.a href={'/accommodation'}
                                                        className={'bg-[#c6bba9] px-5 py-2 text-white rounded-sm hover:bg-[#5f6b8c] flex items-center gap-4'}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        See More <GrLinkNext/>
                                                    </motion.a>
                                                    <motion.a
                                                        href={'https://www.booking.com/hotel/lk/morning-star-guest-house.en-gb.html?aid=356980&label=gog235jc-1FCAsohQFCGG1vcm5pbmctc3Rhci1ndWVzdC1ob3VzZUgJWANohQGIAQGYAQm4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvDLtMIGwAIB0gIkNjJkYmRhZGUtMGUzMS00OTlmLThmZTEtNjI0MGFmYWQxODJh2AIF4AIB&sid=820a8f567d277fb24fce1a614fae7f4f&all_sr_blocks=168488106_90948926_0_42_0&checkin=2025-06-15&checkout=2025-06-16&dest_id=-2230513&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=168488106_90948926_0_42_0&hpos=1&matching_block_id=168488106_90948926_0_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=168488106_90948926_0_42_0__5500&srepoch=1749886795&srpvid=58bf35717db103af&type=total&ucfs=1&#tab-main'}
                                                        className={'bg-[#009ee2] px-5 py-2 text-white rounded-sm hover:bg-[#b4e4f8] hover:text-[#0c1f4f] flex items-center gap-4'}
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
    )
}

export default Accommodationhero