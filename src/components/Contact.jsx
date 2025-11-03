import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Get In <span className="text-gray-400">Touch</span>
        </h2>
        <div className="w-99 h-[0.5px] bg-gray-500 mx-auto mb-3 rounded"></div>
        <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Let's Talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-white/30 transition"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-white/30 transition"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full h-40 bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-white/30 transition"
                  id="message"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social & Contact Info */}
          <div className="space-y-3">
            {/* Location */}
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-100">
                  Location
                </h3>
                <p className="text-gray-400">Mumbai, Maharashtra</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-white text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-100">
                  Email
                </h3>
                <p className="text-gray-400">adithiankam15@gmail.com</p>
              </div>
            </div>

            {/* Follow Me */}
            <div className="pt-4">
              <h3 className="text-lg ml-10 font-semibold mb-2 text-gray-100">
                Follow Me
              </h3>
              <div className="flex ml-2 space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/adithi15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-2xl text-gray-300 border border-white/10 hover:bg-white hover:text-black hover:text-[#333] transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/adithi-ankam-96b885286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-2xl text-gray-300 border border-white/10 hover:bg-white hover:text-[#0077B5] transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/adithii.ankam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-2xl text-gray-300 border border-white/10 hover:bg-white hover:text-[#E4405F] transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
