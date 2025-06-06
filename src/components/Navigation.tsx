
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  sections: Array<{ id: string; component: React.ComponentType }>;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, sections }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'cta', label: 'Hire Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3"
        >
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(index)}
                className={`relative px-3 py-1 text-sm font-medium transition-colors ${
                  currentSection === index ? 'text-blue-400' : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Side Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4"
      >
        {sections.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onNavigate(index)}
            className="w-3 h-3 rounded-full border-2 border-white/30 transition-all duration-300"
            style={{
              backgroundColor: currentSection === index ? '#3b82f6' : 'transparent',
              borderColor: currentSection === index ? '#3b82f6' : 'rgba(255,255,255,0.3)',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/80 backdrop-blur-lg border-t border-white/10 px-4 py-2"
        >
          <div className="flex justify-around">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(index)}
                className={`flex flex-col items-center py-2 px-1 ${
                  currentSection === index ? 'text-blue-400' : 'text-white/70'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-2 h-2 rounded-full mb-1 ${
                  currentSection === index ? 'bg-blue-400' : 'bg-white/30'
                }`} />
                <span className="text-xs">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
