import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown, Users, DollarSign, Palette, Building, BarChart3, Laptop,
  Mail, Phone, Linkedin, Award, Target, Briefcase, ChevronDown,
  ChevronUp, MapPin, Calendar, ExternalLink, Shield, Star
} from 'lucide-react';

export const ManagementSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const managementTeam = [
    {
      id: 1,
      name: "Yatham Sai Gopal Rao",
      position: "Founder, Director & CEO",
      icon: Crown,
      color: "text-amber-400",
      bgColor: "bg-gradient-to-br from-amber-400/20 to-orange-400/20",
      borderColor: "border-amber-400/30",
      description: "Visionary entrepreneur with 15+ years of experience building multi-billion dollar enterprises across technology, entertainment, and hospitality sectors.",
      email: "ceo@triventagroup.com",
      phone: "+91 8367228888",
      achievements: [
        "Founded 8+ successful business verticals",
        "Generated ₹500+ Crores in cumulative revenue",
        "Led digital transformation initiatives",
        "Recognized as 'Entrepreneur of the Year' 2023"
      ],
      expertise: ["Strategic Leadership", "Business Development", "Digital Innovation", "Market Expansion"],
      yearsExperience: 15,
      education: "MBA - Strategic Management",
      location: "Hyderabad, India"
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
      achievements: [
        "Managed ₹300+ Crores in corporate finances",
        "Orchestrated 5+ successful business acquisitions",
        "Implemented cost optimization saving ₹50+ Crores",
        "Awarded 'CFO Excellence Award' by ICAI"
      ],
      expertise: ["Corporate Finance", "Investment Strategy", "Risk Management", "Financial Planning"],
      yearsExperience: 12,
      education: "CA, CFA - Financial Management",
      location: "Hyderabad, India"
    },
    {
      id: 3,
      name: "Malathi Latha",
      position: "Chief Business Officer & Head",
      department: "Food Catering, Events, Architecture & Interior Designs",
      icon: Users,
      color: "text-violet-400",
      bgColor: "bg-gradient-to-br from-violet-400/20 to-purple-400/20",
      borderColor: "border-violet-400/30",
      description: "Multi-domain business leader orchestrating operations across hospitality, events, and design verticals with a focus on customer excellence and operational efficiency.",
      achievements: [
        "Managed 1000+ premium events successfully",
        "Built architectural portfolio worth ₹200+ Crores",
        "Achieved 98% customer satisfaction rate",
        "Expanded operations to 15+ cities"
      ],
      expertise: ["Operations Management", "Customer Experience", "Design Leadership", "Event Management"],
      yearsExperience: 10,
      education: "Masters in Business Management",
      location: "Hyderabad, India"
    },
    {
      id: 4,
      name: "Sanjay",
      position: "Head of Architecture & Interior Design",
      icon: Palette,
      color: "text-pink-400",
      bgColor: "bg-gradient-to-br from-pink-400/20 to-rose-400/20",
      borderColor: "border-pink-400/30",
      description: "Creative design visionary transforming spaces into architectural masterpieces, specializing in luxury residential and commercial projects with sustainable design principles.",
      achievements: [
        "Designed 500+ premium residential projects",
        "Won 'Best Interior Design' award 3 times",
        "Created signature designs for luxury hotels",
        "Pioneered sustainable architecture initiatives"
      ],
      expertise: ["Architectural Design", "Interior Styling", "3D Visualization", "Sustainable Design"],
      yearsExperience: 8,
      education: "B.Arch - Architectural Design",
      location: "Hyderabad, India"
    },
    {
      id: 5,
      name: "Madhuri Chathurvedhula",
      position: "Head of Business Intelligence",
      icon: BarChart3,
      color: "text-blue-400",
      bgColor: "bg-gradient-to-br from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-400/30",
      description: "Data science expert driving AI-powered business intelligence solutions, transforming raw data into actionable insights for strategic decision-making across all verticals.",
      achievements: [
        "Implemented AI solutions improving efficiency by 40%",
        "Built predictive models with 95% accuracy",
        "Reduced operational costs by ₹25+ Crores",
        "Published 15+ research papers on Business Intelligence"
      ],
      expertise: ["Data Analytics", "Machine Learning", "Business Intelligence", "AI Strategy"],
      yearsExperience: 7,
      education: "MS - Data Science & Analytics",
      location: "Hyderabad, India"
    },
    {
      id: 6,
      name: "Prabhudas Thanneru",
      position: "Head of Information Technology",
      icon: Laptop,
      color: "text-cyan-400",
      bgColor: "bg-gradient-to-br from-cyan-400/20 to-blue-400/20",
      borderColor: "border-cyan-400/30",
      description: "Technology infrastructure architect building scalable, secure, and innovative IT solutions that power digital transformation across all Triventa Group verticals.",
      achievements: [
        "Built cloud infrastructure serving 1M+ users",
        "Implemented cybersecurity framework (99.9% uptime)",
        "Led digital transformation for 50+ enterprises",
        "Certified in 12+ cutting-edge technologies"
      ],
      expertise: ["Cloud Architecture", "Cybersecurity", "DevOps", "Digital Transformation"],
      yearsExperience: 9,
      education: "B.Tech - Computer Science & Engineering",
      location: "Hyderabad, India"
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
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              className={`${member.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${member.borderColor} hover:border-opacity-60 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl ${member.bgColor.replace('/20', '/30')} border ${member.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className={`w-8 h-8 ${member.color}`} />
                </div>

                <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-gray-400 mb-1">{member.yearsExperience} Years Experience</div>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </div>
                </div>
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
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.description}</p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium ${member.color} bg-white/10 rounded-full border border-white/20`}
                  >
                    {skill}
                  </span>
                ))}
                {member.expertise.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10">
                    +{member.expertise.length - 3} more
                  </span>
                )}
              </div>

              {/* Expand Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Click to {selectedMember === member.id ? 'collapse' : 'expand'}</span>
                <motion.div
                  animate={{ rotate: selectedMember === member.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 ${member.color}`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expanded Member Details */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {(() => {
                const member = managementTeam.find(m => m.id === selectedMember);
                if (!member) return null;

                return (
                  <div className={`${member.bgColor} backdrop-blur-xl rounded-3xl p-12 border ${member.borderColor}`}>
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div>
                        <div className="flex items-center mb-8">
                          <div className={`w-20 h-20 rounded-2xl ${member.bgColor.replace('/20', '/40')} border-2 ${member.borderColor} flex items-center justify-center mr-6`}>
                            <member.icon className={`w-10 h-10 ${member.color}`} />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                            <p className={`text-lg font-semibold ${member.color}`}>{member.position}</p>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                          {member.email && (
                            <div className="flex items-center">
                              <Mail className={`w-5 h-5 ${member.color} mr-3`} />
                              <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white transition-colors">
                                {member.email}
                              </a>
                            </div>
                          )}
                          {member.phone && (
                            <div className="flex items-center">
                              <Phone className={`w-5 h-5 ${member.color} mr-3`} />
                              <a href={`tel:${member.phone}`} className="text-gray-300 hover:text-white transition-colors">
                                {member.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Achievements */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <Award className={`w-6 h-6 ${member.color} mr-3`} />
                            Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {member.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start">
                                <div className={`w-2 h-2 rounded-full ${member.color.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Expertise */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <Target className={`w-6 h-6 ${member.color} mr-3`} />
                            Core Expertise
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {member.expertise.map((skill, index) => (
                              <div
                                key={index}
                                className={`px-4 py-3 ${member.bgColor.replace('/20', '/30')} rounded-xl border ${member.borderColor} text-center`}
                              >
                                <span className={`text-sm font-medium ${member.color}`}>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => setSelectedMember(null)}
                        className={`px-6 py-3 ${member.bgColor.replace('/20', '/30')} border ${member.borderColor} rounded-xl ${member.color} font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-2`}
                      >
                        <ChevronUp className="w-4 h-4" />
                        <span>Collapse Details</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-xl rounded-full px-6 py-3 border border-amber-400/40 mb-8">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">
                Leadership Excellence Guaranteed
              </span>
              <Shield className="w-5 h-5 text-amber-400" />
            </div>

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
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Executive Meeting</span>
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