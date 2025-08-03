import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiSmartphone, FiPenTool, FiLayers, FiArrowRight } from 'react-icons/fi';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FiBriefcase,
      title: "Brand Identity",
      description: "Creating cohesive brand experiences that resonate with your audience and build lasting connections.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
      color: "bg-primary-purple",
      gradient: "from-primary-purple to-primary-purple/80"
    },
    {
      icon: FiPenTool,
      title: "Product Design",
      description: "Designing user-centered products that solve real problems with beautiful and intuitive interfaces.",
      features: ["UI/UX Design", "Wireframing", "User Research", "Design Systems"],
      color: "bg-primary-yellow",
      gradient: "from-primary-yellow to-primary-yellow/80"
    },
    {
      icon: FiLayers,
      title: "Interaction Design",
      description: "Crafting engaging interactions and micro-animations that delight users and enhance experiences.",
      features: ["Prototyping", "Animation", "User Flow", "Micro-interactions"],
      color: "bg-primary-purple",
      gradient: "from-primary-purple to-primary-purple/80"
    },
    {
      icon: FiSmartphone,
      title: "App Design",
      description: "Developing mobile-first designs that work seamlessly across all devices and platforms.",
      features: ["Mobile Design", "Responsive Web", "Cross-platform", "App Store Assets"],
      color: "bg-primary-yellow",
      gradient: "from-primary-yellow to-primary-yellow/80"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-6">
            What I Do
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
            My
            <span className="text-primary-purple relative mx-4">
              Services
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-primary-yellow/40 -z-10"
              ></motion.div>
            </span>
            & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive design and development services to help bring your digital vision to life. 
            From concept to launch, I'm here to support your project every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${service.color} text-white rounded-2xl lg:rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon size={28} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary-purple transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Explore More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="group/btn flex items-center gap-3 text-primary-purple font-semibold hover:text-primary-purple/80 transition-colors duration-200"
                >
                  <span>Explore More</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-soft-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary-yellow/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-purple to-primary-yellow p-0.5 rounded-2xl inline-block">
            <div className="bg-white rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life. I'm here to help you create something amazing.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-purple text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Today
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-4 h-4 bg-primary-yellow rounded-full animate-pulse"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-32 left-20 hidden lg:block"
      >
        <div className="w-6 h-6 bg-primary-purple/30 rounded-full animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;