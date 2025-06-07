import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    setAnimateCounters(true);
  }, []);

  const skills = [
    { name: "React & Next.js", level: 32, color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Node.js & Express", level: 90, color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "Three.js & WebGL", level: 10, color: "from-purple-400 to-purple-600", icon: "🎮" },
    { name: "TypeScript", level: 20, color: "from-blue-500 to-indigo-600", icon: "📘" },
    { name: "Python & AI/ML", level: 10, color: "from-yellow-400 to-orange-500", icon: "🐍" }
  ];

  const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateCounters) return;
      
      const timer = setTimeout(() => {
        const increment = target / 50;
        const interval = setInterval(() => {
          setCount(prev => {
            if (prev >= target) {
              clearInterval(interval);
              return target;
            }
            return Math.min(prev + increment, target);
          });
        }, 30);
        
        return () => clearInterval(interval);
      }, 500);

      return () => clearTimeout(timer);
    }, [target, animateCounters]);

    return <span>{Math.round(count)}{suffix}</span>;
  };

  return (
    <div className="min-h-screen py-20 px-4 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.span
                      className="text-2xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {skill.icon}
                    </motion.span>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <motion.span
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    <Counter target={skill.level} suffix="%" />
                  </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: animateCounters ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                  />
                  
                  {/* Glowing effect */}
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-60 blur-sm`}
                    initial={{ width: 0 }}
                    animate={{ width: animateCounters ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-2 gap-6"
        >
          {[
            { number: 7, suffix: "", label: "Commits This Year", icon: "💻" },
            { number: 24, suffix: "/7", label: "Learning New Tech", icon: "📚" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1, type: "spring" }}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1, type: "spring" }}
              >
                <Counter target={stat.number} suffix={stat.suffix} />
              </motion.div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
