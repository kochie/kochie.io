import TouchTyper from "@/assets/images/touch-typer.png";
import MeKochieIo from "@/assets/images/me-kochie-io.png";
import KochieSpace from "@/assets/images/kochie-space.png";
import BlogKochieIo from "@/assets/images/blog-kochie-io.png";
import ThreeBody from "@/assets/images/3body.png";
import Halo from "@/assets/images/halo.jpg";

import Image from 'next/image'
import Link from "next/link"

import Top from "./top.mdx";
import Bottom from "./bottom.mdx";

export default function ProjectGrid() {
  const projects = [
    {
      name: "Touch Typer",
      image: TouchTyper,
      link: "https://github.com/kochie/touch-type",
      content: "A new way to learn touch typing on any platform.",
      // grid: ["row-span-2", "col-span-2"],
    },
    {
      name: "me.kochie.io",
      image: MeKochieIo,
      link: "https://me.kochie.io",
      content: "My personal website.",
    },
    {
      name: "kochie.space",
      image: KochieSpace,
      link: "https://kochie.space",
      content: "Some cool content about the fully sick project",
    },
    {
      name: "Web Development - The Right Way",
      image: Halo,
      link: "https://google.com",
      content: "Some cool content about the fully sick project",
    },
    {
      name: "Contact Tracing",
      image: Halo,
      link: "https://ct.vercel.app",
      content: "Technical demo for contract tracing at large scale",
      // grid: ["row-span-2"],
    },
    {
      name: "blog.kochie.io",
      image: BlogKochieIo,
      link: "https://blog.kochie.io",
      content: "My blog about webdev, science, and engineering",
      // grid: ["row-span-2", "col-span-2"],
    },
    {
      name: "3Body",
      image: ThreeBody,
      link: "https://3body.vercel.app",
      content:
        "A n-Body simulator running in 3d on the web browser using webgl.",
    },
    {
      name: "CF-AST",
      image: Halo,
      link: "https://github.com/kochie/cfast",
      content: "CloudFormation Abstract Syntax Tree",
    },
  ];

  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center pb-16 pt-8">
        <Top />
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto w-screen ">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-black relative group overflow-hidden rounded-2xl aspect-[2/1] drop-shadow-2xl dark:drop-shadow-xlWhite"
          >
            <Image
              src={project.image}
              placeholder="blur"
              alt={project.name}
              className="group-hover:scale-110 transform-gpu duration-200 group-hover:opacity-30"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="group-hover:opacity-100 opacity-0 transform-gpu duration-200 text-white font-mono flex flex-col m-10 ">
              <h1 className="underline mb-3">
                <Link href={project.link} >
                  {project.name}
                </Link>
              </h1>
              <p>{project.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center py-16">
        <Bottom />
      </div>
    </div>
  );
}
