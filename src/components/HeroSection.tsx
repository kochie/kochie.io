
import { ChevronDown } from "lucide-react";
import StarsBackground from "./StarsBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-space-gradient overflow-hidden">
        <StarsBackground numberOfStars={200} />
        
        {/* Earth image at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-cover bg-center" 
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')", 
               backgroundPosition: "center top",
               opacity: 0.5,
               mixBlendMode: "lighten"
             }}>
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl mx-auto">
            <span className="gradient-text">Web Development, </span>
            <span className="text-white">Made Simple.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Crafting stellar websites and web applications that take your business to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#projects" className="btn-primary">
              See Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <a href="#projects" className="inline-block animate-float">
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
