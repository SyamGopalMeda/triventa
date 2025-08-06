import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Target, Eye, Award, Users, Globe, TrendingUp, Lightbulb, Heart } from 'lucide-react';

// Import all images - Updated to match your complete image set
import aiImg from '../assets/images2/Triventa Ai.jpeg';
import apseasExportsImg from '../assets/images2/Triventa APSEA Exports.jpeg';
import architectureImg from '../assets/images2/Triventa Architecture & Interior Designers.jpeg';
import biImg from '../assets/images2/Triventa BI.jpeg';
import eventsImg from '../assets/images2/Triventa Events.jpeg';
import feastImg from '../assets/images2/Triventa Royal Feast Co.jpeg';
import techImg from '../assets/images2/Triventa Tech.jpeg';
import tvImg from '../assets/images2/9tv Studio Telugu.jpeg';

const statsData = [
  { number: "8+", label: "Business Verticals", icon: Globe },
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "100+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years of Excellence", icon: TrendingUp }
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering cutting-edge solutions across technology, AI, and business intelligence",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering superior quality in every project, from architecture to entertainment",
    color: "from-blue-400 to-purple-500"
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Building trust through transparent practices and ethical business conduct",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Contributing to economic development and creating lasting positive impact",
    color: "from-pink-400 to-red-500"
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Triventa Group
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A diversified conglomerate pioneering excellence across technology, entertainment,
              architecture, and business intelligence - shaping the future of multiple industries
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Vision, Mission, Values */}
          <AnimatedSection animation="slideLeft" className="space-y-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most innovative and trusted diversified group in India, creating
                sustainable value through technology, creativity, and excellence while
                contributing to the digital transformation of businesses and communities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver exceptional solutions across our eight business verticals - from
                AI-powered automation to premium entertainment content, architectural excellence
                to global exports - fostering growth, innovation, and prosperity for all stakeholders.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Impact</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                From revolutionizing Telugu entertainment through 9 TV Studio to transforming
                businesses with AI solutions, we're not just building companies - we're
                shaping industries and creating lasting positive change.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Business Portfolio Grid - Enhanced */}
          <AnimatedSection animation="slideRight" className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl overflow-hidden">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 text-center mb-10"
              >
                Our Business Portfolio
              </motion.h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { img: techImg, name: "Triventa Tech", color: "from-blue-500 to-cyan-500" },
                  { img: aiImg, name: "Triventa AI", color: "from-purple-500 to-pink-500" },
                  { img: architectureImg, name: "Architecture & Design", color: "from-orange-500 to-red-500" },
                  { img: biImg, name: "Business Intelligence", color: "from-green-500 to-teal-500" },
                  { img: eventsImg, name: "Event Management", color: "from-indigo-500 to-purple-500" },
                  { img: feastImg, name: "Royal Feast Co.", color: "from-yellow-500 to-orange-500" },
                  { img: tvImg, name: "9 TV Studio Telugu", color: "from-red-500 to-pink-500" },
                  { img: apseasExportsImg, name: "APSEA Exports", color: "from-teal-500 to-blue-500" }
                ].map((business, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateY: -90, scale: 0.5 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      rotateY: 15,
                      rotateX: 10,
                      scale: 1.05,
                      z: 50
                    }}
                    className="group perspective-1000"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform-gpu group-hover:shadow-blue-500/25">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      {/* Image container with proper aspect ratio */}
                      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                        <img
                          src={business.img}
                          alt={business.name}
                          className="w-full h-full object-contain bg-gray-50 p-2 group-hover:scale-110 transition-transform duration-500"
                          style={{
                            imageRendering: "crisp-edges",
                            maxWidth: "100%",
                            height: "100%"
                          }}
                        />
                        {/* Floating shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 skew-x-12"></div>
                      </div>

                      {/* Text container */}
                      <div className="p-3 md:p-4 relative z-10">
                        <p className="text-xs md:text-sm font-semibold text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-300">
                          {business.name}
                        </p>

                        {/* Animated underline */}
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating particles background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                    initial={{ x: Math.random() * 400, y: Math.random() * 400 }}
                    animate={{
                      x: Math.random() * 400,
                      y: Math.random() * 400,
                    }}
                    transition={{
                      duration: 10 + Math.random() * 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl -z-10 transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-pink-500/3 to-cyan-500/3 rounded-3xl -z-20 transform -rotate-1 scale-105"></div>
          </AnimatedSection>
        </div>

        {/* Core Values Section */}
        <AnimatedSection className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every relationship we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hands with Triventa Group and experience excellence across our diverse business verticals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Explore Our Services
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};