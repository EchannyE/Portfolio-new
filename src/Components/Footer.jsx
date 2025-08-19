import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiArrowToTop,
} from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Social links
  const socialLinks = [
    {
      icon: BiLogoFacebook,
      href: "https://www.facebook.com/share/1C9vDUJ5qP/",
      label: "Facebook",
    },
    {
      icon: BiLogoInstagram,
      href: "https://www.instagram.com/echannyonda?igsh=MTcwdmE3ZnB2cHN5dA==",
      label: "Instagram",
    },
    {
      icon: BiLogoLinkedin,
      href: "http://www.linkedin.com/in/echannyidagu",
      label: "LinkedIn",
    },
  ];

  // Scroll-to-top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Echanny Idagu. All rights reserved.
        </p>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social + Back to Top */}
        <div className="flex items-center space-x-4">
          {/* Social links */}
          <ul className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  <Icon size={22} />
                </a>
              </li>
            ))}
          </ul>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="ml-4 flex items-center space-x-1 px-3 py-1 bg-yellow-500 text-black text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-200"
          >
            <BiArrowToTop size={18} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
