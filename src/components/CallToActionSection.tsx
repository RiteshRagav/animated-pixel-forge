
import React from 'react';
import { motion } from 'framer-motion';

const CallToActionSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/eddf86f5-cfbc-44ee-8efe-79f94c6b9e8d.png';
    link.download = 'Ritesh_Ragav_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 z-10 relative">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Collaborate</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's build something extraordinary together. I'm available for freelance projects, 
            collaborations, and full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 5px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Hire Me Now
            </motion.span>
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>

          <motion.button
            onClick={handleDownloadResume}
            className="group relative px-12 py-6 border-2 border-white/30 rounded-full text-white font-bold text-xl backdrop-blur-sm overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Email", value: "frostyluvmac@gmail.com", icon: "✉️" },
            { label: "Phone", value: "+91 8825526351", icon: "📱" },
            { label: "Location", value: "Chennai, India", icon: "🌍" },
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 text-center"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(59, 130, 246, 0.5)" 
              }}
            >
              <motion.div
                className="text-3xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {contact.icon}
              </motion.div>
              <h4 className="text-blue-400 font-semibold mb-2">{contact.label}</h4>
              <p className="text-white/80">{contact.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
