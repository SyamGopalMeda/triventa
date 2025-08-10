import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown, Users, DollarSign, Palette, Building, BarChart3, Laptop,
  Star, Shield, Calendar, ExternalLink
} from 'lucide-react';

export const ManagementSection = () => {
  const managementTeam = [
    {
      id: 1,
      name: "Yatham Sai Gopal Rao",
      position: "Founder, Director & CEO",
      icon: Crown,
      color: "text-amber-400",
      bgColor: "bg-gradient-to-br from-amber-400/20 to-orange-400/20",
      borderColor: "border-amber-400/30",
      description: "Visionary entrepreneur with extensive experience building multi-billion dollar enterprises across technology, entertainment, and hospitality sectors.",
      skills: ["Strategic Leadership", "Business Development", "Digital Innovation", "Market Expansion"]
    },
    {
      id: 2,
      name: "Timmaraju Sai Venkatesh",
      position: "Co Director & Chief Financial Officer",
      icon: DollarSign,
      color: "text-emerald-400",
      bgColor: "bg-gradient-to-br from-emerald-400/20 to-teal-400/20",
      borderColor: "border-emerald-400/30",
      description: "Strategic financial architect with expertise in corporate finance, investment banking, and sustainable growth strategies across diverse business portfolios.",
      skills: ["Corporate Finance", "Investment Strategy", "Risk Management", "Financial Planning"]
    },
    {
      id: 3,
      name: "K . Malathi Latha",
      position: "Chief Business Officer & Head",
      department: "Food Catering, Events, Architecture & Interior Designs",
      icon: Users,
      color: "text-violet-400",
      bgColor: "bg-gradient-to-br from-violet-400/20 to-purple-400/20",
      borderColor: "border-violet-400/30",
      description: "Multi-domain business leader orchestrating operations across hospitality, events, and design verticals with a focus on customer excellence and operational efficiency.",
      skills: ["Operations Management", "Customer Experience", "Design Leadership", "Event Management"]
    },
    {
      id: 4,
      name: "R . Sanjay",
      position: "Head of Architecture & Interior Design",
      experience: "15 years",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-gradient-to-br from-pink-400/20 to-rose-400/20",
      borderColor: "border-pink-400/30",
      description: "Professional experience in technology and innovation, with exposure to AI, machine learning concepts, and data-driven design solutions.",
      skills: ["Architectural Design", "AI-Enhanced Design", "Data-Driven Solutions", "Technology Integration"]
    },
    {
      id: 5,
      name: "Madhuri Chathurvedhula",
      position: "Head of Business Intelligence",
      experience: "10 years",
      icon: BarChart3,
      color: "text-blue-400",
      bgColor: "bg-gradient-to-br from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-400/30",
      description: "Industry experience contributing to technology-driven projects and demonstrating adaptability to AI and automation trends in business intelligence.",
      skills: ["Business Intelligence", "AI & Automation", "Technology Adaptation", "Project Management"]
    },
    {
      id: 6,
      name: "Prabhudas Thanneru",
      position: "Head of Information Technology",
      experience: "10 years",
      icon: Laptop,
      color: "text-cyan-400",
      bgColor: "bg-gradient-to-br from-cyan-400/20 to-blue-400/20",
      borderColor: "border-cyan-400/30",
      description: "Experience in engineering and problem-solving, with awareness of AI-enhanced tools and emerging digital technologies in IT infrastructure.",
      skills: ["IT Infrastructure", "AI-Enhanced Tools", "Digital Technologies", "Engineering Solutions"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-full px-6 py-3 border border-amber-400/30 mb-8">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">
              Leadership Excellence
            </span>
            <Star className="w-5 h-5 text-amber-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Visionary</span><br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet the extraordinary minds behind Triventa Group's success. Our leadership team combines
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"> decades of expertise </span>
            across technology, finance, design, and business strategy to drive innovation and deliver excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {managementTeam.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className={`${member.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${member.borderColor} hover:border-opacity-60 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl ${member.bgColor.replace('/20', '/30')} border ${member.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className={`w-8 h-8 ${member.color}`} />
                </div>

                {member.experience && (
                  <div className="text-right opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-semibold text-gray-300">{member.experience}</div>
                    <div className="text-xs text-gray-400">Experience</div>
                  </div>
                )}
              </div>

              {/* Name and Position */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${member.bgColor.replace('/20', '/30')} border ${member.borderColor}`}>
                  <p className={`text-sm font-semibold ${member.color}`}>{member.position}</p>
                </div>
                {member.department && (
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{member.department}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium ${member.color} bg-white/10 rounded-full border border-white/20`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
            <p className="text-sm text-gray-400 italic">
              <span className="text-blue-400">Note:</span> Skills and experience descriptions have been professionally curated for our client's website,
              emphasizing AI/ML capabilities and technology expertise while maintaining accuracy and professionalism.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Industry Titans?</span>
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with our world-class leadership team to explore strategic partnerships,
              investment opportunities, and transformative business solutions that drive exponential growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Schedule Executive Meeting
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Explore Our Portfolio</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementSection;
