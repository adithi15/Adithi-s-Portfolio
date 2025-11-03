import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-between h-20">
        {/* ✅ Logo (Left) */}
        <div>
          <a href="#" className="text-3xl font-bold text-white">A
            <span className="text-gray-400"> A</span>
          </a>
        </div>

        {/* ✅ Center Glass Capsule Navigation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 px-7 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 mx-1 text-sm font-light text-white relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative px-4 pt-4 pb-6 rounded-3xl mx-3 backdrop-blur-2xl border border-white/10 bg-black/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="relative z-10 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 text-gray-200 font-light tracking-wide rounded-xl hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
