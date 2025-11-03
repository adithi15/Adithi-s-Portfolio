import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-black bg-opacity-70 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-gray-300">Adithi Ankam</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300 typewriter">
            Front-End Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            I’m a passionate developer with experience in front-end and
            full-stack Java development. I love building clean, modern, and
            responsive interfaces that bring ideas to life.
          </p>
          <div className="flex space-x-4">
            <a
              href="#project"
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.05)]" />
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
