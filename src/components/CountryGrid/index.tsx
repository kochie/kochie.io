import Image from "next/legacy/image";
import Link from "next/link";

import Australia from "../../assets/images/Australia.jpg";
import USA from "../../assets/images/USA.jpg";
import UK_Ireland from "../../assets/images/UK_Ireland.png";

export const CountryGrid = () => {
  const countries = [
    {
      image: Australia,
      name: "Australia",
      content: "Explaining",
      link: "",
    },
    {
      image: UK_Ireland,
      name: "United Kingdom and Ireland",
      content: "Explaining",
      link: "",
    },
    {
      image: USA,
      name: "United States",
      content: "Explaining",
      link: "",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-1 h-72 w-screen bg-red-400">
      {countries.map((project) => (
        <div className="bg-black relative group" key={project.name}>
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            className="group-hover:scale-110 transform-gpu duration-200 group-hover:opacity-50 bg-black"
          />
          <div className="group-hover:opacity-100 opacity-0 transform-gpu duration-200 text-white font-mono flex flex-col m-10 ">
            <h1 className="underline mb-3">
              <Link href={project.link} legacyBehavior>{project.name}</Link>
            </h1>
            <p>{project.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
