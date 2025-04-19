"use client";
import Image from "next/image";
import useSWR from "swr";

import Text from "./text.mdx"

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
  }[];
}




export default function BlogArticles() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<JSONFeed>(
    "https://blog.kochie.io/feed/json",
    fetcher
  );

  //   const {data, error} = {data: undefined, error: undefined}
  if (error) {
    console.error(error);
    return <div>{JSON.stringify(error)}</div>;
  }
  if (!data) return <div></div>;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Text />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.items
            .sort((article1, article2) => {
              const date1 = new Date(article1.date_modified);
              const date2 = new Date(article2.date_modified);

              if (date1 > date2) return -1;
              else if (date1 == date2) return 0;
              return 1;
            })
            .filter(article => article.tags.find(tag => ["frontend", "software", "webdev"].find(key => key === tag)))
            .slice(0, 3)
            .map((post) => (
              <article
                key={post.id}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 drop-shadow-2xl"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.date_modified} className="mr-8">
                    {new Date(post.date_modified).toDateString()}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <Image
                        src={post.author.avatar}
                        width="10"
                        height="10"
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
