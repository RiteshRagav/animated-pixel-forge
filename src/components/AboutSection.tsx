import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const achievements = [
    { number: "5+", label: "Projects Completed" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate full-stack developer with expertise in creating interactive and engaging web experiences. 
              My focus is on building modern web applications using React, Three.js, and other cutting-edge technologies.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              As I'm a newbie technopile learner, I'm trying to learn and implement the technologies to create a robust experience and an aesthetic functionality for the user.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-white/70">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
