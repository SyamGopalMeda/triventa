import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Phone, Mail, MapPin, Globe, Linkedin, Twitter,
  Facebook, Instagram, Youtube, Cpu, Bot, Palette, UtensilsCrossed,
  BarChart3, Camera, Tv, Plane, ArrowUp, ExternalLink
} from 'lucide-react';

// Import the logo image - UPDATE THIS PATH TO MATCH YOUR EXACT FILE STRUCTURE
import logo from '../assets/images2/Triventa logo 2 - Copy.jpeg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const businessVerticals = [
    { name: "Triventa Tech", icon: Cpu, link: "#tech" },
    { name: "Triventa AI", icon: Bot, link: "#ai" },
    { name: "Architecture & Interior", icon: Palette, link: "#architecture" },
    { name: "Royal Feast Co.", icon: UtensilsCrossed, link: "#feast" }
  ];

  const moreServices = [
    { name: "Business Intelligence", icon: BarChart3, link: "#bi" },
    { name: "Event Management", icon: Camera, link: "#events" },
    { name: "9 TV Studio Telugu", icon: Tv, link: "#tv", featured: true },
    { name: "APSEA Exports", icon: Plane, link: "#exports" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-8">
              <motion.img
                src={logo}
                alt="Triventa Group"
                className="h-14 mr-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Triventa Group
                </h3>
                <p className="text-xs text-gray-400 mt-1">Excellence Across Industries</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Empowering Industries. Enriching Communities. Building a better tomorrow through
              innovation across technology, entertainment, architecture, and business intelligence.
            </p>

            <div className="flex items-center text-gray-400 mb-6">
              <Building2 className="w-5 h-5 mr-3 text-blue-400" />
              <span className="text-sm font-medium">8+ Business Verticals • 100+ Happy Clients</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Business Verticals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-blue-300 flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              Core Business
            </h4>
            <ul className="space-y-4">
              {businessVerticals.map((vertical, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={vertical.link}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <vertical.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-sm">{vertical.name}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-purple-300 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Specialized Services
            </h4>
            <ul className="space-y-4">
              {moreServices.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={service.link}
                    className={`flex items-center transition-all duration-300 group ${service.featured
                      ? 'text-orange-400 hover:text-orange-300'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <service.icon className={`w-4 h-4 mr-3 ${service.featured ? 'text-orange-400' : 'text-purple-400'
                      } group-hover:scale-110 transition-transform`} />
                    <span className="text-sm">{service.name}</span>
                    {service.featured && (
                      <span className="ml-2 px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-green-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Get In Touch
            </h4>

            <div className="space-y-6">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Call Us</p>
                  <a href="tel:+918367228888" className="text-white hover:text-green-300 transition-colors font-medium">
                    +91 8367228888
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:ceo@triventagroup.com" className="text-white hover:text-blue-300 transition-colors font-medium">
                    ceo@triventagroup.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">Our Locations</p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>📍 Banjara Hills, Hyderabad</p>
                    <p>📍 Financial District, Hyderabad</p>
                    <p>📍 Amaravati, Andhra Pradesh</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {currentYear} Triventa Group. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Proudly serving across Technology • AI • Architecture • Entertainment • Exports
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#investors" className="text-gray-400 hover:text-white transition-colors">Investors</a>
              </div>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-10 border-t border-gray-800"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated with Triventa Group
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest updates on our business ventures, technological innovations, and growth milestones.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};