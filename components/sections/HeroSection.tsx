'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroSlides = [
  {
    type: 'video',
    src: 'https://media.istockphoto.com/id/1194337503/video/aerial-view-of-clear-turquoise-sea-and-waves.mp4?s=mp4-640x640-is&k=20&c=9bXAggRhoV_cO7uqdXF8cCUn-d1gTDg0hzjbG3Z8XoU=',
    title: 'Coastal Paradise',
    subtitle: 'Crystal clear waters and pristine beaches',
    fallback: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070'
  },
  {
    type: 'video', 
    src: 'https://cdn.pixabay.com/video/2017/08/20/11490-230853032_large.mp4',
    title: 'Tropical Getaway',
    subtitle: 'Experience paradise in exotic destinations',
    fallback: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070'
  },
  {
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2016/02/20/2213-156227801_large.mp4',
    title: 'Ocean Views',
    subtitle: 'Luxurious beachfront properties',
    fallback: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070'
  },
  {
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2020/10/31/53902-476396222_large.mp4',
    title: 'Serene Escapes',
    subtitle: 'Find tranquility in nature\'s beauty',
    fallback: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070'
  },
  {
    type: 'video',
    src: 'https://cdn.pixabay.com/video/2022/06/06/119436-717695346_large.mp4',
    title: 'Adventure Awaits',
    subtitle: 'Discover extraordinary experiences worldwide',
    fallback: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setVideoError(false); // Reset error state on slide change
    }, 7000); // Change slide every 7 seconds for videos
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {heroSlides[currentSlide].type === 'video' && !videoError ? (
            <>
              <video
                key={heroSlides[currentSlide].src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setVideoError(true)}
              >
                <source src={heroSlides[currentSlide].src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
            </>
          ) : (
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('${videoError && heroSlides[currentSlide].fallback ? heroSlides[currentSlide].fallback : heroSlides[currentSlide].src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider"
          >
            SWISS HOSPITALITY
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-2 text-gold tracking-[0.3em] uppercase font-light"
          >
            Hotels & Resorts
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-32 h-[1px] bg-gold mx-auto mb-8"
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl mb-3 font-light">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}