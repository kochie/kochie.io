"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import StarsBackground from "./StarsBackground";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

interface JSONFeed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  description: string;
  icon: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
  items: {
    id: string;
    url: string;
    title: string;
    summary: string;
    image: string;
    date_modified: string;
    tags: string[];
    author: {
      name: string;
      url: string;
      avatar: string;
    };
    read_time: string;
  }[];
}

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
};

const BlogSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<JSONFeed>(
    "https://blog.kochie.io/feed/json",
    fetcher
  );

  if (error) {
    console.error(error);
    return <div>{JSON.stringify(error)}</div>;
  }
  if (!data) return <div></div>;

  return (
    <section id="blog" className="py-24 bg-space-dark relative">
      <StarsBackground numberOfStars={50} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">From the blog</h2>
        <p className="section-subheading">
          Insights, tips, and updates from our team of web development experts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data.items
            .sort((article1, article2) => {
              const date1 = new Date(article1.date_modified);
              const date2 = new Date(article2.date_modified);

              if (date1 > date2) return -1;
              else if (date1 == date2) return 0;
              return 1;
            })
            .filter((article) =>
              article.tags.find((tag) =>
                ["frontend", "software", "webdev"].find((key) => key === tag)
              )
            )
            .slice(0, 3)
            .map((post) => (
              <Link
                key={post.id}
                href={post.url}
                className="bg-space-darker border border-gray-800 rounded-lg overflow-hidden card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-darkest to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="" />
                      <span className="h-[16px]">{new Date(post.date_modified).toLocaleDateString("en-AU", {dateStyle: "medium"})}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="" />
                      <span className="h-[16px]">{post.read_time ?? "5 min read"}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{post.summary}</p>

                  <div className="flex items-center text-accent group-hover:text-accent2 transition-colors">
                    <span>Read more</span>
                    <ArrowRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://blog.kochie.io"
            className="btn-secondary inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
