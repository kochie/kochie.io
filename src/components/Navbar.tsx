"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-darker/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-accent transition-colors">Home</a>
              <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
              <a href="#services" className="text-white hover:text-accent transition-colors">Services</a>
              <a href="#global" className="text-white hover:text-accent transition-colors">Global</a>
              <a href="#blog" className="text-white hover:text-accent transition-colors">Blog</a>
              <a href="#contact" className="btn-primary text-sm py-2 px-4 ml-2">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-space-darker border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-accent transition-colors">Home</a>
            <a href="#projects" className="block px-3 py-2 text-white hover:text-accent transition-colors">Projects</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-accent transition-colors">Services</a>
            <a href="#global" className="block px-3 py-2 text-white hover:text-accent transition-colors">Global</a>
            <a href="#blog" className="block px-3 py-2 text-white hover:text-accent transition-colors">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-accent font-bold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
