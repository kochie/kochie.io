
import { Calendar, Clock, ArrowRight } from "lucide-react";
import StarsBackground from "./StarsBackground";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top UI/UX Trends in 2025",
    excerpt: "Explore the latest design trends that are shaping the digital landscape this year.",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 2,
    title: "Optimizing Web Performance",
    excerpt: "Learn how to make your website lightning fast with these proven optimization techniques.",
    date: "Apr 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Discover emerging technologies that will transform how we build websites in the coming years.",
    date: "Apr 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    url: "#"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-space-dark relative">
      <StarsBackground numberOfStars={50} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">From the blog</h2>
        <p className="section-subheading">
          Insights, tips, and updates from our team of web development experts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <a 
              key={post.id}
              href={post.url}
              className="bg-space-darker border border-gray-800 rounded-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-darkest to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-accent group-hover:text-accent2 transition-colors">
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary inline-block">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
