import Image from "next/image";
import Link from "next/link";

import Australia from "@/assets/images/Australia.jpg";
import USA from "@/assets/images/USA.jpg";
import Ireland from "@/assets/images/ireland.jpg";
import UK from "@/assets/images/uk.png";
import NZ from "@/assets/images/nz.jpg";
import World from "@/assets/images/world.png"

import Text from "./text.mdx";

export default function CountryGrid() {
  const countries = [
    {
      image: Australia,
      name: "Australia",
      content: "Custom content for the Australian market based on known commercial factors.",
      link: "",
    },
    {
      image: Ireland,
      name: "Ireland",
      content: "Get help navigating the complexities of GDPR and accelerate your startups growth by tapping into the global market.",
      link: "",
    },
    {
      image: UK,
      name: "United Kingdom",
      content: "Build your business with e-commerce experts that can optimise your search engine ranking so the right customers find your content.",
      link: "",
    },
    {
      image: NZ,
      name: "New Zealand",
      content: "Unlike most maps we won't forget you. Our custom marketing campaigns will get your site in front of your customers eyes.",
      link: "",
    },
    {
      image: USA,
      name: "United States",
      content: "Building trust and stability in your brand is key. We're here for the long haul so you can be there for your customers.",
      link: "",
    },
    {
      image: World,
      name: "Worldwide",
      content: "We're expanding our services all the time. Get in contact below to see if we're providing services in your country.",
      link: "",
    },
  ];

  return (
    <div>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <Text />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-8 mx-auto max-w-7xl px-6">
        {countries.map((project) => (
          <div
            className="bg-black relative group overflow-hidden rounded-2xl aspect-[2/1] drop-shadow-2xl dark:drop-shadow-xlWhite"
            key={project.name}
          >
            <Image
              src={project.image}
              alt={project.name}
              className=" group-hover:scale-110 transform-gpu duration-200 group-hover:opacity-30 bg-black h-full w-full"
              fill
              placeholder="blur"
              sizes="100vw"
              style={{
                objectFit: "fill",
                objectPosition: "center center",
              }}
            />
            <div className="group-hover:opacity-100 opacity-0 transform-gpu duration-200 text-white font-mono flex flex-col m-5">
              <h1 className="underline mb-3">
                <Link href={project.link} legacyBehavior>
                  {project.name}
                </Link>
              </h1>
              <p>{project.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
