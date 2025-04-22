import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Copyright,
} from "lucide-react";
import Logo from "@/assets/images/KochieEngineeringLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "fathom-client";

const Footer = () => {
  return (
    <footer className="bg-space-darkest py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src={Logo}
                alt="Koch Engineering Logo"
                className="h-10"
                height={40}
              />
            </div>
            <p className="text-gray-400 mb-4">
              Creating innovative web solutions that empower businesses to
              thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/kochie"
                onClick={() => trackEvent("twitter")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kochie"
                onClick={() => trackEvent("linkedin")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/kochie"
                onClick={() => trackEvent("github")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#global"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Global Support
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-accent mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">Melbourne, Australia</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  <Link
                    href="mailto:hello@kochie.io"
                    onClick={() => trackEvent("Email Hello")}
                    className="hover:underline"
                  >
                    hello@kochie.io
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <span className="flex items-center justify-center gap-3">
            <Copyright /> 2025 Kochie Engineering. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
