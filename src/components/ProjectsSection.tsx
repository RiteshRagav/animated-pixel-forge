
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio built with Three.js and React",
      tech: ["React", "Three.js", "GSAP", "WebGL"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration and modern UI",
      tech: ["React", "Socket.io", "OpenAI", "Node.js"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard with real-time charts and analytics",
      tech: ["React", "D3.js", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-500"
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
            A showcase of my recent work spanning web development, 3D graphics, and AI integration
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
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
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
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                      >
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                        </motion.button>
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-lg"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
