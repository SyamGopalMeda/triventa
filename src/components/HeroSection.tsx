import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { ArrowRight, Play, ChevronDown, Building2, Cpu, Bot, Palette, BarChart3, Camera, Tv, Plane } from 'lucide-react';

// Import the logo image - UPDATE THIS PATH TO MATCH YOUR EXACT FILE STRUCTURE
import logo from '../assets/images2/Triventa logo 2 - Copy.jpeg';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Business highlights carousel
  const businessHighlights = [
    { icon: Cpu, text: "Innovative Technology Solutions", color: "from-blue-500 to-cyan-500" },
    { icon: Bot, text: "AI-Powered Automation", color: "from-purple-500 to-pink-500" },
    { icon: Palette, text: "Architectural Excellence", color: "from-orange-500 to-red-500" },
    { icon: BarChart3, text: "Business Intelligence", color: "from-green-500 to-teal-500" },
    { icon: Tv, text: "Telugu Entertainment", color: "from-red-500 to-pink-500" },
    { icon: Plane, text: "Global Exports", color: "from-indigo-500 to-purple-500" }
  ];

  // Auto-rotate highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % businessHighlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [businessHighlights.length]);

  // Hide scroll indicator when scrolled
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest < 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground
        src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        className="min-h-screen flex items-center justify-center"
      >
        {/* Animated Background Overlay */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-purple-900/40"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          style={{ y: textY, opacity, scale }}
          className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
        >
          {/* Logo with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.img
              src={logo}
              alt="Triventa Group Logo"
              className="h-24 mx-auto mb-8 drop-shadow-2xl"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                filter: "brightness(1.2)"
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Main Title with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                Triventa Group
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="block text-2xl md:text-4xl font-light text-blue-300 mt-4"
              >
                <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Focused on Excellence
                </span>
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Dynamic Business Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8 h-16 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, rotateX: 90 }}
                animate={{ opacity: 1, x: 0, rotateX: 0 }}
                exit={{ opacity: 0, x: -100, rotateX: -90 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${businessHighlights[currentSlide].color} shadow-2xl`}>
                  {React.createElement(businessHighlights[currentSlide].icon, {
                    className: "w-8 h-8 text-white"
                  })}
                </div>
                <span className="text-2xl md:text-3xl font-semibold text-gray-100">
                  {businessHighlights[currentSlide].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
            >
              Empowering Industries. Enriching Communities.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-lg text-gray-300"
            >
              Building tomorrow's solutions across 8+ business verticals
            </motion.span>
          </motion.p>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Explore Our Services</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-md hover:bg-white/10 flex items-center gap-3 shadow-2xl"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8 }}
              >
                <Play className="w-6 h-6" />
              </motion.div>
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Business Verticals Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="text-center"
            >
              <p className="text-lg text-blue-200 font-medium mb-4">
                Discover Our Business Ecosystem
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {businessHighlights.map((business, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {React.createElement(business.icon, {
                      className: "w-5 h-5 text-blue-300"
                    })}
                    <span className="text-sm text-white font-medium">
                      {business.text.replace('Triventa ', '').replace(' Solutions', '')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>


      </VideoBackground>
    </div>
  );
};