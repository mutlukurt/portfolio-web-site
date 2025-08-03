import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiEye, FiTool, FiLayers } from 'react-icons/fi';

const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: FiUsers,
      title: "User Research",
      description: "Understanding user needs through comprehensive research and analysis",
      color: "bg-primary-purple"
    },
    {
      icon: FiEye,
      title: "Visual Design",
      description: "Creating stunning visual experiences with attention to detail",
      color: "bg-primary-yellow"
    },
    {
      icon: FiTool,
      title: "User Testing",
      description: "Validating designs through rigorous user testing methodologies",
      color: "bg-primary-purple"
    },
    {
      icon: FiLayers,
      title: "Prototyping",
      description: "Building interactive prototypes to validate concepts and ideas",
      color: "bg-primary-yellow"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-yellow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Crafting Digital
                <br />
                <span className="text-primary-purple relative">
                  Experiences
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-primary-yellow/40 -z-10"
                  ></motion.div>
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate <strong className="text-primary-purple">Junior Web Developer</strong> with 
                a keen eye for design and a love for creating intuitive user experiences. My journey 
                in web development began with a fascination for how technology can solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in modern web technologies like <strong className="text-primary-purple">React</strong>, 
                <strong className="text-primary-purple"> JavaScript</strong>, and 
                <strong className="text-primary-purple"> UI/UX design</strong>, I bring ideas to life 
                through clean code and thoughtful design. I believe in the power of collaboration and 
                continuous learning to create exceptional digital experiences.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Figma'].map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="px-3 py-1 bg-soft-blue/50 text-primary-purple rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-3xl font-bold text-primary-purple mb-1"
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-3xl font-bold text-primary-purple mb-1"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-3xl font-bold text-primary-purple mb-1"
                >
                  Fast
                </motion.div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Shape */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, rotate: -5 } : { opacity: 0, rotate: -10 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-yellow rounded-3xl w-80 h-96 blur-sm"
              ></motion.div>
              
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-10 w-80 h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Placeholder for about image */}
                <div className="w-full h-full bg-gradient-to-br from-soft-blue/30 to-primary-purple/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <p className="text-gray-600 font-medium">Working Image</p>
                    <p className="text-sm text-gray-500 mt-2">Replace with actual photo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              My Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I combine technical skills with creative thinking to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={skillCardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 ${skill.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon size={28} />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;