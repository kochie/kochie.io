"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/images/KochieEngineeringLogo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md  border-gray-800 transition-colors duration-300",
        isScrolled ? "bg-space-darker/80 border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" className="h-10 mr-2" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#home"
                className="text-white hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="#projects"
                className="text-white hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="#global"
                className="text-white hover:text-accent transition-colors"
              >
                Global
              </Link>
              <Link
                href="#blog"
                className="text-white hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <Link href="#contact" className="btn-primary text-sm py-2 px-4 ml-2">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-space-darker border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="block px-3 py-2 text-white hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-white hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-white hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="#global"
              className="block px-3 py-2 text-white hover:text-accent transition-colors"
            >
              Global
            </Link>
            <Link
              href="#blog"
              className="block px-3 py-2 text-white hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-accent font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
