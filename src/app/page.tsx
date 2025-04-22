import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalSection from "@/components/GlobalSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import React from "react";


const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <GlobalSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};


// const Footer = () => {
//   return <div className="h-32 bg-gray-400 dark:bg-gray-800 w-screen"></div>;
// };

export default Index;
