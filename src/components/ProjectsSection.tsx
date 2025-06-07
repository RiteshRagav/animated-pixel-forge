import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIsWebGLSupported(!!gl);

    // Handle WebGL context loss
    if (gl) {
      canvas.addEventListener('webglcontextlost', (event) => {
        event.preventDefault();
        console.warn('WebGL context lost. Some animations may be affected.');
      }, false);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Greenden : Natures Elegance",
      description: "Greenden is a responsive and stylish plant e-commerce frontend website, designed using HTML and Tailwind CSS. This project showcases a beautiful collection of plants for users to explore, search, and potentially purchase (UI mock-up only). It serves as a beginner-friendly frontend project focused on layout design, responsiveness, and visual appeal.",
      tech: ["HTML", "Tailwind CSS"],
      image: "/images/greenden.png",
      color: "from-blue-500 to-cyan-500",
      link: "https://riteshragav.github.io/Greenden/"
    },
    {
      id: 2,
      title: "Nostra Clothing Website",
      description: "Nostra is a simple and elegant e-commerce website built using HTML, CSS, and JavaScript. It showcases a collection of products, allows users to explore items, and enhances the shopping experience with interactive features. ✨ Features",
      tech: ["HTML", "CSS", "JS"],
      image: "/images/nostra.png",
      color: "from-purple-500 to-pink-500",
      link: "https://riteshragav.github.io/Nostra/"
    },
    {
      id: 3,
      title: "🌍 TripVista – A TripAdvisor-Inspired Travel Website Clone",
      description: "A beautifully crafted front-end clone of TripAdvisor, focused on delivering a clean, responsive, and elegant travel browsing experience. Built entirely with HTML and modern CSS, this project emphasizes stunning design, user-friendly layout, and device adaptability — all without using JavaScript. ✨ Key Features",
      tech: ["HTML", "CSS"],
      image: "/images/tripadvisor.png",
      color: "from-green-500 to-teal-500",
      link: "https://riteshragav.github.io/TripAdvisorClone/"
    },
    {
      id: 4,
      title: "Udemy Clone",
      description: "A responsive front-end clone of the popular e-learning platform Udemy, built using HTML and CSS . This project is designed to showcase frontend development skills with a clean UI and structured layout, ideal for practicing modern web design principles.",
      tech: ["HTML", "CSS"],
      image: "/images/udemy-instructor.jpg",
      color: "from-orange-500 to-red-500",
      link: "https://riteshragav.github.io/udemy-clone1/"
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work using HTML, CSS, and JavaScript
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
              onHoverStart={() => setSelectedProject(project.id)}
              onHoverEnd={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <div className="text-white text-lg font-semibold">
                          Click to View Project
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-3"
                    layoutId={`title-${project.id}`}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + techIndex * 0.1 }}
                        className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full backdrop-blur-sm border border-white/20"
                        whileHover={{ 
                          backgroundColor: "rgba(255,255,255,0.2)",
                          scale: 1.05 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
