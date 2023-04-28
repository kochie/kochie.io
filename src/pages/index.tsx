import React from "react";

import { CountryGrid, Jumbotron, ProjectGrid, TopBar } from "@/components";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <TopBar />
      <Jumbotron />
      <div id="about" className="scroll-m-12" />
      <TextHero />
      <div id="projects" className="scroll-m-12" />
      <ProjectGrid />
      <div id="info" className="scroll-m-12" />
      <TextHero />
      <div id="availability" className="scroll-m-12" />
      <CountryGrid />
      <div id="contact" className="scroll-m-12" />
      <TextHero />
      <Footer />
    </div>
  );
};

const TextHero = () => {
  return (
    <div className="bg-gray-400 dark:bg-gray-800 dark:text-white text-center flex py-40 justify-center">
      <div className="w-[1000px] flex flex-col gap-6">
        <p>
          Building websites can be a tedious and painful operation. You need to
          decide which Content Management System (CMS) to use, create designs,
          build Search Engine Optimization. Then you have to worry about
          cybersecurity and back up all your data in case of a ransomware
          attack.
        </p>
        <p>Wouldn&apos;t it be better if there was an easier way?</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="h-32 bg-gray-400 dark:bg-gray-800 w-screen"></div>;
};

export default Index;
