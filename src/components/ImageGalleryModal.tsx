// components/ImageGalleryModal.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

const ImageGalleryModal = ({ images, isOpen, onClose, title }: ImageGalleryModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-5xl p-2 md:p-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                        >
                            <X className="w-6 h-6 text-[#0c1f4f]" />
                        </motion.button>

                        <motion.div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg text-white text-center mb-2">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-sm">Image {currentIndex + 1} of {images.length}</p>
                        </motion.div>

                        <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
                            {/* Main Image */}
                            <div className="aspect-video md:aspect-[16/9] relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentIndex}
                                        src={images[currentIndex]}
                                        alt={`${title} - Image ${currentIndex + 1}`}
                                        className="w-full h-full object-contain"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Navigation Buttons */}
                            <motion.button
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevImage}
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </motion.button>

                            <motion.button
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextImage}
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </motion.button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-4 overflow-x-auto pb-2">
                            <div className="flex gap-2 justify-center">
                                {images.map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={`w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden cursor-pointer 
                      ${currentIndex === idx ? 'ring-2 ring-[#009ee2]' : 'ring-1 ring-white/30'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentIndex(idx)}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${idx+1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageGalleryModal;