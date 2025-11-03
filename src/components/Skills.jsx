import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-black bg-opacity-60 backdrop-blur-lg border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          My <span className="text-gray-300">Skills</span>
        </h2>
        <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of the technical skills I’ve acquired and honed over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-white mr-6" />
                <h3 className="text-2xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
