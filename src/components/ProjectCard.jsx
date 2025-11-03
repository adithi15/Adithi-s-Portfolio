import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer border border-white/10">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover transition duration-500"
      />

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-white/20 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition duration-300"
          >
            View Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
