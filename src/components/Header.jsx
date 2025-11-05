import React, { useState } from "react";
import logo from "../assets/logor.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-black text-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="RoamQuest Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="text-white hover:text-orange-500 transition duration-300">
            HOME
          </a>
          <a href="#blog" onClick={(e) => handleScroll(e, "blog")} className="text-white hover:text-orange-500 transition duration-300">
            BLOG
          </a>
          <a href="#destinations" onClick={(e) => handleScroll(e, "destinations")} className="text-white hover:text-orange-500 transition duration-300">
            DESTINATIONS
          </a>
          <a href="#gallery" onClick={(e) => handleScroll(e, "gallery")} className="text-white hover:text-orange-500 transition duration-300">
            GALLERY
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-white hover:text-orange-500 transition duration-300">
            ABOUT
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-white hover:text-orange-500 transition duration-300">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col text-center py-4 space-y-2 text-sm">
            {["home", "blog", "destinations", "gallery", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleScroll(e, section)}
                className={section === "home" ? "text-orange-500 font-semibold" : "hover:text-white"}
              >
                {section.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
