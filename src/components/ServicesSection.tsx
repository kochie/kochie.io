
import { Code, Globe, Monitor, Cpu, PenTool, Cloud } from "lucide-react";
import StarsBackground from "./StarsBackground";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and technologies",
    icon: <Code className="text-accent" size={36} />
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Beautiful interfaces that work flawlessly on all devices and screen sizes",
    icon: <Monitor className="text-accent" size={36} />
  },
  {
    id: 3,
    title: "Global Reach",
    description: "Multilingual and international support for worldwide audiences",
    icon: <Globe className="text-accent" size={36} />
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed and user experience",
    icon: <Cpu className="text-accent" size={36} />
  },
  {
    id: 5,
    title: "UX/UI Design",
    description: "Intuitive user experiences with beautiful and functional interfaces",
    icon: <PenTool className="text-accent" size={36} />
  },
  {
    id: 6,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud hosting solutions for your applications",
    icon: <Cloud className="text-accent" size={36} />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-space-dark relative">
      <StarsBackground numberOfStars={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Building a website doesn't have to be a headache</h2>
        <p className="section-subheading">
          Our streamlined process makes web development simple, transparent, and stress-free
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="bg-space-darker/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800 card-hover">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-space-purple/10 border border-purple-900 rounded-xl p-8 mt-16 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to launch your next project?</h3>
              <p className="text-gray-300">Let's work together to create something amazing.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
