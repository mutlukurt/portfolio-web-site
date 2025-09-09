import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleDownloadCV = () => {
    // Create a simple text CV for demo
    const cvContent = `MUTLU KURT - Portfolio

Contact: your.email@example.com

SKILLS:
- React & JavaScript
- UI/UX Design
- Web Development
- Creative Problem Solving

This is a demo CV. Replace with your actual CV file.`;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mutlu_Kurt_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleContactMe = () => {
    setShowContactModal(true);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-soft-blue via-white to-light-gray">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-purple/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-yellow/30 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-6"
            >
              👋 Hello, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-primary-purple">Creative</span>
              <br />
              <span className="relative">
                Developer
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary-yellow/40 -z-10"
                ></motion.div>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I craft beautiful digital experiences with modern web technologies. 
              Specializing in React, UI/UX design, and creative problem-solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleContactMe}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-primary-purple text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiMail className="group-hover:animate-bounce" />
                Contact Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-primary-purple border-2 border-primary-purple px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-primary-purple hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">3+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Shapes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-primary-purple rounded-diagonal w-80 h-96 -rotate-6"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute inset-0 bg-primary-yellow w-80 h-96 rounded-2xl rotate-3 translate-x-4 translate-y-4"
              ></motion.div>

              {/* Profile Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="relative z-10 w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-purple/20 to-primary-yellow/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="text-gray-600">Profile Image</p>
                    <p className="text-sm text-gray-500 mt-2">Replace with actual image</p>
                  </div>
                </div>
                {/* Uncomment and replace with actual image */}
                {/* <img 
                  src="/path-to-your-image.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                /> */}
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="w-6 h-6 bg-primary-yellow rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-6 shadow-lg"
              >
                <div className="text-2xl">⚡</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Ready to start a project together? Send me an email and let's discuss your ideas!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="block w-full bg-primary-purple text-white text-center py-3 rounded-full font-semibold hover:bg-primary-purple/90 transition-colors duration-200"
              >
                Send Email
              </a>
              <button
                onClick={() => setShowContactModal(false)}
                className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-purple rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-purple rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;