import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-gray-100 py-10 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Skills Box */}
          <div className="bg-neutral-900 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3 text-center text-white">
              Skills
            </h2>
            <div className="w-45 h-[1px] bg-gray-500 mx-auto mb-8 rounded "></div>
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-300 font-medium mb-2">
                  Programming Languages:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["C", "Java", "C++", "JavaScript", "React.js"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-gray-800 text-sm px-3 py-1 rounded-sm border border-gray-600"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-gray-300 font-medium mb-2">
                  Web Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-300 font-medium mb-2">Databases:</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-300 font-medium mb-2">
                  Tools & Platforms:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["VSCode", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-300 font-medium mb-2">Others:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Canva"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-sm border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Box (Separate) */}
          <div className="bg-neutral-900 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Location</h3>
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-pink-500 mr-2" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Right Column – Education & Experience */}
        <div className="space-y-8">
          {/* Education */}
          <div className="bg-neutral-900 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3 text-center text-white">
              Education
            </h2>
            <div className="w-45 h-[1px] bg-gray-500 mx-auto mb-8 rounded "></div>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="text-purple-400 font-semibold">
                  ● B.E. in Information Technology
                </span>
                <p>
                  Saraswati College of Engineering, Kharghar
                  <br />
                  CGPA: 8.50
                </p>
              </li>

              <li>
                <span className="text-purple-400 font-semibold">
                  ● Higher Secondary Certificate (HSC)
                </span>
                <p>
                  Bharatiya Vidya Bhavans
                  <br />
                  GPA: 80.81%
                </p>
              </li>

              <li>
                <span className="text-purple-400 font-semibold">
                  ● School Secondary Certificate (SSC)
                </span>
                <p>
                  ST. Joseph's Convent High School
                  <br />
                  GPA: 67%
                </p>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-neutral-900 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3  text-center text-white">
              Experience
            </h2>
            <div className="w-45 h-[1px] bg-gray-500 mx-auto mb-8 rounded "></div>
            <ul className="space-y-5 text-gray-300">
              <li>
                <span className="text-blue-400 font-semibold">
                  ➛ Intern, Sankey Solutions
                </span>
                <p>
                  During my internship, I learned to design pages using
                  JavaScript and CSS and also gained knowledge of JavaScript and
                  also focused on learning React. This experience significantly
                  enhanced my front-end development skills.
                </p>
              </li>
              <li>
                <span className="text-blue-400 font-semibold">
                  ➛ Intern, Acmegrade
                </span>
                <p>
                  I learned the basics of security and also learned about
                  different protocols, and networking commands used in detecting
                  vulnerabilities, as well as understanding various attacks and
                  prevention methods.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
