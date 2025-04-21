import React from "react";

import { CountryGrid, Jumbotron, ProjectGrid, TopBar } from "../components";
import TextHero from "../components/TextHero";
import WaveBottom from "../components/Transitions/WaveBottom";
import BlogArticles from "../components/BlogArticles";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Peaks from "../components/Transitions/Peaks";


const Index = () => {
  return (
    <div className="scroll-smooth dark:bg-slate-600">
      <TopBar />
      <Jumbotron />
      <div id="about" className="scroll-m-12" />
      <TextHero title="Web Development, Made Simple."/>
      <div id="projects" className="scroll-m-12" />
      <ProjectGrid />
      <TextHero title="Building a website doesn't have to be a headache." content={[
        "Choosing the right CMS, designing pages, sorting out SEO, managing security, and backing everything up — it's a lot to handle, especially when you've got a business to run."
      ]}/>
      <WaveBottom />
      <div id="info" className="scroll-m-12" />
      <div id="availability" className="scroll-m-12" />
      <CountryGrid />
      <TextHero title="Building a website doesn't have to be a headache." content={[
        "Choosing the right CMS, designing pages, sorting out SEO, managing security, and backing everything up — it's a lot to handle, especially when you've got a business to run."
      ]}/>
      <BlogArticles />
      <div id="contact" className="scroll-m-12" />
      <Contact />
      <Peaks />
      <Footer />
    </div>
  );
};


// const Footer = () => {
//   return <div className="h-32 bg-gray-400 dark:bg-gray-800 w-screen"></div>;
// };

export default Index;
