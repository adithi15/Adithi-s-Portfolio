import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="project"
      className="py-20 bg-black bg-opacity-60 backdrop-blur-lg border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          My <span className="text-gray-300">Projects</span>
        </h2>

        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* 🧩 Grid of project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* ⚫ Centered "View All Projects" button */}
        <div className="text-center mt-12">
          <a
            href="https://your-portfolio.vercel.app/projects" // replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white bg-white/10 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/20 transition duration-300"
          >
            <span>View All Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
