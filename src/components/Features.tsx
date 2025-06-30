import React from 'react';
import { Home, Users, BedDouble, Sun } from 'lucide-react';
import { MdOutlineAirportShuttle } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {

      icon: <Home className="w-10 h-10 text-teal-300" />,
      title: 'Garden Facing Rooms',
    },
    {

      icon: <PiUsersThree className="w-10 h-10 text-teal-300" />,
      title: 'Early Check-In Based On Availability',
    },
    {

      icon: <IoBedOutline className="w-10 h-10 text-teal-300" />,
      title: 'Flexible Cancellations',
    },
    {

      icon: <MdOutlineAirportShuttle className="w-10 h-10 text-teal-300" />,
      title: 'Airport Shuttle service and other Tour arrangements',
    },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
      <section className="pb-20 pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={headerVariants}
          >
            <p className="text-sm uppercase text-teal-400 font-medium tracking-wider mb-2">
              Your Perfect Beachfront Escape
            </p>
            <h2 className="text-4xl font-title mb-12">
              Enjoy Exclusive Benefits
            </h2>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    className="flex lg:flex-row flex-col items-center justify-center py-6 px-6 text-center gap-4"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                  <motion.div
                      className={` p-3 rounded-full`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <p className="text-gray-400 max-w-[200px] text-sm leading-relaxed">
                    {feature.title}
                  </p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Features;