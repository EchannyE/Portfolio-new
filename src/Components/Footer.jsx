import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Define navigation links to avoid repetition
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
        // Add more links if needed, e.g., Privacy Policy, Terms of Service
        // { name: 'Privacy Policy', path: '/privacy' },
    ];

    // Define social media links
    const socialLinks = [
        { icon: <BiLogoFacebook size={24} />, href: "https://www.facebook.com/share/1C9vDUJ5qP/", label: "Facebook" },
        { icon: <BiLogoInstagram size={24} />, href: "https://www.instagram.com/echannyonda?igsh=MTcwdmE3ZnB2cHN5dA==", label: "Instagram" },
        { icon: <BiLogoLinkedin size={24} />, href: "http://www.linkedin.com/in/echannyidagu", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
                {/* Copyright Information */}
                <div className="text-gray-400">
                    <p className="text-sm">
                        &copy; {currentYear} Echanny Idagu. All rights reserved.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-400">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="hover:text-yellow-400 transition-colors duration-200 text-sm" // Added text-sm for better consistency
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center md:justify-end space-x-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label} // Use label as key for uniqueness
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-2xl" // Ensured icon size is consistent
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;