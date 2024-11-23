import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa"; // Importing FontAwesome bars icon for the hamburger menu

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state for mobile

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    document.getElementById(navItem).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Close menu after item click on mobile
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-inherit shadow-lg z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div
          className="text-xl font-semibold cursor-pointer text-white"
          onClick={() => handleNavClick("intro")}
        >
          SILLA
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaHamburger className="text-white text-2xl" />
        </div>

        {/* Navbar Items */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:space-x-6 flex-col md:flex-row absolute md:static bg-custom-dark md:bg-inherit w-full md:w-auto top-10 right-0 p-4 md:p-0`}
        >
          <li
            className={`text-2sm font-semibold cursor-pointer ${
              activeNav === "about" ? "text-blue-500" : "text-white"
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            className={`text-2sm  font-semibold cursor-pointer ${
              activeNav === "experience" ? "text-blue-500" : "text-white"
            }`}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </li>
          <li
            className={`text-2sm  font-semibold cursor-pointer ${
              activeNav === "skillGallery" ? "text-blue-500" : "text-white"
            }`}
            onClick={() => handleNavClick("skillGallery")}
          >
           Skills
          </li>
          <li
            className={`text-2sm  font-semibold cursor-pointer ${
              activeNav === "projects" ? "text-blue-500" : "text-white"
            }`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </li>
          <li
            className={`text-2sm  font-semibold cursor-pointer ${
              activeNav === "contact" ? "text-blue-500" : "text-white"
            }`}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
