"use client"

import { ExternalLink, Monitor } from "lucide-react";
import StarsBackground from "./StarsBackground";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import TouchTyper from "@/assets/images/touch_typer.png";
import MetaFixer from "@/assets/images/metafixer.png";
import MeKochieIo from "@/assets/images/me-kochie-io.png";
import KochieSpace from "@/assets/images/kochie-space.png";
import ContactTracing from "@/assets/images/ct.png";
import ThreeBody from "@/assets/images/3body.png";
import Link from "next/link";
import { trackEvent } from "fathom-client";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: StaticImport;
  url?: string;
};

const projects: Project[] = [
  {
    title: "Touch Typer",
    image: TouchTyper,
    url: "https://touch-typer.kochie.io",
    description: "A new way to learn touch typing on any platform.",
    tags: ["electron", "typescript", "web", "macOS", "windows", "linux"],
  },
  {
    title: "MetaFixer",
    image: MetaFixer,
    url: "https://metafixer.kochie.io",
    description: "A tool to recover lost metadata from your photos.",
    tags: ["MacOS", "SwiftUI"],
  },
  {
    title: "me.kochie.io",
    image: MeKochieIo,
    url: "https://me.kochie.io",
    description:
      "My personal website. A place to share my thoughts and projects.",
    tags: ["web", "typescript", "react", "nextjs"],
  },
  {
    title: "kochie.space",
    image: KochieSpace,
    url: "https://kochie.space",
    description:
      "A technical demo for web based animations using simple JavaScript and CSS.",
    tags: ["web", "vanillajs", "2d"],
  },
  {
    title: "Contact Tracing",
    image: ContactTracing,
    url: "https://ct.vercel.app",
    description:
      "Technical demo for contract tracing at large scale based on real world data and AWS infrastructure.",
    tags: ["web", "typescript", "react", "nextjs", "aws"],
  },
  {
    title: "3Body",
    image: ThreeBody,
    url: "https://3body.vercel.app",
    description:
      "A n-Body simulator running in 3D on the web browser using webgl and ThreeJS.",
    tags: ["web", "typescript", "react", "nextjs", "threejs"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-space-darker relative">
      <StarsBackground numberOfStars={50} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Check out some of our work</h2>
        <p className="section-subheading">
          We&apos;ve helped businesses of all sizes launch successful web
          projects that deliver results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-space-dark border border-gray-800 rounded-lg overflow-hidden group z-10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  fill
                  placeholder="blur"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-darkest to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.url && (
                    <Link
                      href={project.url}
                      className="text-accent hover:text-accent2 transition-colors"
                      onClick={() =>
                        trackEvent(`Clicked on project - ${project.title}`)
                      }
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-space-blue/30 text-blue-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center">
            <span>Start Your Project</span>
            <Monitor size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
