import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore opportunities with Triventa Group? Let's connect and build something extraordinary together.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Follow Us Section */}
            <AnimatedSection animation="slideLeft" className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Follow Us</h3>
                <div className="flex flex-col space-y-4">
                  {[
                    { icon: Linkedin, color: 'hover:text-blue-400', name: 'LinkedIn' },
                    { icon: Twitter, color: 'hover:text-sky-400', name: 'Twitter' },
                    { icon: Facebook, color: 'hover:text-blue-600', name: 'Facebook' },
                    { icon: Instagram, color: 'hover:text-pink-400', name: 'Instagram' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center p-4 bg-white/5 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20`}
                    >
                      <social.icon className="w-6 h-6 mr-4" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form Section */}
            <AnimatedSection animation="slideRight" className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-3 font-medium">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-3 font-medium">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-3 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-3 font-medium">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-3 font-medium">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
