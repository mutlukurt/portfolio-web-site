import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize } from 'react-icons/fi';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-soft-blue/20 via-white to-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary-purple/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-6">
            See Me In Action
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Watch My
            <br />
            <span className="text-primary-purple relative">
              Creative Process
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-primary-yellow/40 -z-10"
              ></motion.div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get an inside look at how I approach design challenges and bring creative ideas to life
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div 
            className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="/api/placeholder/800/450" // Replace with actual poster image
            >
              {/* Replace with actual video sources */}
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              <source src="/path-to-your-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Video Placeholder (shown when no video is loaded) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/80 to-primary-yellow/80 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                >
                  <FiPlay size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Demo Video</h3>
                <p className="text-white/80">Replace with your actual video content</p>
              </div>
            </div>

            {/* Play/Pause Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
            >
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                {isPlaying ? (
                  <FiPause size={28} className="text-primary-purple" />
                ) : (
                  <FiPlay size={28} className="text-primary-purple ml-1" />
                )}
              </motion.button>
            </motion.div>

            {/* Video Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
                >
                  {isPlaying ? (
                    <FiPause size={20} className="text-primary-purple" />
                  ) : (
                    <FiPlay size={20} className="text-primary-purple ml-0.5" />
                  )}
                </motion.button>

                <motion.button
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
                >
                  {isMuted ? (
                    <FiVolumeX size={20} className="text-primary-purple" />
                  ) : (
                    <FiVolume2 size={20} className="text-primary-purple" />
                  )}
                </motion.button>
              </div>

              <motion.button
                onClick={toggleFullscreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <FiMaximize size={20} className="text-primary-purple" />
              </motion.button>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -top-8 -right-8 w-16 h-16 bg-primary-yellow rounded-2xl rotate-12 shadow-lg"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-purple rounded-full shadow-lg"
          ></motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-primary-purple mb-2">Creative Process</div>
              <p className="text-gray-600 text-sm">From concept to completion</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-primary-purple mb-2">Problem Solving</div>
              <p className="text-gray-600 text-sm">Innovative solutions</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-primary-purple mb-2">Collaboration</div>
              <p className="text-gray-600 text-sm">Working with teams</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;