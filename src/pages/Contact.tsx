import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { MdOutlineMailOutline } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { SiTripadvisor } from "react-icons/si";
import { motion } from 'framer-motion';
import { initEmailJS, sendContactEmail, validateEmailJSConfig, type ContactFormData } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
    
    // Validate configuration on mount
    if (!validateEmailJSConfig()) {
      console.warn('EmailJS is not properly configured. Please check your environment variables.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const success = await sendContactEmail(formData);
      
      if (success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in booking a stay at Morning Star Resort.");
    window.open(`https://wa.me/94769139911?text=${message}`, '_blank');
  };

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

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
                Contact Us
              </motion.h1>
              <motion.p
                  className="text-lg text-[#5f6b8c] max-w-2xl mx-auto"
                  variants={heroTextVariants}
              >
                Get in touch with us for reservations, inquiries, or any assistance you need
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Content */}
        <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Information */}
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <motion.h2
                    className="text-2xl font-bold text-[#0c1f4f] mb-6"
                    variants={itemVariants}
                >
                  Get In Touch
                </motion.h2>

                <motion.div
                    className="space-y-6 mb-8"
                    variants={containerVariants}
                >
                  <motion.div
                      className="flex items-start space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                  >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <MapPin className="w-6 h-6 text-[#009ee2] mt-1" />
                    </motion.div>
                    <div>
                      <motion.h3
                          className="font-semibold text-gray-800"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        Address
                      </motion.h3>
                      <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        No.55/1 Poruthota Road, Negombo 11540, Sri Lanka
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                      className="flex items-start space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                  >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <Phone className="w-6 h-6 text-[#009ee2] mt-1" />
                    </motion.div>
                    <div>
                      <motion.h3
                          className="font-semibold text-gray-800"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        Phone Numbers
                      </motion.h3>
                      <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        +94 76 9139911
                      </motion.p>
                      <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        +94 031 02274371
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                      className="flex items-start space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                  >
                    <motion.div
                        className="w-6 h-6 flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <MdOutlineMailOutline className="w-6 h-6 text-[#009ee2] mt-1" />
                    </motion.div>
                    <div>
                      <motion.h3
                          className="font-semibold text-gray-800"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        Email
                      </motion.h3>
                      <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        morningstarresorts92@gmail.com
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* WhatsApp Button */}
                <motion.button
                    onClick={handleWhatsApp}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  Chat with us on WhatsApp
                </motion.button>

                {/* Social Links */}
                <motion.div variants={containerVariants}>
                  <motion.h3
                      className="font-semibold text-gray-800 mb-4"
                      variants={itemVariants}
                  >
                    Follow Us
                  </motion.h3>
                  <motion.div
                      className="flex space-x-4"
                      variants={containerVariants}
                  >
                    <motion.a
                        href="https://www.facebook.com/morningstarresortslk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{scale: 0.95}}
                    >
                      <LuFacebook/>Facebook
                    </motion.a>
                    <motion.a
                        href="https://www.tripadvisor.com/Hotel_Review-g297897-d3400937-Reviews-Morning_Star_Resorts-Negombo_Western_Province.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3)"
                        }}
                        whileTap={{scale: 0.95}}
                    >
                      <SiTripadvisor/>
                      TripAdvisor
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
              >
                <motion.h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    variants={itemVariants}
                >
                Send us a Message
                </motion.h2>                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={containerVariants}
                >
                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center gap-2 ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{submitMessage}</span>
                    </motion.div>
                  )}
                  <motion.div variants={formItemVariants}>
                    <motion.label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Full Name *
                    </motion.label>
                    <motion.input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                        whileFocus={{ scale: 1.01, borderColor: "#10b981" }}
                    />
                  </motion.div>

                  <motion.div variants={formItemVariants}>
                    <motion.label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Email Address *
                    </motion.label>
                    <motion.input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
                        whileFocus={{ scale: 1.01, borderColor: "#10b981" }}
                    />
                  </motion.div>

                  <motion.div variants={formItemVariants}>
                    <motion.label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Phone Number
                    </motion.label>
                    <motion.input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.4 }}
                        whileFocus={{ scale: 1.01, borderColor: "#10b981" }}
                    />
                  </motion.div>

                  <motion.div variants={formItemVariants}>
                    <motion.label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Message *
                    </motion.label>
                    <motion.textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
                        whileFocus={{ scale: 1.01, borderColor: "#10b981" }}
                    ></motion.textarea>
                  </motion.div>                  <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#009ee2] hover:bg-[#5f6b8c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      variants={formItemVariants}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                        delay: 0.6
                      }}
                      whileHover={{ scale: isLoading ? 1 : 1.05 }}
                      whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
  );
};

export default Contact;