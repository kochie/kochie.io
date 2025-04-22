
import StarsBackground from "./StarsBackground";

const countries = [
  { code: "uk", name: "United Kingdom", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" },
  { code: "ie", name: "Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png" },
  { code: "au", name: "Australia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png" },
  { code: "nz", name: "New Zealand", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png" },
  { code: "us", name: "United States", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" },
  { code: "ca", name: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" }
];

const GlobalSection = () => {
  return (
    <section id="global" className="py-24 bg-space-darker relative">
      <StarsBackground numberOfStars={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Global Support</h2>
        <p className="section-subheading">
          Our team offers support in multiple languages and timezones to ensure your project runs smoothly
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {countries.map((country) => (
            <div 
              key={country.code}
              className="flex flex-col items-center group card-hover"
            >
              <div className="w-full h-40 relative overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-space-dark/20 group-hover:bg-space-dark transition-all"></div>
              </div>
              <p className="text-white font-medium text-lg">{country.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-space-blue/10 border border-blue-900 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">24/7 Support Wherever You Are</h3>
              <p className="text-gray-300">
                Our global team ensures that help is always available, no matter what timezone you're in. 
                We provide multilingual support and local expertise to serve clients around the world.
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
              <a href="#contact" className="btn-primary">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
