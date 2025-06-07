import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ParticlesBackground from '../components/ParticlesBackground';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'about', component: AboutSection },
  { id: 'cta', component: CallToActionSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'skills', component: SkillsSection },
  { id: 'contact', component: ContactSection },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        navigateToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        navigateToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isTransitioning]);

  const navigateToSection = (index: number) => {
    if (index === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white overflow-y-auto">
      <ParticlesBackground />
      
      <Navigation 
        currentSection={currentSection}
        onNavigate={navigateToSection}
        sections={sections}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 1.1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="min-h-screen"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
