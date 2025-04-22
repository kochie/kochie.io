
import { ExternalLink, Code, Monitor } from "lucide-react";
import StarsBackground from "./StarsBackground";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "SpaceTech Dashboard",
    description: "Admin dashboard for space technology management",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 2,
    title: "Lunar Analytics",
    description: "Data visualization platform for space research",
    tags: ["Vue", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "Mission Control",
    description: "Real-time mission monitoring application",
    tags: ["React", "WebSockets", "GraphQL"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 4,
    title: "AstroConnect",
    description: "Social platform for space enthusiasts",
    tags: ["Next.js", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 5,
    title: "CosmoTracker",
    description: "Celestial object tracking and visualization",
    tags: ["Three.js", "WebGL", "React"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 6,
    title: "OrbitalCMS",
    description: "Content management system for space agencies",
    tags: ["Strapi", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-space-darker relative">
      <StarsBackground numberOfStars={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Check out some of our work</h2>
        <p className="section-subheading">
          We've helped businesses of all sizes launch successful web projects that deliver results
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-space-dark border border-gray-800 rounded-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-darkest to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.url && (
                    <a href={project.url} className="text-accent hover:text-accent2 transition-colors" aria-label={`View ${project.title} project`}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-space-blue/30 text-blue-300 text-xs px-2 py-1 rounded">
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
