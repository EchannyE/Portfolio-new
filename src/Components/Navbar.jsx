import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Changed useNavigate to useLocation for active link styling
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  // State for dark mode, initialized from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's system preference on first load if no theme is set
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // State for mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current path for active link styling
  const location = useLocation();

  // Effect to apply dark mode class to documentElement and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]); // Re-run effect only when darkMode changes

  // Callback to toggle mobile menu, memoized for performance
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []); // No dependencies, so it's stable

  // Callback to close mobile menu, useful for navigation links
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Callback to toggle dark mode, memoized for performance
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []); // No dependencies, so it's stable

  // Define navigation links to avoid repetition
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg border-b border-gray-700 relative z-10">
      {/* Logo/Brand */}
      <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
        <div className="text-2xl border-2 border-yellow-400 text-yellow-400 rounded-lg px-2 py-1 transition duration-200 hover:bg-yellow-400 hover:text-gray-900">
          <p className="font-bold">EEI</p> {/* Added font-bold for emphasis */}
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            // Apply active class if current path matches link path
            className={`hover:text-yellow-400 transition duration-200 ${
              location.pathname === link.path ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Dark Mode Toggle for Desktop */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-950 text-white px-4 py-1 rounded-md hover:bg-gray-700 transition flex items-center gap-2"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} // Accessibility improvement
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden block text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-1 z-20" // Added focus styles
        onClick={toggleMenu}
        aria-expanded={isMenuOpen} // Accessibility improvement
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} // Accessibility improvement
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col gap-4 items-center py-6 shadow-lg border-t border-gray-700 lg:hidden animate-slide-down"> {/* Added animation class */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg hover:text-yellow-400 transition duration-200 ${
                location.pathname === link.path ? 'text-yellow-400 font-semibold' : ''
              }`}
              onClick={closeMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => {
              toggleDarkMode();
              closeMenu(); // Close menu after toggling dark mode on mobile
            }}
            className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition flex items-center gap-2 mt-4" // Adjusted styling
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;