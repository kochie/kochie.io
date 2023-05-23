import React from "react";

import { CountryGrid, Jumbotron, ProjectGrid, TopBar } from "@/components";
import Footer from "@/components/Footer";
import BlogArticles from "@/components/BlogArticles";
import Contact from "@/components/Contact";
import WaveBottom from "@/components/Transitions/WaveBottom";
import WaveTop from "@/components/Transitions/WaveTop";
import Peaks from "@/components/Transitions/Peaks";

const Index = () => {
  return (
    <div className="scroll-smooth dark:bg-slate-600">
      <TopBar />
      <Jumbotron />
      <div id="about" className="scroll-m-12" />
      {/* <TextHero /> */}
      <div id="projects" className="scroll-m-12" />
      <ProjectGrid />
      {/* <TextHero /> */}
      <WaveBottom />
      <div id="info" className="scroll-m-12" />
      <div id="availability" className="scroll-m-12" />
      <CountryGrid />
      <BlogArticles />
      <div id="contact" className="scroll-m-12" />
      <Contact />
      <Peaks />
      <Footer />
    </div>
  );
};

const TextHero = () => {
  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-800 dark:text-white text-center flex py-10 justify-center">
        <div className="w-[1000px] flex flex-col gap-6">
          <p>
            Building websites can be a tedious and painful operation. You need
            to decide which Content Management System (CMS) to use, create
            designs, build Search Engine Optimization. Then you have to worry
            about cybersecurity and back up all your data in case of a
            ransomware attack.
          </p>
          <p>Wouldn&apos;t it be better if there was an easier way?</p>
        </div>
      </div>
    </div>
  );
};

// const Footer = () => {
//   return <div className="h-32 bg-gray-400 dark:bg-gray-800 w-screen"></div>;
// };

export default Index;
