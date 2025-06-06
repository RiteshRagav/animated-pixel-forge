
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Sparkles } from '@react-three/drei';
import NetworkSphere from './NetworkSphere';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center z-10">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
          
          <Suspense fallback={null}>
            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
              <NetworkSphere position={[0, 0, 0]} count={1500} />
            </Float>
            
            <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
              <NetworkSphere position={[6, 2, -4]} count={800} />
            </Float>
            
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
              <NetworkSphere position={[-5, -2, -3]} count={600} />
            </Float>
            
            <Stars 
              radius={100} 
              depth={50} 
              count={3000} 
              factor={4} 
              saturation={0.5} 
              fade 
              speed={0.5}
            />
            
            <Sparkles 
              count={100} 
              scale={[10, 10, 10]} 
              size={2} 
              speed={0.3}
              opacity={0.6}
            />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 60% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 60% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Ritesh Ragav
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-3xl text-white/90 mb-4">
              Full Stack Developer & Creative Technologist
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technology, 
              stunning visuals, and seamless user interactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
          <p className="text-white/50 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
