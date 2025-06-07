import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import NetworkSphere from './NetworkSphere';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center z-10">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#8b5cf6" />
          
          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
              <NetworkSphere position={[0, 0, 0]} count={1200} />
            </Float>
            
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
              <NetworkSphere position={[6, 2, -4]} count={600} />
            </Float>
            
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
              <NetworkSphere position={[-5, -2, -3]} count={400} />
            </Float>
            
            <Stars 
              radius={100} 
              depth={50} 
              count={2000} 
              factor={3} 
              saturation={0.3} 
              fade 
              speed={0.8}
            />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Enhanced Name Display */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Main "Hi I am," text */}
            <motion.h1
              className="text-6xl md:text-9xl font-bold text-white mb-4"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))',
              }}
            >
              Hi I am,
            </motion.h1>
            
            {/* Name text - smaller size */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-blue-400"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
              }}
            >
              Ritesh Ragav
            </motion.h2>
            
            {/* Decorative underline */}
            <motion.div
              className="mx-auto mt-4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-3xl text-white/90 mb-4 font-light tracking-wide">
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
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl border border-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore My Work
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm bg-white/5"
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

          {/* Scroll Indicator - moved below buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col items-center mt-8"
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
