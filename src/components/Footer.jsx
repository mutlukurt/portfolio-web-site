import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowUp, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiExternalLink 
} from 'react-icons/fi';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: FiGithub, 
      name: 'GitHub', 
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-800'
    },
    { 
      icon: FiLinkedin, 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    { 
      icon: FiTwitter, 
      name: 'Twitter', 
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FiInstagram, 
      name: 'Instagram', 
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ];

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  Let's Create Something
                  <span className="text-primary-yellow"> Amazing</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you have a clear vision or just an idea, let's discuss how we can bring it to life.
                </p>
                
                {/* Contact CTA */}
                <motion.button
                  onClick={() => scrollToSection('#hero')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-purple text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-purple/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Start a Project
                  <FiExternalLink size={18} />
                </motion.button>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-primary-yellow transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-primary-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
                <ul className="space-y-4">
                  {contactInfo.map((contact) => (
                    <li key={contact.label}>
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-primary-yellow transition-colors duration-200 flex items-center gap-3 group"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <contact.icon 
                          size={16} 
                          className="text-primary-purple group-hover:text-primary-yellow transition-colors duration-200" 
                        />
                        <div>
                          <div className="text-xs text-gray-400 uppercase tracking-wide">
                            {contact.label}
                          </div>
                          <div className="font-medium">{contact.value}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-12 pb-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="text-gray-400 text-sm font-medium">Follow me:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <span className="text-gray-400 text-sm font-medium whitespace-nowrap">Stay updated:</span>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors duration-200 text-sm w-full sm:w-48 min-w-0"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-purple text-white px-6 py-2 rounded-full font-medium hover:bg-primary-purple/90 transition-colors duration-200 text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mutlu Kurt.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm text-gray-400">
              <button className="hover:text-primary-yellow transition-colors duration-200 whitespace-nowrap">
                Privacy Policy
              </button>
              <button className="hover:text-primary-yellow transition-colors duration-200 whitespace-nowrap">
                Terms of Service
              </button>
              <button className="hover:text-primary-yellow transition-colors duration-200 whitespace-nowrap">
                Cookies
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-purple via-primary-yellow to-primary-purple"></div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 hover:bg-primary-purple/90"
      >
        <FiArrowUp size={24} />
      </motion.button>
    </>
  );
};

export default Footer;