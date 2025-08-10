import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight, Sparkles } from 'lucide-react';

// Placeholder product images (replace with actual images in your project)
import gheeImage from '../assets/E commerce images/Triventa Ghee.jpeg';
import meethaKartImage from '../assets/E commerce images/Triventa Meetha Kart.jpeg';
import picklesImage from '../assets/E commerce images/Triventa Non Veg Pickles.jpeg';
import seafoodImage from '../assets/E commerce images/Triventa Seafood cuts.jpeg';
import birfiImage from '../assets/E commerce images/Triventa Birfi.jpeg';

interface Product {
    id: number;
    name: string;
    image: string;
    category: string;
    description: string;
    gradient: string;
}

export const EcommerceSection: React.FC = () => {
    const [activeProduct, setActiveProduct] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const products: Product[] = [
        {
            id: 1,
            name: "Triventa Premium Ghee",
            image: gheeImage,
            category: "Dairy Excellence",
            description: "Pure, traditional ghee crafted with authentic methods",
            gradient: "from-yellow-400 via-orange-500 to-red-500"
        },
        {
            id: 2,
            name: "Triventa Meetha Kart",
            image: meethaKartImage,
            category: "Sweet Delights",
            description: "Traditional sweets and confectioneries",
            gradient: "from-pink-400 via-rose-500 to-red-500"
        },
        {
            id: 3,
            name: "Triventa Birfi",
            image: birfiImage,
            category: "Premium Sweets",
            description: "Authentic birfi with traditional taste and premium quality",
            gradient: "from-amber-400 via-yellow-500 to-orange-500"
        },
        {
            id: 4,
            name: "Triventa Non-Veg Pickles",
            image: picklesImage,
            category: "Gourmet Pickles",
            description: "Authentic flavors preserved in traditional recipes",
            gradient: "from-green-400 via-emerald-500 to-teal-600"
        },
        {
            id: 5,
            name: "Triventa Seafood Cuts",
            image: seafoodImage,
            category: "Premium Seafood",
            description: "Fresh, premium quality seafood selections",
            gradient: "from-blue-400 via-cyan-500 to-teal-500"
        }
    ];

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Auto-rotation effect
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveProduct((prev) => (prev + 1) % products.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, products.length]);

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 opacity-30"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,107,0.2),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        animate={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"
                        >
                            <ShoppingBag className="w-8 h-8 text-white" />
                        </motion.div>
                        <span className="text-purple-300 font-semibold text-lg">Premium Products</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                            Triventa
                        </span>
                        <br />
                        <span className="text-4xl md:text-5xl font-light text-gray-300">
                            E-commerce Excellence
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Discover our premium collection of authentic products, crafted with tradition and delivered with excellence
                    </motion.p>
                </motion.div>

                {/* 3D Product Showcase */}
                <motion.div
                    style={{ y: contentY }}
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Product Display */}
                    <div className="relative mb-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct}
                                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                                className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto"
                            >
                                {/* Product Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    className="relative lg:w-1/2"
                                >
                                    <div className={`absolute -inset-4 bg-gradient-to-r ${products[activeProduct].gradient} rounded-3xl opacity-20 blur-xl`} />
                                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                        <motion.img
                                            src={products[activeProduct].image}
                                            alt={products[activeProduct].name}
                                            className="w-full h-80 object-contain bg-white/5 rounded-2xl shadow-2xl"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Product Info */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="lg:w-1/2 text-white"
                                >
                                    <motion.span
                                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${products[activeProduct].gradient} text-white`}
                                    >
                                        {products[activeProduct].category}
                                    </motion.span>

                                    <motion.h3
                                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                    >
                                        {products[activeProduct].name}
                                    </motion.h3>

                                    <motion.p
                                        className="text-xl text-gray-300 mb-8 leading-relaxed"
                                    >
                                        {products[activeProduct].description}
                                    </motion.p>

                                    <motion.div
                                        className="flex items-center gap-4 mb-8"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                            </motion.div>
                                        ))}
                                        <span className="text-gray-300 ml-2">Premium Quality</span>
                                    </motion.div>

                                    <motion.button
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group bg-gradient-to-r ${products[activeProduct].gradient} text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-300`}
                                    >
                                        Explore Product
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Product Grid Navigation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -10 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveProduct(index)}
                                className={`relative cursor-pointer group transition-all duration-300 ${activeProduct === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <div className={`absolute -inset-2 bg-gradient-to-r ${product.gradient} rounded-2xl opacity-${activeProduct === index ? '30' : '0'} group-hover:opacity-20 blur-lg transition-all duration-300`} />
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300">
                                    <motion.img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-20 object-contain bg-white/5 rounded-xl mb-3"
                                        whileHover={{ scale: 1.02 }}
                                    />
                                    <h4 className="text-white font-semibold text-xs text-center leading-tight">
                                        {product.name.replace('Triventa ', '')}
                                    </h4>
                                </div>

                                {activeProduct === index && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Progress Indicators */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        className="flex justify-center gap-3 mt-12"
                    >
                        {products.map((_, index) => (
                            <motion.button
                                key={index}
                                variants={itemVariants}
                                onClick={() => setActiveProduct(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProduct === index
                                    ? `bg-gradient-to-r ${products[index].gradient}`
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-4 mx-auto"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        Explore All Products
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};
