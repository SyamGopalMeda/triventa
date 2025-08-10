import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Building2, Cpu, Bot, Palette, UtensilsCrossed, BarChart3, Camera, Tv, Plane } from 'lucide-react';

// Import all images - Updated paths to match your images2 folder structure
import aiImg from '../assets/images2/Triventa Ai.jpeg';
import apseasExportsImg from '../assets/images2/Triventa APSEA Exports.jpeg';
import architectureImg from '../assets/images2/Triventa Architecture & Interior Designers.jpeg';
import biImg from '../assets/images2/Triventa BI.jpeg';
import eventsImg from '../assets/images2/Triventa Events.jpeg';
import feastImg from '../assets/images2/Triventa Royal Feast Co.jpeg';
import techImg from '../assets/images2/Triventa Tech.jpeg';
import tvImg from '../assets/images2/9tv Studio Telugu.jpeg';

const verticals = [
  {
    id: 1,
    title: "Triventa Tech",
    description: "Innovative technology solutions for modern businesses",
    icon: Cpu,
    image: techImg,
    offerings: ["Software Development", "IT Consulting", "Digital Transformation", "Web & Mobile Applications"]
  },
  {
    id: 2,
    title: "Triventa AI",
    description: "Smarter Automation. Better Tomorrow.",
    icon: Bot,
    image: aiImg,
    offerings: ["AI Solutions", "Machine Learning", "Process Automation", "Intelligent Analytics"]
  },
  {
    id: 3,
    title: "Triventa Architecture & Interior Designers",
    description: "Creating spaces that inspire and function beautifully",
    icon: Palette,
    image: architectureImg,
    offerings: ["Architectural Design", "Interior Design", "Space Planning", "3D Visualization"]
  },
  {
    id: 4,
    title: "Triventa Royal Feast Co.",
    description: "Royal Flavours, Signature Moments",
    icon: UtensilsCrossed,
    image: feastImg,
    offerings: ["Catering Services", "Event Management", "Culinary Excellence", "Wedding Catering"]
  },
  {
    id: 5,
    title: "Triventa BI",
    description: "Data-driven insights for informed business decisions",
    icon: BarChart3,
    image: biImg,
    offerings: ["Business Intelligence", "Data Analytics", "Reporting Solutions", "Performance Dashboards"]
  },
  {
    id: 6,
    title: "Triventa Events",
    description: "Creating memorable experiences and seamless events",
    icon: Camera,
    image: eventsImg,
    offerings: ["Event Planning", "Corporate Events", "Wedding Planning", "Entertainment Management"]
  },
  {
    id: 7,
    title: "9 TV Studio Telugu",
    description: "Leading Telugu digital media platform bringing engaging entertainment and the latest updates directly to your screens via YouTube and live streaming.",
    icon: Tv,
    image: tvImg,
    offerings: ["YouTube", "Entertainment Content", "Live Streaming", "Interactive Digital Shows"]
  },
  {
    id: 8,
    title: "Triventa APSEA Exports",
    description: "Global trade solutions and export excellence",
    icon: Plane,
    image: apseasExportsImg,
    offerings: ["Export Services", "International Trade", "Supply Chain Management", "Global Logistics"]
  }
];

export const BusinessVerticals: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Business Verticals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diversified excellence across eight strategic business domains
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-20 h-20 object-cover bg-white rounded-xl p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors leading-tight">
                  {vertical.title}
                </h3>

                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {vertical.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-blue-300 mb-2">Key Offerings:</h4>
                  {vertical.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="leading-tight">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
