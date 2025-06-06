
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const achievements = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg border border-white/10 p-1"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-6xl font-bold text-white">
                  RR
                </div>
              </motion.div>
              
              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Full Stack Developer & Creative Technologist
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Passionate about creating digital experiences that combine cutting-edge technology 
              with stunning visual design. I specialize in modern web development, 3D graphics, 
              and interactive user interfaces.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              With expertise in React, Node.js, Three.js, and modern animation libraries, 
              I bring ideas to life through code, creating applications that don't just work—they inspire.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring" }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-white/70 text-sm mt-1">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
