import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Initializing...");

  // Messages that cycle while loading
  const messages = [
    "Initializing Environment...",
    "Loading Assets...",
    "Compiling React Components...",
    "Optimizing Animations...",
    "Starting Adithi's Portfolio...",
  ];

  useEffect(() => {
    let messageIndex = 0;
    
    // Counter Logic
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Slight pause at 100% before exit
          return 100;
        }
        
        // Cycle messages based on percentage
        if (prev % 20 === 0 && prev < 90) {
            setText(messages[messageIndex]);
            messageIndex = (messageIndex + 1) % messages.length;
        }
        return prev + 1;
      });
    }, 25); // Speed of the loader

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      // Slide up animation (Curtain effect)
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Glow Effect (Matches your profile image glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="z-10 flex flex-col items-start w-[300px] md:w-[400px]">
        
        {/* The Percentage Number */}
        <div className="flex items-end mb-2 overflow-hidden h-24">
            <motion.h1 
                className="text-7xl md:text-8xl font-bold text-white font-mono"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {count}
            </motion.h1>
            <span className="text-2xl md:text-3xl text-gray-500 mb-4 ml-2 font-mono">%</span>
        </div>

        {/* The Progress Bar (Line style) */}
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
            />
        </div>

        {/* System Status Text */}
        <div className="flex justify-between w-full mt-3">
            <motion.p 
                key={text} // Triggers animation when text changes
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-mono text-gray-400"
            >
                {count === 100 ? "Access Granted" : text}
            </motion.p>
            
            {/* Blinking Cursor */}
            <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full mt-1.5"
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;