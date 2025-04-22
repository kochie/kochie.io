
import { Mail, Phone, MapPin, Send } from "lucide-react";
import StarsBackground from "./StarsBackground";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-space-darker relative">
      <StarsBackground numberOfStars={75} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Let's Build Something Amazing Together</h2>
        <p className="section-subheading">
          Have a project in mind? Get in touch and let's discuss how we can help
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-space-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-space-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-space-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-space-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-space-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                <span>Send Message</span>
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-space-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Office Location</h4>
                    <p className="text-gray-400">123 Space Station, Orbit City, Universe</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Email Us</h4>
                    <p className="text-gray-400">hello@koch.ie</p>
                    <p className="text-gray-400">support@koch.ie</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Call Us</h4>
                    <p className="text-gray-400">+123 456 7890</p>
                    <p className="text-gray-400">+123 456 7891</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-space-dark/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Our Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
